<?php
/*
Plugin Name: Static Bridge (Next.js Export to WP)
Description: /wp-content/uploads/static-bridge içindeki statik siteyi WP üzerinden servis eder (root/.htaccess gerekmez). HTML içindeki kökten başlayan görsel/ikon referanslarını otomatik prefixler.
Version: 1.2.0
Author: you
*/

function sb_static_dir(){
  $u = wp_upload_dir();
  $dir = trailingslashit($u['basedir']) . 'static-bridge';
  if (!is_dir($dir)) wp_mkdir_p($dir);
  return $dir;
}

/* ZIP out/ klasörüyle gelse bile doğru kökü bul */
function sb_static_base(){
  $root = realpath(sb_static_dir());
  if (!$root) return false;
  if (is_file($root.'/index.html') || is_dir($root.'/_next')) return $root;

  $items = @scandir($root);
  if ($items) {
    $items = array_values(array_filter($items, fn($x)=>$x!=='.' && $x!=='..'));
    if (count($items)===1 && is_dir($root.'/'.$items[0])) {
      $child = realpath($root.'/'.$items[0]);
      if ($child && (is_file($child.'/index.html') || is_dir($child.'/_next'))) return $child;
    }
  }
  return $root;
}

/* uploads URL’inden doğru prefix’i türet (subdir kurulumlarda da doğru olur) */
function sb_prefix_path(){
  $u = wp_upload_dir();
  $uploadsPath = parse_url($u['baseurl'], PHP_URL_PATH) ?: '/wp-content/uploads';
  return rtrim($uploadsPath, '/') . '/static-bridge';
}

function sb_ct_for($path){
  $ext = strtolower(pathinfo($path, PATHINFO_EXTENSION));
  $map = [
    'html'=>'text/html; charset=utf-8','htm'=>'text/html; charset=utf-8',
    'css'=>'text/css','js'=>'application/javascript','mjs'=>'text/javascript',
    'json'=>'application/json','map'=>'application/json',
    'png'=>'image/png','jpg'=>'image/jpeg','jpeg'=>'image/jpeg','gif'=>'image/gif',
    'webp'=>'image/webp','svg'=>'image/svg+xml','ico'=>'image/x-icon',
    'txt'=>'text/plain; charset=utf-8','xml'=>'application/xml',
    'woff'=>'font/woff','woff2'=>'font/woff2','ttf'=>'font/ttf','otf'=>'font/otf',
    'mp4'=>'video/mp4','webm'=>'video/webm'
  ];
  return $map[$ext] ?? null;
}

function sb_serve_file($path){
  if ($ct = sb_ct_for($path)) header('Content-Type: '.$ct);
  header('Cache-Control: public, max-age=31536000');
  while (ob_get_level()) { @ob_end_clean(); }
  readfile($path);
  exit;
}

/* HTML içindeki kökten başlayan (/) asset referanslarını prefixle */
function sb_serve_html($path, $prefix){
  header('Content-Type: text/html; charset=utf-8');
  header('Cache-Control: no-cache, no-store, must-revalidate');
  $html = @file_get_contents($path);
  if ($html === false) { echo 'File not found'; exit; }

  $pref = rtrim($prefix, '/');

  // 1) src/href ile gelen görsel/ikon/pdf/txt/xml dosyaları
  $html = preg_replace_callback(
    '#\b(src|href)=["\']\/(?!_next|wp-admin|wp-includes|wp-content|wp-json)([^"\'>]+\.(?:png|jpe?g|gif|webp|svg|ico|pdf|txt|xml|mp4|webm))["\']#i',
    function($m) use ($pref){
      return $m[1] . '="' . $pref . '/' . $m[2] . '"';
    },
    $html
  );

  // 2) meta content (og:image vb.)
  $html = preg_replace_callback(
    '#\bcontent=["\']\/(?!_next|wp-admin|wp-includes|wp-content|wp-json)([^"\'>]+\.(?:png|jpe?g|gif|webp|svg|ico))["\']#i',
    function($m) use ($pref){
      return 'content="' . $pref . '/' . $m[1] . '"';
    },
    $html
  );

  // 3) inline CSS url(/...png)
  $html = preg_replace_callback(
    '#url\(\s*\/(?!_next|wp-admin|wp-includes|wp-content|wp-json)([^)\'"]+\.(?:png|jpe?g|gif|webp|svg))\s*\)#i',
    function($m) use ($pref){
      return 'url(' . $pref . '/' . $m[1] . ')';
    },
    $html
  );

  while (ob_get_level()) { @ob_end_clean(); }
  echo $html;
  exit;
}

