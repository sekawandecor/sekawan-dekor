/* PENGATURAN & DAFTAR PORTOFOLIO — edit file ini saja untuk update konten */
const PENGATURAN = {
  // Nomor WhatsApp, format 62 (tanpa 0 di depan, tanpa spasi/tanda +)
  nomorWA: "6285100168168",
  instagram: "@sekawandecor_",
  area: "Surabaya",
  jamKerja: "Setiap hari, 08.00–21.00"
};

/* DAFTAR PORTOFOLIO
   - kategori: "couple" | "birthday" | "engagement" | "lainnya"
   - foto: nama file foto di folder "foto/" (contoh "foto/couple-1.jpg").
           Kalau dikosongkan, akan muncul kotak warna sementara.
   Untuk menambah portofolio: salin satu blok { ... }, lalu ubah isinya. */
const PORTOFOLIO = [
  { judul:"Surprise Anniversary Rooftop", kategori:"couple",     lokasi:"Jakarta Selatan", tanggal:"Okt 2026", foto:"", deskripsi:"Dekor candle-light dinner dengan bunga mawar, lilin, dan backdrop tirai untuk perayaan anniversary." },
  { judul:"Birthday Pastel Garden",       kategori:"birthday",   lokasi:"Tangerang",       tanggal:"Sep 2026", foto:"", deskripsi:"Backdrop balon pastel, table decor dessert, dan rangkaian bunga segar untuk ulang tahun ke-25." },
  { judul:"Engagement Rustic Sage",       kategori:"engagement", lokasi:"Bogor",           tanggal:"Agu 2026", foto:"", deskripsi:"Dekor lamaran bernuansa sage & putih, lengkap dengan meja seserahan dan photo corner." },
  { judul:"Proposal Dinner Setup",        kategori:"couple",     lokasi:"Jakarta Pusat",   tanggal:"Jul 2026", foto:"", deskripsi:"Setup lamaran romantis berdua: meja makan, kelopak mawar, dan tulisan neon 'Marry Me'." },
  { judul:"Kids Birthday Safari",         kategori:"birthday",   lokasi:"Bekasi",          tanggal:"Jun 2026", foto:"", deskripsi:"Tema safari untuk ulang tahun anak, dengan balon organik, standee, dan meja kue." },
  { judul:"Lamaran Adat Modern",          kategori:"engagement", lokasi:"Depok",           tanggal:"Mei 2026", foto:"", deskripsi:"Perpaduan dekor adat dan modern: pelaminan kecil, bunga segar, dan area keluarga." },
  { judul:"Baby Shower Soft Blue",        kategori:"lainnya",    lokasi:"Jakarta Barat",   tanggal:"Apr 2026", foto:"", deskripsi:"Dekor baby shower dengan balon biru muda, backdrop kayu, dan dessert table." },
  { judul:"Sweet 17 Glam Night",          kategori:"birthday",   lokasi:"Jakarta Utara",   tanggal:"Mar 2026", foto:"", deskripsi:"Backdrop shimmer wall, bunga gantung, dan lighting hangat untuk sweet seventeen." },
  { judul:"Engagement Garden White",      kategori:"engagement", lokasi:"Tangerang Selatan",tanggal:"Feb 2026", foto:"", deskripsi:"Lamaran outdoor serba putih dengan arch bunga dan kursi tamu keluarga." }
];
