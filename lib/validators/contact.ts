import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(3, "Ad soyad en az 3 karakter olmalı").max(80),
  email: z.string().email("Geçerli bir e-posta girin").max(120),
  phone: z
    .string()
    .min(10, "Telefon en az 10 haneli olmalı")
    .max(20)
    .transform((v) => v.replace(/[^\d+]/g, ""))
    .refine((v) => /^\+?\d{10,15}$/.test(v), "Telefon biçimi geçersiz"),
  message: z.string().min(10, "Mesaj en az 10 karakter olmalı").max(2000),
  website: z.string().max(0).optional(),
  cfToken: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
