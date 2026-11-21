const NAMA_KAT = {couple:"Couple", birthday:"Birthday Party", engagement:"Engagement", lainnya:"Event Lainnya"};
const waLink = (teks) => "https://wa.me/" + PENGATURAN.nomorWA + "?text=" + encodeURIComponent(teks);

// tombol WA umum
document.querySelectorAll(".js-wa").forEach(a => a.href = waLink("Halo Sekawan Dekor, saya mau tanya-tanya soal dekorasi."));

// info kontak
document.getElementById("infoWA").textContent = "+" + PENGATURAN.nomorWA.replace(/^62/, "62 ");
document.getElementById("infoIG").textContent = PENGATURAN.instagram;
document.getElementById("infoArea").textContent = PENGATURAN.area;
document.getElementById("infoJam").textContent = PENGATURAN.jamKerja;
document.getElementById("yr").textContent = new Date().getFullYear();

// gambar atau kotak sementara
function frame(el, item){
  el.className = "ph tone-" + item.kategori;
  el.innerHTML = item.foto
    ? `<img src="${item.foto}" alt="${item.judul}" loading="lazy">`
    : `<div class="ph-label">${item.judul}</div>`;
}

// galeri
const gallery = document.getElementById("gallery");
let tampil = [];
function render(f){
  tampil = PORTOFOLIO.filter(p => f === "semua" || p.kategori === f);
  gallery.innerHTML = "";
  if(!tampil.length){ gallery.innerHTML = '<div class="empty">Portofolio kategori ini segera hadir.</div>'; return; }
  tampil.forEach((p, i) => {
    const c = document.createElement("div");
    c.className = "card";
    c.innerHTML = `<div class="ph"></div><div class="meta"><div class="tag">${NAMA_KAT[p.kategori]}</div><h3>${p.judul}</h3><small>${p.lokasi} · ${p.tanggal}</small></div>`;
    frame(c.querySelector(".ph"), p);
    c.onclick = () => buka(i);
    gallery.appendChild(c);
  });
}
function setFilter(f){
  document.querySelectorAll("#filters button").forEach(b => b.classList.toggle("active", b.dataset.f === f));
  render(f);
}
document.querySelectorAll("#filters button").forEach(b => b.onclick = () => setFilter(b.dataset.f));
document.querySelectorAll(".svc").forEach(s => s.onclick = () => {
  setFilter(s.dataset.go);
  document.getElementById("portofolio").scrollIntoView();
});
render("semua");

// lightbox
const lb = document.getElementById("lb");
let idx = 0;
function buka(i){
  idx = (i + tampil.length) % tampil.length;
  const p = tampil[idx];
  frame(document.getElementById("lbPh"), p);
  document.getElementById("lbTag").textContent = NAMA_KAT[p.kategori];
  document.getElementById("lbTitle").textContent = p.judul;
  document.getElementById("lbMeta").textContent = p.lokasi + " · " + p.tanggal;
  document.getElementById("lbDesc").textContent = p.deskripsi;
  document.getElementById("lbWA").href = waLink(`Halo Sekawan Dekor, saya lihat portofolio "${p.judul}" di website. Saya mau dekor seperti ini, bisa info lebih lanjut?`);
  lb.classList.add("open");
}
document.getElementById("lbPrev").onclick = () => buka(idx - 1);
document.getElementById("lbNext").onclick = () => buka(idx + 1);
lb.querySelector(".lb-close").onclick = () => lb.classList.remove("open");
lb.onclick = e => { if(e.target === lb) lb.classList.remove("open"); };
document.addEventListener("keydown", e => {
  if(!lb.classList.contains("open")) return;
  if(e.key === "Escape") lb.classList.remove("open");
  if(e.key === "ArrowLeft") buka(idx - 1);
  if(e.key === "ArrowRight") buka(idx + 1);
});

// form -> WhatsApp
document.getElementById("waForm").onsubmit = e => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(e.target));
  const teks = `Halo Sekawan Dekor, saya ${d.nama}.\n\nJenis acara: ${d.acara}\nTanggal: ${d.tanggal || "-"}\nLokasi: ${d.lokasi || "-"}\n\nKonsep: ${d.pesan || "-"}`;
  window.open(waLink(teks), "_blank");
};

// tutup menu mobile setelah klik
document.querySelectorAll("#menu a").forEach(a => a.onclick = () => document.getElementById("menu").classList.remove("show"));
