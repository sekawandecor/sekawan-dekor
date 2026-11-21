# Sekawan Dekor — Konteks Project

Catatan ini dibuat untuk dilanjutkan di Antigravity (atau AI coding agent lain). Isinya ringkasan kebutuhan dan keputusan dari diskusi awal.

## Tentang usaha
- Nama usaha: **Sekawan Dekor**, vendor dekorasi (flower decor, table decor, event decor).
- Konsep dekor biasanya dibuat dulu di Canva, lalu diwujudkan di lokasi.
- Kategori layanan / portofolio:
  1. Couple (anniversary, candle-light dinner, surprise, proposal)
  2. Birthday Party
  3. Engagement (lamaran / tunangan)
  4. Event Lainnya (baby shower, bridal shower, syukuran, acara kantor)

## Kebutuhan website
- Menampilkan profil usaha (Tentang Kami).
- Portofolio hasil kerja, bisa difilter per kategori (minimal 3 kategori).
- Terhubung ke WhatsApp supaya calon klien gampang menghubungi.
- Domain sendiri, idealnya `www.sekawandekor.com`.
- **Budget sekitar Rp20.000–30.000** (domain + hosting).

## Yang sudah dibuat (versi 1)
Website statis, tanpa framework dan tanpa build step: HTML + CSS + JavaScript biasa.

```
sekawan-dekor/
├── index.html      struktur halaman (beranda, tentang, layanan, portofolio, kontak)
├── css/style.css   semua styling (responsive, breakpoint 900px & 560px)
├── js/data.js      PENGATURAN (nomor WA, IG, area, jam) + array PORTOFOLIO
├── js/main.js      render galeri, filter kategori, lightbox, link WA, form → WA
└── foto/           taruh foto portofolio di sini (jpg/webp)
```

### Fitur WhatsApp
- Tombol WA melayang di pojok kanan bawah dan tombol di navbar/hero, berisi pesan pembuka otomatis.
- Lightbox portofolio punya tombol "Mau dekor seperti ini". WA terbuka dengan pesan yang menyebut judul dekornya.
- Form kontak (nama, jenis acara, tanggal, lokasi, konsep) dirangkai menjadi satu pesan WA lewat `https://wa.me/<nomor>?text=...`.

### Desain
- Palet: cream `#f7f1ea`, rose `#b76e6e`, sage `#6f7f68`, ink `#2b2622`.
- Font: Cormorant Garamond (judul) + DM Sans (teks), dari Google Fonts.
- Kalau `foto` di data kosong, yang muncul kotak gradasi sesuai warna kategori sebagai placeholder.

## Masih placeholder (WAJIB diganti)
- ~~Nomor WA, Instagram, area, jam respon~~ sudah diisi (21 Nov 2026): WA 6285100168168, IG @sekawandecor_, Surabaya, 08.00–21.00.
- 9 item portofolio masih contoh fiktif. Ganti dengan proyek asli dan isi `foto: "foto/nama-file.jpg"`.
- Teks "Tentang Kami" ("empat sahabat") hanya tebakan dari nama "Sekawan". Sesuaikan dengan cerita asli.
- Foto hero dan foto tentang kami masih placeholder di `index.html`.

## Rencana domain & hosting (riset Nov 2026)
- `.com` tidak masuk budget. Di Hostinger Rp109.900 tahun pertama (kontrak 3 tahun), normalnya Rp209.900/tahun.
- Rekomendasi yang masuk budget:
  - Hosting gratis: Cloudflare Pages / Netlify / GitHub Pages (sudah termasuk HTTPS).
  - Domain murah: `sekawandekor.my.id` (mulai belasan ribu di tahun pertama, cek harga perpanjangan; biasanya perlu KTP).
  - Opsi Rp0: subdomain gratis seperti `sekawandekor.pages.dev` atau `sekawandekor.netlify.app`.
- Pindah ke `.com` nanti cukup dengan menyambungkan domain baru, tanpa membuat ulang website.

## Ide lanjutan (belum dikerjakan)
- Supaya orang lain (admin/tim) bisa menambah portofolio tanpa mengedit kode: misalnya memakai Google Sheets sebagai sumber data, atau CMS gratis seperti Decap CMS di Netlify.
- Mengoptimasi foto (format WebP, ukuran kecil) supaya cepat dibuka di HP.
- SEO lokal: meta Open Graph untuk preview saat dibagikan di WA/IG, dan Google Business Profile.
- Halaman detail per proyek (beberapa foto per acara).

## Hosting (aktif)
- Repo GitHub: https://github.com/sekawandecor/sekawan-dekor (branch main, GitHub Pages dari / root).
- Live: https://sekawandecor.github.io/sekawan-dekor/
- Untuk sementara pakai alamat gratis; domain sendiri menyusul.

## Cara menjalankan
Buka `index.html` langsung di browser, atau jalankan server lokal:
```
npx serve .
# atau
python -m http.server 8000
```