function sb_maybe_serve_static(){
  $uri = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';
  // WP yollarını bypass
  if (preg_match('#^/(wp-admin|wp-includes|wp-content|wp-json|wp-login\.php|xmlrpc\.php)#i', $uri)) return;

  $base = sb_static_base();
  if (!$base) return;

  $rbase = realpath($base);
  $prefix = sb_prefix_path();

  $safe = function($p) use ($rbase){
    $rp = realpath($p);
    return $rp && strpos($rp, $rbase) === 0 ? $rp : null;
  };

  // 1) kök /
  if ($uri === '/' && is_file($rbase.'/index.html')) {
    sb_serve_html($rbase.'/index.html', $prefix);
  }

  // 2) direkt dosya (/_next/*, robots.txt, favicon.ico vs.)
  $try = $safe($rbase.$uri);
  if ($try && is_file($try)) {
    $ext = strtolower(pathinfo($try, PATHINFO_EXTENSION));
    if ($ext === 'html' || $ext === 'htm') sb_serve_html($try, $prefix);
    sb_serve_file($try);
  }

  // 3) /sayfa -> /sayfa/index.html
  $tryDir = $safe($rbase.rtrim($uri,'/'));
  if ($tryDir && is_dir($tryDir) && is_file($tryDir.'/index.html')) {
    sb_serve_html($tryDir.'/index.html', $prefix);
  }

  // Kalanlar WP'ye düşer
}

/* Erken yakala + klasik noktada da yakala */
add_action('init', 'sb_maybe_serve_static', 0);
add_action('template_redirect', 'sb_maybe_serve_static', 0);

/* --- Yönetim: ZIP yükle & çıkar --- */
add_action('admin_menu', function(){
  add_management_page('Static Bridge', 'Static Bridge', 'manage_options', 'static-bridge', 'sb_admin_page');
});

function sb_admin_page(){
  if (!current_user_can('manage_options')) return;
  $dir = sb_static_dir();

  if ($_SERVER['REQUEST_METHOD']==='POST' && check_admin_referer('sb_upload')){
    if (!empty($_FILES['zip']['tmp_name'])) {
      if (!class_exists('ZipArchive')) {
        echo '<div class="error"><p>Sunucuda ZipArchive etkin değil.</p></div>';
      } else {
        sb_rrmdir($dir);
        wp_mkdir_p($dir);
        $zip = new ZipArchive();
        if ($zip->open($_FILES['zip']['tmp_name']) === true) {
          $zip->extractTo($dir);
          $zip->close();
          echo '<div class="updated"><p>ZIP yüklendi ve çıkarıldı.</p></div>';
        } else {
          echo '<div class="error"><p>ZIP açılamadı.</p></div>';
        }
      }
    }
  }
  ?>
  <div class="wrap">
    <h1>Static Bridge</h1>
    <p><code><?php echo esc_html($dir); ?></code> içindeki dosyalar kökten statik olarak servis edilir.</p>
    <form method="post" enctype="multipart/form-data">
      <?php wp_nonce_field('sb_upload'); ?>
      <p><input type="file" name="zip" accept=".zip" required>
      <button class="button button-primary">ZIP yükle & çıkar</button></p>
      <p>Not: ZIP'in içinde <code>index.html</code>, <code>_next/</code> gibi dosyalar <b>direkt</b> olabilir; tek üst klasör (örn. <code>out/</code>) varsa da otomatik algılanır.</p>
    </form>
  </div>
  <?php
}

function sb_rrmdir($dir){
  if (!is_dir($dir)) return;
  $it = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($dir, FilesystemIterator::SKIP_DOTS),
    RecursiveIteratorIterator::CHILD_FIRST
  );
  foreach ($it as $item) { $item->isDir() ? @rmdir($item) : @unlink($item); }
  @rmdir($dir);
}
