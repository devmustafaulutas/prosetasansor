<?php
/*
Plugin Name: Proset Contact API
Description: Next.js frontend için güvenli iletişim formu endpoint'i. SMTP ile mail yollar.
Version: 1.0.0
Author: you
*/

if (!defined('ABSPATH')) exit;

/* -------- SMTP ayarı (değerleri wp-config.php'den okur) -------- */
add_action('phpmailer_init', function($phpmailer){
  if (!defined('PROSET_SMTP_HOST')) return;
  $phpmailer->isSMTP();
  $phpmailer->Host = PROSET_SMTP_HOST;
  $phpmailer->Port = PROSET_SMTP_PORT ?: 587;
  $phpmailer->SMTPAuth = true;
  $phpmailer->Username = PROSET_SMTP_USER;
  $phpmailer->Password = PROSET_SMTP_PASS;
  $phpmailer->SMTPSecure = PROSET_SMTP_SECURE ?: 'tls';
  $phpmailer->CharSet = 'UTF-8';
  $from = defined('PROSET_FROM') ? PROSET_FROM : get_option('admin_email');
  $fromName = defined('PROSET_FROM_NAME') ? PROSET_FROM_NAME : get_bloginfo('name');
  $phpmailer->setFrom($from, $fromName, false);
});

/* -------- CORS -------- */
function proset_allowed_origin(){
  return 'https://prosetasansor.com'; // kendi domainin
}
function proset_send_cors(){
  $origin = get_http_origin();
  if ($origin && stripos($origin, parse_url(proset_allowed_origin(), PHP_URL_HOST)) !== false) {
    header('Access-Control-Allow-Origin: '.$origin);
  } else {
    header('Access-Control-Allow-Origin: '.proset_allowed_origin());
  }
  header('Vary: Origin');
  header('Access-Control-Allow-Methods: POST, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type, X-WP-Nonce, X-Proset-Nonce');
  header('Access-Control-Max-Age: 600');
}

/* -------- REST route -------- */
add_action('rest_api_init', function() {
  register_rest_route('proset/v1', '/contact', [
    'methods'  => ['POST','OPTIONS'],
    'callback' => 'proset_handle_contact',
    'permission_callback' => '__return_true'
  ]);
});

function proset_handle_contact(WP_REST_Request $req){
  proset_send_cors();
  if ($req->get_method()==='OPTIONS') return new WP_REST_Response(null, 204);

  // rate limit (10dk/IP başına 5 istek)
  $ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
  $key = 'proset_rl_'.md5($ip);
  $cnt = (int)get_transient($key);
  if ($cnt >= 5) return new WP_REST_Response(['ok'=>false,'error'=>'Rate limit'],429);
  set_transient($key, $cnt+1, 10*MINUTE_IN_SECONDS);

  $j = $req->get_json_params();
  $mode    = sanitize_text_field($j['mode'] ?? '');
  $topics  = is_array($j['topics'] ?? null) ? array_slice(array_map('sanitize_text_field',$j['topics']),0,10) : [];
  $name    = sanitize_text_field($j['name'] ?? '');
  $phone   = sanitize_text_field($j['phone'] ?? '');
  $email   = sanitize_email($j['email'] ?? '');
  $message = wp_strip_all_tags($j['message'] ?? '');
  $hpot    = trim($j['website'] ?? '');

  if ($hpot!=='') return new WP_REST_Response(['ok'=>true],200);
  if (!$name || !$email || !is_email($email) || !$message) {
    return new WP_REST_Response(['ok'=>false,'error'=>'Eksik veya hatalı alan'],400);
  }

  $lines = [];
  $lines[] = "📝 Mod: ".($mode?:'-');
  $lines[] = "📌 Konular: ".(count($topics)?implode(', ',$topics):'(seçilmedi)');
  $lines[] = "👤 Ad: ".$name;
  $lines[] = "📞 Telefon: ".($phone?:'-');
  $lines[] = "✉️ E-posta: ".$email;
  $lines[] = "";
  $lines[] = "Mesaj:";
  $lines[] = mb_substr($message,0,1000);
  $lines[] = "";
  $lines[] = "IP: ".$ip;
  $lines[] = "UA: ".substr($_SERVER['HTTP_USER_AGENT'] ?? '-', 0, 180);
  $lines[] = "—Proset web formu • ".date_i18n('Y-m-d H:i:s');

  $to = defined('PROSET_TO') ? PROSET_TO : get_option('admin_email');
  $subject = sprintf('[Web İletişim • %s] %s', $mode?:'Genel', $name?:'İsimsiz');
  $headers = [
    'Content-Type: text/plain; charset=UTF-8',
    'Reply-To: '.$name.' <'.$email.'>'
  ];
$subject = !empty($j['subject']) ? sanitize_text_field($j['subject']) : $subject;
$html    = isset($j['html']) ? $j['html'] : '';
$text    = isset($j['text']) ? $j['text'] : '';

if ($html) {
  $headers = ['Content-Type: text/html; charset=UTF-8', 'Reply-To: '.$name.' <'.$email.'>'];
  $body = $html; // HTML şablon
} else {
  $headers = ['Content-Type: text/plain; charset=UTF-8', 'Reply-To: '.$name.' <'.$email.'>'];
  $body = implode("\n", $lines); // eski text özet
}

$ok = wp_mail($to, $subject, $body, $headers);

  if (!$ok) return new WP_REST_Response(['ok'=>false,'error'=>'Mail gönderilemedi'],500);

  return new WP_REST_Response(['ok'=>true],200);
}
