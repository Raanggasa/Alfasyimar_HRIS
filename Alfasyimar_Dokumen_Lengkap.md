# Dokumen Lengkap Website RS Alfasyimar

Versi preview sementara · 24 Oktober 2026 · seluruh data dummy.

Dokumen ini menyatukan panduan, seluruh kode file proyek tanpa potongan, inventaris gambar beserta prompt, hasil QA, dan spesifikasi sumber bagian [1]–[22]. Gambar AI sudah dibuat dan dimasukkan ke paket website. Source yang dicantumkan di sini adalah versi final paket ini, menggantikan potongan kode yang sebelumnya hanya tampil di percakapan.

Status: preview statis tersedia. Pengujian yang belum dijalankan dinyatakan pada QA, sehingga dokumen ini bukan sertifikasi kesiapan produksi. Video dan PDF menggunakan state belum tersedia sebagaimana opsi demo dalam spesifikasi. Nomor dan link layanan tetap dummy.

## Isi dokumen

1. Panduan penggunaan dan pengeditan
2. Seluruh file kode dalam urutan generasi
3. Paket gambar AI dan prompt
4. Checklist QA
5. Spesifikasi sumber lengkap bagian 1 sampai 22


## Panduan penggunaan dan pengeditan

# RS Alfasyimar

Preview sementara website rumah sakit fiktif. Semua nama dokter, jadwal, harga, alamat, kontak, artikel, kegiatan, dan lowongan adalah data dummy. Bukan layanan medis atau sistem pendaftaran nyata.

Tagline dipertahankan persis: **Coring with Heart, Healing with Trust**.

## Isi proyek

- 42 titik navigasi utama, ditambah katalog, profil dokter, jadwal poliklinik, artikel, album, legal, pencarian, dan 404.
- 15 fasilitas, 25 poliklinik, 36 dokter/psikolog dalam 5 kategori, 10 layanan, 5 kelas rawat inap, 7 paket MCU.
- 6 promo, 6 video dengan state belum tersedia, 8 edisi majalah, 8 berita, 5 album masing-masing 6 ilustrasi, indikator mutu 2022–2026.
- 17 gambar AI unik dalam WebP serta 11 salinan untuk penamaan sampul dan galeri profil. Penggunaan ulang dinyatakan di halaman transparansi. Tidak ada foto wajah dokter AI; profil memakai avatar inisial CSS.
- Formulir hanya simulasi lokal, tidak melakukan pengiriman atau penyimpanan data. Data input dibersihkan setelah validasi berhasil.

## Preview

1. Ekstrak ZIP terlebih dahulu; jangan membuka HTML dari dalam aplikasi arsip.
2. Buka `alfasyimar/index.html` dengan browser modern.
3. Navigasi menggunakan hash seperti `#/jadwal/anak`, sehingga tidak membutuhkan server rewrite atau build.
4. Internet memungkinkan font dan library CDN dimuat. Ketika tidak tersedia, CSS lokal, menu fallback, slider dasar, dialog, pencarian, dan data lokal tetap digunakan.
5. Untuk penyajian penuh saat benar-benar offline, vendor library/font secara lokal terlebih dahulu dan ubah referensinya. Paket ini mengikuti spesifikasi CDN; tidak mengklaim seluruh library eksternal disertakan.

Seluruh JavaScript klasik. Tidak ada `type="module"`, import, fetch data lokal, backend, API key, atau proses instalasi.

## Deploy GitHub Pages dalam lima langkah

1. Buat repository baru pada akun GitHub Anda.
2. Unggah **isi folder alfasyimar**, termasuk `.nojekyll`, ke root repository. Jangan hanya mengunggah folder pembungkusnya jika ingin root menjadi halaman awal.
3. Commit ke branch `main`.
4. Buka **Settings → Pages → Deploy from branch → main → /(root) → Save**.
5. Setelah publikasi selesai, buka alamat yang diberikan GitHub. Coba `#/jadwal`, `#/pelayanan/rawat-inap`, pencarian, dan tombol kembali browser.

Preview ini belum dipublikasikan otomatis. Atur `siteUrl` di `js/config.js` sesudah memiliki URL final agar canonical dan pembagian tautan sesuai. Hash SPA mempunyai keterbatasan indexing per rute dan pratinjau sosial; untuk SEO produksi diperlukan pendekatan prerender atau halaman HTML terpisah.

## Struktur dan urutan file

`index.html` memuat CSS, script CDN, lalu `js/config.js`, delapan file data, `utils.js`, `components.js`, `pages.js`, `router.js`, `search.js`, dan `main.js`. Data berada di `window.ALFA_DATA`; API aplikasi berada di `window.Alfa`.

- `css/tw-lite.css`: utility ringan yang benar-benar didefinisikan; bukan Tailwind CDN.
- `css/theme.css`: token brand, tipografi, warna, fokus, dan reduced motion.
- `css/components.css`: tombol, kartu, shell, menu, overlay, jadwal, dan formulir.
- `css/pages.css`: beranda, slider, detail, album, dan bagan.
- `js/data/nav.js`: urutan, label, path, dan visibility menu.
- `js/data/facilities.js`: fasilitas, deskripsi, persiapan, dan relasi dokter.
- `js/data/clinics.js`: poliklinik.
- `js/data/doctors.js`: dokter, pendidikan dummy, pelatihan dummy, dan satu sumber jadwal tujuh hari.
- `js/data/services.js`: layanan reguler/24 jam dan galeri.
- `js/data/pricing.js`: harga berversi dan tanggal efektif.
- `js/data/content.js`: banner, promo, video, majalah, berita, kegiatan, dan mutu.
- `js/data/misc.js`: profil, mitra, karir, serta inventaris prompt gambar.

## Mengedit data

Gunakan editor teks UTF-8. Pertahankan tanda kutip, koma, kurung, serta ID/slug yang dirujuk antarobjek.

Kontak dan tautan diubah **hanya di `js/config.js`**: `phoneMain`, `phoneEmergency`, `phoneAmbulance`, `waPoli`, `waAmbulance`, `waComplaint`, `email`, `careerEmail`, `address`, `mapUrl`, `social`, `registrationUrl`, dan `sundayRegistrationUrl`. Semua nomor saat ini dummy. Jangan menggunakan nomor demo untuk mencari bantuan nyata.

Untuk menambah dokter, salin satu objek lengkap di `doctors.js`, gunakan ID unik, pilih kategori, dan isi `clinics` dengan slug yang tersedia. `schedule` wajib mempunyai tujuh kunci hari. Hari kosong memakai `[]`; dua sesi memakai dua pasangan waktu. Sunday Clinic otomatis mengambil dokter dengan slot `minggu`, tanpa tabel tambahan. Perbarui `updatedAt`; data lebih dari 30 hari mendapat badge konfirmasi.

Tambahkan fasilitas dengan slug unik, metadata gambar, serta ID dokter yang benar. Untuk menyembunyikan menu set `visible:false`; urutan memakai `order`. Konten lain dapat dihapus dari array; halaman daftar menampilkan empty state jika hasil kosong. Field `status` dan `updatedAt` mendokumentasikan perubahan; lakukan pencatatan versi melalui Git. Preview tidak menyediakan CMS berbasis peran; CMS sesungguhnya membutuhkan backend dan kontrol akses.

Harga di `pricing.js` tidak mewakili tagihan. Saat mengubah nilai, ubah `effectiveDate`, `updatedAt`, catatan, komponen tarif, dan rincian paket secara konsisten. Tidak ada klaim bahwa paket cocok untuk semua orang.

## Logo dan gambar

Logo dan ikon lokal sudah disertakan dari lampiran pengguna. Header/footer mencoba URL logo yang ditentukan terlebih dahulu lalu fallback ke lokal. Jika mengganti paket di masa depan, unduh kedua sumber berikut ke nama file yang sama:

- Logo: https://uploads.onecompiler.io/42bwrvdku/1792750712383/Logo.png → `assets/img/logo.png`.
- Ikon: https://uploads.onecompiler.io/42bwrvdku/1792752429857/icon.png → `assets/img/icon.png`.

Jangan mengubah warna atau proporsi logo. Semua ilustrasi AI sudah tersedia di `assets/img/ai/`. File WebP dioptimalkan; metadata alt, kredit, prompt, dan label penggunaan ulang disediakan. Delapan edisi majalah memiliki nama file masing-masing tetapi memakai satu ilustrasi editorial yang sama. Tiga gambar profil berasal dari visual hero. Album demo memakai enam ilustrasi konsep, bukan foto kegiatan nyata.

Untuk mengganti gambar: simpan WebP di path terkait, pertahankan dimensi/rasio, ubah alt yang deskriptif dan inventaris prompt. `components.media()` memberi `data-ai-generated="true"` dan badge. Bila aset gagal, `placeholder.svg` dipakai dan badge berubah menjadi pengganti SVG. Peta adalah ilustrasi abstrak CSS; Google Maps hanya dibuka lewat tautan pengguna.

## Video dan PDF

ID video sengaja kosong. Isi `youtubeId` dengan ID 11 karakter yang Anda berhak gunakan untuk mengaktifkan pemutar `youtube-nocookie` di modal. Pemutar baru dimuat saat dibuka dan dihapus saat ditutup. Jika gagal dimuat, ringkasan tetap tersedia.

PDF edisi tidak dibuat karena tidak ada isi majalah lengkap dalam spesifikasi. `pdfUrl` kosong menampilkan state **PDF belum tersedia (demo)**. Letakkan PDF yang sah di `assets/docs/` dan isi path relatifnya untuk mengaktifkan tautan. Tidak ada file PDF kosong yang disamarkan sebagai terbitan.

## Formulir dan privasi

Validasi meliputi nama minimal 3 karakter, email, pola HP Indonesia, pesan 10–500 karakter, persetujuan, honeypot, dan throttle 30 detik di memori. Tidak ada fetch, beacon, XHR, localStorage, atau pengiriman PII. Tautan WhatsApp memakai pesan pembuka tetap tanpa isi formulir. `mailto:` hanya berisi alamat contoh.

`formEndpoint` tersedia kosong sebagai titik konfigurasi untuk pengembangan berikutnya. Mengisi nilai itu **tidak otomatis mengirim**. Integrasi Formspree/Formsubmit memerlukan implementasi eksplisit dan peninjauan privasi, consent, penanganan respons, serta pengamanan sebelum diaktifkan. Preview tetap lokal.

## Navigasi dan fallback

`router.js` memuat lebih dari 15 pemetaan `LEGACY_MAP`. Query `?p=/tentang/profil-kami` diarahkan ke hash baru. Path yang tidak dikenal menuju 404, bukan diam-diam beranda. `404.html` mendukung root dan pola repository GitHub Pages; untuk custom hosting pada subfolder isi meta `af-base-path` dengan base yang tepat seperti `/preview/`. Redirect ini client-side, bukan HTTP 301.

Bootstrap mengelola modal/offcanvas ketika tersedia. Fallback lokal menangani dialog, Escape, fokus, backdrop, dan penguncian latar. Swiper mengelola slider; fallback hero memakai Bootstrap Carousel jika tersedia, lalu slider vanilla. AOS/GLightbox memiliki guard. Reduced motion menonaktifkan animasi non-esensial dan autoplay.

## Analytics

`Alfa.main.track(event, params)` hanya menerima tujuh event yang diwajibkan: `cta_emergency_click`, `cta_whatsapp_click`, `cta_register_click`, `doctor_profile_view`, `schedule_view`, `filter_change`, `outbound_error`. Stub memakai `console.debug` dan menambahkan ke `window.dataLayer` jika array tersebut sudah ada. Hanya parameter filter yang diizinkan; tidak ada nama, nomor, email, pesan, atau kata pencarian.

## Teknologi

HTML5, Bootstrap 5.3.3, Bootstrap Icons 1.11.3, AOS 2.3.4, Swiper 11, GLightbox 3.3.0, Plus Jakarta Sans, Inter, CSS lokal, dan JavaScript vanilla klasik. Tidak ada dependensi runtime tambahan atau build step.

## QA dan batas penggunaan

Lihat `QA.md` untuk hasil yang benar-benar diuji. Pemeriksaan Node mencakup 127 rute dan 151 assertion. Browser QA menggunakan Chrome melalui HTTP lokal; pemeriksaan langsung file://, Firefox, Safari, pengujian pembaca layar menyeluruh, dan Core Web Vitals produksi belum dilakukan. Ini adalah paket preview, bukan sertifikasi WCAG atau sistem produksi siap menerima pasien.

Sebelum menjadi situs operasional: verifikasi seluruh konten dan kontak, gunakan gambar yang tepat/berlisensi, sediakan kebijakan resmi, integrasikan pendaftaran dan backend secara aman, lalu jalankan QA lintas browser dan aksesibilitas lengkap. Untuk preview sementara, data dummy dapat dipertahankan.

## Seluruh file kode


### index.html

````html
<!doctype html>
<html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Beranda — RS Alfasyimar</title><meta name="description" content="Preview fiktif portal RS Alfasyimar."><meta name="theme-color" content="#1273D6"><meta property="og:title" content="RS Alfasyimar"><meta property="og:description" content="Portal demo rumah sakit fiktif"><meta property="og:type" content="website"><meta property="og:image" content="assets/img/icon.png"><meta property="og:url" content=""><meta name="twitter:card" content="summary_large_image"><link rel="canonical" href="index.html"><link rel="icon" href="assets/img/icon.png"><link rel="apple-touch-icon" href="assets/img/icon.png"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preconnect" href="https://cdn.jsdelivr.net">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox@3.3.0/dist/css/glightbox.min.css">
<link rel="stylesheet" href="css/tw-lite.css">
<link rel="stylesheet" href="css/theme.css">
<link rel="stylesheet" href="css/components.css">
<link rel="stylesheet" href="css/pages.css">
<script type="application/ld+json" id="schema">{"@context":"https://schema.org","@type":"Hospital","name":"RS Alfasyimar","description":"Identitas fiktif untuk preview, bukan rumah sakit nyata."}</script></head>
<body><a class="skip-link" href="#app">Lewati ke konten</a><div id="progress" hidden></div><div id="topbar"></div><header id="header"></header><main id="app" tabindex="-1" aria-busy="true"><p class="container">Memuat preview Alfasyimar…</p></main><footer id="footer"></footer><aside id="drawer" class="offcanvas offcanvas-start" tabindex="-1" aria-labelledby="drawer-title"><div class="offcanvas-header"><h2 id="drawer-title">Menu Alfasyimar</h2><button data-action="close-drawer" aria-label="Tutup menu">×</button></div><div class="offcanvas-body" id="drawer-body"></div></aside><div id="modal" class="modal" tabindex="-1" aria-labelledby="modal-title"><div class="modal-dialog modal-lg modal-dialog-centered"><div class="modal-content"><div class="modal-header"><h2 id="modal-title"></h2><button data-action="close-modal" aria-label="Tutup dialog">×</button></div><div id="modal-body" class="modal-body"></div><div class="modal-footer"><button data-action="close-modal">Tutup</button></div></div></div></div><div id="floating"></div><div id="toasts" role="status" aria-live="polite"></div><div id="announcement" class="sr-only" aria-live="polite"></div><noscript>Aktifkan JavaScript untuk meninjau situs demo. Nomor UGD fiktif: 0561-000-0001. Situs ini bukan layanan medis.</noscript>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/glightbox@3.3.0/dist/js/glightbox.min.js"></script>
<script src="js/config.js"></script>
<script src="js/data/nav.js"></script>
<script src="js/data/facilities.js"></script>
<script src="js/data/clinics.js"></script>
<script src="js/data/doctors.js"></script>
<script src="js/data/services.js"></script>
<script src="js/data/pricing.js"></script>
<script src="js/data/content.js"></script>
<script src="js/data/misc.js"></script>
<script src="js/utils.js"></script>
<script src="js/components.js"></script>
<script src="js/pages.js"></script>
<script src="js/router.js"></script>
<script src="js/search.js"></script>
<script src="js/main.js"></script>
</body></html>
````

### css/tw-lite.css

````css
.p-4{padding:1.5rem}.px-6{padding-inline:2rem}.gap-3{gap:1rem}.rounded-xl{border-radius:1rem}.rounded-2xl{border-radius:1.5rem}.rounded-3xl{border-radius:2rem}.shadow-soft{box-shadow:0 8px 30px #0f1f3d14}.shadow-lift{box-shadow:0 20px 50px #0b4fa02e}.bg-brand-gradient{background:var(--af-gradient-deep);color:white}.text-brand{color:#0b4fa0}.text-ink{color:#0f1f3d}.text-muted{color:#64748b}.ring-brand{outline:3px solid #1273d6}.backdrop-blur{backdrop-filter:blur(16px)}.glass{background:#ffffffed;backdrop-filter:blur(16px)}.line-clamp-2,.line-clamp-3{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}.line-clamp-2{-webkit-line-clamp:2}.line-clamp-3{-webkit-line-clamp:3}.aspect-video{aspect-ratio:16/9}.aspect-4-3{aspect-ratio:4/3}.aspect-square{aspect-ratio:1}.max-w-prose{max-width:72ch}.grid-auto-fit{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(240px,100%),1fr));gap:1.5rem}.transition-all{transition:all .2s}.hover-lift:hover{transform:translateY(-4px)}.sr-only{position:absolute!important;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}

````

### css/theme.css

````css
:root{--af-blue-900:#0A2F66;--af-blue-700:#0B4FA0;--af-blue-600:#1273D6;--af-blue-500:#1B84E0;--af-teal-500:#12B5A6;--af-green-500:#10A98A;--af-green-400:#3CC172;--af-gradient:linear-gradient(135deg,#1b84e0,#12b5a6 55%,#3cc172);--af-gradient-deep:linear-gradient(135deg,#0a448a,#096b75 60%,#087351);--af-ink:#0f1f3d;--af-body:#475569;--af-muted:#64748b;--af-line:#e2e8f0;--af-surface:#f6fafd;--af-white:#fff;--af-danger:#b9163a;--af-wa:#25d366;--af-radius:16px;--af-shadow:0 8px 30px #0f1f3d14;--bs-primary:#1273d6;--bs-body-font-family:Inter,system-ui,sans-serif;--bs-body-color:#475569;--bs-border-radius:.75rem}*{box-sizing:border-box}body{margin:0;font:400 16px/1.7 Inter,system-ui,sans-serif;color:var(--af-body);background:white}h1,h2,h3,h4{font-family:'Plus Jakarta Sans',system-ui,sans-serif;color:var(--af-ink);font-weight:800;line-height:1.22;letter-spacing:-.02em;margin:0 0 1rem}h1{font-size:clamp(2rem,4vw + 1rem,3.5rem)}h2{font-size:clamp(1.6rem,2.5vw,2.3rem)}h3{font-size:1.2rem}p{margin:0 0 1rem}a{color:#0b4fa0;text-underline-offset:4px}img{max-width:100%;height:auto}button,input,textarea,select{font:inherit}button,a.btn-af,a.btn-af-outline,a.btn-danger-af,a.btn-wa{min-height:44px}button{cursor:pointer;border:1px solid var(--af-line);background:white;color:var(--af-ink);padding:.65rem 1rem;border-radius:12px}button:disabled{opacity:.65;cursor:not-allowed}:focus-visible{outline:3px solid #0b4fa0;outline-offset:4px}input,select,textarea{width:100%;padding:.7rem .8rem;border:1px solid #94a3b8;border-radius:10px;background:white;color:var(--af-ink);min-height:44px}input[type=checkbox]{width:22px;height:22px;min-height:22px;vertical-align:middle;margin-right:.5rem}label{display:block;font-weight:600;margin:.6rem 0 .35rem}textarea{resize:vertical}.container{width:min(1280px,calc(100% - 3rem));max-width:1280px;margin-inline:auto;padding:0}.section{padding-block:4.5rem}.section:nth-of-type(even){background:var(--af-surface)}.stack>*+*{margin-top:1.2rem}.row-flex{display:flex;align-items:center;flex-wrap:wrap;gap:.75rem}.muted{color:var(--af-muted)}.small{font-size:.85rem}.eyebrow{display:block;font-size:.75rem;font-weight:700;letter-spacing:.13em;color:#087351;text-transform:uppercase;margin-bottom:1rem}.skip-link{position:fixed;top:-90px;left:16px;background:#fff;z-index:20000;padding:1rem}.skip-link:focus{top:10px}[hidden]{display:none!important}main:focus{outline:none}.is-invalid{border:2px solid #b9163a}.invalid-feedback{display:block;color:#b9163a;font-size:.85rem}.notice{border-left:4px solid #0b4fa0;padding:1rem 1.25rem;background:#edf5fc;margin:1.5rem 0}.notice p:last-child{margin:0}::selection{background:#cff5eb;color:#0a2f66}@media(max-width:600px){.container{width:calc(100% - 2rem)}.section{padding-block:3rem}body{padding-bottom:80px}}@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}[data-aos]{opacity:1!important;transform:none!important}}html:not(.aos-ready) [data-aos]{opacity:1!important;transform:none!important}

````

### css/components.css

````css
/* Tombol, kartu, navigasi, overlay, formulir, dan badge bersama. */
.btn-af,.btn-af-outline,.btn-danger-af,.btn-wa{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;border-radius:999px;padding:.75rem 1.3rem;font-size:.9rem;font-weight:600;text-decoration:none;transition:transform .2s,box-shadow .2s;border:0}.btn-af{background:var(--af-gradient-deep);color:white}.btn-af-outline{border:1px solid #0b4fa0;background:white;color:#0b4fa0}.btn-danger-af{background:#b9163a;color:white}.btn-wa{background:#25d366;color:#073b25}.btn-af:hover,.btn-af-outline:hover,.btn-danger-af:hover,.btn-wa:hover{transform:translateY(-2px);box-shadow:var(--af-shadow)}.btn-af:hover,.btn-danger-af:hover{color:white}.card-af{border:1px solid var(--af-line);border-radius:20px;background:white;overflow:hidden;box-shadow:0 3px 8px #0f1f3d05;transition:transform .2s,box-shadow .2s;min-width:0}.card-af:hover{box-shadow:var(--af-shadow);transform:translateY(-4px)}.card-body-af{padding:1.5rem}.card-af h3 a{text-decoration:none;color:var(--af-ink)}.card-af .media-ai{border-radius:0}.card-facility{padding:1.3rem}.card-facility .symbol{display:grid;place-items:center;width:48px;height:48px;border-radius:50%;background:var(--af-gradient-deep);color:white;margin-bottom:1rem;font-size:1.4rem}.chip{display:inline-block;padding:.25rem .65rem;background:#e8f3fa;color:#0a2f66;border-radius:999px;font-size:.75rem;margin:.15rem}.chip.warn{background:#fff0c7;color:#704500}.chip.sunday{background:#def6ec;color:#07583d}.media-ai{position:relative;overflow:hidden;border-radius:20px;background:#e9f1f6}.media-ai img{display:block;width:100%;aspect-ratio:16/9;object-fit:cover}.ai-badge{position:absolute;right:8px;bottom:8px;background:#000b;color:white;font-size:11px;padding:3px 8px;border-radius:99px;pointer-events:none}.avatar{width:80px;height:80px;display:grid;place-items:center;border-radius:24px;background:var(--af-gradient-deep);color:white;font-size:1.5rem;font-weight:700;margin-bottom:1rem}.topbar{background:#0a2f66;color:white;font-size:.8rem;padding:.55rem 0}.topbar a{color:white}.topbar .container{display:flex;gap:1.3rem;align-items:center;justify-content:space-between}#header{position:sticky;top:0;z-index:1000;background:#ffffffef;backdrop-filter:blur(15px);border-bottom:1px solid var(--af-line)}#header.scrolled{box-shadow:var(--af-shadow)}.header-inner{display:flex;align-items:center;justify-content:space-between;gap:1rem;min-height:96px}.brand{display:block;flex-shrink:0;background:white;padding:8px;border-radius:8px}.brand img{height:44px;width:auto;max-width:210px;object-fit:contain}.desktop-nav{display:flex;align-items:center;gap:.1rem}.desktop-nav>a,.nav-group>button{padding:.6rem;font-size:.85rem;text-decoration:none;color:var(--af-ink);border:none;background:transparent}.nav-group{position:relative}.nav-panel{position:absolute;top:100%;left:0;width:260px;max-height:75vh;overflow:auto;padding:1rem;background:white;border:1px solid var(--af-line);border-radius:16px;box-shadow:var(--af-shadow);display:none}.nav-group.open .nav-panel{display:block}.nav-panel a{display:block;padding:.55rem;border-radius:8px;text-decoration:none;color:var(--af-ink);font-size:.85rem;min-height:44px}.nav-panel a:hover,.nav-panel a:focus,.nav-panel a[aria-current]{background:#e8f4fa}.nav-panel.mega{width:min(780px,85vw);left:-240px}.nav-group.open .nav-panel.mega{display:grid;grid-template-columns:repeat(3,1fr);gap:.2rem}.nav-group.open .nav-panel.service-menu{grid-template-columns:repeat(2,1fr)}.nav-cta{padding:1rem;background:#eff8f5;border-radius:12px;grid-column:1/-1}.mobile-toggle{display:none}.offcanvas{position:fixed;inset:0 auto 0 0;z-index:1100;width:min(380px,92vw);background:white;visibility:hidden;transform:translateX(-105%);overflow-y:auto}.offcanvas.show,.offcanvas.showing{visibility:visible;transform:translateX(0)}.offcanvas-header,.modal-header,.modal-footer{display:flex;align-items:center;justify-content:space-between;padding:1.2rem;border-bottom:1px solid var(--af-line);gap:1rem}.offcanvas-body,.modal-body{padding:1.25rem}.offcanvas h2,.modal h2{font-size:1.3rem;margin:0}.offcanvas details{border-bottom:1px solid var(--af-line);padding:.6rem 0}.offcanvas details a,.offcanvas-body>a{display:block;padding:.6rem}.offcanvas summary{min-height:44px;padding:.4rem;font-weight:600;cursor:pointer}.af-backdrop{position:fixed;inset:0;background:#0f1f3d77;z-index:1050}.modal{display:none;position:fixed;inset:0;z-index:1200;overflow:auto;background:#0f1f3d77;padding:24px}.modal.show{display:block}.modal-dialog{width:min(850px,100%);margin:2vh auto}.modal-content{background:white;border-radius:20px;box-shadow:var(--af-shadow);overflow:hidden}.modal-body{max-height:72vh;overflow:auto}.modal-footer{border-top:1px solid var(--af-line);border-bottom:0;justify-content:flex-end}.modal-backdrop{z-index:1150}.modal.fade{transition:none}.modal img{max-height:65vh;object-fit:contain}.footer{background:#0a2f66;color:#e3ecf8;padding:4rem 0 0}.footer h2,.footer h3{color:white}.footer a{color:#e3ecf8}.footer .brand{width:max-content;max-width:100%;margin-bottom:1rem}.footer-grid{display:grid;grid-template-columns:1.2fr .8fr 1fr 1fr;gap:2rem}.footer .links a{display:block;min-height:44px}.footer-bottom{border-top:1px solid #ffffff33;padding:1.5rem 0;margin-top:2rem;font-size:.8rem}.demo-ribbon{background:#071d40;padding:.8rem;text-align:center;font-size:.8rem}.map-art{height:120px;display:grid;place-items:center;background:repeating-linear-gradient(35deg,#deebea 0 20px,#fff 20px 26px,#d9edf6 26px 65px);color:#0a2f66;border-radius:12px;margin:.8rem 0;font-weight:700}.floating-rail{position:fixed;left:20px;bottom:20px;z-index:990;display:flex;gap:.5rem}.floating-rail .mobile-only{display:none}.floating-chat{position:fixed;right:20px;bottom:20px;z-index:990}.to-top{position:fixed;right:20px;bottom:85px;z-index:990;box-shadow:var(--af-shadow)}#toasts{position:fixed;right:20px;top:120px;z-index:1500;max-width:min(400px,90vw)}.toast-af{padding:1rem 1.4rem;background:#0a2f66;color:white;border-radius:12px;box-shadow:var(--af-shadow);margin:8px}.table-wrap{overflow-x:auto;border:1px solid var(--af-line);border-radius:14px;max-width:100%;box-shadow:inset -10px 0 12px -12px #0a2f66}table{border-collapse:collapse;width:100%;font-size:.9rem}th,td{padding:1rem;text-align:left;border-bottom:1px solid var(--af-line);vertical-align:top}th{background:#edf5fc;color:#0a2f66}.schedule th:first-child,.schedule td:first-child{position:sticky;left:0;background:#f6fafd;z-index:1;min-width:200px}.schedule{min-width:960px}.slot{display:block;white-space:nowrap}.filters{display:flex;flex-wrap:wrap;gap:1rem;background:#f0f6fa;padding:1.4rem;border-radius:16px;margin:2rem 0;align-items:end}.filters>div{flex:1 1 180px}.filters .days{flex-basis:100%}.days label{display:inline-block;font-size:.85rem;margin-right:.6rem}.days input{width:auto;min-height:0}.section-heading{max-width:740px;margin-bottom:2rem}.section-heading:after{content:'';display:block;margin-top:1.2rem;width:65px;height:4px;border-radius:9px;background:var(--af-gradient)}.empty{padding:3rem;text-align:center;border:1px dashed #94a3b8;border-radius:20px}.page-hero{padding:3.5rem 0;background:linear-gradient(120deg,#edf5ff,#effbf4)}.breadcrumb-af{font-size:.85rem;margin-bottom:1rem}.breadcrumb-af a{display:inline-block;min-height:44px}.accordion-af details{border:1px solid var(--af-line);border-radius:12px;margin:.75rem 0;padding:1rem}.accordion-af summary{font-weight:600;color:#0a2f66;min-height:44px;cursor:pointer}.accordion-af details p{margin-top:1rem}.pagination-af{display:flex;gap:.5rem;margin:2rem 0;flex-wrap:wrap}.pagination-af a{min-width:44px;min-height:44px;padding:.5rem;text-align:center;border:1px solid var(--af-line);border-radius:10px}.pagination-af a[aria-current]{background:#0a2f66;color:white}.contact-form{max-width:760px}.contact-form .hp{position:absolute;left:-10000px}.contact-form .counter{text-align:right;font-size:.8rem}.contact-form .success{background:#e2f6eb;padding:1rem;border-radius:12px}.contact-form .error-summary{color:#b9163a}.modal .contact-form{width:100%}#progress{position:fixed;top:0;left:0;width:100%;height:3px;background:var(--af-gradient);z-index:2000}.loading{height:200px;background:linear-gradient(90deg,#eff3f8,#fff,#eff3f8);border-radius:20px}@media(max-width:1190px){.header-inner{gap:.4rem}.desktop-nav>a,.nav-group>button{font-size:.78rem;padding:.5rem .35rem}.header-inner>.btn-af{font-size:.75rem;padding:.7rem}.brand img{max-width:180px}}@media(max-width:991px){.desktop-nav{display:none}.mobile-toggle{display:block}.header-inner{min-height:80px}.brand img{height:38px}.footer-grid{grid-template-columns:1fr 1fr}.header-inner>.btn-af{margin-left:auto}}@media(max-width:600px){.topbar .address{display:none}.header-inner>.btn-af{display:none}.footer-grid{grid-template-columns:1fr}.floating-rail{left:0;right:0;bottom:0;background:white;box-shadow:0 -4px 20px #0a2f6622;padding:8px;gap:5px;justify-content:center}.floating-rail .mobile-only{display:inline-flex}.floating-rail a{font-size:.72rem;padding:.6rem .7rem;flex:1}.floating-chat{bottom:86px;right:14px}.to-top{bottom:148px;right:14px}.modal{padding:10px}.modal-dialog{margin:2vh auto}.filters{padding:1rem}.nav-panel{max-width:90vw}}
.offcanvas,.offcanvas.showing,.offcanvas.hiding{transition:none!important}.offcanvas.showing{visibility:visible}.hero .hero-swiper .carousel-item{float:none;margin-right:0}.hero .hero-swiper.carousel .swiper-wrapper{display:block}.hero .hero-swiper.carousel .carousel-item:not(.active){display:none}
@media(max-width:600px){.topbar .container>span:last-child{display:none}.topbar .container{justify-content:center}.floating-rail>a,.floating-rail>span{flex:1;min-width:0;display:flex!important}.floating-rail a{width:100%;font-size:.68rem;line-height:1.3;padding:.5rem}.floating-rail>a{max-width:38%}}

````

### css/pages.css

````css
/* Halaman beranda dan template detail. */
.hero{padding:3.5rem 0 5rem;background:radial-gradient(ellipse at 80% 40%,#d9f4ed,transparent 60%),#f3f8fd;overflow:hidden}.hero-grid{display:grid;grid-template-columns:1fr 1.05fr;gap:3rem;align-items:center}.hero h1{max-width:15ch}.hero p{max-width:48ch;font-size:1.05rem}.hero .media-ai{border-radius:48px 48px 48px 12px;box-shadow:0 20px 50px #0b4fa02e}.hero .media-ai img{aspect-ratio:4/3}.hero-facts{display:flex;justify-content:space-around;background:white;border-radius:16px;padding:1rem;margin:-10px 25px 0;position:relative;box-shadow:var(--af-shadow);font-size:.85rem;color:#0a2f66}.hero-controls{display:flex;gap:.5rem;margin-top:1rem;align-items:center}.hero-controls button{border-radius:50%;min-width:44px}.hero-pagination{display:flex;gap:6px}.swiper-slide{height:auto}.swiper:not(.swiper-initialized) .swiper-wrapper{display:flex;overflow:hidden}.swiper:not(.swiper-initialized) .swiper-slide{flex:0 0 100%}.cta-strip{margin-top:-2.5rem;position:relative;z-index:2;display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}.cta-strip .card-af{padding:1.6rem}.cta-strip h2{font-size:1.2rem}.sunday-banner{padding:2.5rem;border-radius:24px;background:var(--af-gradient-deep);color:white;display:flex;justify-content:space-between;align-items:center;gap:2rem}.sunday-banner h2{color:white}.stats{display:grid;grid-template-columns:repeat(5,1fr);gap:1rem;text-align:center;margin-top:3rem}.stats strong{display:block;font-size:2.2rem;color:#0b4fa0}.facility-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:1rem}.facility-grid h3{font-size:1rem}.facility-grid p{font-size:.85rem}.detail-grid{display:grid;grid-template-columns:1fr 2fr;gap:2rem;align-items:start}.detail-sidebar{position:sticky;top:115px}.reading{max-width:800px;margin:auto}.reading p{line-height:1.9}.reading blockquote{font-size:1.3rem;color:#0b4fa0;border-left:4px solid #12b5a6;padding-left:1.5rem;margin:2rem 0}.album{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}.album button{padding:0;border:0}.album button:nth-child(3n+1) img{aspect-ratio:4/3}.steps{counter-reset:steps;display:grid;grid-template-columns:repeat(5,1fr);gap:1rem;list-style:none;padding:0}.steps li{counter-increment:steps;padding:1.2rem;border-radius:16px;background:#edf6fa;color:#0a2f66}.steps li:before{content:counter(steps);display:block;font-size:1.5rem;font-weight:800;color:#087351}.quality-bar{height:14px;background:#dce9f3;border-radius:99px;overflow:hidden}.quality-bar span{display:block;height:100%;background:var(--af-gradient-deep)}.partner{padding:1.5rem;background:#f2f6f9;border:1px solid var(--af-line);border-radius:16px;text-align:center;font-weight:700;color:#0a2f66}.cover img{aspect-ratio:3/4;object-fit:cover}.timeline{border-left:3px solid #12b5a6;padding-left:2rem}.timeline article{margin:2rem 0}.ai-table{min-width:800px}.ai-table td:last-child{min-width:320px}.related{margin-top:3rem;padding-top:2rem;border-top:1px solid var(--af-line)}@media(max-width:1100px){.facility-grid{grid-template-columns:repeat(3,1fr)}}@media(max-width:767px){.hero-grid,.detail-grid{grid-template-columns:1fr}.hero{padding-top:2rem}.hero h1{max-width:100%}.hero-grid{gap:2rem}.hero .media-ai img{aspect-ratio:16/9}.cta-strip{grid-template-columns:1fr;margin-top:1.5rem}.sunday-banner{display:block;padding:1.5rem}.stats{grid-template-columns:repeat(2,1fr)}.facility-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.card-facility{padding:1rem}.steps{grid-template-columns:1fr}.album{grid-template-columns:repeat(2,1fr)}.detail-sidebar{position:static}.hero-facts{margin:0;font-size:.75rem;gap:.5rem}}
.hero-grid>*{min-width:0}.swiper{max-width:100%;min-width:0}.hero-grid{grid-template-columns:minmax(0,1fr) minmax(0,1.05fr)}@media(max-width:767px){.hero-grid{grid-template-columns:minmax(0,1fr)}}

````

### js/config.js

````javascript
window.ALFA_CONFIG = {
  "name": "RS Alfasyimar",
  "tagline": "Coring with Heart, Healing with Trust",
  "logoUrl": "https://uploads.onecompiler.io/42bwrvdku/1792750712383/Logo.png",
  "iconUrl": "https://uploads.onecompiler.io/42bwrvdku/1792752429857/icon.png",
  "logoLocal": "assets/img/logo.png",
  "iconLocal": "assets/img/icon.png",
  "placeholderImage": "assets/img/placeholder.svg",
  "address": "Jl. Contoh Sehat No. 1, Pontianak, Kalimantan Barat (alamat fiktif)",
  "phoneMain": "0561-000-0000",
  "phoneEmergency": "0561-000-0001",
  "phoneAmbulance": "0811-0000-0002",
  "waPoli": "62811000000003",
  "waAmbulance": "62811000000002",
  "waComplaint": "62811000000004",
  "email": "informasi@alfasyimar.example",
  "careerEmail": "karir@alfasyimar.example",
  "registrationUrl": "#/kontak",
  "sundayRegistrationUrl": "#/kontak",
  "mapUrl": "https://www.google.com/maps/search/?api=1&query=Pontianak%2C%20Kalimantan%20Barat",
  "social": {
    "facebook": "",
    "instagram": "",
    "youtube": ""
  },
  "hours": {
    "ugd": "24 Jam",
    "poli": "Senin–Sabtu 08.00–20.00 WIB",
    "sunday": "Minggu 09.00–13.00 WIB",
    "mcu": "Senin–Sabtu 07.00–12.00 WIB"
  },
  "lastScheduleUpdate": "2026-10-24",
  "lastContactUpdate": "2026-10-24",
  "isDemo": true,
  "formEndpoint": "",
  "siteUrl": ""
};
window.ALFA_DATA = {};
window.Alfa = {config:window.ALFA_CONFIG,data:window.ALFA_DATA,utils:{},components:{},pages:{},router:{},search:{}};

````

### js/data/nav.js

````javascript
/* Data fiktif untuk preview; bukan layanan nyata. */
window.ALFA_DATA.nav = [
  {
    "label": "Beranda",
    "path": "#/",
    "visible": true,
    "order": 0
  },
  {
    "label": "Profil Kami",
    "visible": true,
    "order": 1,
    "children": [
      {
        "label": "Profil Kami",
        "path": "#/profil-kami",
        "visible": true,
        "order": 0
      },
      {
        "label": "Indikator Mutu",
        "path": "#/indikator-mutu",
        "visible": true,
        "order": 1
      }
    ]
  },
  {
    "label": "Fasilitas",
    "visible": true,
    "order": 2,
    "children": [
      {
        "label": "Kolposkopi",
        "path": "#/fasilitas/kolposkopi",
        "visible": true,
        "order": 0
      },
      {
        "label": "Endoskopi",
        "path": "#/fasilitas/endoskopi",
        "visible": true,
        "order": 1
      },
      {
        "label": "Laparaskopi",
        "path": "#/fasilitas/laparaskopi",
        "visible": true,
        "order": 2
      },
      {
        "label": "OCT",
        "path": "#/fasilitas/oct",
        "visible": true,
        "order": 3
      },
      {
        "label": "Eye Care",
        "path": "#/fasilitas/eye-care",
        "visible": true,
        "order": 4
      },
      {
        "label": "Multi Slice CT-Scan 128 Slices",
        "path": "#/fasilitas/multi-slice-ct-scan-128",
        "visible": true,
        "order": 5
      },
      {
        "label": "Dialisis",
        "path": "#/fasilitas/dialisis",
        "visible": true,
        "order": 6
      },
      {
        "label": "Mamografi",
        "path": "#/fasilitas/mamografi",
        "visible": true,
        "order": 7
      },
      {
        "label": "Klinik Andrologi",
        "path": "#/fasilitas/klinik-andrologi",
        "visible": true,
        "order": 8
      },
      {
        "label": "Klinik Nyeri",
        "path": "#/fasilitas/klinik-nyeri",
        "visible": true,
        "order": 9
      },
      {
        "label": "Klinik Estetika",
        "path": "#/fasilitas/klinik-estetika",
        "visible": true,
        "order": 10
      },
      {
        "label": "NICU / HCU / PICU / ICU",
        "path": "#/fasilitas/nicu-hcu-picu-icu",
        "visible": true,
        "order": 11
      },
      {
        "label": "MYAH",
        "path": "#/fasilitas/myah",
        "visible": true,
        "order": 12
      },
      {
        "label": "CBCT",
        "path": "#/fasilitas/cbct",
        "visible": true,
        "order": 13
      },
      {
        "label": "Bronkoskopi",
        "path": "#/fasilitas/bronkoskopi",
        "visible": true,
        "order": 14
      }
    ]
  },
  {
    "label": "Dokter",
    "visible": true,
    "order": 3,
    "children": [
      {
        "label": "Jadwal",
        "path": "#/jadwal",
        "visible": true,
        "order": 0
      },
      {
        "label": "Sunday Clinic",
        "path": "#/sunday-clinic",
        "visible": true,
        "order": 1
      },
      {
        "label": "Spesialis",
        "path": "#/dokter-spesialis",
        "visible": true,
        "order": 2
      },
      {
        "label": "Umum",
        "path": "#/dokter-umum",
        "visible": true,
        "order": 3
      },
      {
        "label": "Gigi Umum",
        "path": "#/dokter-gigi-umum",
        "visible": true,
        "order": 4
      },
      {
        "label": "Gigi Spesialis",
        "path": "#/dokter-gigi-spesialis",
        "visible": true,
        "order": 5
      },
      {
        "label": "Psikolog",
        "path": "#/psikolog",
        "visible": true,
        "order": 6
      }
    ]
  },
  {
    "label": "Pelayanan",
    "visible": true,
    "order": 4,
    "children": [
      {
        "label": "Rawat Jalan",
        "path": "#/pelayanan/rawat-jalan",
        "visible": true,
        "order": 0
      },
      {
        "label": "Rawat Inap",
        "path": "#/pelayanan/rawat-inap",
        "visible": true,
        "order": 1
      },
      {
        "label": "Kamar Operasi",
        "path": "#/pelayanan/kamar-operasi",
        "visible": true,
        "order": 2
      },
      {
        "label": "Medical Check Up",
        "path": "#/pelayanan/mcu",
        "visible": true,
        "order": 3
      },
      {
        "label": "Rehab Medik",
        "path": "#/pelayanan/rehab-medik",
        "visible": true,
        "order": 4
      },
      {
        "label": "UGD",
        "path": "#/pelayanan/ugd",
        "visible": true,
        "order": 5
      },
      {
        "label": "Laboratorium",
        "path": "#/pelayanan/laboratorium",
        "visible": true,
        "order": 6
      },
      {
        "label": "Radiologi",
        "path": "#/pelayanan/radiologi",
        "visible": true,
        "order": 7
      },
      {
        "label": "Farmasi",
        "path": "#/pelayanan/farmasi",
        "visible": true,
        "order": 8
      },
      {
        "label": "Ambulans",
        "path": "#/pelayanan/ambulans",
        "visible": true,
        "order": 9
      }
    ]
  },
  {
    "label": "Artikel",
    "visible": true,
    "order": 5,
    "children": [
      {
        "label": "Promo",
        "path": "#/artikel/promo",
        "visible": true,
        "order": 0
      },
      {
        "label": "Video Edukasi",
        "path": "#/artikel/video-edukasi",
        "visible": true,
        "order": 1
      },
      {
        "label": "Majalah",
        "path": "#/artikel/majalah",
        "visible": true,
        "order": 2
      },
      {
        "label": "Berita & Info Kesehatan",
        "path": "#/artikel/berita",
        "visible": true,
        "order": 3
      },
      {
        "label": "Kegiatan",
        "path": "#/artikel/kegiatan",
        "visible": true,
        "order": 4
      }
    ]
  },
  {
    "label": "Lain-lain",
    "visible": true,
    "order": 6,
    "children": [
      {
        "label": "Rekanan Asuransi",
        "path": "#/rekanan-asuransi",
        "visible": true,
        "order": 0
      },
      {
        "label": "Karir",
        "path": "#/karir",
        "visible": true,
        "order": 1
      }
    ]
  }
];

````

### js/data/facilities.js

````javascript
/* Data fiktif untuk preview; bukan layanan nyata. */
window.ALFA_DATA.facilities = [
  {
    "slug": "kolposkopi",
    "name": "Kolposkopi",
    "icon": "bi-hospital",
    "summary": "Kenali alur dan informasi Kolposkopi.",
    "description": [
      "Kolposkopi pada RS Alfasyimar adalah contoh halaman informasi fasilitas dalam situs preview. Pengunjung dapat mengenali kelompok layanan, membuka direktori dokter terkait, dan melihat jadwal poliklinik dari satu sumber data. Ilustrasi yang ditampilkan merupakan konsep visual buatan AI, bukan dokumentasi alat atau ruang yang benar-benar tersedia.",
      "Untuk simulasi alur kunjungan, mulai dari memilih poliklinik Kebidanan & Kandungan, kemudian periksa hari serta jam yang tercantum. Persyaratan, kebutuhan pemeriksaan, biaya, dan persiapan pribadi harus dikonfirmasi kepada tenaga kesehatan pada layanan nyata. Situs ini tidak menentukan tindakan atau memberikan diagnosis. Konsultasikan kebutuhan kesehatan Anda kepada dokter."
    ],
    "indications": [
      "Penentuan kebutuhan dilakukan melalui konsultasi dokter."
    ],
    "preparation": [
      "Konfirmasikan dokumen, waktu kedatangan, dan instruksi khusus kepada petugas."
    ],
    "clinics": [
      "kebidanan-kandungan"
    ],
    "doctors": [
      "d002"
    ],
    "image": "assets/img/ai/hero-3.webp",
    "alt": "Ilustrasi konsep ruang layanan untuk Kolposkopi",
    "ai": true,
    "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "endoskopi",
    "name": "Endoskopi",
    "icon": "bi-hospital",
    "summary": "Kenali alur dan informasi Endoskopi.",
    "description": [
      "Endoskopi pada RS Alfasyimar adalah contoh halaman informasi fasilitas dalam situs preview. Pengunjung dapat mengenali kelompok layanan, membuka direktori dokter terkait, dan melihat jadwal poliklinik dari satu sumber data. Ilustrasi yang ditampilkan merupakan konsep visual buatan AI, bukan dokumentasi alat atau ruang yang benar-benar tersedia.",
      "Untuk simulasi alur kunjungan, mulai dari memilih poliklinik Penyakit Dalam, kemudian periksa hari serta jam yang tercantum. Persyaratan, kebutuhan pemeriksaan, biaya, dan persiapan pribadi harus dikonfirmasi kepada tenaga kesehatan pada layanan nyata. Situs ini tidak menentukan tindakan atau memberikan diagnosis. Konsultasikan kebutuhan kesehatan Anda kepada dokter."
    ],
    "indications": [
      "Penentuan kebutuhan dilakukan melalui konsultasi dokter."
    ],
    "preparation": [
      "Konfirmasikan dokumen, waktu kedatangan, dan instruksi khusus kepada petugas."
    ],
    "clinics": [
      "penyakit-dalam"
    ],
    "doctors": [
      "d003",
      "d022"
    ],
    "image": "assets/img/ai/hero-3.webp",
    "alt": "Ilustrasi konsep ruang layanan untuk Endoskopi",
    "ai": true,
    "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "laparaskopi",
    "name": "Laparaskopi",
    "icon": "bi-hospital",
    "summary": "Kenali alur dan informasi Laparaskopi.",
    "description": [
      "Laparaskopi pada RS Alfasyimar adalah contoh halaman informasi fasilitas dalam situs preview. Pengunjung dapat mengenali kelompok layanan, membuka direktori dokter terkait, dan melihat jadwal poliklinik dari satu sumber data. Ilustrasi yang ditampilkan merupakan konsep visual buatan AI, bukan dokumentasi alat atau ruang yang benar-benar tersedia.",
      "Untuk simulasi alur kunjungan, mulai dari memilih poliklinik Bedah Umum, kemudian periksa hari serta jam yang tercantum. Persyaratan, kebutuhan pemeriksaan, biaya, dan persiapan pribadi harus dikonfirmasi kepada tenaga kesehatan pada layanan nyata. Situs ini tidak menentukan tindakan atau memberikan diagnosis. Konsultasikan kebutuhan kesehatan Anda kepada dokter."
    ],
    "indications": [
      "Penentuan kebutuhan dilakukan melalui konsultasi dokter."
    ],
    "preparation": [
      "Konfirmasikan dokumen, waktu kedatangan, dan instruksi khusus kepada petugas."
    ],
    "clinics": [
      "bedah-umum"
    ],
    "doctors": [
      "d004"
    ],
    "image": "assets/img/ai/kamar-operasi.webp",
    "alt": "Ilustrasi konsep ruang layanan untuk Laparaskopi",
    "ai": true,
    "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "oct",
    "name": "OCT",
    "icon": "bi-hospital",
    "summary": "Kenali alur dan informasi OCT.",
    "description": [
      "OCT pada RS Alfasyimar adalah contoh halaman informasi fasilitas dalam situs preview. Pengunjung dapat mengenali kelompok layanan, membuka direktori dokter terkait, dan melihat jadwal poliklinik dari satu sumber data. Ilustrasi yang ditampilkan merupakan konsep visual buatan AI, bukan dokumentasi alat atau ruang yang benar-benar tersedia.",
      "Untuk simulasi alur kunjungan, mulai dari memilih poliklinik Mata, kemudian periksa hari serta jam yang tercantum. Persyaratan, kebutuhan pemeriksaan, biaya, dan persiapan pribadi harus dikonfirmasi kepada tenaga kesehatan pada layanan nyata. Situs ini tidak menentukan tindakan atau memberikan diagnosis. Konsultasikan kebutuhan kesehatan Anda kepada dokter."
    ],
    "indications": [
      "Penentuan kebutuhan dilakukan melalui konsultasi dokter."
    ],
    "preparation": [
      "Konfirmasikan dokumen, waktu kedatangan, dan instruksi khusus kepada petugas."
    ],
    "clinics": [
      "mata"
    ],
    "doctors": [
      "d014"
    ],
    "image": "assets/img/ai/hero-3.webp",
    "alt": "Ilustrasi konsep ruang layanan untuk OCT",
    "ai": true,
    "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "eye-care",
    "name": "Eye Care",
    "icon": "bi-hospital",
    "summary": "Kenali alur dan informasi Eye Care.",
    "description": [
      "Eye Care pada RS Alfasyimar adalah contoh halaman informasi fasilitas dalam situs preview. Pengunjung dapat mengenali kelompok layanan, membuka direktori dokter terkait, dan melihat jadwal poliklinik dari satu sumber data. Ilustrasi yang ditampilkan merupakan konsep visual buatan AI, bukan dokumentasi alat atau ruang yang benar-benar tersedia.",
      "Untuk simulasi alur kunjungan, mulai dari memilih poliklinik Mata, kemudian periksa hari serta jam yang tercantum. Persyaratan, kebutuhan pemeriksaan, biaya, dan persiapan pribadi harus dikonfirmasi kepada tenaga kesehatan pada layanan nyata. Situs ini tidak menentukan tindakan atau memberikan diagnosis. Konsultasikan kebutuhan kesehatan Anda kepada dokter."
    ],
    "indications": [
      "Penentuan kebutuhan dilakukan melalui konsultasi dokter."
    ],
    "preparation": [
      "Konfirmasikan dokumen, waktu kedatangan, dan instruksi khusus kepada petugas."
    ],
    "clinics": [
      "mata"
    ],
    "doctors": [
      "d014"
    ],
    "image": "assets/img/ai/hero-3.webp",
    "alt": "Ilustrasi konsep ruang layanan untuk Eye Care",
    "ai": true,
    "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "multi-slice-ct-scan-128",
    "name": "Multi Slice CT-Scan 128 Slices",
    "icon": "bi-hospital",
    "summary": "Kenali alur dan informasi Multi Slice CT-Scan 128 Slices.",
    "description": [
      "Multi Slice CT-Scan 128 Slices pada RS Alfasyimar adalah contoh halaman informasi fasilitas dalam situs preview. Pengunjung dapat mengenali kelompok layanan, membuka direktori dokter terkait, dan melihat jadwal poliklinik dari satu sumber data. Ilustrasi yang ditampilkan merupakan konsep visual buatan AI, bukan dokumentasi alat atau ruang yang benar-benar tersedia.",
      "Untuk simulasi alur kunjungan, mulai dari memilih poliklinik Bedah Saraf, kemudian periksa hari serta jam yang tercantum. Persyaratan, kebutuhan pemeriksaan, biaya, dan persiapan pribadi harus dikonfirmasi kepada tenaga kesehatan pada layanan nyata. Situs ini tidak menentukan tindakan atau memberikan diagnosis. Konsultasikan kebutuhan kesehatan Anda kepada dokter."
    ],
    "indications": [
      "Penentuan kebutuhan dilakukan melalui konsultasi dokter."
    ],
    "preparation": [
      "Konfirmasikan dokumen, waktu kedatangan, dan instruksi khusus kepada petugas."
    ],
    "clinics": [
      "bedah-saraf"
    ],
    "doctors": [
      "d006"
    ],
    "image": "assets/img/ai/radiologi.webp",
    "alt": "Ilustrasi konsep ruang layanan untuk Multi Slice CT-Scan 128 Slices",
    "ai": true,
    "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "dialisis",
    "name": "Dialisis",
    "icon": "bi-hospital",
    "summary": "Kenali alur dan informasi Dialisis.",
    "description": [
      "Dialisis pada RS Alfasyimar adalah contoh halaman informasi fasilitas dalam situs preview. Pengunjung dapat mengenali kelompok layanan, membuka direktori dokter terkait, dan melihat jadwal poliklinik dari satu sumber data. Ilustrasi yang ditampilkan merupakan konsep visual buatan AI, bukan dokumentasi alat atau ruang yang benar-benar tersedia.",
      "Untuk simulasi alur kunjungan, mulai dari memilih poliklinik Penyakit Dalam, kemudian periksa hari serta jam yang tercantum. Persyaratan, kebutuhan pemeriksaan, biaya, dan persiapan pribadi harus dikonfirmasi kepada tenaga kesehatan pada layanan nyata. Situs ini tidak menentukan tindakan atau memberikan diagnosis. Konsultasikan kebutuhan kesehatan Anda kepada dokter."
    ],
    "indications": [
      "Penentuan kebutuhan dilakukan melalui konsultasi dokter."
    ],
    "preparation": [
      "Konfirmasikan dokumen, waktu kedatangan, dan instruksi khusus kepada petugas."
    ],
    "clinics": [
      "penyakit-dalam"
    ],
    "doctors": [
      "d003",
      "d022"
    ],
    "image": "assets/img/ai/hero-3.webp",
    "alt": "Ilustrasi konsep ruang layanan untuk Dialisis",
    "ai": true,
    "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "mamografi",
    "name": "Mamografi",
    "icon": "bi-hospital",
    "summary": "Kenali alur dan informasi Mamografi.",
    "description": [
      "Mamografi pada RS Alfasyimar adalah contoh halaman informasi fasilitas dalam situs preview. Pengunjung dapat mengenali kelompok layanan, membuka direktori dokter terkait, dan melihat jadwal poliklinik dari satu sumber data. Ilustrasi yang ditampilkan merupakan konsep visual buatan AI, bukan dokumentasi alat atau ruang yang benar-benar tersedia.",
      "Untuk simulasi alur kunjungan, mulai dari memilih poliklinik Kebidanan & Kandungan, kemudian periksa hari serta jam yang tercantum. Persyaratan, kebutuhan pemeriksaan, biaya, dan persiapan pribadi harus dikonfirmasi kepada tenaga kesehatan pada layanan nyata. Situs ini tidak menentukan tindakan atau memberikan diagnosis. Konsultasikan kebutuhan kesehatan Anda kepada dokter."
    ],
    "indications": [
      "Penentuan kebutuhan dilakukan melalui konsultasi dokter."
    ],
    "preparation": [
      "Konfirmasikan dokumen, waktu kedatangan, dan instruksi khusus kepada petugas."
    ],
    "clinics": [
      "kebidanan-kandungan"
    ],
    "doctors": [
      "d002"
    ],
    "image": "assets/img/ai/radiologi.webp",
    "alt": "Ilustrasi konsep ruang layanan untuk Mamografi",
    "ai": true,
    "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "klinik-andrologi",
    "name": "Klinik Andrologi",
    "icon": "bi-hospital",
    "summary": "Kenali alur dan informasi Klinik Andrologi.",
    "description": [
      "Klinik Andrologi pada RS Alfasyimar adalah contoh halaman informasi fasilitas dalam situs preview. Pengunjung dapat mengenali kelompok layanan, membuka direktori dokter terkait, dan melihat jadwal poliklinik dari satu sumber data. Ilustrasi yang ditampilkan merupakan konsep visual buatan AI, bukan dokumentasi alat atau ruang yang benar-benar tersedia.",
      "Untuk simulasi alur kunjungan, mulai dari memilih poliklinik Andrologi, kemudian periksa hari serta jam yang tercantum. Persyaratan, kebutuhan pemeriksaan, biaya, dan persiapan pribadi harus dikonfirmasi kepada tenaga kesehatan pada layanan nyata. Situs ini tidak menentukan tindakan atau memberikan diagnosis. Konsultasikan kebutuhan kesehatan Anda kepada dokter."
    ],
    "indications": [
      "Penentuan kebutuhan dilakukan melalui konsultasi dokter."
    ],
    "preparation": [
      "Konfirmasikan dokumen, waktu kedatangan, dan instruksi khusus kepada petugas."
    ],
    "clinics": [
      "andrologi"
    ],
    "doctors": [
      "d019"
    ],
    "image": "assets/img/ai/hero-3.webp",
    "alt": "Ilustrasi konsep ruang layanan untuk Klinik Andrologi",
    "ai": true,
    "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "klinik-nyeri",
    "name": "Klinik Nyeri",
    "icon": "bi-hospital",
    "summary": "Kenali alur dan informasi Klinik Nyeri.",
    "description": [
      "Klinik Nyeri pada RS Alfasyimar adalah contoh halaman informasi fasilitas dalam situs preview. Pengunjung dapat mengenali kelompok layanan, membuka direktori dokter terkait, dan melihat jadwal poliklinik dari satu sumber data. Ilustrasi yang ditampilkan merupakan konsep visual buatan AI, bukan dokumentasi alat atau ruang yang benar-benar tersedia.",
      "Untuk simulasi alur kunjungan, mulai dari memilih poliklinik Klinik Nyeri, kemudian periksa hari serta jam yang tercantum. Persyaratan, kebutuhan pemeriksaan, biaya, dan persiapan pribadi harus dikonfirmasi kepada tenaga kesehatan pada layanan nyata. Situs ini tidak menentukan tindakan atau memberikan diagnosis. Konsultasikan kebutuhan kesehatan Anda kepada dokter."
    ],
    "indications": [
      "Penentuan kebutuhan dilakukan melalui konsultasi dokter."
    ],
    "preparation": [
      "Konfirmasikan dokumen, waktu kedatangan, dan instruksi khusus kepada petugas."
    ],
    "clinics": [
      "klinik-nyeri"
    ],
    "doctors": [
      "d020"
    ],
    "image": "assets/img/ai/hero-3.webp",
    "alt": "Ilustrasi konsep ruang layanan untuk Klinik Nyeri",
    "ai": true,
    "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "klinik-estetika",
    "name": "Klinik Estetika",
    "icon": "bi-hospital",
    "summary": "Kenali alur dan informasi Klinik Estetika.",
    "description": [
      "Klinik Estetika pada RS Alfasyimar adalah contoh halaman informasi fasilitas dalam situs preview. Pengunjung dapat mengenali kelompok layanan, membuka direktori dokter terkait, dan melihat jadwal poliklinik dari satu sumber data. Ilustrasi yang ditampilkan merupakan konsep visual buatan AI, bukan dokumentasi alat atau ruang yang benar-benar tersedia.",
      "Untuk simulasi alur kunjungan, mulai dari memilih poliklinik Klinik Estetika, kemudian periksa hari serta jam yang tercantum. Persyaratan, kebutuhan pemeriksaan, biaya, dan persiapan pribadi harus dikonfirmasi kepada tenaga kesehatan pada layanan nyata. Situs ini tidak menentukan tindakan atau memberikan diagnosis. Konsultasikan kebutuhan kesehatan Anda kepada dokter."
    ],
    "indications": [
      "Penentuan kebutuhan dilakukan melalui konsultasi dokter."
    ],
    "preparation": [
      "Konfirmasikan dokumen, waktu kedatangan, dan instruksi khusus kepada petugas."
    ],
    "clinics": [
      "klinik-estetika"
    ],
    "doctors": [
      "d021"
    ],
    "image": "assets/img/ai/hero-3.webp",
    "alt": "Ilustrasi konsep ruang layanan untuk Klinik Estetika",
    "ai": true,
    "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "nicu-hcu-picu-icu",
    "name": "NICU / HCU / PICU / ICU",
    "icon": "bi-hospital",
    "summary": "Kenali alur dan informasi NICU / HCU / PICU / ICU.",
    "description": [
      "NICU / HCU / PICU / ICU pada RS Alfasyimar adalah contoh halaman informasi fasilitas dalam situs preview. Pengunjung dapat mengenali kelompok layanan, membuka direktori dokter terkait, dan melihat jadwal poliklinik dari satu sumber data. Ilustrasi yang ditampilkan merupakan konsep visual buatan AI, bukan dokumentasi alat atau ruang yang benar-benar tersedia.",
      "Untuk simulasi alur kunjungan, mulai dari memilih poliklinik Anak, kemudian periksa hari serta jam yang tercantum. Persyaratan, kebutuhan pemeriksaan, biaya, dan persiapan pribadi harus dikonfirmasi kepada tenaga kesehatan pada layanan nyata. Situs ini tidak menentukan tindakan atau memberikan diagnosis. Konsultasikan kebutuhan kesehatan Anda kepada dokter."
    ],
    "indications": [
      "Penentuan kebutuhan dilakukan melalui konsultasi dokter."
    ],
    "preparation": [
      "Konfirmasikan dokumen, waktu kedatangan, dan instruksi khusus kepada petugas."
    ],
    "clinics": [
      "anak"
    ],
    "doctors": [
      "d001"
    ],
    "image": "assets/img/ai/ugd.webp",
    "alt": "Ilustrasi konsep ruang layanan untuk NICU / HCU / PICU / ICU",
    "ai": true,
    "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "myah",
    "name": "MYAH",
    "icon": "bi-hospital",
    "summary": "Kenali alur dan informasi MYAH.",
    "description": [
      "MYAH pada RS Alfasyimar adalah contoh halaman informasi fasilitas dalam situs preview. Pengunjung dapat mengenali kelompok layanan, membuka direktori dokter terkait, dan melihat jadwal poliklinik dari satu sumber data. Ilustrasi yang ditampilkan merupakan konsep visual buatan AI, bukan dokumentasi alat atau ruang yang benar-benar tersedia.",
      "Untuk simulasi alur kunjungan, mulai dari memilih poliklinik Mata, kemudian periksa hari serta jam yang tercantum. Persyaratan, kebutuhan pemeriksaan, biaya, dan persiapan pribadi harus dikonfirmasi kepada tenaga kesehatan pada layanan nyata. Situs ini tidak menentukan tindakan atau memberikan diagnosis. Konsultasikan kebutuhan kesehatan Anda kepada dokter."
    ],
    "indications": [
      "Penentuan kebutuhan dilakukan melalui konsultasi dokter."
    ],
    "preparation": [
      "Konfirmasikan dokumen, waktu kedatangan, dan instruksi khusus kepada petugas."
    ],
    "clinics": [
      "mata"
    ],
    "doctors": [
      "d014"
    ],
    "image": "assets/img/ai/hero-3.webp",
    "alt": "Ilustrasi konsep ruang layanan untuk MYAH",
    "ai": true,
    "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "cbct",
    "name": "CBCT",
    "icon": "bi-hospital",
    "summary": "Kenali alur dan informasi CBCT.",
    "description": [
      "CBCT pada RS Alfasyimar adalah contoh halaman informasi fasilitas dalam situs preview. Pengunjung dapat mengenali kelompok layanan, membuka direktori dokter terkait, dan melihat jadwal poliklinik dari satu sumber data. Ilustrasi yang ditampilkan merupakan konsep visual buatan AI, bukan dokumentasi alat atau ruang yang benar-benar tersedia.",
      "Untuk simulasi alur kunjungan, mulai dari memilih poliklinik Gigi Spesialis, kemudian periksa hari serta jam yang tercantum. Persyaratan, kebutuhan pemeriksaan, biaya, dan persiapan pribadi harus dikonfirmasi kepada tenaga kesehatan pada layanan nyata. Situs ini tidak menentukan tindakan atau memberikan diagnosis. Konsultasikan kebutuhan kesehatan Anda kepada dokter."
    ],
    "indications": [
      "Penentuan kebutuhan dilakukan melalui konsultasi dokter."
    ],
    "preparation": [
      "Konfirmasikan dokumen, waktu kedatangan, dan instruksi khusus kepada petugas."
    ],
    "clinics": [
      "gigi-spesialis"
    ],
    "doctors": [
      "d031",
      "d032",
      "d033"
    ],
    "image": "assets/img/ai/radiologi.webp",
    "alt": "Ilustrasi konsep ruang layanan untuk CBCT",
    "ai": true,
    "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "bronkoskopi",
    "name": "Bronkoskopi",
    "icon": "bi-hospital",
    "summary": "Kenali alur dan informasi Bronkoskopi.",
    "description": [
      "Bronkoskopi pada RS Alfasyimar adalah contoh halaman informasi fasilitas dalam situs preview. Pengunjung dapat mengenali kelompok layanan, membuka direktori dokter terkait, dan melihat jadwal poliklinik dari satu sumber data. Ilustrasi yang ditampilkan merupakan konsep visual buatan AI, bukan dokumentasi alat atau ruang yang benar-benar tersedia.",
      "Untuk simulasi alur kunjungan, mulai dari memilih poliklinik Paru, kemudian periksa hari serta jam yang tercantum. Persyaratan, kebutuhan pemeriksaan, biaya, dan persiapan pribadi harus dikonfirmasi kepada tenaga kesehatan pada layanan nyata. Situs ini tidak menentukan tindakan atau memberikan diagnosis. Konsultasikan kebutuhan kesehatan Anda kepada dokter."
    ],
    "indications": [
      "Penentuan kebutuhan dilakukan melalui konsultasi dokter."
    ],
    "preparation": [
      "Konfirmasikan dokumen, waktu kedatangan, dan instruksi khusus kepada petugas."
    ],
    "clinics": [
      "paru"
    ],
    "doctors": [
      "d012"
    ],
    "image": "assets/img/ai/hero-3.webp",
    "alt": "Ilustrasi konsep ruang layanan untuk Bronkoskopi",
    "ai": true,
    "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
    "updatedAt": "2026-10-24",
    "status": "published"
  }
];

````

### js/data/clinics.js

````javascript
/* Data fiktif untuk preview; bukan layanan nyata. */
window.ALFA_DATA.clinics = [
  {
    "slug": "anak",
    "name": "Anak",
    "icon": "bi-heart-pulse",
    "summary": "Informasi jadwal dan direktori Anak untuk simulasi kunjungan.",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "kebidanan-kandungan",
    "name": "Kebidanan & Kandungan",
    "icon": "bi-heart-pulse",
    "summary": "Informasi jadwal dan direktori Kebidanan & Kandungan untuk simulasi kunjungan.",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "penyakit-dalam",
    "name": "Penyakit Dalam",
    "icon": "bi-heart-pulse",
    "summary": "Informasi jadwal dan direktori Penyakit Dalam untuk simulasi kunjungan.",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "bedah-umum",
    "name": "Bedah Umum",
    "icon": "bi-heart-pulse",
    "summary": "Informasi jadwal dan direktori Bedah Umum untuk simulasi kunjungan.",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "bedah-ortopedi",
    "name": "Bedah Ortopedi",
    "icon": "bi-heart-pulse",
    "summary": "Informasi jadwal dan direktori Bedah Ortopedi untuk simulasi kunjungan.",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "bedah-saraf",
    "name": "Bedah Saraf",
    "icon": "bi-heart-pulse",
    "summary": "Informasi jadwal dan direktori Bedah Saraf untuk simulasi kunjungan.",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "bedah-urologi",
    "name": "Bedah Urologi",
    "icon": "bi-heart-pulse",
    "summary": "Informasi jadwal dan direktori Bedah Urologi untuk simulasi kunjungan.",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "bedah-digestif",
    "name": "Bedah Digestif",
    "icon": "bi-heart-pulse",
    "summary": "Informasi jadwal dan direktori Bedah Digestif untuk simulasi kunjungan.",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "bedah-plastik",
    "name": "Bedah Plastik",
    "icon": "bi-heart-pulse",
    "summary": "Informasi jadwal dan direktori Bedah Plastik untuk simulasi kunjungan.",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "saraf",
    "name": "Saraf",
    "icon": "bi-heart-pulse",
    "summary": "Informasi jadwal dan direktori Saraf untuk simulasi kunjungan.",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "jantung-pembuluh-darah",
    "name": "Jantung & Pembuluh Darah",
    "icon": "bi-heart-pulse",
    "summary": "Informasi jadwal dan direktori Jantung & Pembuluh Darah untuk simulasi kunjungan.",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "paru",
    "name": "Paru",
    "icon": "bi-heart-pulse",
    "summary": "Informasi jadwal dan direktori Paru untuk simulasi kunjungan.",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "tht-kl",
    "name": "THT-KL",
    "icon": "bi-heart-pulse",
    "summary": "Informasi jadwal dan direktori THT-KL untuk simulasi kunjungan.",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "mata",
    "name": "Mata",
    "icon": "bi-heart-pulse",
    "summary": "Informasi jadwal dan direktori Mata untuk simulasi kunjungan.",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "kulit-kelamin",
    "name": "Kulit & Kelamin",
    "icon": "bi-heart-pulse",
    "summary": "Informasi jadwal dan direktori Kulit & Kelamin untuk simulasi kunjungan.",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "gigi-umum",
    "name": "Gigi Umum",
    "icon": "bi-heart-pulse",
    "summary": "Informasi jadwal dan direktori Gigi Umum untuk simulasi kunjungan.",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "gigi-spesialis",
    "name": "Gigi Spesialis",
    "icon": "bi-heart-pulse",
    "summary": "Informasi jadwal dan direktori Gigi Spesialis untuk simulasi kunjungan.",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "psikiatri",
    "name": "Psikiatri",
    "icon": "bi-heart-pulse",
    "summary": "Informasi jadwal dan direktori Psikiatri untuk simulasi kunjungan.",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "psikologi",
    "name": "Psikologi",
    "icon": "bi-heart-pulse",
    "summary": "Informasi jadwal dan direktori Psikologi untuk simulasi kunjungan.",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "gizi-klinik",
    "name": "Gizi Klinik",
    "icon": "bi-heart-pulse",
    "summary": "Informasi jadwal dan direktori Gizi Klinik untuk simulasi kunjungan.",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "rehabilitasi-medik",
    "name": "Rehabilitasi Medik",
    "icon": "bi-heart-pulse",
    "summary": "Informasi jadwal dan direktori Rehabilitasi Medik untuk simulasi kunjungan.",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "andrologi",
    "name": "Andrologi",
    "icon": "bi-heart-pulse",
    "summary": "Informasi jadwal dan direktori Andrologi untuk simulasi kunjungan.",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "klinik-nyeri",
    "name": "Klinik Nyeri",
    "icon": "bi-heart-pulse",
    "summary": "Informasi jadwal dan direktori Klinik Nyeri untuk simulasi kunjungan.",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "klinik-estetika",
    "name": "Klinik Estetika",
    "icon": "bi-heart-pulse",
    "summary": "Informasi jadwal dan direktori Klinik Estetika untuk simulasi kunjungan.",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "dokter-umum",
    "name": "Dokter Umum",
    "icon": "bi-heart-pulse",
    "summary": "Informasi jadwal dan direktori Dokter Umum untuk simulasi kunjungan.",
    "updatedAt": "2026-10-24",
    "status": "published"
  }
];

````

### js/data/doctors.js

````javascript
/* Data fiktif untuk preview; bukan layanan nyata. */
window.ALFA_DATA.doctors = [
  {
    "id": "d001",
    "slug": "arunika-sasmaya",
    "name": "dr. Arunika Sasmaya",
    "category": "spesialis",
    "specialty": "Anak",
    "clinics": [
      "anak"
    ],
    "facilities": [
      "nicu-hcu-picu-icu"
    ],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [],
      "selasa": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "rabu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "kamis": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "jumat": [],
      "sabtu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "minggu": [
        [
          "09.00",
          "12.00"
        ]
      ]
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "id": "d002",
    "slug": "nirmala-widyasena",
    "name": "dr. Nirmala Widyasena",
    "category": "spesialis",
    "specialty": "Kebidanan & Kandungan",
    "clinics": [
      "kebidanan-kandungan"
    ],
    "facilities": [
      "kolposkopi",
      "mamografi"
    ],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "selasa": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "rabu": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "kamis": [],
      "jumat": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "sabtu": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "minggu": []
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "id": "d003",
    "slug": "bimantara-rasmadi",
    "name": "dr. Bimantara Rasmadi",
    "category": "spesialis",
    "specialty": "Penyakit Dalam",
    "clinics": [
      "penyakit-dalam"
    ],
    "facilities": [
      "endoskopi",
      "dialisis"
    ],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "selasa": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "rabu": [],
      "kamis": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "jumat": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "sabtu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "minggu": []
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "id": "d004",
    "slug": "dirgantara-pramudya",
    "name": "dr. Dirgantara Pramudya",
    "category": "spesialis",
    "specialty": "Bedah Umum",
    "clinics": [
      "bedah-umum"
    ],
    "facilities": [
      "laparaskopi"
    ],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "selasa": [],
      "rabu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "kamis": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "jumat": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "sabtu": [],
      "minggu": [
        [
          "09.00",
          "12.00"
        ]
      ]
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "id": "d005",
    "slug": "sagara-wiranata",
    "name": "dr. Sagara Wiranata",
    "category": "spesialis",
    "specialty": "Bedah Ortopedi",
    "clinics": [
      "bedah-ortopedi"
    ],
    "facilities": [],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [],
      "selasa": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "rabu": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "kamis": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "jumat": [],
      "sabtu": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "minggu": []
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "id": "d006",
    "slug": "mahendra-tarunajaya",
    "name": "dr. Mahendra Tarunajaya",
    "category": "spesialis",
    "specialty": "Bedah Saraf",
    "clinics": [
      "bedah-saraf"
    ],
    "facilities": [
      "multi-slice-ct-scan-128"
    ],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "selasa": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "rabu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "kamis": [],
      "jumat": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "sabtu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "minggu": []
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "id": "d007",
    "slug": "raka-suryamerta",
    "name": "dr. Raka Suryamerta",
    "category": "spesialis",
    "specialty": "Bedah Urologi",
    "clinics": [
      "bedah-urologi"
    ],
    "facilities": [],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "selasa": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "rabu": [],
      "kamis": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "jumat": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "sabtu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "minggu": [
        [
          "09.00",
          "12.00"
        ]
      ]
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "id": "d008",
    "slug": "daniswara-kertajaya",
    "name": "dr. Daniswara Kertajaya",
    "category": "spesialis",
    "specialty": "Bedah Digestif",
    "clinics": [
      "bedah-digestif"
    ],
    "facilities": [],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "selasa": [],
      "rabu": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "kamis": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "jumat": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "sabtu": [],
      "minggu": []
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "id": "d009",
    "slug": "larasati-adinirmala",
    "name": "dr. Larasati Adinirmala",
    "category": "spesialis",
    "specialty": "Bedah Plastik",
    "clinics": [
      "bedah-plastik"
    ],
    "facilities": [],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [],
      "selasa": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "rabu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "kamis": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "jumat": [],
      "sabtu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "minggu": []
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "id": "d010",
    "slug": "pranaya-satwika",
    "name": "dr. Pranaya Satwika",
    "category": "spesialis",
    "specialty": "Saraf",
    "clinics": [
      "saraf"
    ],
    "facilities": [],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "selasa": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "rabu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "kamis": [],
      "jumat": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "sabtu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "minggu": [
        [
          "09.00",
          "12.00"
        ]
      ]
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "id": "d011",
    "slug": "aditya-wirakencana",
    "name": "dr. Aditya Wirakencana",
    "category": "spesialis",
    "specialty": "Jantung & Pembuluh Darah",
    "clinics": [
      "jantung-pembuluh-darah"
    ],
    "facilities": [],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "selasa": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "rabu": [],
      "kamis": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "jumat": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "sabtu": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "minggu": []
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "id": "d012",
    "slug": "sekar-nayaputri",
    "name": "dr. Sekar Nayaputri",
    "category": "spesialis",
    "specialty": "Paru",
    "clinics": [
      "paru"
    ],
    "facilities": [
      "bronkoskopi"
    ],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "selasa": [],
      "rabu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "kamis": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "jumat": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "sabtu": [],
      "minggu": []
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "id": "d013",
    "slug": "wiratama-jayanadi",
    "name": "dr. Wiratama Jayanadi",
    "category": "spesialis",
    "specialty": "THT-KL",
    "clinics": [
      "tht-kl"
    ],
    "facilities": [],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [],
      "selasa": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "rabu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "kamis": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "jumat": [],
      "sabtu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "minggu": [
        [
          "09.00",
          "12.00"
        ]
      ]
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "id": "d014",
    "slug": "kanaya-ratnasari",
    "name": "dr. Kanaya Ratnasari",
    "category": "spesialis",
    "specialty": "Mata",
    "clinics": [
      "mata"
    ],
    "facilities": [
      "oct",
      "eye-care",
      "myah"
    ],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "selasa": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "rabu": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "kamis": [],
      "jumat": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "sabtu": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "minggu": []
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "id": "d015",
    "slug": "amerta-saraswati",
    "name": "dr. Amerta Saraswati",
    "category": "spesialis",
    "specialty": "Kulit & Kelamin",
    "clinics": [
      "kulit-kelamin"
    ],
    "facilities": [],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "selasa": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "rabu": [],
      "kamis": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "jumat": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "sabtu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "minggu": []
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "id": "d016",
    "slug": "nawasena-pradipta",
    "name": "dr. Nawasena Pradipta",
    "category": "spesialis",
    "specialty": "Psikiatri",
    "clinics": [
      "psikiatri"
    ],
    "facilities": [],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "selasa": [],
      "rabu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "kamis": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "jumat": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "sabtu": [],
      "minggu": [
        [
          "09.00",
          "12.00"
        ]
      ]
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "id": "d017",
    "slug": "kirana-maheswari",
    "name": "dr. Kirana Maheswari",
    "category": "spesialis",
    "specialty": "Gizi Klinik",
    "clinics": [
      "gizi-klinik"
    ],
    "facilities": [],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [],
      "selasa": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "rabu": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "kamis": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "jumat": [],
      "sabtu": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "minggu": []
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "id": "d018",
    "slug": "renjana-adiputri",
    "name": "dr. Renjana Adiputri",
    "category": "spesialis",
    "specialty": "Rehabilitasi Medik",
    "clinics": [
      "rehabilitasi-medik"
    ],
    "facilities": [],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "selasa": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "rabu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "kamis": [],
      "jumat": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "sabtu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "minggu": []
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "id": "d019",
    "slug": "gilang-satyananda",
    "name": "dr. Gilang Satyananda",
    "category": "spesialis",
    "specialty": "Andrologi",
    "clinics": [
      "andrologi"
    ],
    "facilities": [
      "klinik-andrologi"
    ],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "selasa": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "rabu": [],
      "kamis": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "jumat": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "sabtu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "minggu": [
        [
          "09.00",
          "12.00"
        ]
      ]
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "id": "d020",
    "slug": "tirtana-mahardika",
    "name": "dr. Tirtana Mahardika",
    "category": "spesialis",
    "specialty": "Klinik Nyeri",
    "clinics": [
      "klinik-nyeri"
    ],
    "facilities": [
      "klinik-nyeri"
    ],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "selasa": [],
      "rabu": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "kamis": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "jumat": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "sabtu": [],
      "minggu": []
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "id": "d021",
    "slug": "gayatri-laksanadi",
    "name": "dr. Gayatri Laksanadi",
    "category": "spesialis",
    "specialty": "Klinik Estetika",
    "clinics": [
      "klinik-estetika"
    ],
    "facilities": [
      "klinik-estetika"
    ],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [],
      "selasa": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "rabu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "kamis": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "jumat": [],
      "sabtu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "minggu": []
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "id": "d022",
    "slug": "satyaka-ranadipa",
    "name": "dr. Satyaka Ranadipa",
    "category": "spesialis",
    "specialty": "Penyakit Dalam",
    "clinics": [
      "penyakit-dalam"
    ],
    "facilities": [
      "endoskopi",
      "dialisis"
    ],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "selasa": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "rabu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "kamis": [],
      "jumat": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "sabtu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "minggu": [
        [
          "09.00",
          "12.00"
        ]
      ]
    },
    "photo": null,
    "updatedAt": "2026-09-01",
    "status": "published"
  },
  {
    "id": "d023",
    "slug": "aluna-prawesti",
    "name": "dr. Aluna Prawesti",
    "category": "umum",
    "specialty": "Dokter Umum",
    "clinics": [
      "dokter-umum"
    ],
    "facilities": [],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "selasa": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "rabu": [],
      "kamis": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "jumat": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "sabtu": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "minggu": []
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "id": "d024",
    "slug": "banyu-prabaswara",
    "name": "dr. Banyu Prabaswara",
    "category": "umum",
    "specialty": "Dokter Umum",
    "clinics": [
      "dokter-umum"
    ],
    "facilities": [],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "selasa": [],
      "rabu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "kamis": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "jumat": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "sabtu": [],
      "minggu": []
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "id": "d025",
    "slug": "cempaka-sadewi",
    "name": "dr. Cempaka Sadewi",
    "category": "umum",
    "specialty": "Dokter Umum",
    "clinics": [
      "dokter-umum"
    ],
    "facilities": [],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [],
      "selasa": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "rabu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "kamis": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "jumat": [],
      "sabtu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "minggu": [
        [
          "09.00",
          "12.00"
        ]
      ]
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "id": "d026",
    "slug": "dahana-pramesti",
    "name": "dr. Dahana Pramesti",
    "category": "umum",
    "specialty": "Dokter Umum",
    "clinics": [
      "dokter-umum"
    ],
    "facilities": [],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "selasa": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "rabu": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "kamis": [],
      "jumat": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "sabtu": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "minggu": []
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "id": "d027",
    "slug": "elvara-janitra",
    "name": "dr. Elvara Janitra",
    "category": "umum",
    "specialty": "Dokter Umum",
    "clinics": [
      "dokter-umum"
    ],
    "facilities": [],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "selasa": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "rabu": [],
      "kamis": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "jumat": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "sabtu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "minggu": []
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "id": "d028",
    "slug": "fiora-senandika",
    "name": "drg. Fiora Senandika",
    "category": "gigi-umum",
    "specialty": "Gigi Umum",
    "clinics": [
      "gigi-umum"
    ],
    "facilities": [],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "selasa": [],
      "rabu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "kamis": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "jumat": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "sabtu": [],
      "minggu": [
        [
          "09.00",
          "12.00"
        ]
      ]
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "id": "d029",
    "slug": "galih-wiradana",
    "name": "drg. Galih Wiradana",
    "category": "gigi-umum",
    "specialty": "Gigi Umum",
    "clinics": [
      "gigi-umum"
    ],
    "facilities": [],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [],
      "selasa": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "rabu": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "kamis": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "jumat": [],
      "sabtu": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "minggu": []
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "id": "d030",
    "slug": "hanara-putranti",
    "name": "drg. Hanara Putranti",
    "category": "gigi-umum",
    "specialty": "Gigi Umum",
    "clinics": [
      "gigi-umum"
    ],
    "facilities": [],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "selasa": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "rabu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "kamis": [],
      "jumat": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "sabtu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "minggu": []
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "id": "d031",
    "slug": "indraya-pramudita",
    "name": "drg. Indraya Pramudita",
    "category": "gigi-spesialis",
    "specialty": "Gigi Spesialis",
    "clinics": [
      "gigi-spesialis"
    ],
    "facilities": [
      "cbct"
    ],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "selasa": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "rabu": [],
      "kamis": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "jumat": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "sabtu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "minggu": [
        [
          "09.00",
          "12.00"
        ]
      ]
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "id": "d032",
    "slug": "jivana-naraswari",
    "name": "drg. Jivana Naraswari",
    "category": "gigi-spesialis",
    "specialty": "Gigi Spesialis",
    "clinics": [
      "gigi-spesialis"
    ],
    "facilities": [
      "cbct"
    ],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "selasa": [],
      "rabu": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "kamis": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "jumat": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "sabtu": [],
      "minggu": []
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "id": "d033",
    "slug": "kalandra-wijasmara",
    "name": "drg. Kalandra Wijasmara",
    "category": "gigi-spesialis",
    "specialty": "Gigi Spesialis",
    "clinics": [
      "gigi-spesialis"
    ],
    "facilities": [
      "cbct"
    ],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [],
      "selasa": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "rabu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "kamis": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "jumat": [],
      "sabtu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "minggu": []
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "id": "d034",
    "slug": "laksita-ranawati",
    "name": "Psikolog Laksita Ranawati",
    "category": "psikolog",
    "specialty": "Psikologi",
    "clinics": [
      "psikologi"
    ],
    "facilities": [],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "selasa": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "rabu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "kamis": [],
      "jumat": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "sabtu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "minggu": [
        [
          "09.00",
          "12.00"
        ]
      ]
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "id": "d035",
    "slug": "marendra-sukmanadi",
    "name": "Psikolog Marendra Sukmanadi",
    "category": "psikolog",
    "specialty": "Psikologi",
    "clinics": [
      "psikologi"
    ],
    "facilities": [],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "selasa": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "rabu": [],
      "kamis": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "jumat": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "sabtu": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "minggu": []
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "id": "d036",
    "slug": "nayara-puspaning",
    "name": "Psikolog Nayara Puspaning",
    "category": "psikolog",
    "specialty": "Psikologi",
    "clinics": [
      "psikologi"
    ],
    "facilities": [],
    "about": "Profil tenaga profesional fiktif untuk meninjau direktori dan jadwal. Riwayat di bawah adalah data simulasi, bukan kredensial nyata.",
    "education": [
      {
        "year": 2012,
        "text": "Pendidikan profesi — Universitas Simulasi Nusantara (fiktif)"
      }
    ],
    "training": [
      {
        "year": 2024,
        "text": "Lokakarya komunikasi layanan — Akademi Demo (fiktif)"
      }
    ],
    "schedule": {
      "senin": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "selasa": [],
      "rabu": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "kamis": [
        [
          "10.00",
          "13.00"
        ]
      ],
      "jumat": [
        [
          "08.00",
          "11.00"
        ],
        [
          "16.00",
          "18.00"
        ]
      ],
      "sabtu": [],
      "minggu": []
    },
    "photo": null,
    "updatedAt": "2026-10-24",
    "status": "published"
  }
];

````

### js/data/services.js

````javascript
/* Data fiktif untuk preview; bukan layanan nyata. */
window.ALFA_DATA.services = [
  {
    "slug": "rawat-jalan",
    "name": "Rawat Jalan",
    "group": "Reguler",
    "summary": "Informasi Rawat Jalan dan alur kunjungan dalam preview Alfasyimar.",
    "description": [
      "Halaman Rawat Jalan memperlihatkan contoh penyajian informasi yang mudah dibaca. Setiap pengunjung dapat memeriksa alur, jam layanan, dan kanal kontak sebelum melanjutkan ke simulasi pendaftaran. Seluruh jadwal dan nomor di sini adalah fiktif.",
      "Petugas pada layanan nyata perlu mengonfirmasi kebutuhan, ketersediaan, dan ketentuan kunjungan. Informasi ini bukan petunjuk tindakan medis. Konsultasikan kebutuhan kesehatan kepada dokter."
    ],
    "features": [
      "Informasi alur yang jelas",
      "Konfirmasi jadwal sebelum kunjungan",
      "Kanal administrasi terpisah dari darurat"
    ],
    "gallery": [
      {
        "image": "assets/img/ai/hero-2.webp",
        "alt": "Ilustrasi konsep Rawat Jalan",
        "ai": true,
        "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
      },
      {
        "image": "assets/img/ai/hero-2.webp",
        "alt": "Ilustrasi area tunggu umum yang digunakan ulang",
        "ai": true,
        "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
      }
    ],
    "image": "assets/img/ai/hero-2.webp",
    "alt": "Ilustrasi konsep Rawat Jalan",
    "ai": true,
    "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "rawat-inap",
    "name": "Rawat Inap",
    "group": "Reguler",
    "summary": "Informasi Rawat Inap dan alur kunjungan dalam preview Alfasyimar.",
    "description": [
      "Halaman Rawat Inap memperlihatkan contoh penyajian informasi yang mudah dibaca. Setiap pengunjung dapat memeriksa alur, jam layanan, dan kanal kontak sebelum melanjutkan ke simulasi pendaftaran. Seluruh jadwal dan nomor di sini adalah fiktif.",
      "Petugas pada layanan nyata perlu mengonfirmasi kebutuhan, ketersediaan, dan ketentuan kunjungan. Informasi ini bukan petunjuk tindakan medis. Konsultasikan kebutuhan kesehatan kepada dokter."
    ],
    "features": [
      "Informasi alur yang jelas",
      "Konfirmasi jadwal sebelum kunjungan",
      "Kanal administrasi terpisah dari darurat"
    ],
    "gallery": [
      {
        "image": "assets/img/ai/kamar-vvip.webp",
        "alt": "Ilustrasi konsep Rawat Inap",
        "ai": true,
        "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
      },
      {
        "image": "assets/img/ai/hero-2.webp",
        "alt": "Ilustrasi area tunggu umum yang digunakan ulang",
        "ai": true,
        "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
      }
    ],
    "image": "assets/img/ai/kamar-vvip.webp",
    "alt": "Ilustrasi konsep Rawat Inap",
    "ai": true,
    "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "kamar-operasi",
    "name": "Kamar Operasi",
    "group": "Reguler",
    "summary": "Informasi Kamar Operasi dan alur kunjungan dalam preview Alfasyimar.",
    "description": [
      "Halaman Kamar Operasi memperlihatkan contoh penyajian informasi yang mudah dibaca. Setiap pengunjung dapat memeriksa alur, jam layanan, dan kanal kontak sebelum melanjutkan ke simulasi pendaftaran. Seluruh jadwal dan nomor di sini adalah fiktif.",
      "Petugas pada layanan nyata perlu mengonfirmasi kebutuhan, ketersediaan, dan ketentuan kunjungan. Informasi ini bukan petunjuk tindakan medis. Konsultasikan kebutuhan kesehatan kepada dokter."
    ],
    "features": [
      "Informasi alur yang jelas",
      "Konfirmasi jadwal sebelum kunjungan",
      "Kanal administrasi terpisah dari darurat"
    ],
    "gallery": [
      {
        "image": "assets/img/ai/kamar-operasi.webp",
        "alt": "Ilustrasi konsep Kamar Operasi",
        "ai": true,
        "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
      },
      {
        "image": "assets/img/ai/hero-2.webp",
        "alt": "Ilustrasi area tunggu umum yang digunakan ulang",
        "ai": true,
        "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
      }
    ],
    "image": "assets/img/ai/kamar-operasi.webp",
    "alt": "Ilustrasi konsep Kamar Operasi",
    "ai": true,
    "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "mcu",
    "name": "Medical Check Up",
    "group": "Reguler",
    "summary": "Informasi Medical Check Up dan alur kunjungan dalam preview Alfasyimar.",
    "description": [
      "Halaman Medical Check Up memperlihatkan contoh penyajian informasi yang mudah dibaca. Setiap pengunjung dapat memeriksa alur, jam layanan, dan kanal kontak sebelum melanjutkan ke simulasi pendaftaran. Seluruh jadwal dan nomor di sini adalah fiktif.",
      "Petugas pada layanan nyata perlu mengonfirmasi kebutuhan, ketersediaan, dan ketentuan kunjungan. Informasi ini bukan petunjuk tindakan medis. Konsultasikan kebutuhan kesehatan kepada dokter."
    ],
    "features": [
      "Informasi alur yang jelas",
      "Konfirmasi jadwal sebelum kunjungan",
      "Kanal administrasi terpisah dari darurat"
    ],
    "gallery": [
      {
        "image": "assets/img/ai/mcu-hero.webp",
        "alt": "Ilustrasi konsep Medical Check Up",
        "ai": true,
        "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
      },
      {
        "image": "assets/img/ai/hero-2.webp",
        "alt": "Ilustrasi area tunggu umum yang digunakan ulang",
        "ai": true,
        "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
      }
    ],
    "image": "assets/img/ai/mcu-hero.webp",
    "alt": "Ilustrasi konsep Medical Check Up",
    "ai": true,
    "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "rehab-medik",
    "name": "Rehab Medik",
    "group": "Reguler",
    "summary": "Informasi Rehab Medik dan alur kunjungan dalam preview Alfasyimar.",
    "description": [
      "Halaman Rehab Medik memperlihatkan contoh penyajian informasi yang mudah dibaca. Setiap pengunjung dapat memeriksa alur, jam layanan, dan kanal kontak sebelum melanjutkan ke simulasi pendaftaran. Seluruh jadwal dan nomor di sini adalah fiktif.",
      "Petugas pada layanan nyata perlu mengonfirmasi kebutuhan, ketersediaan, dan ketentuan kunjungan. Informasi ini bukan petunjuk tindakan medis. Konsultasikan kebutuhan kesehatan kepada dokter."
    ],
    "features": [
      "Informasi alur yang jelas",
      "Konfirmasi jadwal sebelum kunjungan",
      "Kanal administrasi terpisah dari darurat"
    ],
    "gallery": [
      {
        "image": "assets/img/ai/rehab.webp",
        "alt": "Ilustrasi konsep Rehab Medik",
        "ai": true,
        "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
      },
      {
        "image": "assets/img/ai/hero-2.webp",
        "alt": "Ilustrasi area tunggu umum yang digunakan ulang",
        "ai": true,
        "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
      }
    ],
    "image": "assets/img/ai/rehab.webp",
    "alt": "Ilustrasi konsep Rehab Medik",
    "ai": true,
    "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "ugd",
    "name": "UGD",
    "group": "24 Jam",
    "summary": "Informasi UGD dan alur kunjungan dalam preview Alfasyimar.",
    "description": [
      "Halaman UGD memperlihatkan contoh penyajian informasi yang mudah dibaca. Setiap pengunjung dapat memeriksa alur, jam layanan, dan kanal kontak sebelum melanjutkan ke simulasi pendaftaran. Seluruh jadwal dan nomor di sini adalah fiktif.",
      "Petugas pada layanan nyata perlu mengonfirmasi kebutuhan, ketersediaan, dan ketentuan kunjungan. Informasi ini bukan petunjuk tindakan medis. Konsultasikan kebutuhan kesehatan kepada dokter."
    ],
    "features": [
      "Informasi alur yang jelas",
      "Konfirmasi jadwal sebelum kunjungan",
      "Kanal administrasi terpisah dari darurat"
    ],
    "gallery": [
      {
        "image": "assets/img/ai/ugd.webp",
        "alt": "Ilustrasi konsep UGD",
        "ai": true,
        "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
      },
      {
        "image": "assets/img/ai/hero-2.webp",
        "alt": "Ilustrasi area tunggu umum yang digunakan ulang",
        "ai": true,
        "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
      }
    ],
    "image": "assets/img/ai/ugd.webp",
    "alt": "Ilustrasi konsep UGD",
    "ai": true,
    "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "laboratorium",
    "name": "Laboratorium",
    "group": "24 Jam",
    "summary": "Informasi Laboratorium dan alur kunjungan dalam preview Alfasyimar.",
    "description": [
      "Halaman Laboratorium memperlihatkan contoh penyajian informasi yang mudah dibaca. Setiap pengunjung dapat memeriksa alur, jam layanan, dan kanal kontak sebelum melanjutkan ke simulasi pendaftaran. Seluruh jadwal dan nomor di sini adalah fiktif.",
      "Petugas pada layanan nyata perlu mengonfirmasi kebutuhan, ketersediaan, dan ketentuan kunjungan. Informasi ini bukan petunjuk tindakan medis. Konsultasikan kebutuhan kesehatan kepada dokter."
    ],
    "features": [
      "Informasi alur yang jelas",
      "Konfirmasi jadwal sebelum kunjungan",
      "Kanal administrasi terpisah dari darurat"
    ],
    "gallery": [
      {
        "image": "assets/img/ai/lab.webp",
        "alt": "Ilustrasi konsep Laboratorium",
        "ai": true,
        "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
      },
      {
        "image": "assets/img/ai/hero-2.webp",
        "alt": "Ilustrasi area tunggu umum yang digunakan ulang",
        "ai": true,
        "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
      }
    ],
    "image": "assets/img/ai/lab.webp",
    "alt": "Ilustrasi konsep Laboratorium",
    "ai": true,
    "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "radiologi",
    "name": "Radiologi",
    "group": "24 Jam",
    "summary": "Informasi Radiologi dan alur kunjungan dalam preview Alfasyimar.",
    "description": [
      "Halaman Radiologi memperlihatkan contoh penyajian informasi yang mudah dibaca. Setiap pengunjung dapat memeriksa alur, jam layanan, dan kanal kontak sebelum melanjutkan ke simulasi pendaftaran. Seluruh jadwal dan nomor di sini adalah fiktif.",
      "Petugas pada layanan nyata perlu mengonfirmasi kebutuhan, ketersediaan, dan ketentuan kunjungan. Informasi ini bukan petunjuk tindakan medis. Konsultasikan kebutuhan kesehatan kepada dokter."
    ],
    "features": [
      "Informasi alur yang jelas",
      "Konfirmasi jadwal sebelum kunjungan",
      "Kanal administrasi terpisah dari darurat"
    ],
    "gallery": [
      {
        "image": "assets/img/ai/radiologi.webp",
        "alt": "Ilustrasi konsep Radiologi",
        "ai": true,
        "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
      },
      {
        "image": "assets/img/ai/hero-2.webp",
        "alt": "Ilustrasi area tunggu umum yang digunakan ulang",
        "ai": true,
        "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
      }
    ],
    "image": "assets/img/ai/radiologi.webp",
    "alt": "Ilustrasi konsep Radiologi",
    "ai": true,
    "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "farmasi",
    "name": "Farmasi",
    "group": "24 Jam",
    "summary": "Informasi Farmasi dan alur kunjungan dalam preview Alfasyimar.",
    "description": [
      "Halaman Farmasi memperlihatkan contoh penyajian informasi yang mudah dibaca. Setiap pengunjung dapat memeriksa alur, jam layanan, dan kanal kontak sebelum melanjutkan ke simulasi pendaftaran. Seluruh jadwal dan nomor di sini adalah fiktif.",
      "Petugas pada layanan nyata perlu mengonfirmasi kebutuhan, ketersediaan, dan ketentuan kunjungan. Informasi ini bukan petunjuk tindakan medis. Konsultasikan kebutuhan kesehatan kepada dokter."
    ],
    "features": [
      "Informasi alur yang jelas",
      "Konfirmasi jadwal sebelum kunjungan",
      "Kanal administrasi terpisah dari darurat"
    ],
    "gallery": [
      {
        "image": "assets/img/ai/farmasi.webp",
        "alt": "Ilustrasi konsep Farmasi",
        "ai": true,
        "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
      },
      {
        "image": "assets/img/ai/hero-2.webp",
        "alt": "Ilustrasi area tunggu umum yang digunakan ulang",
        "ai": true,
        "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
      }
    ],
    "image": "assets/img/ai/farmasi.webp",
    "alt": "Ilustrasi konsep Farmasi",
    "ai": true,
    "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
    "updatedAt": "2026-10-24",
    "status": "published"
  },
  {
    "slug": "ambulans",
    "name": "Ambulans",
    "group": "24 Jam",
    "summary": "Informasi Ambulans dan alur kunjungan dalam preview Alfasyimar.",
    "description": [
      "Halaman Ambulans memperlihatkan contoh penyajian informasi yang mudah dibaca. Setiap pengunjung dapat memeriksa alur, jam layanan, dan kanal kontak sebelum melanjutkan ke simulasi pendaftaran. Seluruh jadwal dan nomor di sini adalah fiktif.",
      "Petugas pada layanan nyata perlu mengonfirmasi kebutuhan, ketersediaan, dan ketentuan kunjungan. Informasi ini bukan petunjuk tindakan medis. Konsultasikan kebutuhan kesehatan kepada dokter."
    ],
    "features": [
      "Informasi alur yang jelas",
      "Konfirmasi jadwal sebelum kunjungan",
      "Kanal administrasi terpisah dari darurat"
    ],
    "gallery": [
      {
        "image": "assets/img/ai/ambulans.webp",
        "alt": "Ilustrasi konsep Ambulans",
        "ai": true,
        "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
      },
      {
        "image": "assets/img/ai/hero-2.webp",
        "alt": "Ilustrasi area tunggu umum yang digunakan ulang",
        "ai": true,
        "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
      }
    ],
    "image": "assets/img/ai/ambulans.webp",
    "alt": "Ilustrasi konsep Ambulans",
    "ai": true,
    "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
    "updatedAt": "2026-10-24",
    "status": "published"
  }
];

````

### js/data/pricing.js

````javascript
/* Data fiktif untuk preview; bukan layanan nyata. */
window.ALFA_DATA.pricing = {
  "effectiveDate": "2026-10-01",
  "note": "Harga contoh untuk demo",
  "classes": [
    {
      "key": "vvip",
      "name": "VVIP",
      "fromPrice": 2150000,
      "facilities": [
        "Ilustrasi kamar dengan 1 tempat tidur",
        "Area pendamping",
        "Tirai atau ruang privasi"
      ],
      "rates": [
        {
          "label": "Kamar per hari (demo)",
          "price": 2150000
        }
      ],
      "image": "assets/img/ai/kamar-vvip.webp",
      "alt": "Ilustrasi kamar VVIP — bukan fasilitas nyata",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "key": "vip",
      "name": "VIP",
      "fromPrice": 1450000,
      "facilities": [
        "Ilustrasi kamar dengan 1 tempat tidur",
        "Area pendamping",
        "Tirai atau ruang privasi"
      ],
      "rates": [
        {
          "label": "Kamar per hari (demo)",
          "price": 1450000
        }
      ],
      "image": "assets/img/ai/kamar-vip.webp",
      "alt": "Ilustrasi kamar VIP — bukan fasilitas nyata",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "key": "kelas-1",
      "name": "Kelas I",
      "fromPrice": 880000,
      "facilities": [
        "Ilustrasi kamar dengan 2 tempat tidur",
        "Area pendamping",
        "Tirai atau ruang privasi"
      ],
      "rates": [
        {
          "label": "Kamar per hari (demo)",
          "price": 880000
        }
      ],
      "image": "assets/img/ai/kamar-kelas-1.webp",
      "alt": "Ilustrasi kamar Kelas I — bukan fasilitas nyata",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "key": "kelas-2",
      "name": "Kelas II",
      "fromPrice": 590000,
      "facilities": [
        "Ilustrasi kamar dengan 3 tempat tidur",
        "Area pendamping",
        "Tirai atau ruang privasi"
      ],
      "rates": [
        {
          "label": "Kamar per hari (demo)",
          "price": 590000
        }
      ],
      "image": "assets/img/ai/kamar-kelas-2.webp",
      "alt": "Ilustrasi kamar Kelas II — bukan fasilitas nyata",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "key": "kelas-3",
      "name": "Kelas III",
      "fromPrice": 360000,
      "facilities": [
        "Ilustrasi kamar dengan 4 tempat tidur",
        "Area pendamping",
        "Tirai atau ruang privasi"
      ],
      "rates": [
        {
          "label": "Kamar per hari (demo)",
          "price": 360000
        }
      ],
      "image": "assets/img/ai/kamar-kelas-3.webp",
      "alt": "Ilustrasi kamar Kelas III — bukan fasilitas nyata",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    }
  ],
  "mcu": [
    {
      "key": "1",
      "name": "Bronze",
      "targetGender": "Umum",
      "price": 425000,
      "items": [
        "Konsultasi awal (contoh)",
        "Pemeriksaan dasar sesuai penilaian dokter",
        "Ringkasan pemeriksaan (contoh)"
      ],
      "notes": "Komponen paket dan kebutuhan pemeriksaan harus dikonfirmasi. Harga fiktif, bukan penawaran.",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "key": "2",
      "name": "Silver",
      "targetGender": "Umum",
      "price": 735000,
      "items": [
        "Konsultasi awal (contoh)",
        "Pemeriksaan dasar sesuai penilaian dokter",
        "Ringkasan pemeriksaan (contoh)"
      ],
      "notes": "Komponen paket dan kebutuhan pemeriksaan harus dikonfirmasi. Harga fiktif, bukan penawaran.",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "key": "3",
      "name": "Gold",
      "targetGender": "Umum",
      "price": 1125000,
      "items": [
        "Konsultasi awal (contoh)",
        "Pemeriksaan dasar sesuai penilaian dokter",
        "Ringkasan pemeriksaan (contoh)"
      ],
      "notes": "Komponen paket dan kebutuhan pemeriksaan harus dikonfirmasi. Harga fiktif, bukan penawaran.",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "key": "4",
      "name": "Platinum",
      "targetGender": "Umum",
      "price": 1680000,
      "items": [
        "Konsultasi awal (contoh)",
        "Pemeriksaan dasar sesuai penilaian dokter",
        "Ringkasan pemeriksaan (contoh)"
      ],
      "notes": "Komponen paket dan kebutuhan pemeriksaan harus dikonfirmasi. Harga fiktif, bukan penawaran.",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "key": "5",
      "name": "Diamond Wanita 1",
      "targetGender": "Wanita",
      "price": 2195000,
      "items": [
        "Konsultasi awal (contoh)",
        "Pemeriksaan dasar sesuai penilaian dokter",
        "Ringkasan pemeriksaan (contoh)"
      ],
      "notes": "Komponen paket dan kebutuhan pemeriksaan harus dikonfirmasi. Harga fiktif, bukan penawaran.",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "key": "6",
      "name": "Diamond Wanita 2",
      "targetGender": "Wanita",
      "price": 2795000,
      "items": [
        "Konsultasi awal (contoh)",
        "Pemeriksaan dasar sesuai penilaian dokter",
        "Ringkasan pemeriksaan (contoh)"
      ],
      "notes": "Komponen paket dan kebutuhan pemeriksaan harus dikonfirmasi. Harga fiktif, bukan penawaran.",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "key": "7",
      "name": "Diamond Pria",
      "targetGender": "Pria",
      "price": 2495000,
      "items": [
        "Konsultasi awal (contoh)",
        "Pemeriksaan dasar sesuai penilaian dokter",
        "Ringkasan pemeriksaan (contoh)"
      ],
      "notes": "Komponen paket dan kebutuhan pemeriksaan harus dikonfirmasi. Harga fiktif, bukan penawaran.",
      "updatedAt": "2026-10-24",
      "status": "published"
    }
  ],
  "updatedAt": "2026-10-24",
  "status": "published"
};

````

### js/data/content.js

````javascript
/* Data dummy untuk preview. */
Object.assign(window.ALFA_DATA, {
  "banners": [
    {
      "title": "Lebih dekat dengan informasi kesehatan Anda",
      "summary": "Cari dokter, kenali layanan, dan rencanakan kunjungan melalui satu pintu informasi.",
      "order": 0,
      "image": "assets/img/ai/hero-1.webp",
      "alt": "Ilustrasi lobi modern Alfasyimar",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "title": "Jadwal yang mudah ditemukan",
      "summary": "Telusuri 25 poliklinik dan jadwal praktik dalam satu direktori.",
      "order": 1,
      "image": "assets/img/ai/hero-2.webp",
      "alt": "Ilustrasi ruang tunggu poliklinik",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "title": "Ruang nyaman untuk keluarga",
      "summary": "Kenali pilihan kelas rawat inap dan informasi layanan kami.",
      "order": 2,
      "image": "assets/img/ai/hero-3.webp",
      "alt": "Ilustrasi ruang konsultasi",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    }
  ],
  "promos": [
    {
      "id": "promo-1",
      "title": "Kenali Paket MCU",
      "start": "2026-10-01",
      "end": "2026-11-30",
      "summary": "Program simulasi tanpa transaksi dan tanpa diskon nyata.",
      "image": "assets/img/ai/mcu-hero.webp",
      "alt": "Ilustrasi program Kenali Paket MCU",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "id": "promo-2",
      "title": "Sunday Clinic Keluarga",
      "start": "2026-10-01",
      "end": "2026-11-30",
      "summary": "Program simulasi tanpa transaksi dan tanpa diskon nyata.",
      "image": "assets/img/ai/hero-2.webp",
      "alt": "Ilustrasi program Sunday Clinic Keluarga",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "id": "promo-3",
      "title": "Pilihan Kamar Nyaman",
      "start": "2026-10-01",
      "end": "2026-11-30",
      "summary": "Program simulasi tanpa transaksi dan tanpa diskon nyata.",
      "image": "assets/img/ai/kamar-vip.webp",
      "alt": "Ilustrasi program Pilihan Kamar Nyaman",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "id": "promo-4",
      "title": "Direktori Dokter",
      "start": "2026-08-01",
      "end": "2026-09-30",
      "summary": "Program simulasi tanpa transaksi dan tanpa diskon nyata.",
      "image": "assets/img/ai/mcu-hero.webp",
      "alt": "Ilustrasi program Direktori Dokter",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "id": "promo-5",
      "title": "Jelajah Fasilitas",
      "start": "2026-08-01",
      "end": "2026-09-30",
      "summary": "Program simulasi tanpa transaksi dan tanpa diskon nyata.",
      "image": "assets/img/ai/hero-2.webp",
      "alt": "Ilustrasi program Jelajah Fasilitas",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "id": "promo-6",
      "title": "Ruang Baca Alfasyimar",
      "start": "2026-08-01",
      "end": "2026-09-30",
      "summary": "Program simulasi tanpa transaksi dan tanpa diskon nyata.",
      "image": "assets/img/ai/kamar-vip.webp",
      "alt": "Ilustrasi program Ruang Baca Alfasyimar",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    }
  ],
  "videos": [
    {
      "id": "video-1",
      "title": "Membaca Jadwal",
      "category": "Panduan",
      "duration": "02:30",
      "youtubeId": "",
      "summary": "Video belum tersedia pada preview; ringkasan dapat dibaca tanpa memuat layanan eksternal.",
      "image": "assets/img/ai/hero-1.webp",
      "alt": "Ilustrasi topik Membaca Jadwal",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "id": "video-2",
      "title": "Menyiapkan Pertanyaan",
      "category": "Informasi",
      "duration": "02:30",
      "youtubeId": "",
      "summary": "Video belum tersedia pada preview; ringkasan dapat dibaca tanpa memuat layanan eksternal.",
      "image": "assets/img/ai/hero-2.webp",
      "alt": "Ilustrasi topik Menyiapkan Pertanyaan",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "id": "video-3",
      "title": "Privasi Kontak",
      "category": "Panduan",
      "duration": "02:30",
      "youtubeId": "",
      "summary": "Video belum tersedia pada preview; ringkasan dapat dibaca tanpa memuat layanan eksternal.",
      "image": "assets/img/ai/hero-3.webp",
      "alt": "Ilustrasi topik Privasi Kontak",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "id": "video-4",
      "title": "Pilihan Kamar",
      "category": "Informasi",
      "duration": "02:30",
      "youtubeId": "",
      "summary": "Video belum tersedia pada preview; ringkasan dapat dibaca tanpa memuat layanan eksternal.",
      "image": "assets/img/ai/hero-1.webp",
      "alt": "Ilustrasi topik Pilihan Kamar",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "id": "video-5",
      "title": "Memahami Paket MCU",
      "category": "Panduan",
      "duration": "02:30",
      "youtubeId": "",
      "summary": "Video belum tersedia pada preview; ringkasan dapat dibaca tanpa memuat layanan eksternal.",
      "image": "assets/img/ai/hero-2.webp",
      "alt": "Ilustrasi topik Memahami Paket MCU",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "id": "video-6",
      "title": "Kanal Informasi",
      "category": "Informasi",
      "duration": "02:30",
      "youtubeId": "",
      "summary": "Video belum tersedia pada preview; ringkasan dapat dibaca tanpa memuat layanan eksternal.",
      "image": "assets/img/ai/hero-3.webp",
      "alt": "Ilustrasi topik Kanal Informasi",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    }
  ],
  "magazines": [
    {
      "id": "majalah-2026-10",
      "title": "Ruang Sehat 2026 Edisi 10",
      "year": 2026,
      "date": "2026-10-01",
      "pdfUrl": "",
      "summary": "Majalah simulasi tentang komunikasi dan pengalaman kunjungan.",
      "image": "assets/img/ai/majalah-2026-10.webp",
      "alt": "Ilustrasi sampul majalah; digunakan ulang antar edisi",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "id": "majalah-2026-4",
      "title": "Ruang Sehat 2026 Edisi 4",
      "year": 2026,
      "date": "2026-04-01",
      "pdfUrl": "",
      "summary": "Majalah simulasi tentang komunikasi dan pengalaman kunjungan.",
      "image": "assets/img/ai/majalah-2026-4.webp",
      "alt": "Ilustrasi sampul majalah; digunakan ulang antar edisi",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "id": "majalah-2025-10",
      "title": "Ruang Sehat 2025 Edisi 10",
      "year": 2025,
      "date": "2025-10-01",
      "pdfUrl": "",
      "summary": "Majalah simulasi tentang komunikasi dan pengalaman kunjungan.",
      "image": "assets/img/ai/majalah-2025-10.webp",
      "alt": "Ilustrasi sampul majalah; digunakan ulang antar edisi",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "id": "majalah-2025-4",
      "title": "Ruang Sehat 2025 Edisi 4",
      "year": 2025,
      "date": "2025-04-01",
      "pdfUrl": "",
      "summary": "Majalah simulasi tentang komunikasi dan pengalaman kunjungan.",
      "image": "assets/img/ai/majalah-2025-4.webp",
      "alt": "Ilustrasi sampul majalah; digunakan ulang antar edisi",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "id": "majalah-2024-10",
      "title": "Ruang Sehat 2024 Edisi 10",
      "year": 2024,
      "date": "2024-10-01",
      "pdfUrl": "",
      "summary": "Majalah simulasi tentang komunikasi dan pengalaman kunjungan.",
      "image": "assets/img/ai/majalah-2024-10.webp",
      "alt": "Ilustrasi sampul majalah; digunakan ulang antar edisi",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "id": "majalah-2024-4",
      "title": "Ruang Sehat 2024 Edisi 4",
      "year": 2024,
      "date": "2024-04-01",
      "pdfUrl": "",
      "summary": "Majalah simulasi tentang komunikasi dan pengalaman kunjungan.",
      "image": "assets/img/ai/majalah-2024-4.webp",
      "alt": "Ilustrasi sampul majalah; digunakan ulang antar edisi",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "id": "majalah-2023-10",
      "title": "Ruang Sehat 2023 Edisi 10",
      "year": 2023,
      "date": "2023-10-01",
      "pdfUrl": "",
      "summary": "Majalah simulasi tentang komunikasi dan pengalaman kunjungan.",
      "image": "assets/img/ai/majalah-2023-10.webp",
      "alt": "Ilustrasi sampul majalah; digunakan ulang antar edisi",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "id": "majalah-2023-4",
      "title": "Ruang Sehat 2023 Edisi 4",
      "year": 2023,
      "date": "2023-04-01",
      "pdfUrl": "",
      "summary": "Majalah simulasi tentang komunikasi dan pengalaman kunjungan.",
      "image": "assets/img/ai/majalah-2023-4.webp",
      "alt": "Ilustrasi sampul majalah; digunakan ulang antar edisi",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    }
  ],
  "news": [
    {
      "slug": "membaca-jadwal-poliklinik",
      "title": "Membaca Jadwal Poliklinik",
      "category": "Panduan",
      "date": "2026-10-23",
      "author": "Tim Editorial Demo Alfasyimar",
      "readingMinutes": 2,
      "summary": "Memahami jadwal yang tercantum membantu pengunjung menggunakan informasi secara lebih terarah. Dalam preview Alfasyimar, seluruh contoh dirancang untuk memperlihatkan alur membaca halaman, memilih informasi yang relevan, dan menemukan kanal konfirmasi. Nama, angka, serta kontak di situs ini tidak mewakili layanan rumah sakit nyata. Pengunjung dapat mencoba navigasi tanpa membuat janji atau melakukan pembayaran.",
      "paragraphs": [
        "Memahami jadwal yang tercantum membantu pengunjung menggunakan informasi secara lebih terarah. Dalam preview Alfasyimar, seluruh contoh dirancang untuk memperlihatkan alur membaca halaman, memilih informasi yang relevan, dan menemukan kanal konfirmasi. Nama, angka, serta kontak di situs ini tidak mewakili layanan rumah sakit nyata. Pengunjung dapat mencoba navigasi tanpa membuat janji atau melakukan pembayaran.",
        "Langkah pertama adalah membaca judul, tanggal pembaruan, dan keterangan demo. Selanjutnya, periksa bagian yang berkaitan dengan jadwal yang tercantum. Bila ada istilah yang belum dipahami, catat pertanyaan singkat untuk disampaikan melalui kanal resmi pada layanan nyata. Hindari menyimpulkan kebutuhan pribadi hanya dari tampilan kartu, ilustrasi ruang, atau ringkasan yang tersedia.",
        "Saat berdiskusi dengan pendamping, sepakati informasi apa yang memang perlu dibagikan. Simpan dokumen pribadi dengan baik dan jangan memasukkan diagnosis, nomor rekam medis, maupun hasil pemeriksaan ke formulir umum. Formulir preview hanya menampilkan konfirmasi lokal; isinya tidak dikirim atau disimpan oleh aplikasi.",
        "Sebelum kunjungan nyata, konfirmasikan kembali jadwal, lokasi, persyaratan, serta ketentuan biaya kepada penyedia layanan yang benar. Informasi administrasi dapat berubah dan tidak menggantikan penilaian individual. Untuk pertanyaan atau kebutuhan kesehatan, konsultasikan dengan dokter."
      ],
      "quote": "Informasi yang jelas membantu percakapan yang lebih terarah.",
      "checklist": [
        "Baca tanggal pembaruan",
        "Periksa keterangan demo",
        "Konfirmasi melalui kanal yang tepat"
      ],
      "image": "assets/img/ai/hero-2.webp",
      "alt": "Ilustrasi topik Membaca Jadwal Poliklinik",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "slug": "menyiapkan-pertanyaan",
      "title": "Menyiapkan Pertanyaan Konsultasi",
      "category": "Komunikasi",
      "date": "2026-10-22",
      "author": "Tim Editorial Demo Alfasyimar",
      "readingMinutes": 2,
      "summary": "Memahami daftar pertanyaan membantu pengunjung menggunakan informasi secara lebih terarah. Dalam preview Alfasyimar, seluruh contoh dirancang untuk memperlihatkan alur membaca halaman, memilih informasi yang relevan, dan menemukan kanal konfirmasi. Nama, angka, serta kontak di situs ini tidak mewakili layanan rumah sakit nyata. Pengunjung dapat mencoba navigasi tanpa membuat janji atau melakukan pembayaran.",
      "paragraphs": [
        "Memahami daftar pertanyaan membantu pengunjung menggunakan informasi secara lebih terarah. Dalam preview Alfasyimar, seluruh contoh dirancang untuk memperlihatkan alur membaca halaman, memilih informasi yang relevan, dan menemukan kanal konfirmasi. Nama, angka, serta kontak di situs ini tidak mewakili layanan rumah sakit nyata. Pengunjung dapat mencoba navigasi tanpa membuat janji atau melakukan pembayaran.",
        "Langkah pertama adalah membaca judul, tanggal pembaruan, dan keterangan demo. Selanjutnya, periksa bagian yang berkaitan dengan daftar pertanyaan. Bila ada istilah yang belum dipahami, catat pertanyaan singkat untuk disampaikan melalui kanal resmi pada layanan nyata. Hindari menyimpulkan kebutuhan pribadi hanya dari tampilan kartu, ilustrasi ruang, atau ringkasan yang tersedia.",
        "Saat berdiskusi dengan pendamping, sepakati informasi apa yang memang perlu dibagikan. Simpan dokumen pribadi dengan baik dan jangan memasukkan diagnosis, nomor rekam medis, maupun hasil pemeriksaan ke formulir umum. Formulir preview hanya menampilkan konfirmasi lokal; isinya tidak dikirim atau disimpan oleh aplikasi.",
        "Sebelum kunjungan nyata, konfirmasikan kembali jadwal, lokasi, persyaratan, serta ketentuan biaya kepada penyedia layanan yang benar. Informasi administrasi dapat berubah dan tidak menggantikan penilaian individual. Untuk pertanyaan atau kebutuhan kesehatan, konsultasikan dengan dokter."
      ],
      "quote": "Informasi yang jelas membantu percakapan yang lebih terarah.",
      "checklist": [
        "Baca tanggal pembaruan",
        "Periksa keterangan demo",
        "Konfirmasi melalui kanal yang tepat"
      ],
      "image": "assets/img/ai/hero-3.webp",
      "alt": "Ilustrasi topik Menyiapkan Pertanyaan Konsultasi",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "slug": "privasi-formulir",
      "title": "Menjaga Privasi pada Formulir",
      "category": "Privasi",
      "date": "2026-10-21",
      "author": "Tim Editorial Demo Alfasyimar",
      "readingMinutes": 2,
      "summary": "Memahami batas informasi pribadi membantu pengunjung menggunakan informasi secara lebih terarah. Dalam preview Alfasyimar, seluruh contoh dirancang untuk memperlihatkan alur membaca halaman, memilih informasi yang relevan, dan menemukan kanal konfirmasi. Nama, angka, serta kontak di situs ini tidak mewakili layanan rumah sakit nyata. Pengunjung dapat mencoba navigasi tanpa membuat janji atau melakukan pembayaran.",
      "paragraphs": [
        "Memahami batas informasi pribadi membantu pengunjung menggunakan informasi secara lebih terarah. Dalam preview Alfasyimar, seluruh contoh dirancang untuk memperlihatkan alur membaca halaman, memilih informasi yang relevan, dan menemukan kanal konfirmasi. Nama, angka, serta kontak di situs ini tidak mewakili layanan rumah sakit nyata. Pengunjung dapat mencoba navigasi tanpa membuat janji atau melakukan pembayaran.",
        "Langkah pertama adalah membaca judul, tanggal pembaruan, dan keterangan demo. Selanjutnya, periksa bagian yang berkaitan dengan batas informasi pribadi. Bila ada istilah yang belum dipahami, catat pertanyaan singkat untuk disampaikan melalui kanal resmi pada layanan nyata. Hindari menyimpulkan kebutuhan pribadi hanya dari tampilan kartu, ilustrasi ruang, atau ringkasan yang tersedia.",
        "Saat berdiskusi dengan pendamping, sepakati informasi apa yang memang perlu dibagikan. Simpan dokumen pribadi dengan baik dan jangan memasukkan diagnosis, nomor rekam medis, maupun hasil pemeriksaan ke formulir umum. Formulir preview hanya menampilkan konfirmasi lokal; isinya tidak dikirim atau disimpan oleh aplikasi.",
        "Sebelum kunjungan nyata, konfirmasikan kembali jadwal, lokasi, persyaratan, serta ketentuan biaya kepada penyedia layanan yang benar. Informasi administrasi dapat berubah dan tidak menggantikan penilaian individual. Untuk pertanyaan atau kebutuhan kesehatan, konsultasikan dengan dokter."
      ],
      "quote": "Informasi yang jelas membantu percakapan yang lebih terarah.",
      "checklist": [
        "Baca tanggal pembaruan",
        "Periksa keterangan demo",
        "Konfirmasi melalui kanal yang tepat"
      ],
      "image": "assets/img/ai/mcu-hero.webp",
      "alt": "Ilustrasi topik Menjaga Privasi pada Formulir",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "slug": "rincian-kamar",
      "title": "Memahami Rincian Kamar",
      "category": "Layanan",
      "date": "2026-10-20",
      "author": "Tim Editorial Demo Alfasyimar",
      "readingMinutes": 2,
      "summary": "Memahami rincian pilihan kamar membantu pengunjung menggunakan informasi secara lebih terarah. Dalam preview Alfasyimar, seluruh contoh dirancang untuk memperlihatkan alur membaca halaman, memilih informasi yang relevan, dan menemukan kanal konfirmasi. Nama, angka, serta kontak di situs ini tidak mewakili layanan rumah sakit nyata. Pengunjung dapat mencoba navigasi tanpa membuat janji atau melakukan pembayaran.",
      "paragraphs": [
        "Memahami rincian pilihan kamar membantu pengunjung menggunakan informasi secara lebih terarah. Dalam preview Alfasyimar, seluruh contoh dirancang untuk memperlihatkan alur membaca halaman, memilih informasi yang relevan, dan menemukan kanal konfirmasi. Nama, angka, serta kontak di situs ini tidak mewakili layanan rumah sakit nyata. Pengunjung dapat mencoba navigasi tanpa membuat janji atau melakukan pembayaran.",
        "Langkah pertama adalah membaca judul, tanggal pembaruan, dan keterangan demo. Selanjutnya, periksa bagian yang berkaitan dengan rincian pilihan kamar. Bila ada istilah yang belum dipahami, catat pertanyaan singkat untuk disampaikan melalui kanal resmi pada layanan nyata. Hindari menyimpulkan kebutuhan pribadi hanya dari tampilan kartu, ilustrasi ruang, atau ringkasan yang tersedia.",
        "Saat berdiskusi dengan pendamping, sepakati informasi apa yang memang perlu dibagikan. Simpan dokumen pribadi dengan baik dan jangan memasukkan diagnosis, nomor rekam medis, maupun hasil pemeriksaan ke formulir umum. Formulir preview hanya menampilkan konfirmasi lokal; isinya tidak dikirim atau disimpan oleh aplikasi.",
        "Sebelum kunjungan nyata, konfirmasikan kembali jadwal, lokasi, persyaratan, serta ketentuan biaya kepada penyedia layanan yang benar. Informasi administrasi dapat berubah dan tidak menggantikan penilaian individual. Untuk pertanyaan atau kebutuhan kesehatan, konsultasikan dengan dokter."
      ],
      "quote": "Informasi yang jelas membantu percakapan yang lebih terarah.",
      "checklist": [
        "Baca tanggal pembaruan",
        "Periksa keterangan demo",
        "Konfirmasi melalui kanal yang tepat"
      ],
      "image": "assets/img/ai/kamar-vip.webp",
      "alt": "Ilustrasi topik Memahami Rincian Kamar",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "slug": "sunday-clinic",
      "title": "Mengenal Sunday Clinic",
      "category": "Panduan",
      "date": "2026-10-19",
      "author": "Tim Editorial Demo Alfasyimar",
      "readingMinutes": 2,
      "summary": "Memahami layanan pada hari Minggu membantu pengunjung menggunakan informasi secara lebih terarah. Dalam preview Alfasyimar, seluruh contoh dirancang untuk memperlihatkan alur membaca halaman, memilih informasi yang relevan, dan menemukan kanal konfirmasi. Nama, angka, serta kontak di situs ini tidak mewakili layanan rumah sakit nyata. Pengunjung dapat mencoba navigasi tanpa membuat janji atau melakukan pembayaran.",
      "paragraphs": [
        "Memahami layanan pada hari Minggu membantu pengunjung menggunakan informasi secara lebih terarah. Dalam preview Alfasyimar, seluruh contoh dirancang untuk memperlihatkan alur membaca halaman, memilih informasi yang relevan, dan menemukan kanal konfirmasi. Nama, angka, serta kontak di situs ini tidak mewakili layanan rumah sakit nyata. Pengunjung dapat mencoba navigasi tanpa membuat janji atau melakukan pembayaran.",
        "Langkah pertama adalah membaca judul, tanggal pembaruan, dan keterangan demo. Selanjutnya, periksa bagian yang berkaitan dengan layanan pada hari Minggu. Bila ada istilah yang belum dipahami, catat pertanyaan singkat untuk disampaikan melalui kanal resmi pada layanan nyata. Hindari menyimpulkan kebutuhan pribadi hanya dari tampilan kartu, ilustrasi ruang, atau ringkasan yang tersedia.",
        "Saat berdiskusi dengan pendamping, sepakati informasi apa yang memang perlu dibagikan. Simpan dokumen pribadi dengan baik dan jangan memasukkan diagnosis, nomor rekam medis, maupun hasil pemeriksaan ke formulir umum. Formulir preview hanya menampilkan konfirmasi lokal; isinya tidak dikirim atau disimpan oleh aplikasi.",
        "Sebelum kunjungan nyata, konfirmasikan kembali jadwal, lokasi, persyaratan, serta ketentuan biaya kepada penyedia layanan yang benar. Informasi administrasi dapat berubah dan tidak menggantikan penilaian individual. Untuk pertanyaan atau kebutuhan kesehatan, konsultasikan dengan dokter."
      ],
      "quote": "Informasi yang jelas membantu percakapan yang lebih terarah.",
      "checklist": [
        "Baca tanggal pembaruan",
        "Periksa keterangan demo",
        "Konfirmasi melalui kanal yang tepat"
      ],
      "image": "assets/img/ai/hero-2.webp",
      "alt": "Ilustrasi topik Mengenal Sunday Clinic",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "slug": "paket-mcu",
      "title": "Membaca Informasi Paket MCU",
      "category": "Layanan",
      "date": "2026-10-18",
      "author": "Tim Editorial Demo Alfasyimar",
      "readingMinutes": 2,
      "summary": "Memahami komponen paket pemeriksaan membantu pengunjung menggunakan informasi secara lebih terarah. Dalam preview Alfasyimar, seluruh contoh dirancang untuk memperlihatkan alur membaca halaman, memilih informasi yang relevan, dan menemukan kanal konfirmasi. Nama, angka, serta kontak di situs ini tidak mewakili layanan rumah sakit nyata. Pengunjung dapat mencoba navigasi tanpa membuat janji atau melakukan pembayaran.",
      "paragraphs": [
        "Memahami komponen paket pemeriksaan membantu pengunjung menggunakan informasi secara lebih terarah. Dalam preview Alfasyimar, seluruh contoh dirancang untuk memperlihatkan alur membaca halaman, memilih informasi yang relevan, dan menemukan kanal konfirmasi. Nama, angka, serta kontak di situs ini tidak mewakili layanan rumah sakit nyata. Pengunjung dapat mencoba navigasi tanpa membuat janji atau melakukan pembayaran.",
        "Langkah pertama adalah membaca judul, tanggal pembaruan, dan keterangan demo. Selanjutnya, periksa bagian yang berkaitan dengan komponen paket pemeriksaan. Bila ada istilah yang belum dipahami, catat pertanyaan singkat untuk disampaikan melalui kanal resmi pada layanan nyata. Hindari menyimpulkan kebutuhan pribadi hanya dari tampilan kartu, ilustrasi ruang, atau ringkasan yang tersedia.",
        "Saat berdiskusi dengan pendamping, sepakati informasi apa yang memang perlu dibagikan. Simpan dokumen pribadi dengan baik dan jangan memasukkan diagnosis, nomor rekam medis, maupun hasil pemeriksaan ke formulir umum. Formulir preview hanya menampilkan konfirmasi lokal; isinya tidak dikirim atau disimpan oleh aplikasi.",
        "Sebelum kunjungan nyata, konfirmasikan kembali jadwal, lokasi, persyaratan, serta ketentuan biaya kepada penyedia layanan yang benar. Informasi administrasi dapat berubah dan tidak menggantikan penilaian individual. Untuk pertanyaan atau kebutuhan kesehatan, konsultasikan dengan dokter."
      ],
      "quote": "Informasi yang jelas membantu percakapan yang lebih terarah.",
      "checklist": [
        "Baca tanggal pembaruan",
        "Periksa keterangan demo",
        "Konfirmasi melalui kanal yang tepat"
      ],
      "image": "assets/img/ai/hero-3.webp",
      "alt": "Ilustrasi topik Membaca Informasi Paket MCU",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "slug": "pendamping-kunjungan",
      "title": "Peran Pendamping Kunjungan",
      "category": "Komunikasi",
      "date": "2026-10-17",
      "author": "Tim Editorial Demo Alfasyimar",
      "readingMinutes": 2,
      "summary": "Memahami peran pendamping membantu pengunjung menggunakan informasi secara lebih terarah. Dalam preview Alfasyimar, seluruh contoh dirancang untuk memperlihatkan alur membaca halaman, memilih informasi yang relevan, dan menemukan kanal konfirmasi. Nama, angka, serta kontak di situs ini tidak mewakili layanan rumah sakit nyata. Pengunjung dapat mencoba navigasi tanpa membuat janji atau melakukan pembayaran.",
      "paragraphs": [
        "Memahami peran pendamping membantu pengunjung menggunakan informasi secara lebih terarah. Dalam preview Alfasyimar, seluruh contoh dirancang untuk memperlihatkan alur membaca halaman, memilih informasi yang relevan, dan menemukan kanal konfirmasi. Nama, angka, serta kontak di situs ini tidak mewakili layanan rumah sakit nyata. Pengunjung dapat mencoba navigasi tanpa membuat janji atau melakukan pembayaran.",
        "Langkah pertama adalah membaca judul, tanggal pembaruan, dan keterangan demo. Selanjutnya, periksa bagian yang berkaitan dengan peran pendamping. Bila ada istilah yang belum dipahami, catat pertanyaan singkat untuk disampaikan melalui kanal resmi pada layanan nyata. Hindari menyimpulkan kebutuhan pribadi hanya dari tampilan kartu, ilustrasi ruang, atau ringkasan yang tersedia.",
        "Saat berdiskusi dengan pendamping, sepakati informasi apa yang memang perlu dibagikan. Simpan dokumen pribadi dengan baik dan jangan memasukkan diagnosis, nomor rekam medis, maupun hasil pemeriksaan ke formulir umum. Formulir preview hanya menampilkan konfirmasi lokal; isinya tidak dikirim atau disimpan oleh aplikasi.",
        "Sebelum kunjungan nyata, konfirmasikan kembali jadwal, lokasi, persyaratan, serta ketentuan biaya kepada penyedia layanan yang benar. Informasi administrasi dapat berubah dan tidak menggantikan penilaian individual. Untuk pertanyaan atau kebutuhan kesehatan, konsultasikan dengan dokter."
      ],
      "quote": "Informasi yang jelas membantu percakapan yang lebih terarah.",
      "checklist": [
        "Baca tanggal pembaruan",
        "Periksa keterangan demo",
        "Konfirmasi melalui kanal yang tepat"
      ],
      "image": "assets/img/ai/mcu-hero.webp",
      "alt": "Ilustrasi topik Peran Pendamping Kunjungan",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "slug": "ilustrasi-ai",
      "title": "Mengenali Ilustrasi AI",
      "category": "Transparansi",
      "date": "2026-10-16",
      "author": "Tim Editorial Demo Alfasyimar",
      "readingMinutes": 2,
      "summary": "Memahami label ilustrasi pada situs membantu pengunjung menggunakan informasi secara lebih terarah. Dalam preview Alfasyimar, seluruh contoh dirancang untuk memperlihatkan alur membaca halaman, memilih informasi yang relevan, dan menemukan kanal konfirmasi. Nama, angka, serta kontak di situs ini tidak mewakili layanan rumah sakit nyata. Pengunjung dapat mencoba navigasi tanpa membuat janji atau melakukan pembayaran.",
      "paragraphs": [
        "Memahami label ilustrasi pada situs membantu pengunjung menggunakan informasi secara lebih terarah. Dalam preview Alfasyimar, seluruh contoh dirancang untuk memperlihatkan alur membaca halaman, memilih informasi yang relevan, dan menemukan kanal konfirmasi. Nama, angka, serta kontak di situs ini tidak mewakili layanan rumah sakit nyata. Pengunjung dapat mencoba navigasi tanpa membuat janji atau melakukan pembayaran.",
        "Langkah pertama adalah membaca judul, tanggal pembaruan, dan keterangan demo. Selanjutnya, periksa bagian yang berkaitan dengan label ilustrasi pada situs. Bila ada istilah yang belum dipahami, catat pertanyaan singkat untuk disampaikan melalui kanal resmi pada layanan nyata. Hindari menyimpulkan kebutuhan pribadi hanya dari tampilan kartu, ilustrasi ruang, atau ringkasan yang tersedia.",
        "Saat berdiskusi dengan pendamping, sepakati informasi apa yang memang perlu dibagikan. Simpan dokumen pribadi dengan baik dan jangan memasukkan diagnosis, nomor rekam medis, maupun hasil pemeriksaan ke formulir umum. Formulir preview hanya menampilkan konfirmasi lokal; isinya tidak dikirim atau disimpan oleh aplikasi.",
        "Sebelum kunjungan nyata, konfirmasikan kembali jadwal, lokasi, persyaratan, serta ketentuan biaya kepada penyedia layanan yang benar. Informasi administrasi dapat berubah dan tidak menggantikan penilaian individual. Untuk pertanyaan atau kebutuhan kesehatan, konsultasikan dengan dokter."
      ],
      "quote": "Informasi yang jelas membantu percakapan yang lebih terarah.",
      "checklist": [
        "Baca tanggal pembaruan",
        "Periksa keterangan demo",
        "Konfirmasi melalui kanal yang tepat"
      ],
      "image": "assets/img/ai/kamar-vip.webp",
      "alt": "Ilustrasi topik Mengenali Ilustrasi AI",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    }
  ],
  "events": [
    {
      "slug": "kegiatan-1",
      "title": "Orientasi Layanan",
      "year": 2026,
      "date": "2026-09-15",
      "summary": "Album ilustrasi konsep. Tidak ada kegiatan nyata yang didokumentasikan; enam visual digunakan ulang untuk simulasi galeri.",
      "gallery": [
        {
          "image": "assets/img/ai/hero-1.webp",
          "alt": "Ilustrasi konsep hero-1 dalam album demo",
          "ai": true,
          "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
        },
        {
          "image": "assets/img/ai/hero-2.webp",
          "alt": "Ilustrasi konsep hero-2 dalam album demo",
          "ai": true,
          "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
        },
        {
          "image": "assets/img/ai/hero-3.webp",
          "alt": "Ilustrasi konsep hero-3 dalam album demo",
          "ai": true,
          "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
        },
        {
          "image": "assets/img/ai/mcu-hero.webp",
          "alt": "Ilustrasi konsep mcu-hero dalam album demo",
          "ai": true,
          "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
        },
        {
          "image": "assets/img/ai/rehab.webp",
          "alt": "Ilustrasi konsep rehab dalam album demo",
          "ai": true,
          "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
        },
        {
          "image": "assets/img/ai/kamar-vvip.webp",
          "alt": "Ilustrasi konsep kamar-vvip dalam album demo",
          "ai": true,
          "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
        }
      ],
      "image": "assets/img/ai/hero-1.webp",
      "alt": "Ilustrasi Orientasi Layanan",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "slug": "kegiatan-2",
      "title": "Ruang Baca Keluarga",
      "year": 2026,
      "date": "2026-09-15",
      "summary": "Album ilustrasi konsep. Tidak ada kegiatan nyata yang didokumentasikan; enam visual digunakan ulang untuk simulasi galeri.",
      "gallery": [
        {
          "image": "assets/img/ai/hero-1.webp",
          "alt": "Ilustrasi konsep hero-1 dalam album demo",
          "ai": true,
          "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
        },
        {
          "image": "assets/img/ai/hero-2.webp",
          "alt": "Ilustrasi konsep hero-2 dalam album demo",
          "ai": true,
          "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
        },
        {
          "image": "assets/img/ai/hero-3.webp",
          "alt": "Ilustrasi konsep hero-3 dalam album demo",
          "ai": true,
          "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
        },
        {
          "image": "assets/img/ai/mcu-hero.webp",
          "alt": "Ilustrasi konsep mcu-hero dalam album demo",
          "ai": true,
          "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
        },
        {
          "image": "assets/img/ai/rehab.webp",
          "alt": "Ilustrasi konsep rehab dalam album demo",
          "ai": true,
          "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
        },
        {
          "image": "assets/img/ai/kamar-vvip.webp",
          "alt": "Ilustrasi konsep kamar-vvip dalam album demo",
          "ai": true,
          "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
        }
      ],
      "image": "assets/img/ai/hero-2.webp",
      "alt": "Ilustrasi Ruang Baca Keluarga",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "slug": "kegiatan-3",
      "title": "Forum Komunikasi",
      "year": 2025,
      "date": "2025-09-15",
      "summary": "Album ilustrasi konsep. Tidak ada kegiatan nyata yang didokumentasikan; enam visual digunakan ulang untuk simulasi galeri.",
      "gallery": [
        {
          "image": "assets/img/ai/hero-1.webp",
          "alt": "Ilustrasi konsep hero-1 dalam album demo",
          "ai": true,
          "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
        },
        {
          "image": "assets/img/ai/hero-2.webp",
          "alt": "Ilustrasi konsep hero-2 dalam album demo",
          "ai": true,
          "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
        },
        {
          "image": "assets/img/ai/hero-3.webp",
          "alt": "Ilustrasi konsep hero-3 dalam album demo",
          "ai": true,
          "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
        },
        {
          "image": "assets/img/ai/mcu-hero.webp",
          "alt": "Ilustrasi konsep mcu-hero dalam album demo",
          "ai": true,
          "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
        },
        {
          "image": "assets/img/ai/rehab.webp",
          "alt": "Ilustrasi konsep rehab dalam album demo",
          "ai": true,
          "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
        },
        {
          "image": "assets/img/ai/kamar-vvip.webp",
          "alt": "Ilustrasi konsep kamar-vvip dalam album demo",
          "ai": true,
          "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
        }
      ],
      "image": "assets/img/ai/hero-3.webp",
      "alt": "Ilustrasi Forum Komunikasi",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "slug": "kegiatan-4",
      "title": "Pengenalan Fasilitas",
      "year": 2024,
      "date": "2024-09-15",
      "summary": "Album ilustrasi konsep. Tidak ada kegiatan nyata yang didokumentasikan; enam visual digunakan ulang untuk simulasi galeri.",
      "gallery": [
        {
          "image": "assets/img/ai/hero-1.webp",
          "alt": "Ilustrasi konsep hero-1 dalam album demo",
          "ai": true,
          "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
        },
        {
          "image": "assets/img/ai/hero-2.webp",
          "alt": "Ilustrasi konsep hero-2 dalam album demo",
          "ai": true,
          "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
        },
        {
          "image": "assets/img/ai/hero-3.webp",
          "alt": "Ilustrasi konsep hero-3 dalam album demo",
          "ai": true,
          "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
        },
        {
          "image": "assets/img/ai/mcu-hero.webp",
          "alt": "Ilustrasi konsep mcu-hero dalam album demo",
          "ai": true,
          "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
        },
        {
          "image": "assets/img/ai/rehab.webp",
          "alt": "Ilustrasi konsep rehab dalam album demo",
          "ai": true,
          "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
        },
        {
          "image": "assets/img/ai/kamar-vvip.webp",
          "alt": "Ilustrasi konsep kamar-vvip dalam album demo",
          "ai": true,
          "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
        }
      ],
      "image": "assets/img/ai/mcu-hero.webp",
      "alt": "Ilustrasi Pengenalan Fasilitas",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "slug": "kegiatan-5",
      "title": "Publikasi Perdana",
      "year": 2023,
      "date": "2023-09-15",
      "summary": "Album ilustrasi konsep. Tidak ada kegiatan nyata yang didokumentasikan; enam visual digunakan ulang untuk simulasi galeri.",
      "gallery": [
        {
          "image": "assets/img/ai/hero-1.webp",
          "alt": "Ilustrasi konsep hero-1 dalam album demo",
          "ai": true,
          "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
        },
        {
          "image": "assets/img/ai/hero-2.webp",
          "alt": "Ilustrasi konsep hero-2 dalam album demo",
          "ai": true,
          "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
        },
        {
          "image": "assets/img/ai/hero-3.webp",
          "alt": "Ilustrasi konsep hero-3 dalam album demo",
          "ai": true,
          "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
        },
        {
          "image": "assets/img/ai/mcu-hero.webp",
          "alt": "Ilustrasi konsep mcu-hero dalam album demo",
          "ai": true,
          "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
        },
        {
          "image": "assets/img/ai/rehab.webp",
          "alt": "Ilustrasi konsep rehab dalam album demo",
          "ai": true,
          "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
        },
        {
          "image": "assets/img/ai/kamar-vvip.webp",
          "alt": "Ilustrasi konsep kamar-vvip dalam album demo",
          "ai": true,
          "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026"
        }
      ],
      "image": "assets/img/ai/rehab.webp",
      "alt": "Ilustrasi Publikasi Perdana",
      "ai": true,
      "credit": "Ilustrasi AI dibuat dengan OpenAI Image Generation, 24 Oktober 2026",
      "updatedAt": "2026-10-24",
      "status": "published"
    }
  ],
  "quality": [
    {
      "year": 2026,
      "indicators": [
        {
          "name": "Kepatuhan kebersihan tangan",
          "value": 92,
          "unit": "%"
        },
        {
          "name": "Waktu tunggu rawat jalan",
          "value": 37,
          "unit": "menit"
        },
        {
          "name": "Kelengkapan jadwal",
          "value": 96,
          "unit": "%"
        }
      ],
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "year": 2025,
      "indicators": [
        {
          "name": "Kepatuhan kebersihan tangan",
          "value": 91,
          "unit": "%"
        },
        {
          "name": "Waktu tunggu rawat jalan",
          "value": 38,
          "unit": "menit"
        },
        {
          "name": "Kelengkapan jadwal",
          "value": 95,
          "unit": "%"
        }
      ],
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "year": 2024,
      "indicators": [
        {
          "name": "Kepatuhan kebersihan tangan",
          "value": 95,
          "unit": "%"
        },
        {
          "name": "Waktu tunggu rawat jalan",
          "value": 34,
          "unit": "menit"
        },
        {
          "name": "Kelengkapan jadwal",
          "value": 94,
          "unit": "%"
        }
      ],
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "year": 2023,
      "indicators": [
        {
          "name": "Kepatuhan kebersihan tangan",
          "value": 94,
          "unit": "%"
        },
        {
          "name": "Waktu tunggu rawat jalan",
          "value": 35,
          "unit": "menit"
        },
        {
          "name": "Kelengkapan jadwal",
          "value": 97,
          "unit": "%"
        }
      ],
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "year": 2022,
      "indicators": [
        {
          "name": "Kepatuhan kebersihan tangan",
          "value": 93,
          "unit": "%"
        },
        {
          "name": "Waktu tunggu rawat jalan",
          "value": 36,
          "unit": "menit"
        },
        {
          "name": "Kelengkapan jadwal",
          "value": 96,
          "unit": "%"
        }
      ],
      "updatedAt": "2026-10-24",
      "status": "published"
    }
  ]
});

````

### js/data/misc.js

````javascript
/* Data dummy untuk preview. */
Object.assign(window.ALFA_DATA, {
  "days": [
    "senin",
    "selasa",
    "rabu",
    "kamis",
    "jumat",
    "sabtu",
    "minggu"
  ],
  "profile": {
    "intro": "RS Alfasyimar merupakan identitas rumah sakit fiktif untuk demonstrasi portal informasi. Preview ini memudahkan peninjauan navigasi, layanan, jadwal, dan kanal komunikasi sebelum memakai konten operasional yang telah diverifikasi.",
    "history": [
      {
        "year": 2014,
        "text": "Konsep layanan keluarga dirancang (cerita fiktif)."
      },
      {
        "year": 2018,
        "text": "Direktori layanan diperluas (cerita fiktif)."
      },
      {
        "year": 2022,
        "text": "Gagasan informasi digital dikembangkan (cerita fiktif)."
      },
      {
        "year": 2026,
        "text": "Preview portal diperkenalkan untuk evaluasi desain."
      }
    ],
    "vision": "Informasi layanan yang ramah, jelas, dan mudah dijangkau.",
    "mission": [
      "Memudahkan penelusuran layanan",
      "Menyajikan informasi yang transparan",
      "Mengutamakan komunikasi yang berempati"
    ],
    "leaders": [
      "Nadira Widyakarsa",
      "Baskara Suryanata",
      "Kirana Adiswara"
    ],
    "gallery": [
      {
        "image": "assets/img/ai/tentang-kami-1.webp",
        "alt": "Ilustrasi konsep profil Alfasyimar 1",
        "ai": true,
        "credit": "OpenAI Image Generation"
      },
      {
        "image": "assets/img/ai/tentang-kami-2.webp",
        "alt": "Ilustrasi konsep profil Alfasyimar 2",
        "ai": true,
        "credit": "OpenAI Image Generation"
      },
      {
        "image": "assets/img/ai/tentang-kami-3.webp",
        "alt": "Ilustrasi konsep profil Alfasyimar 3",
        "ai": true,
        "credit": "OpenAI Image Generation"
      }
    ]
  },
  "partners": [
    {
      "name": "Sentosa Demo",
      "active": true,
      "order": 0
    },
    {
      "name": "Pelita Perlindungan",
      "active": true,
      "order": 1
    },
    {
      "name": "Nusa Harmoni",
      "active": true,
      "order": 2
    },
    {
      "name": "Keluarga Prima",
      "active": true,
      "order": 3
    },
    {
      "name": "Sahabat Sehat",
      "active": true,
      "order": 4
    },
    {
      "name": "Cakrawala Care",
      "active": true,
      "order": 5
    },
    {
      "name": "Tunas Jaminan",
      "active": false,
      "order": 6
    },
    {
      "name": "Ruang Aman",
      "active": false,
      "order": 7
    }
  ],
  "careers": [
    {
      "id": "karir-1",
      "name": "Petugas Informasi",
      "unit": "Administrasi",
      "deadline": "2026-12-01",
      "description": "Lowongan fiktif untuk demonstrasi tampilan karir. Tidak ada proses rekrutmen nyata dan jangan mengirim dokumen pribadi ke alamat contoh.",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "id": "karir-2",
      "name": "Koordinator Konten",
      "unit": "Komunikasi",
      "deadline": "2026-12-01",
      "description": "Lowongan fiktif untuk demonstrasi tampilan karir. Tidak ada proses rekrutmen nyata dan jangan mengirim dokumen pribadi ke alamat contoh.",
      "updatedAt": "2026-10-24",
      "status": "published"
    },
    {
      "id": "karir-3",
      "name": "Staf Operasional",
      "unit": "Layanan Umum",
      "deadline": "2026-12-01",
      "description": "Lowongan fiktif untuk demonstrasi tampilan karir. Tidak ada proses rekrutmen nyata dan jangan mengirim dokumen pribadi ke alamat contoh.",
      "updatedAt": "2026-10-24",
      "status": "published"
    }
  ],
  "aiInventory": [
    {
      "file": "assets/img/ai/hero-1.webp",
      "prompt": "Photorealistic modern hospital lobby, white space, oak reception, blue teal accents, tropical greenery, daylight, no people, no logos, no text.",
      "tool": "OpenAI Image Generation",
      "ratio": "16:9",
      "status": "Dibuat",
      "locations": "Slot sesuai nama; sebagian digunakan ulang pada fasilitas, berita, promo, video, dan album. Tidak mewakili alat medis tertentu."
    },
    {
      "file": "assets/img/ai/hero-2.webp",
      "prompt": "Photorealistic architectural AI concept illustration for fictional Alfasyimar hospital. A calm contemporary outpatient waiting area with empty curved blue seating and tropical plants. Wide 16:9 single image. Bright natural light, white walls, soft blue teal green accents (#1B84E0 #12B5A6 #3CC172), realistic materials, professional warm healthcare design. No people, no logos, no text, no watermarks, no brand marks.",
      "tool": "OpenAI Image Generation",
      "ratio": "16:9",
      "status": "Dibuat",
      "locations": "Slot sesuai nama; sebagian digunakan ulang pada fasilitas, berita, promo, video, dan album. Tidak mewakili alat medis tertentu."
    },
    {
      "file": "assets/img/ai/hero-3.webp",
      "prompt": "Photorealistic architectural AI concept illustration for fictional Alfasyimar hospital. A bright hospital consultation room with an empty desk and two chairs, no people. Wide 16:9 single image. Bright natural light, white walls, soft blue teal green accents (#1B84E0 #12B5A6 #3CC172), realistic materials, professional warm healthcare design. No people, no logos, no text, no watermarks, no brand marks.",
      "tool": "OpenAI Image Generation",
      "ratio": "16:9",
      "status": "Dibuat",
      "locations": "Slot sesuai nama; sebagian digunakan ulang pada fasilitas, berita, promo, video, dan album. Tidak mewakili alat medis tertentu."
    },
    {
      "file": "assets/img/ai/kamar-vvip.webp",
      "prompt": "Photorealistic architectural AI concept illustration for fictional Alfasyimar hospital. A premium spacious single hospital patient suite, one hospital bed, separate sitting area, oak cabinetry. Wide 16:9 single image. Bright natural light, white walls, soft blue teal green accents (#1B84E0 #12B5A6 #3CC172), realistic materials, professional warm healthcare design. No people, no logos, no text, no watermarks, no brand marks.",
      "tool": "OpenAI Image Generation",
      "ratio": "16:9",
      "status": "Dibuat",
      "locations": "Slot sesuai nama; sebagian digunakan ulang pada fasilitas, berita, promo, video, dan album. Tidak mewakili alat medis tertentu."
    },
    {
      "file": "assets/img/ai/kamar-vip.webp",
      "prompt": "Photorealistic architectural AI concept illustration for fictional Alfasyimar hospital. A comfortable single hospital room, one adjustable hospital bed, teal armchair, large daylight window. Wide 16:9 single image. Bright natural light, white walls, soft blue teal green accents (#1B84E0 #12B5A6 #3CC172), realistic materials, professional warm healthcare design. No people, no logos, no text, no watermarks, no brand marks.",
      "tool": "OpenAI Image Generation",
      "ratio": "16:9",
      "status": "Dibuat",
      "locations": "Slot sesuai nama; sebagian digunakan ulang pada fasilitas, berita, promo, video, dan album. Tidak mewakili alat medis tertentu."
    },
    {
      "file": "assets/img/ai/kamar-kelas-1.webp",
      "prompt": "Photorealistic architectural AI concept illustration for fictional Alfasyimar hospital. A clean two-bed hospital inpatient room, privacy curtains open, blue linens. Wide 16:9 single image. Bright natural light, white walls, soft blue teal green accents (#1B84E0 #12B5A6 #3CC172), realistic materials, professional warm healthcare design. No people, no logos, no text, no watermarks, no brand marks.",
      "tool": "OpenAI Image Generation",
      "ratio": "16:9",
      "status": "Dibuat",
      "locations": "Slot sesuai nama; sebagian digunakan ulang pada fasilitas, berita, promo, video, dan album. Tidak mewakili alat medis tertentu."
    },
    {
      "file": "assets/img/ai/kamar-kelas-2.webp",
      "prompt": "Photorealistic architectural AI concept illustration for fictional Alfasyimar hospital. A practical three-bed hospital inpatient room, privacy curtains and teal accents. Wide 16:9 single image. Bright natural light, white walls, soft blue teal green accents (#1B84E0 #12B5A6 #3CC172), realistic materials, professional warm healthcare design. No people, no logos, no text, no watermarks, no brand marks.",
      "tool": "OpenAI Image Generation",
      "ratio": "16:9",
      "status": "Dibuat",
      "locations": "Slot sesuai nama; sebagian digunakan ulang pada fasilitas, berita, promo, video, dan album. Tidak mewakili alat medis tertentu."
    },
    {
      "file": "assets/img/ai/kamar-kelas-3.webp",
      "prompt": "Photorealistic architectural AI concept illustration for fictional Alfasyimar hospital. A bright four-bed hospital ward, evenly spaced beds with privacy curtains, tidy and dignified. Wide 16:9 single image. Bright natural light, white walls, soft blue teal green accents (#1B84E0 #12B5A6 #3CC172), realistic materials, professional warm healthcare design. No people, no logos, no text, no watermarks, no brand marks.",
      "tool": "OpenAI Image Generation",
      "ratio": "16:9",
      "status": "Dibuat",
      "locations": "Slot sesuai nama; sebagian digunakan ulang pada fasilitas, berita, promo, video, dan album. Tidak mewakili alat medis tertentu."
    },
    {
      "file": "assets/img/ai/ugd.webp",
      "prompt": "One photorealistic AI concept illustration for fictional Alfasyimar hospital: empty emergency department treatment bay with stretcher and monitoring equipment. Clean modern interior, natural daylight, soft blue teal green palette, premium but believable, landscape 16:9 unless portrait specified. No people, readable text, logos, identifiable brands or watermarks.",
      "tool": "OpenAI Image Generation",
      "ratio": "16:9",
      "status": "Dibuat",
      "locations": "Slot sesuai nama; sebagian digunakan ulang pada fasilitas, berita, promo, video, dan album. Tidak mewakili alat medis tertentu."
    },
    {
      "file": "assets/img/ai/mcu-hero.webp",
      "prompt": "One photorealistic AI concept illustration for fictional Alfasyimar hospital: preventive check-up examination suite with blood pressure station and examination bed. Clean modern interior, natural daylight, soft blue teal green palette, premium but believable, landscape 16:9 unless portrait specified. No people, readable text, logos, identifiable brands or watermarks.",
      "tool": "OpenAI Image Generation",
      "ratio": "16:9",
      "status": "Dibuat",
      "locations": "Slot sesuai nama; sebagian digunakan ulang pada fasilitas, berita, promo, video, dan album. Tidak mewakili alat medis tertentu."
    },
    {
      "file": "assets/img/ai/lab.webp",
      "prompt": "One photorealistic AI concept illustration for fictional Alfasyimar hospital: clean diagnostic laboratory, microscope and sample racks without labels. Clean modern interior, natural daylight, soft blue teal green palette, premium but believable, landscape 16:9 unless portrait specified. No people, readable text, logos, identifiable brands or watermarks.",
      "tool": "OpenAI Image Generation",
      "ratio": "16:9",
      "status": "Dibuat",
      "locations": "Slot sesuai nama; sebagian digunakan ulang pada fasilitas, berita, promo, video, dan album. Tidak mewakili alat medis tertentu."
    },
    {
      "file": "assets/img/ai/radiologi.webp",
      "prompt": "One photorealistic AI concept illustration for fictional Alfasyimar hospital: modern CT scan suite with circular scanner and control room window. Clean modern interior, natural daylight, soft blue teal green palette, premium but believable, landscape 16:9 unless portrait specified. No people, readable text, logos, identifiable brands or watermarks.",
      "tool": "OpenAI Image Generation",
      "ratio": "16:9",
      "status": "Dibuat",
      "locations": "Slot sesuai nama; sebagian digunakan ulang pada fasilitas, berita, promo, video, dan album. Tidak mewakili alat medis tertentu."
    },
    {
      "file": "assets/img/ai/ambulans.webp",
      "prompt": "One photorealistic AI concept illustration for fictional Alfasyimar hospital: unbranded white ambulance with teal stripe parked under a hospital canopy, no symbols. Clean modern interior, natural daylight, soft blue teal green palette, premium but believable, landscape 16:9 unless portrait specified. No people, readable text, logos, identifiable brands or watermarks.",
      "tool": "OpenAI Image Generation",
      "ratio": "16:9",
      "status": "Dibuat",
      "locations": "Slot sesuai nama; sebagian digunakan ulang pada fasilitas, berita, promo, video, dan album. Tidak mewakili alat medis tertentu."
    },
    {
      "file": "assets/img/ai/farmasi.webp",
      "prompt": "One photorealistic AI concept illustration for fictional Alfasyimar hospital: hospital pharmacy with orderly anonymous white packages on shelving. Clean modern interior, natural daylight, soft blue teal green palette, premium but believable, landscape 16:9 unless portrait specified. No people, readable text, logos, identifiable brands or watermarks.",
      "tool": "OpenAI Image Generation",
      "ratio": "16:9",
      "status": "Dibuat",
      "locations": "Slot sesuai nama; sebagian digunakan ulang pada fasilitas, berita, promo, video, dan album. Tidak mewakili alat medis tertentu."
    },
    {
      "file": "assets/img/ai/kamar-operasi.webp",
      "prompt": "One photorealistic AI concept illustration for fictional Alfasyimar hospital: empty modern operating room with surgical lights and operating table. Clean modern interior, natural daylight, soft blue teal green palette, premium but believable, landscape 16:9 unless portrait specified. No people, readable text, logos, identifiable brands or watermarks.",
      "tool": "OpenAI Image Generation",
      "ratio": "16:9",
      "status": "Dibuat",
      "locations": "Slot sesuai nama; sebagian digunakan ulang pada fasilitas, berita, promo, video, dan album. Tidak mewakili alat medis tertentu."
    },
    {
      "file": "assets/img/ai/rehab.webp",
      "prompt": "One photorealistic AI concept illustration for fictional Alfasyimar hospital: bright rehabilitation gym with parallel walking bars and exercise equipment. Clean modern interior, natural daylight, soft blue teal green palette, premium but believable, landscape 16:9 unless portrait specified. No people, readable text, logos, identifiable brands or watermarks.",
      "tool": "OpenAI Image Generation",
      "ratio": "16:9",
      "status": "Dibuat",
      "locations": "Slot sesuai nama; sebagian digunakan ulang pada fasilitas, berita, promo, video, dan album. Tidak mewakili alat medis tertentu."
    },
    {
      "file": "assets/img/ai/majalah.webp",
      "prompt": "One photorealistic AI concept illustration for fictional Alfasyimar hospital: editorial still life of blank white magazine beside tropical leaf and teal stethoscope, portrait 3:4. Clean modern interior, natural daylight, soft blue teal green palette, premium but believable, landscape 16:9 unless portrait specified. No people, readable text, logos, identifiable brands or watermarks.",
      "tool": "OpenAI Image Generation",
      "ratio": "3:4",
      "status": "Dibuat",
      "locations": "Slot sesuai nama; sebagian digunakan ulang pada fasilitas, berita, promo, video, dan album. Tidak mewakili alat medis tertentu."
    },
    {
      "file": "assets/img/ai/majalah-2026-10.webp",
      "prompt": "One photorealistic AI concept illustration for fictional Alfasyimar hospital: editorial still life of blank white magazine beside tropical leaf and teal stethoscope, portrait 3:4. Clean modern interior, natural daylight, soft blue teal green palette, premium but believable, landscape 16:9 unless portrait specified. No people, readable text, logos, identifiable brands or watermarks.",
      "tool": "OpenAI Image Generation",
      "ratio": "3:4",
      "status": "Tersedia — salinan aset AI majalah.webp",
      "locations": "Sampul Ruang Sehat 2026 Edisi 10; salinan ilustrasi majalah umum yang sengaja digunakan ulang."
    },
    {
      "file": "assets/img/ai/majalah-2026-4.webp",
      "prompt": "One photorealistic AI concept illustration for fictional Alfasyimar hospital: editorial still life of blank white magazine beside tropical leaf and teal stethoscope, portrait 3:4. Clean modern interior, natural daylight, soft blue teal green palette, premium but believable, landscape 16:9 unless portrait specified. No people, readable text, logos, identifiable brands or watermarks.",
      "tool": "OpenAI Image Generation",
      "ratio": "3:4",
      "status": "Tersedia — salinan aset AI majalah.webp",
      "locations": "Sampul Ruang Sehat 2026 Edisi 4; salinan ilustrasi majalah umum yang sengaja digunakan ulang."
    },
    {
      "file": "assets/img/ai/majalah-2025-10.webp",
      "prompt": "One photorealistic AI concept illustration for fictional Alfasyimar hospital: editorial still life of blank white magazine beside tropical leaf and teal stethoscope, portrait 3:4. Clean modern interior, natural daylight, soft blue teal green palette, premium but believable, landscape 16:9 unless portrait specified. No people, readable text, logos, identifiable brands or watermarks.",
      "tool": "OpenAI Image Generation",
      "ratio": "3:4",
      "status": "Tersedia — salinan aset AI majalah.webp",
      "locations": "Sampul Ruang Sehat 2025 Edisi 10; salinan ilustrasi majalah umum yang sengaja digunakan ulang."
    },
    {
      "file": "assets/img/ai/majalah-2025-4.webp",
      "prompt": "One photorealistic AI concept illustration for fictional Alfasyimar hospital: editorial still life of blank white magazine beside tropical leaf and teal stethoscope, portrait 3:4. Clean modern interior, natural daylight, soft blue teal green palette, premium but believable, landscape 16:9 unless portrait specified. No people, readable text, logos, identifiable brands or watermarks.",
      "tool": "OpenAI Image Generation",
      "ratio": "3:4",
      "status": "Tersedia — salinan aset AI majalah.webp",
      "locations": "Sampul Ruang Sehat 2025 Edisi 4; salinan ilustrasi majalah umum yang sengaja digunakan ulang."
    },
    {
      "file": "assets/img/ai/majalah-2024-10.webp",
      "prompt": "One photorealistic AI concept illustration for fictional Alfasyimar hospital: editorial still life of blank white magazine beside tropical leaf and teal stethoscope, portrait 3:4. Clean modern interior, natural daylight, soft blue teal green palette, premium but believable, landscape 16:9 unless portrait specified. No people, readable text, logos, identifiable brands or watermarks.",
      "tool": "OpenAI Image Generation",
      "ratio": "3:4",
      "status": "Tersedia — salinan aset AI majalah.webp",
      "locations": "Sampul Ruang Sehat 2024 Edisi 10; salinan ilustrasi majalah umum yang sengaja digunakan ulang."
    },
    {
      "file": "assets/img/ai/majalah-2024-4.webp",
      "prompt": "One photorealistic AI concept illustration for fictional Alfasyimar hospital: editorial still life of blank white magazine beside tropical leaf and teal stethoscope, portrait 3:4. Clean modern interior, natural daylight, soft blue teal green palette, premium but believable, landscape 16:9 unless portrait specified. No people, readable text, logos, identifiable brands or watermarks.",
      "tool": "OpenAI Image Generation",
      "ratio": "3:4",
      "status": "Tersedia — salinan aset AI majalah.webp",
      "locations": "Sampul Ruang Sehat 2024 Edisi 4; salinan ilustrasi majalah umum yang sengaja digunakan ulang."
    },
    {
      "file": "assets/img/ai/majalah-2023-10.webp",
      "prompt": "One photorealistic AI concept illustration for fictional Alfasyimar hospital: editorial still life of blank white magazine beside tropical leaf and teal stethoscope, portrait 3:4. Clean modern interior, natural daylight, soft blue teal green palette, premium but believable, landscape 16:9 unless portrait specified. No people, readable text, logos, identifiable brands or watermarks.",
      "tool": "OpenAI Image Generation",
      "ratio": "3:4",
      "status": "Tersedia — salinan aset AI majalah.webp",
      "locations": "Sampul Ruang Sehat 2023 Edisi 10; salinan ilustrasi majalah umum yang sengaja digunakan ulang."
    },
    {
      "file": "assets/img/ai/majalah-2023-4.webp",
      "prompt": "One photorealistic AI concept illustration for fictional Alfasyimar hospital: editorial still life of blank white magazine beside tropical leaf and teal stethoscope, portrait 3:4. Clean modern interior, natural daylight, soft blue teal green palette, premium but believable, landscape 16:9 unless portrait specified. No people, readable text, logos, identifiable brands or watermarks.",
      "tool": "OpenAI Image Generation",
      "ratio": "3:4",
      "status": "Tersedia — salinan aset AI majalah.webp",
      "locations": "Sampul Ruang Sehat 2023 Edisi 4; salinan ilustrasi majalah umum yang sengaja digunakan ulang."
    },
    {
      "file": "assets/img/ai/tentang-kami-1.webp",
      "prompt": "Photorealistic modern hospital lobby, white space, oak reception, blue teal accents, tropical greenery, daylight, no people, no logos, no text.",
      "tool": "OpenAI Image Generation",
      "ratio": "16:9",
      "status": "Tersedia — salinan aset AI hero",
      "locations": "Galeri profil; ilustrasi konsep yang digunakan ulang dari hero."
    },
    {
      "file": "assets/img/ai/tentang-kami-2.webp",
      "prompt": "Photorealistic architectural AI concept illustration for fictional Alfasyimar hospital. A calm contemporary outpatient waiting area with empty curved blue seating and tropical plants. Wide 16:9 single image. Bright natural light, white walls, soft blue teal green accents (#1B84E0 #12B5A6 #3CC172), realistic materials, professional warm healthcare design. No people, no logos, no text, no watermarks, no brand marks.",
      "tool": "OpenAI Image Generation",
      "ratio": "16:9",
      "status": "Tersedia — salinan aset AI hero",
      "locations": "Galeri profil; ilustrasi konsep yang digunakan ulang dari hero."
    },
    {
      "file": "assets/img/ai/tentang-kami-3.webp",
      "prompt": "Photorealistic architectural AI concept illustration for fictional Alfasyimar hospital. A bright hospital consultation room with an empty desk and two chairs, no people. Wide 16:9 single image. Bright natural light, white walls, soft blue teal green accents (#1B84E0 #12B5A6 #3CC172), realistic materials, professional warm healthcare design. No people, no logos, no text, no watermarks, no brand marks.",
      "tool": "OpenAI Image Generation",
      "ratio": "16:9",
      "status": "Tersedia — salinan aset AI hero",
      "locations": "Galeri profil; ilustrasi konsep yang digunakan ulang dari hero."
    }
  ]
});

````

### js/utils.js

````javascript
(function(A){'use strict';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const normalize=v=>String(v??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
function safeUrl(v){const s=String(v||'').trim();if(/[\u0000-\u0020]/.test(s))return '';if(/^#\/[\w/?=&%+.-]*$/.test(s)||/^#[\w-]+$/.test(s)||/^assets\/[\w/.-]+$/.test(s)&&!s.includes('..'))return s;try{const u=new URL(s);return ['http:','https:','tel:','mailto:'].includes(u.protocol)&&!u.username&&!u.password?s:'';}catch{return '';}}
const date=v=>new Intl.DateTimeFormat('id-ID',{dateStyle:'long',timeZone:'Asia/Jakarta'}).format(new Date(v+'T12:00:00Z'));
function today(){return new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Jakarta',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());}
const stale=v=>Date.now()-new Date(v+'T12:00:00Z').getTime()>30*86400000;
const qs=(s,r=document)=>r.querySelector(s),qsa=(s,r=document)=>Array.from(r.querySelectorAll(s));
function hash(path,query={}){const q=new URLSearchParams(Object.entries(query).filter(([,v])=>v!==''&&v!=null));return '#'+path+(q.size?'?'+q.toString():'');}
function matches(v,q){return normalize(q).split(/\s+/).every(t=>normalize(v).includes(t));}
function filterDoctors(list,q={}){return list.filter(d=>(!q.q||matches(d.name+' '+d.specialty,q.q))&&(!q.clinic||d.clinics.includes(q.clinic))&&(!q.day||d.schedule[q.day]?.length));}
function paginate(list,page=1,size=12){const total=Math.max(1,Math.ceil(list.length/size)),current=Math.min(total,Math.max(1,Number(page)||1));return {items:list.slice((current-1)*size,current*size),current,total,count:list.length};}
function debounce(fn,ms=200){let t;return(...args)=>{clearTimeout(t);t=setTimeout(()=>fn(...args),ms);};}
Object.assign(A.utils,{esc,normalize,safeUrl,date,today,stale,qs,qsa,hash,matches,filterDoctors,paginate,debounce,rupiah:n=>new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(n),initials:n=>n.replace(/^(dr\.|drg\.|Psikolog)\s*/,'').split(' ').slice(0,2).map(x=>x[0]).join(''),tel:n=>'tel:'+String(n).replace(/[^+\d]/g,''),wa:n=>'https://wa.me/'+String(n).replace(/\D/g,'')+'?text='+encodeURIComponent('Halo, saya ingin informasi layanan. Saya memahami ini nomor demo.'),clinic:s=>A.data.clinics.find(x=>x.slug===s),doctor:id=>A.data.doctors.find(x=>x.id===id),sundayDoctors:()=>A.data.doctors.filter(d=>d.schedule.minggu.length),reduced:()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches});
})(window.Alfa);

````

### js/components.js

````javascript
(function(A){'use strict';const u=A.utils,d=A.data,c=A.config,e=u.esc;
function link(text,url,cls='',track=''){const safe=u.safeUrl(url);return safe?`<a class="${e(cls)}" href="${e(safe)}" ${/^https?:/.test(safe)?'target="_blank" rel="noopener noreferrer"':''} ${track?`data-track="${e(track)}"`:''}>${e(text)}</a>`:button(text,'unavailable',cls);}
function button(text,action,cls='',extra=''){return `<button type="button" class="${e(cls)}" data-action="${e(action)}" ${extra}>${e(text)}</button>`;}
const register=(sunday=false)=>link(sunday?'Pendaftaran Sunday Clinic':'Pendaftaran Online',sunday?c.sundayRegistrationUrl:c.registrationUrl,'btn-af','cta_register_click');
const emergency=()=>link('Darurat · '+c.phoneEmergency,u.tel(c.phoneEmergency),'btn-danger-af','cta_emergency_click');
const whatsapp=(n=c.waPoli,label='WhatsApp Poliklinik')=>link(label,u.wa(n),'btn-wa','cta_whatsapp_click');
const ctas=()=>`<div class="row-flex">${register()}${whatsapp()}${link('Lihat Jadwal','#/jadwal','btn-af-outline')}</div>`;
function media(obj,hero=false){const src=u.safeUrl(obj.image)||c.placeholderImage;return `<div class="media-ai"><img src="${e(src)}" alt="${e(obj.alt||'Ilustrasi konsep Alfasyimar')}" width="1440" height="810" ${hero?'fetchpriority="high"':'loading="lazy"'} decoding="async" ${obj.ai?'data-ai-generated="true"':''} onerror="this.onerror=null;this.src=ALFA_CONFIG.placeholderImage;this.dataset.fallback='true'"><span class="ai-badge">${obj.ai?'✦ Ilustrasi AI':'Ilustrasi SVG'}</span></div>`;}
const logo=()=>`<a href="#/" class="brand" aria-label="Alfasyimar Beranda"><img src="${e(c.logoUrl)}" alt="RS Alfasyimar" width="260" height="70" onerror="this.onerror=null;this.src=ALFA_CONFIG.logoLocal"></a>`;
const avatar=n=>`<div class="avatar" aria-hidden="true">${e(u.initials(n))}</div>`;
function card(obj,path,kind='news'){return `<article class="card-af card-${e(kind)}" data-aos="fade-up">${obj.image?media(obj):''}<div class="card-body-af">${obj.date?`<p class="small muted">${e(u.date(obj.date))}</p>`:''}<h3>${link(obj.title||obj.name,path)}</h3><p class="line-clamp-3">${e(obj.summary||'')}</p>${link('Baca selengkapnya →',path)}</div></article>`;}
function facility(f){return `<article class="card-af card-facility" data-aos="fade-up"><div class="symbol"><i class="bi ${e(f.icon)}" aria-hidden="true"></i></div><h3>${link(f.name,'#/fasilitas/'+f.slug)}</h3><p>${e(f.summary)}</p>${link('Selengkapnya →','#/fasilitas/'+f.slug)}</article>`;}
function doctor(x){return `<article class="card-af card-doctor"><div class="card-body-af">${avatar(x.name)}<span class="chip">Nama fiktif</span><h3>${e(x.name)}</h3><p>${e(x.specialty)}</p><p>${d.days.filter(day=>x.schedule[day].length).map(day=>`<span class="chip ${day==='minggu'?'sunday':''}">${e(day)}</span>`).join('')}</p>${u.stale(x.updatedAt)?'<span class="chip warn">Konfirmasi jadwal</span>':''}<div class="row-flex">${link('Lihat Profil','#/dokter/'+x.id,'btn-af-outline')}${link('Jadwal','#/jadwal/'+x.clinics[0])}</div></div></article>`;}
function grid(items,render,cls='grid-auto-fit'){return items.length?`<div class="${e(cls)}">${items.map(render).join('')}</div>`:empty();}
function empty(text='Tidak ada hasil. Coba ubah pencarian atau filter.'){return `<div class="empty" role="status"><h2>Belum ada hasil</h2><p>${e(text)}</p>${link('Kembali ke Beranda','#/','btn-af-outline')}</div>`;}
function heading(title,sub='',eyebrow='ALFASYIMAR'){return `<div class="section-heading"><span class="eyebrow">${e(eyebrow)}</span><h2>${e(title)}</h2>${sub?`<p>${e(sub)}</p>`:''}</div>`;}
function section(title,body,sub=''){return `<section class="section"><div class="container">${heading(title,sub)}${body}</div></section>`;}
function pageHero(title,group=''){return `<div class="page-hero"><div class="container"><nav class="breadcrumb-af" aria-label="breadcrumb">${link('Beranda','#/')} ${group?' / '+e(group):''} / ${e(title)}</nav><span class="eyebrow">Informasi preview · data fiktif</span><h1>${e(title)}</h1></div></div>`;}
const paragraphs=a=>a.map(p=>`<p>${e(p)}</p>`).join('');const list=a=>'<ul>'+a.map(x=>'<li>'+e(x)+'</li>').join('')+'</ul>';
const updated=(value=c.lastScheduleUpdate)=>`<p class="notice small">Jadwal dapat berubah sewaktu-waktu. Terakhir diperbarui: ${e(u.date(value))}. Semua jadwal adalah demo; konfirmasi pada layanan nyata sebelum berkunjung.</p>`;
function schedule(docs){return `<p class="small muted">Geser tabel secara horizontal untuk melihat tujuh hari. Jam menggunakan WIB.</p><div class="table-wrap" tabindex="0" role="region" aria-label="Tabel jadwal praktik"><table class="schedule"><thead><tr><th scope="col">Dokter</th>${d.days.map(day=>`<th scope="col">${e(day[0].toUpperCase()+day.slice(1))}</th>`).join('')}</tr></thead><tbody>${docs.map(x=>`<tr><th scope="row">${link(x.name,'#/dokter/'+x.id)}${u.stale(x.updatedAt)?'<br><span class="chip warn">Konfirmasi jadwal</span>':''}</th>${d.days.map(day=>`<td>${x.schedule[day].length?x.schedule[day].map(s=>`<span class="chip slot ${day==='minggu'?'sunday':''}">${e(s.join('–'))}</span>`).join(''):'—'}</td>`).join('')}</tr>`).join('')}</tbody></table></div>${updated()}`;}
function plan(x,type){return `<article class="card-af card-plan">${x.image?media(x):''}<div class="card-body-af"><span class="chip">Harga demo</span><h3>${e(x.name)}</h3><p><strong>${x.fromPrice?'Mulai dari ':''}${e(u.rupiah(x.fromPrice||x.price))}</strong></p>${list(x.facilities||x.items)}${button('Lihat detail','detail','btn-af',`data-kind="${e(type)}" data-id="${e(x.key)}"`)}</div></article>`;}
function gallery(items){return grid(items,(x,i)=>button('', 'image','',`data-image="${e(x.image)}" data-alt="${e(x.alt)}" aria-label="Perbesar ${e(x.alt)}"`).replace('></button>','>'+media(x)+'</button>'),'album');}
function yearFilter(path,q,years=[2026,2025,2024,2023,2022]){return `<form data-filter="${e(path)}" class="filters"><div><label for="year">Tahun</label><select id="year" name="year" data-auto-submit><option value="all" ${q.year==='all'?'selected':''}>Semua</option>${years.map(y=>`<option value="${y}" ${String(q.year||years[0])===String(y)?'selected':''}>${y}</option>`).join('')}</select></div><button class="btn-af">Terapkan</button></form>`;}
function pagination(pg,path,q){return pg.total>1?`<nav class="pagination-af" aria-label="Halaman hasil">${Array.from({length:pg.total},(_,i)=>`<a href="${e(u.hash(path,{...q,page:i+1}))}" ${pg.current===i+1?'aria-current="page"':''}>${i+1}</a>`).join('')}</nav>`:'';}
function contactForm(prefix='contact'){return `<form class="contact-form" data-contact novalidate><p class="notice">Jangan tulis diagnosis atau data rekam medis di sini. Untuk keadaan darurat hubungi UGD. Form ini hanya simulasi dan tidak mengirim data.</p><div class="error-summary" role="alert"></div>${[['name','Nama','text'],['email','Email','email'],['phone','No. HP','tel']].map(([n,l,t])=>`<label for="${prefix}-${n}">${l}</label><input id="${prefix}-${n}" name="${n}" type="${t}" maxlength="${n==='name'?80:120}" autocomplete="${n==='name'?'name':n==='email'?'email':'tel'}" required aria-describedby="${prefix}-${n}-error"><div id="${prefix}-${n}-error" class="invalid-feedback"></div>`).join('')}<label for="${prefix}-message">Pesan</label><textarea id="${prefix}-message" name="message" rows="4" minlength="10" maxlength="500" required aria-describedby="${prefix}-message-error"></textarea><div class="counter" aria-live="polite">0 / 500</div><div id="${prefix}-message-error" class="invalid-feedback"></div><label><input name="consent" type="checkbox" required aria-describedby="${prefix}-consent-error">Saya menyetujui kebijakan privasi demo.</label><div id="${prefix}-consent-error" class="invalid-feedback"></div><div class="hp" aria-hidden="true"><label for="${prefix}-website">Website</label><input id="${prefix}-website" name="website" tabindex="-1" autocomplete="off"></div><p>${link('Baca kebijakan privasi','#/kebijakan-privasi')}</p><button type="submit" class="btn-af">Kirim simulasi</button><div class="success" hidden tabindex="-1"><strong>Simulasi berhasil.</strong><p>Tidak ada data dikirim atau disimpan. Ini bukan pendaftaran layanan.</p><div class="row-flex">${whatsapp(c.waPoli,'Lanjutkan via WhatsApp')}${link('Alternatif email','mailto:'+c.email,'btn-af-outline')}</div></div></form>`;}
function map(){return `<div class="map-art" role="img" aria-label="Ilustrasi peta abstrak, bukan petunjuk lokasi">⌖ Pontianak · lokasi demo</div>${link('Buka di Google Maps',c.mapUrl)}`;}
function contactCards(){return grid([{title:'Informasi umum',body:link(c.phoneMain,u.tel(c.phoneMain))+`<p>${e(c.address)}</p>`},{title:'Darurat dan Ambulans',body:emergency()+link('Ambulans '+c.phoneAmbulance,u.tel(c.phoneAmbulance),'btn-danger-af')+whatsapp(c.waAmbulance,'WA Ambulans')},{title:'Pengaduan layanan',body:'<p>Kanal administrasi; bukan kanal darurat.</p>'+whatsapp(c.waComplaint,'WhatsApp Pengaduan')}],x=>`<article class="card-af"><div class="card-body-af"><h2>${e(x.title)}</h2>${x.body}</div></article>`);}
function social(){return Object.entries(c.social).map(([name,url])=>url?link(name,url):`<span class="small">${e(name)} (demo)</span>`).join(' · ');}
function shell(){u.qs('#topbar').innerHTML=`<div class="topbar"><div class="container">${link('Telepon '+c.phoneMain,u.tel(c.phoneMain))}<span class="address">${e(c.address)}</span><span>${social()}</span></div></div>`;
const nav=d.nav.filter(x=>x.visible).sort((a,b)=>a.order-b.order);u.qs('#header').innerHTML=`<div class="container header-inner">${logo()}<nav class="desktop-nav" aria-label="Navigasi utama">${nav.map((g,i)=>g.children?`<div class="nav-group"><button aria-expanded="false" aria-controls="nav-${i}" data-action="menu">${e(g.label)}⌄</button><div id="nav-${i}" class="nav-panel ${g.label==='Fasilitas'?'mega':g.label==='Pelayanan'?'mega service-menu':''}">${g.children.filter(x=>x.visible).map((x,j)=>(g.label==='Pelayanan'&&j===0?'<strong>Reguler</strong>':g.label==='Pelayanan'&&j===5?'<strong>24 Jam</strong>':'')+link(x.label,x.path)).join('')}${g.label==='Fasilitas'?'<div class="nav-cta">'+link('Lihat semua fasilitas','#/fasilitas')+'</div>':''}</div></div>`:link(g.label,g.path)).join('')}</nav>${register()}${button('Cari','search','', 'aria-label="Cari situs"')}${button('☰','drawer','mobile-toggle','aria-label="Buka menu"')}</div>`;
u.qs('#drawer-body').innerHTML=emergency()+whatsapp()+nav.map(g=>g.children?`<details><summary>${e(g.label)}</summary>${g.children.filter(x=>x.visible).map(x=>link(x.label,x.path)).join('')}</details>`:link(g.label,g.path)).join('');
u.qs('#footer').innerHTML=`<div class="footer"><div class="container"><div class="footer-grid"><div>${logo()}<p>${e(c.tagline)}</p><p>Portal informasi rumah sakit fiktif untuk preview desain.</p>${social()}</div><div class="links"><h2>Tautan cepat</h2>${[['Jadwal','#/jadwal'],['Dokter','#/dokter'],['Fasilitas','#/fasilitas'],['Kontak','#/kontak'],['Karir','#/karir']].map(x=>link(...x)).join('')}</div><div class="links"><h2>Kontak demo</h2>${link(c.phoneMain,u.tel(c.phoneMain))}${link('UGD '+c.phoneEmergency,u.tel(c.phoneEmergency))}${link('Ambulans '+c.phoneAmbulance,u.tel(c.phoneAmbulance))}${link('WhatsApp Poliklinik',u.wa(c.waPoli))}${link('WhatsApp Pengaduan',u.wa(c.waComplaint))}<p>${e(c.address)}</p><p class="small">Diperbarui ${e(u.date(c.lastContactUpdate))}</p></div><div><h2>Jam layanan</h2><p>UGD ${e(c.hours.ugd)}</p><p>${e(c.hours.poli)}</p><p>${e(c.hours.sunday)}</p>${map()}</div></div><div class="footer-bottom">© 2026 RS Alfasyimar · ${link('Kebijakan Privasi','#/kebijakan-privasi')} · ${link('Disclaimer & Gambar AI','#/disclaimer-ai')}<p>Ikon: Bootstrap Icons — MIT License · Animasi: AOS</p></div></div><div class="demo-ribbon">Website demo — seluruh data bersifat fiktif dan bukan layanan medis sebenarnya</div></div>`;
u.qs('#floating').innerHTML=`<div class="floating-rail">${emergency()}<span class="mobile-only">${whatsapp(c.waPoli,'WhatsApp')}</span><span class="mobile-only">${register()}</span></div>${button('Kirim Pesan','contact','btn-af floating-chat')}${button('↑','top','to-top','aria-label="Kembali ke atas"')}`;}
Object.assign(A.components,{link,button,register,emergency,whatsapp,ctas,media,logo,avatar,card,facility,doctor,grid,empty,heading,section,pageHero,paragraphs,list,updated,schedule,plan,gallery,yearFilter,pagination,contactForm,map,contactCards,shell});
})(window.Alfa);

````

### js/pages.js

````javascript
(function(A){'use strict';const u=A.utils,c=A.components,d=A.data,e=u.esc;
const wrap=(title,body,group='')=>c.pageHero(title,group)+`<section class="section"><div class="container">${body}</div></section>`;
const detail=(title,obj,extra='',group='')=>wrap(title,`<div class="detail-grid"><aside>${c.media(obj)}${c.updated(obj.updatedAt)}</aside><div>${c.paragraphs(obj.description||[])}${extra}${c.ctas()}</div></div>` ,group);
const related=()=>`<div class="related"><h2>Layanan terkait</h2><div class="row-flex">${d.services.slice(0,5).map(x=>c.link(x.name,'#/pelayanan/'+x.slug,'btn-af-outline')).join('')}</div></div>`;
function home(){let h=`<section class="hero"><div class="container"><div class="hero-grid"><div data-aos="fade-right"><span class="eyebrow">Rumah sakit terpercaya · konsep demo</span><h1>Lebih dekat dengan informasi kesehatan Anda</h1><p>Cari dokter, kenali layanan, dan rencanakan kunjungan melalui satu pintu informasi.</p><div class="row-flex">${c.link('Temukan Dokter','#/dokter','btn-af')}${c.link('Jadwal Poliklinik','#/jadwal','btn-af-outline')}</div><p class="small muted" style="margin-top:1rem">Preview sementara. Seluruh data dan layanan bersifat fiktif.</p></div><div><div class="swiper hero-swiper" aria-label="Ilustrasi layanan"><div class="swiper-wrapper">${d.banners.map((b,i)=>`<div class="swiper-slide">${c.media(b,i===0)}<p class="small" style="padding:1rem 0 0">${e(b.title)}</p></div>`).join('')}</div></div><div class="hero-facts"><span>24 Jam UGD</span><span>25 Poliklinik</span><span>36 Profil demo</span></div><div class="hero-controls">${c.button('←','hero-prev','','aria-label="Slide sebelumnya"')}${c.button('→','hero-next','','aria-label="Slide berikutnya"')}${c.button('Jeda','hero-pause','','aria-pressed="false"')}<div class="hero-pagination"></div></div></div></div></div></section>`;
h+=`<div class="container cta-strip"><article class="card-af"><h2>Gawat Darurat</h2><p>Nomor simulasi · bukan layanan nyata</p>${c.emergency()}${c.whatsapp(A.config.waAmbulance,'WA Ambulans')}</article><article class="card-af"><h2>WhatsApp Poliklinik</h2><p>Informasi jadwal dan administrasi</p>${c.whatsapp()}</article><article class="card-af"><h2>Pendaftaran Online</h2><p>Alur preview tanpa reservasi nyata</p>${c.register()}</article></div>`;
h+=c.section('Layanan pada hari Minggu',`<div class="sunday-banner"><div><span class="small">SUNDAY CLINIC</span><h2>Waktu untuk keluarga Anda</h2><p>${e(A.config.hours.sunday)} · jadwal demo</p></div><div class="row-flex">${c.link('Lihat Jadwal Minggu','#/sunday-clinic','btn-af-outline')}${c.register(true)}</div></div>`);
h+=c.section('Apa yang Anda cari?',c.grid([['Jadwal Poliklinik','#/jadwal'],['Cari Dokter','#/dokter'],['Promo','#/artikel/promo'],['Medical Check Up','#/pelayanan/mcu']],x=>`<div class="card-af card-body-af">${c.link(x[0],x[1],'btn-af-outline')}</div>`)+doctorFilters('/dokter',{})+`<div class="stats">${[[12,'Tahun konsep layanan'],[36,'Dokter & psikolog'],[120,'Tempat tidur'],[25,'Poliklinik'],[18000,'Kunjungan per tahun']].map(([n,l])=>`<div><strong data-count="${n}">${n.toLocaleString('id-ID')}</strong>${e(l)}</div>`).join('')}</div><p class="small muted" style="text-align:center">Seluruh angka merupakan data demo.</p>`);
h+=c.section('Fasilitas Unggulan',c.grid(d.facilities,c.facility,'facility-grid')+`<p style="margin-top:2rem">${c.link('Lihat Semua Fasilitas','#/fasilitas','btn-af-outline')}</p>`,'Kenali fasilitas dan informasi penunjang dalam satu tempat.');
h+=c.section('Layanan Kami',c.grid(d.services.slice(0,5),x=>c.card(x,'#/pelayanan/'+x.slug))+`<h3 style="margin-top:2rem">Pelayanan 24 Jam</h3><div class="row-flex">${d.services.slice(5).map(x=>c.link('● '+x.name,'#/pelayanan/'+x.slug,'btn-af-outline')).join('')}</div>`);
h+=c.section('Mengapa Alfasyimar?',c.grid([['Berempati','Komunikasi yang ramah dan mudah dipahami.'],['Informasi Modern','Direktori yang menghubungkan layanan dan jadwal.'],['Tim Profesional','Profil simulasi tersusun dengan jelas.'],['Transparan','Status demo dan ilustrasi dinyatakan secara terbuka.']],x=>`<article class="card-af card-body-af"><h3>${e(x[0])}</h3><p>${e(x[1])}</p></article>`));
h+=c.section('Dokter Kami',`<div class="swiper doctors-swiper"><div class="swiper-wrapper">${d.doctors.slice(0,8).map(x=>`<div class="swiper-slide">${c.doctor(x)}</div>`).join('')}</div></div><p style="margin-top:2rem">${c.link('Lihat Semua Dokter','#/dokter','btn-af-outline')}</p>`);
h+=c.section('Informasi Terbaru',c.grid(d.news.slice(0,3),x=>c.card(x,'#/artikel/berita/'+x.slug)));
h+=c.section('Majalah Kesehatan',c.grid(d.magazines.slice(0,4),magazineCard));
h+=c.section('Cerita pengunjung',c.grid([['Nara','Saya mudah menemukan menu jadwal.'],['Bima','Pilihan layanan tersusun dengan jelas.'],['Sari','Label demo membantu memahami isi preview.']],x=>`<article class="card-af card-body-af"><blockquote>“${e(x[1])}”</blockquote><p>${e(x[0])} · testimoni fiktif/demo</p></article>`));
h+=c.section('Rekanan Asuransi',`<div class="swiper partners-swiper"><div class="swiper-wrapper">${d.partners.filter(x=>x.active).map(x=>`<div class="swiper-slide partner">${e(x.name)}<br><small>Mitra fiktif</small></div>`).join('')}</div></div>`);
return h+c.section('Butuh bantuan? Hubungi kami',c.ctas());}
function profile(){return wrap('Profil Kami',`<div class="detail-grid"><aside class="detail-sidebar"><h2>Di halaman ini</h2>${['profil','sejarah','visi','akreditasi','pimpinan'].map(x=>`<p><a href="#${x}">${e(x)}</a></p>`).join('')}</aside><div><section id="profil"><h2>Profil RS</h2><p>${e(d.profile.intro)}</p>${c.media(d.banners[0])}${c.gallery(d.profile.gallery)}</section><section id="sejarah" class="section"><h2>Sejarah konsep</h2><div class="timeline">${d.profile.history.map(x=>`<article><h3>${x.year}</h3><p>${e(x.text)}</p></article>`).join('')}</div></section><section id="visi"><h2>Visi Misi dan Motto</h2><p>${e(d.profile.vision)}</p>${c.list(d.profile.mission)}<p>${e(A.config.tagline)}</p></section><section id="akreditasi" class="section"><h2>Akreditasi</h2><span class="chip">Simulasi profil institusi</span><p>Tidak ada sertifikat atau status akreditasi nyata yang diklaim oleh preview ini.</p></section><section id="pimpinan"><h2>Pimpinan fiktif</h2>${c.grid(d.profile.leaders,x=>`<article class="card-af card-body-af">${c.avatar(x)}<h3>${e(x)}</h3><p>Nama dan jabatan simulasi</p></article>`)}</section></div></div>`);}
function quality(year){const rows=year?d.quality.filter(x=>String(x.year)===String(year)):d.quality;return wrap('Indikator Mutu'+(year?' '+year:''),`<p class="notice">Angka fiktif untuk demonstrasi bagan. Bukan hasil pengukuran fasilitas nyata.</p><div class="row-flex">${d.quality.map(x=>c.link(x.year,'#/indikator-mutu/'+x.year,'btn-af-outline')).join('')}</div>${rows.map(x=>`<section style="margin-top:2rem"><h2>${x.year}</h2>${c.grid(x.indicators,i=>`<article class="card-af card-body-af"><h3>${e(i.name)}</h3><p>${i.value} ${e(i.unit)} · demo</p><div class="quality-bar" aria-hidden="true"><span style="width:${Math.min(i.value,100)}%"></span></div></article>`)}<div class="table-wrap"><table><thead><tr><th>Indikator</th><th>Nilai demo</th></tr></thead><tbody>${x.indicators.map(i=>`<tr><td>${e(i.name)}</td><td>${i.value} ${e(i.unit)}</td></tr>`).join('')}</tbody></table></div></section>`).join('')}`);}
function simpleSearch(path,q,label='Cari'){return `<form data-filter="${e(path)}" class="filters"><div><label for="query">${e(label)}</label><input id="query" name="q" value="${e(q.q||'')}" maxlength="120"></div><button class="btn-af">Cari</button>${c.link('Reset',u.hash(path),'btn-af-outline')}</form>`;}
function facilities(q={}){return wrap('Fasilitas Unggulan',simpleSearch('/fasilitas',q,'Cari fasilitas')+c.grid(d.facilities.filter(x=>u.matches(x.name+' '+x.summary,q.q)),c.facility,'facility-grid'));}
function facilityDetail(x){const idx=d.facilities.indexOf(x),before=d.facilities[(idx+14)%15],after=d.facilities[(idx+1)%15];return detail(x.name,x,`<h2>Informasi kebutuhan</h2>${c.list(x.indications)}<h2>Persiapan</h2>${c.list(x.preparation)}<h2>Alur kunjungan</h2>${steps(['Pilih poli','Konfirmasi','Daftar','Konsultasi','Tindak lanjut'])}`,'Fasilitas')+c.section('Dokter Terkait',c.grid(x.doctors.map(u.doctor).filter(Boolean),c.doctor))+c.section('Jelajahi fasilitas',`<div class="row-flex">${c.link('← '+before.name,'#/fasilitas/'+before.slug,'btn-af-outline')}${c.link(after.name+' →','#/fasilitas/'+after.slug,'btn-af-outline')}</div>`);}
function doctorFilters(path,q){return `<form data-filter="${e(path)}" class="filters"><div><label for="doctor-q">Nama dokter</label><input id="doctor-q" name="q" value="${e(q.q||'')}" maxlength="120"></div><div><label for="clinic">Poliklinik</label><select id="clinic" name="clinic"><option value="">Semua poliklinik</option>${d.clinics.map(x=>`<option value="${e(x.slug)}" ${q.clinic===x.slug?'selected':''}>${e(x.name)}</option>`).join('')}</select></div><div><label for="day">Hari praktik</label><select id="day" name="day"><option value="">Semua hari</option>${d.days.map(x=>`<option ${q.day===x?'selected':''} value="${x}">${x}</option>`).join('')}</select></div><button class="btn-af">Tampilkan</button>${c.link('Reset',u.hash(path),'btn-af-outline')}</form>`;}
function doctors(category='',q={},path='/dokter'){const source=category?d.doctors.filter(x=>x.category===category):d.doctors,pg=u.paginate(u.filterDoctors(source,q),q.page);return wrap(category?'Dokter & Psikolog · '+category:'Dokter & Psikolog',doctorFilters(path,q)+`<p role="status">${pg.count} profil ditemukan · seluruh nama fiktif</p>`+c.grid(pg.items,c.doctor)+c.pagination(pg,path,q));}
function doctorDetail(x){return wrap(x.name,`<div class="detail-grid"><aside class="card-af card-body-af">${c.avatar(x.name)}<p>${e(x.specialty)}</p><span class="chip">Nama fiktif</span>${x.clinics.map(s=>`<p>${c.link(u.clinic(s).name,'#/jadwal/'+s)}</p>`).join('')}${c.ctas()}</aside><div><h2>Tentang</h2><p>${e(x.about)}</p><div class="accordion-af"><details open><summary>Riwayat Pendidikan</summary>${c.list(x.education.map(y=>y.year+' · '+y.text))}</details><details><summary>Pelatihan</summary>${c.list(x.training.map(y=>y.year+' · '+y.text))}</details></div><h2>Jadwal Praktik</h2>${c.schedule([x])}${x.clinics.map(s=>c.link('Lihat Jadwal Poliklinik '+u.clinic(s).name,'#/jadwal/'+s,'btn-af-outline')).join('')}</div></div>`,'Dokter & Psikolog');}
function schedules(q={}){return wrap('Jadwal Poliklinik',simpleSearch('/jadwal',q,'Cari poliklinik')+c.grid(d.clinics.filter(x=>u.matches(x.name,q.q)),x=>`<article class="card-af card-body-af"><h2 style="font-size:1.2rem">${e(x.name)}</h2><p>${d.doctors.filter(doc=>doc.clinics.includes(x.slug)).length} dokter / psikolog</p>${c.link('Lihat jadwal','#/jadwal/'+x.slug,'btn-af-outline')}</article>`));}
function scheduleDetail(x){return wrap('Jadwal '+x.name,c.link('← Semua poliklinik','#/jadwal')+c.schedule(d.doctors.filter(doc=>doc.clinics.includes(x.slug)))+c.ctas(),'Jadwal');}
function sunday(){return wrap('Sunday Clinic',`<p>${e(A.config.hours.sunday)}. Jadwal Minggu diambil dari sumber data yang sama dengan tabel poliklinik.</p>`+c.grid(u.sundayDoctors(),x=>`<div>${c.doctor(x)}<p class="chip sunday">Minggu ${e(x.schedule.minggu.map(s=>s.join('–')).join(', '))} WIB</p></div>`)+c.updated()+c.register(true));}
function steps(a){return '<ol class="steps">'+a.map(x=>'<li>'+e(x)+'</li>').join('')+'</ol>';}
function service(x){let extra=`<h2>Informasi layanan</h2>${c.list(x.features)}`;if(x.slug==='rawat-jalan')extra+=`<h2>Alur Rawat Jalan</h2>${steps(['Daftar','Verifikasi','Poli','Pemeriksaan','Farmasi/Kasir'])}${c.link('Pilih Poliklinik','#/jadwal','btn-af-outline')}`;
let body=detail(x.name,x,extra,'Pelayanan');if(x.slug==='rawat-inap')body+=c.section('Pilihan Kamar',steps(['Administrasi','Konfirmasi kelas','Persiapan kamar','Perawatan','Rencana pulang'])+c.grid(d.pricing.classes,z=>c.plan(z,'room'))+`<p>Harga demo berlaku ${e(u.date(d.pricing.effectiveDate))}. Bukan penawaran.</p>`);
if(x.slug==='mcu')body+=c.section('Paket Medical Check Up',c.grid(d.pricing.mcu,z=>c.plan(z,'mcu'))+`<h2 style="margin-top:3rem">Persiapan MCU</h2><p>${e(A.config.hours.mcu)}</p><div class="accordion-af">${[['Puasa','Konfirmasikan apakah pemeriksaan yang dipilih membutuhkan puasa dan ikuti instruksi tenaga kesehatan.'],['Obat','Diskusikan daftar obat dengan dokter. Jangan mengubah penggunaan obat berdasarkan preview.'],['Pakaian','Tanyakan kebutuhan pakaian yang sesuai kepada petugas layanan nyata.'],['Dokumen','Konfirmasikan dokumen administrasi yang diperlukan. Jangan unggah dokumen pribadi ke preview.']].map(([t,b])=>`<details><summary>${e(t)}</summary><p>${e(b)}</p></details>`).join('')}</div>`);
body+=c.section('Ilustrasi layanan',c.gallery(x.gallery));if(['ugd','ambulans'].includes(x.slug))body+=c.section('Kontak '+x.name,c.emergency()+c.whatsapp(A.config.waAmbulance,'WhatsApp Ambulans')+`<p>${c.link(A.config.phoneAmbulance,u.tel(A.config.phoneAmbulance),'btn-danger-af')}</p><p>Nomor dummy. Jangan dipakai untuk mencari pertolongan nyata.</p>`);return body+c.section('Layanan lainnya',related());}
function magazineCard(x){return `<article class="card-af cover">${c.media(x)}<div class="card-body-af"><h3>${e(x.title)}</h3><p>${e(u.date(x.date))}</p>${c.button('Baca edisi','detail','btn-af-outline',`data-kind="magazine" data-id="${e(x.id)}"`)}</div></article>`;}
function magazines(q={}){const year=q.year||'2026';return wrap('Majalah Kesehatan',c.yearFilter('/artikel/majalah',q)+c.grid(d.magazines.filter(x=>year==='all'||String(x.year)===year),magazineCard));}
function events(q={}){const year=q.year||'2026';return wrap('Kegiatan',c.yearFilter('/artikel/kegiatan',q)+c.grid(d.events.filter(x=>year==='all'||String(x.year)===year),x=>c.card(x,'#/artikel/kegiatan/'+x.slug)));}
function eventDetail(x){return wrap(x.title,`<p>${e(u.date(x.date))}</p><p>${e(x.summary)}</p>${c.gallery(x.gallery)}<div class="related">${c.link('← Semua Kegiatan','#/artikel/kegiatan','btn-af-outline')}</div>`,'Kegiatan');}
function promos(q={}){const all=q.status==='all',items=d.promos.filter(x=>all||x.start<=u.today()&&x.end>=u.today());return wrap('Promo',`<div class="row-flex">${c.link('Aktif','#/artikel/promo','btn-af-outline')}${c.link('Semua','#/artikel/promo?status=all','btn-af-outline')}</div><p>Promo dummy untuk evaluasi tampilan, tanpa transaksi nyata.</p>`+c.grid(items,x=>`<article class="card-af">${c.media(x)}<div class="card-body-af"><h2 style="font-size:1.2rem">${e(x.title)}</h2><span class="chip">${x.end<u.today()?'Berakhir':x.start>u.today()?'Akan datang':'Aktif'}</span><p>${e(u.date(x.start))} – ${e(u.date(x.end))}</p><p>${e(x.summary)}</p>${c.button('Perbesar ilustrasi','image','btn-af-outline',`data-image="${e(x.image)}" data-alt="${e(x.alt)}"`)}</div></article>`));}
function videos(q={}){return wrap('Video Edukasi',`<div class="row-flex">${['Semua','Panduan','Informasi'].map(x=>c.link(x,u.hash('/artikel/video-edukasi',{category:x==='Semua'?'':x}),'btn-af-outline')).join('')}</div>`+c.grid(d.videos.filter(x=>!q.category||x.category===q.category),x=>`<article class="card-af">${c.media(x)}<div class="card-body-af"><span class="chip">${e(x.category)} · ${e(x.duration)}</span><h2 style="font-size:1.2rem">${e(x.title)}</h2><p>${e(x.summary)}</p>${c.button('Putar video','detail','btn-af-outline',`data-kind="video" data-id="${e(x.id)}"`)}</div></article>`));}
function news(q={}){const items=d.news.filter(x=>(!q.category||x.category===q.category)&&u.matches(x.title+' '+x.summary,q.q)),pg=u.paginate(items,q.page,6);return wrap('Berita & Info Kesehatan',simpleSearch('/artikel/berita',q,'Cari artikel')+`<div class="row-flex">${['Semua',...new Set(d.news.map(x=>x.category))].map(x=>c.link(x,u.hash('/artikel/berita',{...q,category:x==='Semua'?'':x,page:''}),'btn-af-outline')).join('')}</div><p role="status">${pg.count} artikel</p>`+c.grid(pg.items,x=>c.card(x,'#/artikel/berita/'+x.slug))+c.pagination(pg,'/artikel/berita',q));}
function newsDetail(x){return wrap(x.title,`<article class="reading"><p>${e(x.author)} · ${e(u.date(x.date))} · ${x.readingMinutes} menit baca</p>${c.media(x)}<div style="margin-top:2rem">${c.paragraphs(x.paragraphs.slice(0,2))}<h2>Langkah yang dapat diperhatikan</h2>${c.list(x.checklist)}<blockquote>${e(x.quote)}</blockquote>${c.paragraphs(x.paragraphs.slice(2))}</div><div class="row-flex">${c.button('Salin Tautan','share','btn-af-outline')}${c.button('Bagikan WhatsApp','share-wa','btn-wa')}</div><p class="notice">Konten bersifat umum dan bukan diagnosis. Konsultasikan kebutuhan kesehatan Anda kepada dokter.</p></article><div class="related"><h2>Artikel terkait</h2>${c.grid(d.news.filter(n=>n!==x).slice(0,3),n=>c.card(n,'#/artikel/berita/'+n.slug))}</div>`,'Berita');}
function insurance(){return wrap('Rekanan Asuransi',`<p>Semua nama mitra adalah rekaan. Pada layanan nyata, konfirmasikan kepesertaan, manfaat, dokumen, dan persetujuan penjaminan langsung dengan penyedia terkait.</p>`+c.grid(d.partners,x=>`<article class="partner"><h2 style="font-size:1.2rem">${e(x.name)}</h2><span class="chip">${x.active?'Aktif':'Nonaktif'} · demo</span></article>`));}
function careers(){return wrap('Karir',d.careers.length?`<p>Lowongan fiktif. Tidak ada rekrutmen nyata.</p><div class="table-wrap"><table><thead><tr><th>Posisi</th><th>Unit</th><th>Deadline</th><th>Aksi</th></tr></thead><tbody>${d.careers.map(x=>`<tr><td>${e(x.name)}</td><td>${e(x.unit)}</td><td>${e(u.date(x.deadline))}</td><td>${c.button('Lihat','detail','btn-af-outline',`data-kind="career" data-id="${e(x.id)}"`)}</td></tr>`).join('')}</tbody></table></div>`:c.empty('Saat ini belum ada lowongan, pantau halaman ini.'));}
function contact(){return wrap('Kontak',c.contactCards()+`<div class="detail-grid" style="margin-top:3rem"><div><h2>Lokasi demo</h2>${c.map()}</div><div><h2>Kirim Pesan Langsung</h2>${c.contactForm()}</div></div>`);}
function privacy(){return wrap('Kebijakan Privasi',`<article class="reading"><h2>Preview tanpa penyimpanan data</h2><p>Formulir hanya memvalidasi input di browser. Data tidak dikirim, disimpan di server, maupun dimasukkan ke analytics. Setelah simulasi berhasil, input dibersihkan. Throttle hanya menyimpan waktu pengiriman di memori selama halaman terbuka.</p><h2>Jangan memasukkan data kesehatan</h2><p>Gunakan data dummy. Jangan menulis diagnosis, hasil pemeriksaan, nomor rekam medis, atau dokumen identitas.</p><h2>Layanan pihak ketiga</h2><p>CDN dan font dapat menerima permintaan teknis saat dimuat. WhatsApp, email, Google Maps, serta video YouTube yang kelak dikonfigurasi memiliki kebijakan masing-masing. Tautan luar hanya dibuka setelah tindakan pengguna.</p><h2>Analytics</h2><p>Stub hanya mencatat nama peristiwa dan parameter kategori yang diizinkan. Kata pencarian, nama, email, telepon, dan pesan formulir tidak dicatat.</p><h2>Perubahan ke layanan nyata</h2><p>Kebijakan ini adalah contoh untuk demo. Sistem operasional memerlukan peninjauan privasi, persetujuan, dan pengamanan tersendiri sebelum menerima data nyata.</p></article>`);}
function disclaimer(){return wrap('Disclaimer & Transparansi Gambar AI',`<p>Website demo — seluruh data bersifat fiktif dan bukan layanan medis sebenarnya. Gambar di bawah dibuat dengan generative AI, bukan dokumentasi rumah sakit, pasien, alat, atau dokter nyata. Beberapa ilustrasi umum digunakan ulang di fasilitas, promo, berita, video, edisi majalah, dan album kegiatan. Bentuk peralatan tidak menjadi acuan klinis.</p><p>Logo berasal dari berkas pengguna. Avatar dokter berupa inisial CSS; fallback berupa ilustrasi SVG. Keduanya bukan foto dokter AI. Seluruh aset AI memiliki badge dan atribut data-ai-generated.</p><div class="table-wrap"><table class="ai-table"><thead><tr><th>File</th><th>Status dan lokasi</th><th>Alat dan prompt</th></tr></thead><tbody>${d.aiInventory.map(x=>`<tr><td>${e(x.file)}<br>${e(x.ratio)}</td><td>${e(x.status)}<br>${e(x.locations)}</td><td>${e(x.tool)}<br>${e(x.prompt)}</td></tr>`).join('')}</tbody></table></div>`);}
function search(q={}){return wrap('Pencarian Situs',`<form data-site-search class="filters"><div><label for="site-search">Cari layanan, dokter, poli, atau berita</label><input id="site-search" name="q" data-search-input value="${e(q.q||'')}" maxlength="120"></div><button class="btn-af">Cari</button></form><div data-search-results aria-live="polite">${A.search.render(q.q||'')}</div>`);}
const notFound=()=>wrap('Halaman tidak ditemukan',c.empty('Alamat yang Anda buka belum tersedia. Gunakan navigasi atau pencarian untuk melanjutkan.')+c.emergency());
Object.assign(A.pages,{wrap,home,profile,quality,facilities,facilityDetail,doctors,doctorDetail,schedules,scheduleDetail,sunday,service,magazines,events,eventDetail,promos,videos,news,newsDetail,insurance,careers,contact,privacy,disclaimer,search,notFound});
})(window.Alfa);

````

### js/router.js

````javascript
(function(A){'use strict';const u=A.utils,d=A.data,p=A.pages;const LEGACY_MAP={'/tentang/profil-kami':'/profil-kami','/tentang/indikator-mutu':'/indikator-mutu','/jadwal/Poliklinik-Anak':'/jadwal/anak','/kerja-sama':'/rekanan-asuransi','/karir':'/karir','/dokter/spesialis':'/dokter-spesialis','/dokter/umum':'/dokter-umum','/dokter/gigi-umum':'/dokter-gigi-umum','/dokter/gigi-spesialis':'/dokter-gigi-spesialis','/dokter/psikolog':'/psikolog','/sunday-clinic':'/sunday-clinic','/artikel/berita':'/artikel/berita','/artikel/majalah':'/artikel/majalah','/artikel/kegiatan':'/artikel/kegiatan','/kontak':'/kontak'};
d.facilities.forEach(f=>LEGACY_MAP['/fasilitas-unggulan/'+f.slug]='/fasilitas/'+f.slug);d.services.forEach(s=>LEGACY_MAP['/pelayanan/'+s.slug]='/pelayanan/'+s.slug);
function parse(hash=location.hash){const [raw,query='']=String(hash||'#/').replace(/^#/,'').split('?');let path;try{path=decodeURIComponent(raw).replace(/\/+$/,'')||'/';}catch{path='/404';}return {path,params:path.split('/').filter(Boolean),query:Object.fromEntries(new URLSearchParams(query))};}
function resolve(path,q={}){const exact={'/':['Beranda',p.home],'/profil-kami':['Profil Kami',p.profile],'/indikator-mutu':['Indikator Mutu',()=>p.quality()],'/fasilitas':['Fasilitas Unggulan',()=>p.facilities(q)],'/dokter':['Dokter & Psikolog',()=>p.doctors('',q)],'/jadwal':['Jadwal Poliklinik',()=>p.schedules(q)],'/sunday-clinic':['Sunday Clinic',p.sunday],'/artikel/promo':['Promo',()=>p.promos(q)],'/artikel/video-edukasi':['Video Edukasi',()=>p.videos(q)],'/artikel/majalah':['Majalah Kesehatan',()=>p.magazines(q)],'/artikel/berita':['Berita & Info Kesehatan',()=>p.news(q)],'/artikel/kegiatan':['Kegiatan',()=>p.events(q)],'/rekanan-asuransi':['Rekanan Asuransi',p.insurance],'/karir':['Karir',p.careers],'/kontak':['Kontak',p.contact],'/kebijakan-privasi':['Kebijakan Privasi',p.privacy],'/disclaimer-ai':['Disclaimer & Transparansi Gambar AI',p.disclaimer],'/cari':['Pencarian Situs',()=>p.search(q)]};
const categories={'/dokter-spesialis':'spesialis','/dokter-umum':'umum','/dokter-gigi-umum':'gigi-umum','/dokter-gigi-spesialis':'gigi-spesialis','/psikolog':'psikolog'};let pair=exact[path];if(categories[path])pair=['Direktori '+categories[path],()=>p.doctors(categories[path],q,path)];
if(!pair){const parts=path.split('/').filter(Boolean),id=parts.at(-1);let row;
if(parts.length===2&&parts[0]==='fasilitas'&&(row=d.facilities.find(x=>x.slug===id)))pair=[row.name,()=>p.facilityDetail(row)];
if(parts.length===2&&parts[0]==='dokter'&&(row=u.doctor(id)))pair=[row.name,()=>p.doctorDetail(row)];
if(parts.length===2&&parts[0]==='jadwal'&&(row=u.clinic(id)))pair=['Jadwal '+row.name,()=>p.scheduleDetail(row)];
if(parts.length===2&&parts[0]==='pelayanan'&&(row=d.services.find(x=>x.slug===id)))pair=[row.name,()=>p.service(row)];
if(parts.length===2&&parts[0]==='indikator-mutu'&&d.quality.some(x=>String(x.year)===id))pair=['Indikator Mutu '+id,()=>p.quality(id)];
if(parts.length===3&&parts[0]==='artikel'&&parts[1]==='berita'&&(row=d.news.find(x=>x.slug===id)))pair=[row.title,()=>p.newsDetail(row)];
if(parts.length===3&&parts[0]==='artikel'&&parts[1]==='kegiatan'&&(row=d.events.find(x=>x.slug===id)))pair=[row.title,()=>p.eventDetail(row)];}
return {title:pair?.[0]||'Halaman tidak ditemukan',render:pair?.[1]||p.notFound,notFound:!pair};}
function legacyTarget(v){const normalized='/'+String(v||'').replace(/^\/+|\/+$/g,'');const match=Object.keys(LEGACY_MAP).find(k=>k.toLowerCase()===normalized.toLowerCase());return match?LEGACY_MAP[match]:!resolve(normalized).notFound?normalized:'/404';}
function metadata(title,path){document.title=title+' — '+A.config.name;const description=title+' — informasi preview RS Alfasyimar. Seluruh data fiktif, bukan layanan medis nyata.';u.qs('meta[name="description"]').content=description;u.qs('meta[property="og:title"]').content=document.title;u.qs('meta[property="og:description"]').content=description;const base=A.config.siteUrl||location.href.split('#')[0].split('?')[0];u.qs('link[rel="canonical"]').href=base+'#'+path;u.qs('meta[property="og:url"]').content=base+'#'+path;u.qs('meta[property="og:image"]').content=new URL(A.config.iconLocal,base).href;u.qs('#schema').textContent=JSON.stringify({'@context':'https://schema.org','@type':'Hospital',name:A.config.name,description:'Fiktif untuk preview. Bukan rumah sakit atau layanan medis nyata.',url:base+'#'+path});}
function render(){const r=parse();if(!location.hash.startsWith('#/')&&location.hash){const target=document.getElementById(location.hash.slice(1));if(target){target.scrollIntoView();return;}}A.main.closeOverlays(false);A.main.destroyPage();const app=u.qs('#app'),progress=u.qs('#progress');progress.hidden=false;app.setAttribute('aria-busy','true');try{const route=resolve(r.path,r.query);app.innerHTML=route.render();metadata(route.title,r.path);u.qsa('#header a[aria-current="page"],#drawer a[aria-current="page"]').forEach(x=>x.removeAttribute('aria-current'));u.qsa('#header a,#drawer a').forEach(x=>{if(x.getAttribute('href')==='#'+r.path)x.setAttribute('aria-current','page');});A.main.initPage();window.scrollTo(0,0);app.focus({preventScroll:true});u.qs('#announcement').textContent=route.title;if(r.path.startsWith('/dokter/'))A.main.track('doctor_profile_view');if(r.path.startsWith('/jadwal'))A.main.track('schedule_view');}catch(err){console.error('Gagal merender halaman',err);app.innerHTML=p.wrap('Halaman belum dapat dimuat','<p>Silakan kembali ke beranda atau muat ulang preview.</p>'+A.components.link('Beranda','#/','btn-af'));}finally{app.setAttribute('aria-busy','false');progress.hidden=true;}}
function start(){if(!location.hash){const old=new URLSearchParams(location.search).get('p');if(old){history.replaceState(null,'',location.pathname+'#'+legacyTarget(old));}else{const match=Object.keys(LEGACY_MAP).find(k=>location.pathname.toLowerCase().endsWith(k.toLowerCase()));history.replaceState(null,'',location.href+'#'+(match?LEGACY_MAP[match]:'/'));}}window.addEventListener('hashchange',render);render();}
Object.assign(A.router,{parse,resolve,LEGACY_MAP,legacyTarget,render,start});
})(window.Alfa);

````

### js/search.js

````javascript
(function(A){'use strict';const u=A.utils,c=A.components,d=A.data;let index=[];
function init(){index=[...d.facilities.map(x=>({group:'Fasilitas',title:x.name,summary:x.summary,path:'/fasilitas/'+x.slug})),...d.doctors.map(x=>({group:'Dokter',title:x.name,summary:x.specialty,path:'/dokter/'+x.id})),...d.clinics.map(x=>({group:'Poliklinik',title:x.name,summary:x.summary,path:'/jadwal/'+x.slug})),...d.services.map(x=>({group:'Layanan',title:x.name,summary:x.summary,path:'/pelayanan/'+x.slug})),...d.news.map(x=>({group:'Berita',title:x.title,summary:x.summary,path:'/artikel/berita/'+x.slug}))];}
function find(query){const q=u.normalize(query).slice(0,120);if(!q)return [];return index.map(x=>({...x,score:(u.normalize(x.title)===q?100:0)+(u.normalize(x.title).includes(q)?30:0)+(u.normalize(x.summary).includes(q)?5:0)})).filter(x=>u.matches(x.title+' '+x.summary,q)).sort((a,b)=>b.score-a.score).slice(0,30);}
function render(q){if(!q.trim())return '<p>Ketik kata kunci untuk mencari fasilitas, dokter, poliklinik, layanan, dan berita.</p>';const hits=find(q);if(!hits.length)return c.empty();return ['Fasilitas','Dokter','Poliklinik','Layanan','Berita'].map(group=>{const rows=hits.filter(x=>x.group===group);return rows.length?`<section style="margin:2rem 0"><h2>${u.esc(group)}</h2>${c.grid(rows,x=>`<article class="card-af card-body-af"><h3>${c.link(x.title,'#'+x.path)}</h3><p class="line-clamp-2">${u.esc(x.summary)}</p></article>`)}</section>`:'';}).join('');}
Object.assign(A.search,{init,find,render});
})(window.Alfa);

````

### js/main.js

````javascript
(function(A){'use strict';const u=A.utils,c=A.components,d=A.data,e=u.esc;let swipers=[],bsCarousel=null,hero=null,heroIndex=0,heroTimer=null,heroPaused=false,lightbox=null,observer=null,lastSubmit=-Infinity,overlay=null,trigger=null,bsModal=null,bsDrawer=null;
const events=new Set(['cta_emergency_click','cta_whatsapp_click','cta_register_click','doctor_profile_view','schedule_view','filter_change','outbound_error']);
function track(event,params={}){if(!events.has(event))return;const safe={};if(['doctor','year','category'].includes(params.filter))safe.filter=params.filter;console.debug('[Alfasyimar demo]',event,safe);if(Array.isArray(window.dataLayer))window.dataLayer.push({event,...safe});}
function toast(message){const el=document.createElement('div');el.className='toast-af';el.textContent=message;u.qs('#toasts').append(el);setTimeout(()=>el.remove(),6500);}
function setInert(value){['#topbar','#header','#app','#footer','#floating'].forEach(s=>{u.qs(s).inert=value;});document.body.style.overflow=value?'hidden':'';}
function afterClose(restore=true){setInert(false);const target=trigger;overlay=null;trigger=null;u.qs('.af-backdrop')?.remove();if(restore&&target?.isConnected)target.focus();}
function closeModal(restore=true){const el=u.qs('#modal');if(bsModal){bsModal.hide();}else{el.classList.remove('show');el.removeAttribute('aria-modal');el.setAttribute('aria-hidden','true');}u.qs('#modal-body').replaceChildren();afterClose(restore);}
function closeDrawer(restore=true){const el=u.qs('#drawer');if(bsDrawer)bsDrawer.hide();else{el.classList.remove('show');el.removeAttribute('aria-modal');el.setAttribute('aria-hidden','true');}afterClose(restore);}
function closeMenus(){u.qsa('.nav-group.open').forEach(g=>{g.classList.remove('open');g.querySelector('button').setAttribute('aria-expanded','false');});}
function closeOverlays(restore=true){if(overlay==='modal')closeModal(restore);else if(overlay==='drawer')closeDrawer(restore);closeMenus();}
function openModal(title,html){closeOverlays(false);trigger=document.activeElement;const el=u.qs('#modal');u.qs('#modal-title').textContent=title;u.qs('#modal-body').innerHTML=html;overlay='modal';setInert(true);try{if(window.bootstrap?.Modal){bsModal=bootstrap.Modal.getOrCreateInstance(el,{backdrop:true,keyboard:true});bsModal.show();}else throw new Error('fallback');}catch{el.classList.add('show');el.setAttribute('role','dialog');el.setAttribute('aria-modal','true');el.removeAttribute('aria-hidden');}setTimeout(()=>u.qs('input,button,a[href]',el)?.focus(),0);}
function openDrawer(){closeOverlays(false);trigger=document.activeElement;const el=u.qs('#drawer');overlay='drawer';setInert(true);try{if(window.bootstrap?.Offcanvas){bsDrawer=bootstrap.Offcanvas.getOrCreateInstance(el,{backdrop:true,keyboard:true});bsDrawer.show();}else throw new Error('fallback');}catch{el.classList.add('show');el.setAttribute('role','dialog');el.setAttribute('aria-modal','true');el.removeAttribute('aria-hidden');const back=document.createElement('div');back.className='af-backdrop';back.addEventListener('click',()=>closeDrawer());document.body.append(back);}setTimeout(()=>u.qs('button',el)?.focus(),0);}
function openDetail(kind,id){let x,title,html;if(kind==='room'){x=d.pricing.classes.find(v=>v.key===id);if(x){title='Kamar '+x.name;html=c.media(x)+c.list(x.facilities)+`<div class="table-wrap"><table><thead><tr><th>Komponen</th><th>Harga demo</th></tr></thead><tbody>${x.rates.map(r=>`<tr><td>${e(r.label)}</td><td>${e(u.rupiah(r.price))}</td></tr>`).join('')}</tbody></table></div>`;}}
if(kind==='mcu'){x=d.pricing.mcu.find(v=>v.key===id);if(x){title='Paket '+x.name;html=`<p><strong>${e(u.rupiah(x.price))}</strong> · ${e(x.targetGender)}</p>${c.list(x.items)}<p>${e(x.notes)}</p>`;}}
if(['room','mcu'].includes(kind)&&x)html+=`<p class="notice">Harga contoh/demo. Berlaku ${e(u.date(d.pricing.effectiveDate))}. Tidak ada transaksi atau reservasi melalui preview.</p>${c.ctas()}`;
if(kind==='magazine'){x=d.magazines.find(v=>v.id===id);if(x){title=x.title;html=c.media(x)+`<p>${e(u.date(x.date))}</p><p>${e(x.summary)}</p>`+(x.pdfUrl?c.link('Buka PDF',x.pdfUrl,'btn-af'):c.button('PDF belum tersedia (demo)','unavailable','btn-af-outline'));}}
if(kind==='video'){x=d.videos.find(v=>v.id===id);if(x){title=x.title;html=/^[\w-]{11}$/.test(x.youtubeId)?`<iframe title="${e(x.title)}" src="https://www.youtube-nocookie.com/embed/${e(x.youtubeId)}" width="720" height="405" style="width:100%;aspect-ratio:16/9;border:0" loading="lazy" allow="fullscreen" referrerpolicy="strict-origin-when-cross-origin"></iframe><p>Jika video tidak dimuat, periksa koneksi atau baca ringkasan berikut.</p><p>${e(x.summary)}</p>`:`${c.media(x)}<h3 style="margin-top:1rem">Video belum tersedia (demo)</h3><p>${e(x.summary)}</p>`;}}
if(kind==='career'){x=d.careers.find(v=>v.id===id);if(x){title=x.name;html=`<p>${e(x.unit)} · ${e(u.date(x.deadline))}</p><p>${e(x.description)}</p><p>Alamat contoh: ${e(A.config.careerEmail)}</p>${c.link('Email contoh','mailto:'+A.config.careerEmail,'btn-af-outline')}`;}}
if(x)openModal(title,html);else toast('Konten tidak tersedia.');}
function showHero(index){const slides=u.qsa('.hero-swiper .swiper-slide');if(!slides.length)return;heroIndex=(index+slides.length)%slides.length;if(hero)hero.slideTo(heroIndex);else if(bsCarousel)bsCarousel.to(heroIndex);else slides.forEach((s,i)=>{s.style.display=i===heroIndex?'block':'none';});slides.forEach((s,i)=>{s.inert=i!==heroIndex;});u.qsa('.hero-pagination button').forEach((b,i)=>b.setAttribute('aria-pressed',String(i===heroIndex)));}
function startHero(){clearInterval(heroTimer);if(!heroPaused&&!u.reduced()&&!document.hidden)heroTimer=setInterval(()=>showHero(heroIndex+1),6000);}
function initPage(){try{if(window.AOS){document.documentElement.classList.add('aos-ready');AOS.init({duration:700,easing:'ease-out-cubic',once:true,offset:80,disable:u.reduced()});AOS.refreshHard();}}catch{document.documentElement.classList.remove('aos-ready');}
heroIndex=0;heroPaused=u.reduced();const hs=u.qs('.hero-swiper');if(hs){u.qs('.hero-pagination').innerHTML=d.banners.map((b,i)=>c.button(String(i+1),'hero-go','',`data-index="${i}" aria-label="Slide ${i+1}" aria-pressed="${i===0}"`)).join('');try{if(window.Swiper){hero=new Swiper(hs,{slidesPerView:1,speed:u.reduced()?0:450,on:{slideChange(s){heroIndex=s.activeIndex;u.qsa('.hero-swiper .swiper-slide').forEach((el,i)=>el.inert=i!==heroIndex);}}});swipers.push(hero);}}catch{hero=null;}if(!hero&&window.bootstrap?.Carousel){try{hs.classList.add('carousel');hs.querySelector('.swiper-wrapper').classList.add('carousel-inner');u.qsa('.swiper-slide',hs).forEach((s,i)=>{s.classList.add('carousel-item');s.classList.toggle('active',i===0);});bsCarousel=new bootstrap.Carousel(hs,{interval:false,ride:false,touch:true});}catch{bsCarousel=null;}}showHero(0);startHero();hs.addEventListener('mouseenter',()=>clearInterval(heroTimer));hs.addEventListener('mouseleave',startHero);hs.addEventListener('focusin',()=>clearInterval(heroTimer));hs.addEventListener('focusout',startHero);}
['doctors','partners'].forEach(name=>{const el=u.qs('.'+name+'-swiper');if(!el)return;try{if(window.Swiper){const s=new Swiper(el,{slidesPerView:1.15,spaceBetween:20,breakpoints:{600:{slidesPerView:2},1000:{slidesPerView:4}},keyboard:{enabled:true}});swipers.push(s);}else{el.querySelector('.swiper-wrapper').style.cssText='display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:20px';}}catch{el.querySelector('.swiper-wrapper').style.display='block';}});
try{if(window.GLightbox)lightbox=GLightbox({selector:'.unused-lightbox-selector',touchNavigation:true});}catch{lightbox=null;}
if('IntersectionObserver' in window&&!u.reduced()){observer=new IntersectionObserver(entries=>entries.forEach(en=>{if(!en.isIntersecting)return;const el=en.target,max=Number(el.dataset.count),start=performance.now();function tick(t){const f=Math.min(1,(t-start)/900);el.textContent=Math.round(max*f).toLocaleString('id-ID');if(f<1&&el.isConnected)requestAnimationFrame(tick);}requestAnimationFrame(tick);observer.unobserve(el);}));u.qsa('[data-count]').forEach(el=>observer.observe(el));}}
function destroyPage(){clearInterval(heroTimer);try{bsCarousel?.dispose();}catch{}bsCarousel=null;swipers.forEach(s=>{try{s.destroy(true,true);}catch{}});swipers=[];hero=null;try{lightbox?.destroy();}catch{}lightbox=null;observer?.disconnect();}
function validate(values){const errors={};if(values.name.trim().length<3)errors.name='Nama minimal 3 karakter.';if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))errors.email='Masukkan email yang valid.';if(!/^(\+62|62|0)8[1-9][0-9]{6,10}$/.test(values.phone.trim()))errors.phone='Masukkan nomor HP Indonesia yang valid.';if(values.message.trim().length<10||values.message.length>500)errors.message='Pesan harus 10–500 karakter.';if(!values.consent)errors.consent='Persetujuan privasi diperlukan.';return errors;}
function submitContact(form){const values=Object.fromEntries(new FormData(form)),errors=validate({...values,consent:!!values.consent});const summary=u.qs('.error-summary',form);u.qs('.success',form).hidden=true;u.qsa('.invalid-feedback',form).forEach(x=>x.textContent='');u.qsa('[name]',form).forEach(x=>{x.classList.remove('is-invalid');x.removeAttribute('aria-invalid');});if(values.website){summary.textContent='Simulasi ditolak. Kosongkan bidang tambahan.';return;}if(performance.now()-lastSubmit<30000){summary.textContent='Tunggu 30 detik sebelum mencoba kembali.';return;}if(Object.keys(errors).length){summary.textContent='Periksa kembali bidang yang ditandai.';Object.entries(errors).forEach(([name,msg])=>{const field=form.elements[name];field.classList.add('is-invalid');field.setAttribute('aria-invalid','true');document.getElementById(field.getAttribute('aria-describedby')).textContent=msg;});form.elements[Object.keys(errors)[0]].focus();return;}lastSubmit=performance.now();summary.textContent='';form.reset();u.qs('.counter',form).textContent='0 / 500';const success=u.qs('.success',form);success.hidden=false;success.focus();toast('Simulasi berhasil. Tidak ada data dikirim atau disimpan.');}
function image(src,alt){src=u.safeUrl(src);if(!src)return;try{if(lightbox){lightbox.setElements([{href:src,type:'image',title:'Ilustrasi AI — '+alt}]);lightbox.open();return;}}catch{}openModal('Ilustrasi AI',c.media({image:src,alt,ai:true}));}
function share(wa=false){const url=location.protocol==='file:'?A.config.siteUrl?A.config.siteUrl+location.hash:'':location.href;if(!url){toast('Bagikan setelah preview dihosting; alamat file lokal tidak dapat diakses orang lain.');return;}if(wa){window.open('https://wa.me/?text='+encodeURIComponent(document.title+' '+url),'_blank','noopener,noreferrer');return;}if(navigator.clipboard?.writeText)navigator.clipboard.writeText(url).then(()=>toast('Tautan disalin.')).catch(()=>openModal('Salin tautan',`<label for="copy">Tautan</label><input id="copy" readonly value="${e(url)}">`));else openModal('Salin tautan',`<label for="copy">Tautan</label><input id="copy" readonly value="${e(url)}">`);}
function toggleMenu(button,force){const g=button.closest('.nav-group'),open=force??!g.classList.contains('open');closeMenus();g.classList.toggle('open',open);button.setAttribute('aria-expanded',String(open));}
function bind(){document.addEventListener('click',ev=>{const tracked=ev.target.closest('[data-track]');if(tracked)track(tracked.dataset.track);const b=ev.target.closest('[data-action]');if(!b){if(!ev.target.closest('.nav-group'))closeMenus();if(ev.target===u.qs('#modal'))closeModal();return;}ev.preventDefault();switch(b.dataset.action){case'menu':toggleMenu(b);break;case'drawer':openDrawer();break;case'close-drawer':closeDrawer();break;case'close-modal':closeModal();break;case'contact':openModal('Kirim Pesan Langsung',c.contactForm('modal-contact'));break;case'search':openModal('Pencarian Situs',`<form data-site-search><label for="modal-search">Cari situs</label><input id="modal-search" name="q" data-search-input maxlength="120" placeholder="Dokter, layanan, atau poliklinik"><button class="btn-af">Lihat semua hasil</button></form><div data-search-results aria-live="polite"></div>`);break;case'detail':openDetail(b.dataset.kind,b.dataset.id);break;case'image':image(b.dataset.image,b.dataset.alt);break;case'hero-prev':showHero(heroIndex-1);break;case'hero-next':showHero(heroIndex+1);break;case'hero-go':showHero(Number(b.dataset.index));break;case'hero-pause':heroPaused=!heroPaused;b.textContent=heroPaused?'Lanjutkan':'Jeda';b.setAttribute('aria-pressed',String(heroPaused));startHero();break;case'top':window.scrollTo({top:0,behavior:u.reduced()?'auto':'smooth'});break;case'unavailable':toast('Belum tersedia pada preview. Hubungi kanal informasi demo.');track('outbound_error');break;case'share':share();break;case'share-wa':share(true);break;}});
document.addEventListener('submit',ev=>{const form=ev.target;if(form.matches('[data-contact]')){ev.preventDefault();submitContact(form);}else if(form.matches('[data-filter]')){ev.preventDefault();const q=Object.fromEntries(new FormData(form));location.hash=u.hash(form.dataset.filter,q);track('filter_change',{filter:form.elements.year?'year':'doctor'});}else if(form.matches('[data-site-search]')){ev.preventDefault();location.hash=u.hash('/cari',{q:form.elements.q.value.slice(0,120)});if(location.hash===u.hash('/cari',{q:form.elements.q.value.slice(0,120)}))A.router.render();}});
document.addEventListener('change',ev=>{if(ev.target.matches('[data-auto-submit]'))ev.target.form.requestSubmit();});
const searchInput=u.debounce(input=>{if(!input.isConnected)return;const root=input.closest('.modal-body')||u.qs('#app'),out=u.qs('[data-search-results]',root);if(out)out.innerHTML=A.search.render(input.value.slice(0,120));});document.addEventListener('input',ev=>{if(ev.target.matches('[data-search-input]'))searchInput(ev.target);if(ev.target.matches('[data-contact] textarea'))u.qs('.counter',ev.target.form).textContent=ev.target.value.length+' / 500';});
document.addEventListener('keydown',ev=>{if((ev.ctrlKey||ev.metaKey)&&ev.key.toLowerCase()==='k'){ev.preventDefault();u.qs('[data-action="search"]').click();return;}if(ev.key==='Escape'){if(overlay){ev.preventDefault();closeOverlays();}else{const open=u.qs('.nav-group.open');closeMenus();open?.querySelector('button').focus();}}if(overlay&&ev.key==='Tab'){const root=u.qs(overlay==='modal'?'#modal':'#drawer');const focus=u.qsa('a[href],button,input,select,textarea,summary,[tabindex="0"]',root).filter(x=>!x.disabled&&x.getClientRects().length&&!x.closest('[hidden]'));if(focus.length){const first=focus[0],last=focus.at(-1);if(ev.shiftKey&&(document.activeElement===first||!root.contains(document.activeElement))){ev.preventDefault();last.focus();}else if(!ev.shiftKey&&document.activeElement===last){ev.preventDefault();first.focus();}}}const g=ev.target.closest('.nav-group');if(g&&['ArrowDown','ArrowUp'].includes(ev.key)){ev.preventDefault();toggleMenu(g.querySelector('button'),true);const links=u.qsa('a',g),i=links.indexOf(document.activeElement);links[(i+(ev.key==='ArrowDown'?1:-1)+links.length)%links.length]?.focus();}});
u.qsa('.nav-group').forEach(g=>{g.addEventListener('mouseenter',()=>{if(matchMedia('(min-width:992px) and (hover:hover)').matches)toggleMenu(g.querySelector('button'),true);});g.addEventListener('mouseleave',()=>{if(!g.contains(document.activeElement))closeMenus();});});
u.qs('#modal').addEventListener('hidden.bs.modal',()=>{u.qs('#modal-body').replaceChildren();if(overlay==='modal')afterClose();});u.qs('#drawer').addEventListener('hidden.bs.offcanvas',()=>{if(overlay==='drawer')afterClose();});
document.addEventListener('load',ev=>{const img=ev.target;if(img.tagName==='IMG'&&img.dataset.fallback==='true'){const badge=img.closest('.media-ai')?.querySelector('.ai-badge');if(badge)badge.textContent='Ilustrasi SVG · pengganti';img.removeAttribute('data-ai-generated');}},true);
window.addEventListener('scroll',()=>u.qs('#header').classList.toggle('scrolled',scrollY>24),{passive:true});document.addEventListener('visibilitychange',()=>document.hidden?clearInterval(heroTimer):startHero());window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',()=>{destroyPage();initPage();});}
function start(){c.shell();A.search.init();bind();A.router.start();}
Object.assign(A.main={},{track,toast,openModal,closeModal,closeDrawer,closeOverlays,initPage,destroyPage,validate,submitContact,start});if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})(window.Alfa);

````

### 404.html

````html
<!doctype html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Mengarahkan — RS Alfasyimar</title><meta name="af-base-path" content=""><style>body{font:18px/1.7 system-ui;background:#f6fafd;color:#0a2f66;margin:10vh auto;max-width:650px;padding:24px}a{color:#0b4fa0}</style></head><body><h1>Mengarahkan ke preview</h1><p>Jika pengalihan tidak berlangsung, <a id="back" href="index.html">buka Beranda</a>.</p><script>(function(){var parts=location.pathname.split('/').filter(Boolean),custom=document.querySelector('meta[name="af-base-path"]').content,base=custom||'/';if(location.protocol==='file:')base=location.pathname.slice(0,location.pathname.lastIndexOf('/')+1);else if(!custom&&location.hostname.endsWith('.github.io')&&parts.length&&!['tentang','fasilitas-unggulan','fasilitas','jadwal','pelayanan','artikel','dokter','karir','kerja-sama','404.html'].includes(parts[0]))base='/'+parts[0]+'/';if(!base.endsWith('/'))base+='/';var old='/'+location.pathname.slice(base.length).replace(/^\//,'');var target=base+'index.html'+(location.hash.startsWith('#/')?location.hash:old==='/404.html'||old==='/'?'#/':'?p='+encodeURIComponent(old));document.getElementById('back').href=target;location.replace(target);})();</script></body></html>

````

### robots.txt

````text
User-agent: *
Allow: /

````

### .nojekyll

File kosong, 0 byte.

### README.md

````markdown
# RS Alfasyimar

Preview sementara website rumah sakit fiktif. Semua nama dokter, jadwal, harga, alamat, kontak, artikel, kegiatan, dan lowongan adalah data dummy. Bukan layanan medis atau sistem pendaftaran nyata.

Tagline dipertahankan persis: **Coring with Heart, Healing with Trust**.

## Isi proyek

- 42 titik navigasi utama, ditambah katalog, profil dokter, jadwal poliklinik, artikel, album, legal, pencarian, dan 404.
- 15 fasilitas, 25 poliklinik, 36 dokter/psikolog dalam 5 kategori, 10 layanan, 5 kelas rawat inap, 7 paket MCU.
- 6 promo, 6 video dengan state belum tersedia, 8 edisi majalah, 8 berita, 5 album masing-masing 6 ilustrasi, indikator mutu 2022–2026.
- 17 gambar AI unik dalam WebP serta 11 salinan untuk penamaan sampul dan galeri profil. Penggunaan ulang dinyatakan di halaman transparansi. Tidak ada foto wajah dokter AI; profil memakai avatar inisial CSS.
- Formulir hanya simulasi lokal, tidak melakukan pengiriman atau penyimpanan data. Data input dibersihkan setelah validasi berhasil.

## Preview

1. Ekstrak ZIP terlebih dahulu; jangan membuka HTML dari dalam aplikasi arsip.
2. Buka `alfasyimar/index.html` dengan browser modern.
3. Navigasi menggunakan hash seperti `#/jadwal/anak`, sehingga tidak membutuhkan server rewrite atau build.
4. Internet memungkinkan font dan library CDN dimuat. Ketika tidak tersedia, CSS lokal, menu fallback, slider dasar, dialog, pencarian, dan data lokal tetap digunakan.
5. Untuk penyajian penuh saat benar-benar offline, vendor library/font secara lokal terlebih dahulu dan ubah referensinya. Paket ini mengikuti spesifikasi CDN; tidak mengklaim seluruh library eksternal disertakan.

Seluruh JavaScript klasik. Tidak ada `type="module"`, import, fetch data lokal, backend, API key, atau proses instalasi.

## Deploy GitHub Pages dalam lima langkah

1. Buat repository baru pada akun GitHub Anda.
2. Unggah **isi folder alfasyimar**, termasuk `.nojekyll`, ke root repository. Jangan hanya mengunggah folder pembungkusnya jika ingin root menjadi halaman awal.
3. Commit ke branch `main`.
4. Buka **Settings → Pages → Deploy from branch → main → /(root) → Save**.
5. Setelah publikasi selesai, buka alamat yang diberikan GitHub. Coba `#/jadwal`, `#/pelayanan/rawat-inap`, pencarian, dan tombol kembali browser.

Preview ini belum dipublikasikan otomatis. Atur `siteUrl` di `js/config.js` sesudah memiliki URL final agar canonical dan pembagian tautan sesuai. Hash SPA mempunyai keterbatasan indexing per rute dan pratinjau sosial; untuk SEO produksi diperlukan pendekatan prerender atau halaman HTML terpisah.

## Struktur dan urutan file

`index.html` memuat CSS, script CDN, lalu `js/config.js`, delapan file data, `utils.js`, `components.js`, `pages.js`, `router.js`, `search.js`, dan `main.js`. Data berada di `window.ALFA_DATA`; API aplikasi berada di `window.Alfa`.

- `css/tw-lite.css`: utility ringan yang benar-benar didefinisikan; bukan Tailwind CDN.
- `css/theme.css`: token brand, tipografi, warna, fokus, dan reduced motion.
- `css/components.css`: tombol, kartu, shell, menu, overlay, jadwal, dan formulir.
- `css/pages.css`: beranda, slider, detail, album, dan bagan.
- `js/data/nav.js`: urutan, label, path, dan visibility menu.
- `js/data/facilities.js`: fasilitas, deskripsi, persiapan, dan relasi dokter.
- `js/data/clinics.js`: poliklinik.
- `js/data/doctors.js`: dokter, pendidikan dummy, pelatihan dummy, dan satu sumber jadwal tujuh hari.
- `js/data/services.js`: layanan reguler/24 jam dan galeri.
- `js/data/pricing.js`: harga berversi dan tanggal efektif.
- `js/data/content.js`: banner, promo, video, majalah, berita, kegiatan, dan mutu.
- `js/data/misc.js`: profil, mitra, karir, serta inventaris prompt gambar.

## Mengedit data

Gunakan editor teks UTF-8. Pertahankan tanda kutip, koma, kurung, serta ID/slug yang dirujuk antarobjek.

Kontak dan tautan diubah **hanya di `js/config.js`**: `phoneMain`, `phoneEmergency`, `phoneAmbulance`, `waPoli`, `waAmbulance`, `waComplaint`, `email`, `careerEmail`, `address`, `mapUrl`, `social`, `registrationUrl`, dan `sundayRegistrationUrl`. Semua nomor saat ini dummy. Jangan menggunakan nomor demo untuk mencari bantuan nyata.

Untuk menambah dokter, salin satu objek lengkap di `doctors.js`, gunakan ID unik, pilih kategori, dan isi `clinics` dengan slug yang tersedia. `schedule` wajib mempunyai tujuh kunci hari. Hari kosong memakai `[]`; dua sesi memakai dua pasangan waktu. Sunday Clinic otomatis mengambil dokter dengan slot `minggu`, tanpa tabel tambahan. Perbarui `updatedAt`; data lebih dari 30 hari mendapat badge konfirmasi.

Tambahkan fasilitas dengan slug unik, metadata gambar, serta ID dokter yang benar. Untuk menyembunyikan menu set `visible:false`; urutan memakai `order`. Konten lain dapat dihapus dari array; halaman daftar menampilkan empty state jika hasil kosong. Field `status` dan `updatedAt` mendokumentasikan perubahan; lakukan pencatatan versi melalui Git. Preview tidak menyediakan CMS berbasis peran; CMS sesungguhnya membutuhkan backend dan kontrol akses.

Harga di `pricing.js` tidak mewakili tagihan. Saat mengubah nilai, ubah `effectiveDate`, `updatedAt`, catatan, komponen tarif, dan rincian paket secara konsisten. Tidak ada klaim bahwa paket cocok untuk semua orang.

## Logo dan gambar

Logo dan ikon lokal sudah disertakan dari lampiran pengguna. Header/footer mencoba URL logo yang ditentukan terlebih dahulu lalu fallback ke lokal. Jika mengganti paket di masa depan, unduh kedua sumber berikut ke nama file yang sama:

- Logo: https://uploads.onecompiler.io/42bwrvdku/1792750712383/Logo.png → `assets/img/logo.png`.
- Ikon: https://uploads.onecompiler.io/42bwrvdku/1792752429857/icon.png → `assets/img/icon.png`.

Jangan mengubah warna atau proporsi logo. Semua ilustrasi AI sudah tersedia di `assets/img/ai/`. File WebP dioptimalkan; metadata alt, kredit, prompt, dan label penggunaan ulang disediakan. Delapan edisi majalah memiliki nama file masing-masing tetapi memakai satu ilustrasi editorial yang sama. Tiga gambar profil berasal dari visual hero. Album demo memakai enam ilustrasi konsep, bukan foto kegiatan nyata.

Untuk mengganti gambar: simpan WebP di path terkait, pertahankan dimensi/rasio, ubah alt yang deskriptif dan inventaris prompt. `components.media()` memberi `data-ai-generated="true"` dan badge. Bila aset gagal, `placeholder.svg` dipakai dan badge berubah menjadi pengganti SVG. Peta adalah ilustrasi abstrak CSS; Google Maps hanya dibuka lewat tautan pengguna.

## Video dan PDF

ID video sengaja kosong. Isi `youtubeId` dengan ID 11 karakter yang Anda berhak gunakan untuk mengaktifkan pemutar `youtube-nocookie` di modal. Pemutar baru dimuat saat dibuka dan dihapus saat ditutup. Jika gagal dimuat, ringkasan tetap tersedia.

PDF edisi tidak dibuat karena tidak ada isi majalah lengkap dalam spesifikasi. `pdfUrl` kosong menampilkan state **PDF belum tersedia (demo)**. Letakkan PDF yang sah di `assets/docs/` dan isi path relatifnya untuk mengaktifkan tautan. Tidak ada file PDF kosong yang disamarkan sebagai terbitan.

## Formulir dan privasi

Validasi meliputi nama minimal 3 karakter, email, pola HP Indonesia, pesan 10–500 karakter, persetujuan, honeypot, dan throttle 30 detik di memori. Tidak ada fetch, beacon, XHR, localStorage, atau pengiriman PII. Tautan WhatsApp memakai pesan pembuka tetap tanpa isi formulir. `mailto:` hanya berisi alamat contoh.

`formEndpoint` tersedia kosong sebagai titik konfigurasi untuk pengembangan berikutnya. Mengisi nilai itu **tidak otomatis mengirim**. Integrasi Formspree/Formsubmit memerlukan implementasi eksplisit dan peninjauan privasi, consent, penanganan respons, serta pengamanan sebelum diaktifkan. Preview tetap lokal.

## Navigasi dan fallback

`router.js` memuat lebih dari 15 pemetaan `LEGACY_MAP`. Query `?p=/tentang/profil-kami` diarahkan ke hash baru. Path yang tidak dikenal menuju 404, bukan diam-diam beranda. `404.html` mendukung root dan pola repository GitHub Pages; untuk custom hosting pada subfolder isi meta `af-base-path` dengan base yang tepat seperti `/preview/`. Redirect ini client-side, bukan HTTP 301.

Bootstrap mengelola modal/offcanvas ketika tersedia. Fallback lokal menangani dialog, Escape, fokus, backdrop, dan penguncian latar. Swiper mengelola slider; fallback hero memakai Bootstrap Carousel jika tersedia, lalu slider vanilla. AOS/GLightbox memiliki guard. Reduced motion menonaktifkan animasi non-esensial dan autoplay.

## Analytics

`Alfa.main.track(event, params)` hanya menerima tujuh event yang diwajibkan: `cta_emergency_click`, `cta_whatsapp_click`, `cta_register_click`, `doctor_profile_view`, `schedule_view`, `filter_change`, `outbound_error`. Stub memakai `console.debug` dan menambahkan ke `window.dataLayer` jika array tersebut sudah ada. Hanya parameter filter yang diizinkan; tidak ada nama, nomor, email, pesan, atau kata pencarian.

## Teknologi

HTML5, Bootstrap 5.3.3, Bootstrap Icons 1.11.3, AOS 2.3.4, Swiper 11, GLightbox 3.3.0, Plus Jakarta Sans, Inter, CSS lokal, dan JavaScript vanilla klasik. Tidak ada dependensi runtime tambahan atau build step.

## QA dan batas penggunaan

Lihat `QA.md` untuk hasil yang benar-benar diuji. Pemeriksaan Node mencakup 127 rute dan 151 assertion. Browser QA menggunakan Chrome melalui HTTP lokal; pemeriksaan langsung file://, Firefox, Safari, pengujian pembaca layar menyeluruh, dan Core Web Vitals produksi belum dilakukan. Ini adalah paket preview, bukan sertifikasi WCAG atau sistem produksi siap menerima pasien.

Sebelum menjadi situs operasional: verifikasi seluruh konten dan kontak, gunakan gambar yang tepat/berlisensi, sediakan kebijakan resmi, integrasikan pendaftaran dan backend secara aman, lalu jalankan QA lintas browser dan aksesibilitas lengkap. Untuk preview sementara, data dummy dapat dipertahankan.

````

### assets/img/placeholder.svg

````xml
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675"><defs><linearGradient id="g"><stop stop-color="#0A2F66"/><stop offset="1" stop-color="#087351"/></linearGradient></defs><rect width="1200" height="675" fill="url(#g)"/><rect x="430" y="150" width="340" height="320" rx="30" fill="white" opacity=".15"/><path d="M580 210h40v80h80v40h-80v80h-40v-80h-80v-40h80z" fill="white"/><text x="600" y="530" text-anchor="middle" font-family="sans-serif" fill="white" font-size="30">ALFASYIMAR</text><text x="600" y="580" text-anchor="middle" font-family="sans-serif" fill="white" font-size="20">Ilustrasi pengganti SVG — bukan fasilitas nyata</text></svg>
````

## Paket Gambar AI dan Prompt

17 gambar unik dihasilkan dengan OpenAI Image Generation. Sebelas file tambahan adalah salinan untuk penamaan sampul dan galeri, bukan gambar baru. Semua 28 file sudah tersedia. Prompt berbahasa Inggris berikut adalah prompt aktual aset sumber, termasuk pada salinannya. Logo pengguna dan avatar CSS tidak masuk daftar AI.

| File | Rasio | Pemakaian dan status | Prompt |
|---|---|---|---|
| assets/img/ai/hero-1.webp | 16:9 | Slot sesuai nama; sebagian digunakan ulang pada fasilitas, berita, promo, video, dan album. Tidak mewakili alat medis tertentu. | Photorealistic modern hospital lobby, white space, oak reception, blue teal accents, tropical greenery, daylight, no people, no logos, no text. |
| assets/img/ai/hero-2.webp | 16:9 | Slot sesuai nama; sebagian digunakan ulang pada fasilitas, berita, promo, video, dan album. Tidak mewakili alat medis tertentu. | Photorealistic architectural AI concept illustration for fictional Alfasyimar hospital. A calm contemporary outpatient waiting area with empty curved blue seating and tropical plants. Wide 16:9 single image. Bright natural light, white walls, soft blue teal green accents (#1B84E0 #12B5A6 #3CC172), realistic materials, professional warm healthcare design. No people, no logos, no text, no watermarks, no brand marks. |
| assets/img/ai/hero-3.webp | 16:9 | Slot sesuai nama; sebagian digunakan ulang pada fasilitas, berita, promo, video, dan album. Tidak mewakili alat medis tertentu. | Photorealistic architectural AI concept illustration for fictional Alfasyimar hospital. A bright hospital consultation room with an empty desk and two chairs, no people. Wide 16:9 single image. Bright natural light, white walls, soft blue teal green accents (#1B84E0 #12B5A6 #3CC172), realistic materials, professional warm healthcare design. No people, no logos, no text, no watermarks, no brand marks. |
| assets/img/ai/kamar-vvip.webp | 16:9 | Slot sesuai nama; sebagian digunakan ulang pada fasilitas, berita, promo, video, dan album. Tidak mewakili alat medis tertentu. | Photorealistic architectural AI concept illustration for fictional Alfasyimar hospital. A premium spacious single hospital patient suite, one hospital bed, separate sitting area, oak cabinetry. Wide 16:9 single image. Bright natural light, white walls, soft blue teal green accents (#1B84E0 #12B5A6 #3CC172), realistic materials, professional warm healthcare design. No people, no logos, no text, no watermarks, no brand marks. |
| assets/img/ai/kamar-vip.webp | 16:9 | Slot sesuai nama; sebagian digunakan ulang pada fasilitas, berita, promo, video, dan album. Tidak mewakili alat medis tertentu. | Photorealistic architectural AI concept illustration for fictional Alfasyimar hospital. A comfortable single hospital room, one adjustable hospital bed, teal armchair, large daylight window. Wide 16:9 single image. Bright natural light, white walls, soft blue teal green accents (#1B84E0 #12B5A6 #3CC172), realistic materials, professional warm healthcare design. No people, no logos, no text, no watermarks, no brand marks. |
| assets/img/ai/kamar-kelas-1.webp | 16:9 | Slot sesuai nama; sebagian digunakan ulang pada fasilitas, berita, promo, video, dan album. Tidak mewakili alat medis tertentu. | Photorealistic architectural AI concept illustration for fictional Alfasyimar hospital. A clean two-bed hospital inpatient room, privacy curtains open, blue linens. Wide 16:9 single image. Bright natural light, white walls, soft blue teal green accents (#1B84E0 #12B5A6 #3CC172), realistic materials, professional warm healthcare design. No people, no logos, no text, no watermarks, no brand marks. |
| assets/img/ai/kamar-kelas-2.webp | 16:9 | Slot sesuai nama; sebagian digunakan ulang pada fasilitas, berita, promo, video, dan album. Tidak mewakili alat medis tertentu. | Photorealistic architectural AI concept illustration for fictional Alfasyimar hospital. A practical three-bed hospital inpatient room, privacy curtains and teal accents. Wide 16:9 single image. Bright natural light, white walls, soft blue teal green accents (#1B84E0 #12B5A6 #3CC172), realistic materials, professional warm healthcare design. No people, no logos, no text, no watermarks, no brand marks. |
| assets/img/ai/kamar-kelas-3.webp | 16:9 | Slot sesuai nama; sebagian digunakan ulang pada fasilitas, berita, promo, video, dan album. Tidak mewakili alat medis tertentu. | Photorealistic architectural AI concept illustration for fictional Alfasyimar hospital. A bright four-bed hospital ward, evenly spaced beds with privacy curtains, tidy and dignified. Wide 16:9 single image. Bright natural light, white walls, soft blue teal green accents (#1B84E0 #12B5A6 #3CC172), realistic materials, professional warm healthcare design. No people, no logos, no text, no watermarks, no brand marks. |
| assets/img/ai/ugd.webp | 16:9 | Slot sesuai nama; sebagian digunakan ulang pada fasilitas, berita, promo, video, dan album. Tidak mewakili alat medis tertentu. | One photorealistic AI concept illustration for fictional Alfasyimar hospital: empty emergency department treatment bay with stretcher and monitoring equipment. Clean modern interior, natural daylight, soft blue teal green palette, premium but believable, landscape 16:9 unless portrait specified. No people, readable text, logos, identifiable brands or watermarks. |
| assets/img/ai/mcu-hero.webp | 16:9 | Slot sesuai nama; sebagian digunakan ulang pada fasilitas, berita, promo, video, dan album. Tidak mewakili alat medis tertentu. | One photorealistic AI concept illustration for fictional Alfasyimar hospital: preventive check-up examination suite with blood pressure station and examination bed. Clean modern interior, natural daylight, soft blue teal green palette, premium but believable, landscape 16:9 unless portrait specified. No people, readable text, logos, identifiable brands or watermarks. |
| assets/img/ai/lab.webp | 16:9 | Slot sesuai nama; sebagian digunakan ulang pada fasilitas, berita, promo, video, dan album. Tidak mewakili alat medis tertentu. | One photorealistic AI concept illustration for fictional Alfasyimar hospital: clean diagnostic laboratory, microscope and sample racks without labels. Clean modern interior, natural daylight, soft blue teal green palette, premium but believable, landscape 16:9 unless portrait specified. No people, readable text, logos, identifiable brands or watermarks. |
| assets/img/ai/radiologi.webp | 16:9 | Slot sesuai nama; sebagian digunakan ulang pada fasilitas, berita, promo, video, dan album. Tidak mewakili alat medis tertentu. | One photorealistic AI concept illustration for fictional Alfasyimar hospital: modern CT scan suite with circular scanner and control room window. Clean modern interior, natural daylight, soft blue teal green palette, premium but believable, landscape 16:9 unless portrait specified. No people, readable text, logos, identifiable brands or watermarks. |
| assets/img/ai/ambulans.webp | 16:9 | Slot sesuai nama; sebagian digunakan ulang pada fasilitas, berita, promo, video, dan album. Tidak mewakili alat medis tertentu. | One photorealistic AI concept illustration for fictional Alfasyimar hospital: unbranded white ambulance with teal stripe parked under a hospital canopy, no symbols. Clean modern interior, natural daylight, soft blue teal green palette, premium but believable, landscape 16:9 unless portrait specified. No people, readable text, logos, identifiable brands or watermarks. |
| assets/img/ai/farmasi.webp | 16:9 | Slot sesuai nama; sebagian digunakan ulang pada fasilitas, berita, promo, video, dan album. Tidak mewakili alat medis tertentu. | One photorealistic AI concept illustration for fictional Alfasyimar hospital: hospital pharmacy with orderly anonymous white packages on shelving. Clean modern interior, natural daylight, soft blue teal green palette, premium but believable, landscape 16:9 unless portrait specified. No people, readable text, logos, identifiable brands or watermarks. |
| assets/img/ai/kamar-operasi.webp | 16:9 | Slot sesuai nama; sebagian digunakan ulang pada fasilitas, berita, promo, video, dan album. Tidak mewakili alat medis tertentu. | One photorealistic AI concept illustration for fictional Alfasyimar hospital: empty modern operating room with surgical lights and operating table. Clean modern interior, natural daylight, soft blue teal green palette, premium but believable, landscape 16:9 unless portrait specified. No people, readable text, logos, identifiable brands or watermarks. |
| assets/img/ai/rehab.webp | 16:9 | Slot sesuai nama; sebagian digunakan ulang pada fasilitas, berita, promo, video, dan album. Tidak mewakili alat medis tertentu. | One photorealistic AI concept illustration for fictional Alfasyimar hospital: bright rehabilitation gym with parallel walking bars and exercise equipment. Clean modern interior, natural daylight, soft blue teal green palette, premium but believable, landscape 16:9 unless portrait specified. No people, readable text, logos, identifiable brands or watermarks. |
| assets/img/ai/majalah.webp | 3:4 | Slot sesuai nama; sebagian digunakan ulang pada fasilitas, berita, promo, video, dan album. Tidak mewakili alat medis tertentu. | One photorealistic AI concept illustration for fictional Alfasyimar hospital: editorial still life of blank white magazine beside tropical leaf and teal stethoscope, portrait 3:4. Clean modern interior, natural daylight, soft blue teal green palette, premium but believable, landscape 16:9 unless portrait specified. No people, readable text, logos, identifiable brands or watermarks. |
| assets/img/ai/majalah-2026-10.webp | 3:4 | Sampul Ruang Sehat 2026 Edisi 10; salinan ilustrasi majalah umum yang sengaja digunakan ulang. | One photorealistic AI concept illustration for fictional Alfasyimar hospital: editorial still life of blank white magazine beside tropical leaf and teal stethoscope, portrait 3:4. Clean modern interior, natural daylight, soft blue teal green palette, premium but believable, landscape 16:9 unless portrait specified. No people, readable text, logos, identifiable brands or watermarks. |
| assets/img/ai/majalah-2026-4.webp | 3:4 | Sampul Ruang Sehat 2026 Edisi 4; salinan ilustrasi majalah umum yang sengaja digunakan ulang. | One photorealistic AI concept illustration for fictional Alfasyimar hospital: editorial still life of blank white magazine beside tropical leaf and teal stethoscope, portrait 3:4. Clean modern interior, natural daylight, soft blue teal green palette, premium but believable, landscape 16:9 unless portrait specified. No people, readable text, logos, identifiable brands or watermarks. |
| assets/img/ai/majalah-2025-10.webp | 3:4 | Sampul Ruang Sehat 2025 Edisi 10; salinan ilustrasi majalah umum yang sengaja digunakan ulang. | One photorealistic AI concept illustration for fictional Alfasyimar hospital: editorial still life of blank white magazine beside tropical leaf and teal stethoscope, portrait 3:4. Clean modern interior, natural daylight, soft blue teal green palette, premium but believable, landscape 16:9 unless portrait specified. No people, readable text, logos, identifiable brands or watermarks. |
| assets/img/ai/majalah-2025-4.webp | 3:4 | Sampul Ruang Sehat 2025 Edisi 4; salinan ilustrasi majalah umum yang sengaja digunakan ulang. | One photorealistic AI concept illustration for fictional Alfasyimar hospital: editorial still life of blank white magazine beside tropical leaf and teal stethoscope, portrait 3:4. Clean modern interior, natural daylight, soft blue teal green palette, premium but believable, landscape 16:9 unless portrait specified. No people, readable text, logos, identifiable brands or watermarks. |
| assets/img/ai/majalah-2024-10.webp | 3:4 | Sampul Ruang Sehat 2024 Edisi 10; salinan ilustrasi majalah umum yang sengaja digunakan ulang. | One photorealistic AI concept illustration for fictional Alfasyimar hospital: editorial still life of blank white magazine beside tropical leaf and teal stethoscope, portrait 3:4. Clean modern interior, natural daylight, soft blue teal green palette, premium but believable, landscape 16:9 unless portrait specified. No people, readable text, logos, identifiable brands or watermarks. |
| assets/img/ai/majalah-2024-4.webp | 3:4 | Sampul Ruang Sehat 2024 Edisi 4; salinan ilustrasi majalah umum yang sengaja digunakan ulang. | One photorealistic AI concept illustration for fictional Alfasyimar hospital: editorial still life of blank white magazine beside tropical leaf and teal stethoscope, portrait 3:4. Clean modern interior, natural daylight, soft blue teal green palette, premium but believable, landscape 16:9 unless portrait specified. No people, readable text, logos, identifiable brands or watermarks. |
| assets/img/ai/majalah-2023-10.webp | 3:4 | Sampul Ruang Sehat 2023 Edisi 10; salinan ilustrasi majalah umum yang sengaja digunakan ulang. | One photorealistic AI concept illustration for fictional Alfasyimar hospital: editorial still life of blank white magazine beside tropical leaf and teal stethoscope, portrait 3:4. Clean modern interior, natural daylight, soft blue teal green palette, premium but believable, landscape 16:9 unless portrait specified. No people, readable text, logos, identifiable brands or watermarks. |
| assets/img/ai/majalah-2023-4.webp | 3:4 | Sampul Ruang Sehat 2023 Edisi 4; salinan ilustrasi majalah umum yang sengaja digunakan ulang. | One photorealistic AI concept illustration for fictional Alfasyimar hospital: editorial still life of blank white magazine beside tropical leaf and teal stethoscope, portrait 3:4. Clean modern interior, natural daylight, soft blue teal green palette, premium but believable, landscape 16:9 unless portrait specified. No people, readable text, logos, identifiable brands or watermarks. |
| assets/img/ai/tentang-kami-1.webp | 16:9 | Galeri profil; ilustrasi konsep yang digunakan ulang dari hero. | Photorealistic modern hospital lobby, white space, oak reception, blue teal accents, tropical greenery, daylight, no people, no logos, no text. |
| assets/img/ai/tentang-kami-2.webp | 16:9 | Galeri profil; ilustrasi konsep yang digunakan ulang dari hero. | Photorealistic architectural AI concept illustration for fictional Alfasyimar hospital. A calm contemporary outpatient waiting area with empty curved blue seating and tropical plants. Wide 16:9 single image. Bright natural light, white walls, soft blue teal green accents (#1B84E0 #12B5A6 #3CC172), realistic materials, professional warm healthcare design. No people, no logos, no text, no watermarks, no brand marks. |
| assets/img/ai/tentang-kami-3.webp | 16:9 | Galeri profil; ilustrasi konsep yang digunakan ulang dari hero. | Photorealistic architectural AI concept illustration for fictional Alfasyimar hospital. A bright hospital consultation room with an empty desk and two chairs, no people. Wide 16:9 single image. Bright natural light, white walls, soft blue teal green accents (#1B84E0 #12B5A6 #3CC172), realistic materials, professional warm healthcare design. No people, no logos, no text, no watermarks, no brand marks. |

### Pratinjau gambar unik

![Ilustrasi AI assets/img/ai/hero-1.webp](alfasyimar/assets/img/ai/hero-1.webp)

![Ilustrasi AI assets/img/ai/hero-2.webp](alfasyimar/assets/img/ai/hero-2.webp)

![Ilustrasi AI assets/img/ai/hero-3.webp](alfasyimar/assets/img/ai/hero-3.webp)

![Ilustrasi AI assets/img/ai/kamar-vvip.webp](alfasyimar/assets/img/ai/kamar-vvip.webp)

![Ilustrasi AI assets/img/ai/kamar-vip.webp](alfasyimar/assets/img/ai/kamar-vip.webp)

![Ilustrasi AI assets/img/ai/kamar-kelas-1.webp](alfasyimar/assets/img/ai/kamar-kelas-1.webp)

![Ilustrasi AI assets/img/ai/kamar-kelas-2.webp](alfasyimar/assets/img/ai/kamar-kelas-2.webp)

![Ilustrasi AI assets/img/ai/kamar-kelas-3.webp](alfasyimar/assets/img/ai/kamar-kelas-3.webp)

![Ilustrasi AI assets/img/ai/ugd.webp](alfasyimar/assets/img/ai/ugd.webp)

![Ilustrasi AI assets/img/ai/mcu-hero.webp](alfasyimar/assets/img/ai/mcu-hero.webp)

![Ilustrasi AI assets/img/ai/lab.webp](alfasyimar/assets/img/ai/lab.webp)

![Ilustrasi AI assets/img/ai/radiologi.webp](alfasyimar/assets/img/ai/radiologi.webp)

![Ilustrasi AI assets/img/ai/ambulans.webp](alfasyimar/assets/img/ai/ambulans.webp)

![Ilustrasi AI assets/img/ai/farmasi.webp](alfasyimar/assets/img/ai/farmasi.webp)

![Ilustrasi AI assets/img/ai/kamar-operasi.webp](alfasyimar/assets/img/ai/kamar-operasi.webp)

![Ilustrasi AI assets/img/ai/rehab.webp](alfasyimar/assets/img/ai/rehab.webp)

![Ilustrasi AI assets/img/ai/majalah.webp](alfasyimar/assets/img/ai/majalah.webp)


## Checklist QA

# Hasil QA preview Alfasyimar

Tanggal pemeriksaan: 24 Oktober 2026. Hasil berlaku pada paket source dan data dummy yang disertakan. Tidak ada klaim bahwa preview sudah menjadi sistem operasional rumah sakit.

## Pemeriksaan otomatis

151 dari 151 assertion lulus. Sebanyak 127 rute dirender melalui Node VM, termasuk 42 titik navigasi utama, profil dokter, jadwal poli, detail artikel, album, indikator mutu, dan halaman sistem. Setiap hasil mempunyai tepat satu H1. Semua path aset pada data ditemukan. Sintaks semua file JavaScript lulus `node --check`.

Jumlah terverifikasi: 15 fasilitas, 25 poliklinik, 36 dokter/psikolog, 5 kategori, 5 kelas kamar, 7 MCU, 6 promo, 6 video, 8 majalah, 8 berita, 5 kegiatan, serta indikator mutu lima tahun. Setiap poli mempunyai minimal satu dokter. Deskripsi fasilitas berjumlah 60–120 kata; isi paragraf berita 150–250 kata. Album mempunyai enam ilustrasi.

Semua 28 file WebP tersedia: 17 gambar AI unik ditambah 11 salinan bernama untuk majalah/profil. Ukuran terbesar 144.202 byte, seluruhnya di bawah 200 KB. Salinan dinyatakan sebagai penggunaan ulang, bukan generasi unik tambahan.

## Checklist bagian 21

| Pemeriksaan | Hasil | Bukti dan batas |
|---|---|---|
| file:// dan urutan script | ⚠️ | Script klasik dan urutan lulus inspeksi; HTTP Chrome berhasil. Pembukaan file:// langsung belum diuji pada browser lokal pengguna. |
| Semua 42 navigasi dan legacy | ✅ | 42 menu termasuk dalam 127 rute yang dirender; legacy map lebih dari 15; path tidak dikenal menuju 404. Tidak seluruhnya diklik satu per satu di browser. |
| Mega menu dan offcanvas | ⚠️ | Implementasi desktop/mobile tersedia; drawer mobile dibuka dalam frame 360. Pemeriksaan keyboard menyeluruh dan semua kombinasi focus/hover belum lengkap. |
| Kelengkapan data | ✅ | Jumlah dan relasi data lulus assertion. |
| Multi-slot, kosong, Minggu | ✅ | Jadwal tujuh hari, slot ganda/kosong, dan Sunday Clinic dari sumber yang sama lulus assertion. Tanggal serta badge data lama tersedia. |
| Modal kamar dan MCU | ✅ | Dialog kamar VVIP berhasil dibuka/ditutup di Chrome. Dialog MCU juga berhasil tanpa CDN; Escape menutup. Semua kelas/paket memakai komponen yang sama. |
| Filter tahun majalah/kegiatan | ⚠️ | Majalah tahun 2022 menampilkan empty state di Chrome. Logika kegiatan sama dan render lulus; semua kombinasi pilihan belum diuji interaktif. |
| Form kontak | ✅ | Browser: input kosong menampilkan lima pesan error, dummy valid menghasilkan panel sukses, Escape menutup. Validasi unit menolak kosong/menerima dummy. Honeypot/throttle ada pada source; tidak semua batas waktu diuji interaktif. Source tidak memiliki pengiriman data. |
| CTA tel, WA, pendaftaran | ✅ | Format dan sumber config diperiksa. Tidak ada panggilan/WA/email sungguhan yang dilakukan. |
| AI badge, alt, transparansi, fallback | ✅ | Aset, alt, badge, atribut dan inventaris tersedia. 17 visual unik dibuat; semua slot menggunakan aset tersedia atau salinan. Fallback SVG ada dan tidak diklaim sebagai AI. |
| Logo ikon favicon | ✅ | Logo tampil di browser; salinan lokal dan fallback tersedia. Ikon lokal disertakan. |
| Responsif dan reduced motion | ⚠️ | Beranda dalam frame 360/768/1024/1440 tidak overflow horizontal. Bukan uji semua halaman pada semua ukuran. Reduced motion diterapkan dalam source; preferensi sistem belum diuji manual. |
| Kontras, heading, label, SEO | ⚠️ | H1 per rute, label, skip link, lang id, meta dan JSON-LD terpasang. Pasangan warna utama lulus 4,5:1; belum audit WCAG/pembaca layar lengkap. |
| README | ✅ | Preview, lima langkah GitHub Pages, aset, edit data/kontak, CDN, batas CMS/backend dan integrasi form dijelaskan. |
| Orisinalitas dan demo | ✅ | Data dibuat untuk simulasi; nama/harga/kontak tidak disalin dari rumah sakit referensi. Foto AI berlabel, tidak ada klaim akreditasi nyata. |

## Pemeriksaan browser tambahan

Chrome melalui preview HTTP lokal: beranda tampil; navigasi ke direktori dokter berjalan; filter Anak menghasilkan satu profil; validasi form kosong dan sukses dummy berjalan; modal VVIP terbuka dengan tarif dan tanggal efektif; majalah 2022 menghasilkan pesan tidak ada hasil. Halaman uji tanpa pemuatan CSS/JS CDN tetap merender MCU dan dialognya, serta drawer awal berstatus hidden.

Log browser yang diamati tidak menunjukkan kesalahan aplikasi. Ada pesan kesalahan dari ekstensi lingkungan browser yang terpisah dari source situs; pesan tersebut tidak dikategorikan sebagai error aplikasi. Ini tidak berarti semua skenario runtime telah terbukti bebas error.

Temuan yang telah diperbaiki: ukuran intrinsik Swiper sempat memperlebar kolom hero; diperbaiki dengan min-width nol dan minmax pada grid. Fallback offcanvas kini tersembunyi sejak awal walaupun CSS Bootstrap tidak dimuat. Path legacy tak dikenal diarahkan ke 404.

## Kontras warna utama

| Pasangan | Rasio |
|---|---:|
| Body #475569 pada putih | 7,58:1 |
| Muted #64748B pada putih | 4,76:1 |
| Putih pada biru tombol #0A448A | 9,52:1 |
| Putih pada teal tombol #096B75 | 6,23:1 |
| Putih pada hijau tombol #087351 | 5,86:1 |
| Putih pada merah #B9163A | 6,48:1 |
| Teks #073B25 pada WhatsApp #25D366 | 6,37:1 |

Rasio dihitung dari luminansi sRGB. Audit ini memeriksa warna utama, bukan setiap piksel, overlay transparan, foto, state hover, atau komponen eksternal.

## Belum diuji

- Firefox, Safari, perangkat fisik, file:// langsung, serta semua rute pada semua ukuran layar.
- Core Web Vitals produksi, cache/CDN di hosting nyata, SEO crawler dan social preview.
- Audit WCAG 2.2 AA menyeluruh, pembaca layar, semua urutan keyboard, dan reduced-motion pada preferensi sistem.
- Video nyata, PDF majalah, layanan WhatsApp/telepon, pendaftaran eksternal, pengiriman form/backend. Semua sengaja berupa data dummy atau state belum tersedia.

Paket dapat digunakan untuk review visual dan alur preview. Jangan menyatakan lulus produksi berdasarkan checklist ini.

## Spesifikasi sumber lengkap

Dokumen sumber berikut dipertahankan utuh sebagai acuan. Pernyataan di bagian [16] bahwa AI tidak dapat membuat binary sudah digantikan oleh instruksi terbaru pengguna untuk membuat gambar. Paket ini memuat gambar yang benar-benar dihasilkan.

# MASTER PROMPT — Website Rumah Sakit "Alfasyimar"
### (Cloning struktur & fitur dari PRD "Reverse Engineering RS Mitra Medika Healthcare")

> Cara pakai: Salin SELURUH isi dokumen ini (mulai dari bagian `[1] PERAN`) ke AI coding assistant (Claude, ChatGPT, Gemini, dll.). Jika AI kehabisan batas output, balas dengan kata "LANJUT" dan AI wajib meneruskan dari file terakhir sesuai protokol di bagian `[20]`.
> Hasil akhir: folder website statis yang bisa langsung dipreview (klik dua kali `index.html`) dan dihosting di GitHub Pages.

---

## [1] PERAN (ROLE)

Kamu adalah Senior Front-End Engineer + UI/UX Designer yang berspesialisasi pada website rumah sakit/healthcare modern, aksesibel, dan ringan. Kamu menguasai HTML5 semantik, Bootstrap 5.3, CSS modern (custom properties, grid, flex), JavaScript vanilla (ES2020, tanpa build tool), AOS, serta praktik SEO dan WCAG 2.2 AA. Kamu menulis kode lengkap, rapi, berkomentar seperlunya, dan siap produksi, bukan potongan/pseudocode.

---

## [2] TUJUAN & DELIVERABLE

Bangun website statis multi-halaman virtual (SPA ber-hash-router) untuk rumah sakit fiktif bernama "Alfasyimar" (tagline: *"Coring with Heart, Healing with Trust"* — tulis persis seperti pada logo, jangan dikoreksi).

Website ini adalah kloning struktur informasi, susunan layout, dan fitur dari situs referensi yang dideskripsikan dalam PRD (bagian [11]–[13] di bawah merangkum PRD tersebut). Yang dikloning adalah arsitektur dan fiturnya, BUKAN konten, teks, foto, nama dokter, atau harga aslinya.

Deliverable wajib:
1. Seluruh file project (HTML, CSS, JS, data, README) ditulis lengkap — dilarang memakai `...`, `// sisanya sama`, atau `TODO` sebagai pengganti kode.
2. Bisa dipreview offline dengan membuka `index.html` langsung dari file (protokol `file://`).
3. Bisa dihosting di GitHub Pages tanpa build step dan tanpa backend.
4. README berisi cara preview, deploy ke GitHub Pages, dan cara mengedit konten.

---

## [3] ATURAN MUTLAK (NON-NEGOTIABLE)

1. Orisinalitas konten. Semua teks, nama dokter, jadwal, harga, nomor telepon, berita, dan promo adalah data fiktif/demo buatan kamu. Jangan menyalin teks, nama orang, nomor telepon, atau harga dari RS Mitra Medika atau RS nyata lain.
2. Label demo yang jelas. Tampilkan: (a) pita/banner tipis di footer *"Website demo — seluruh data bersifat fiktif dan bukan layanan medis sebenarnya"*, (b) halaman Disclaimer & Transparansi Gambar AI yang ditautkan di footer. Nomor telepon/WA memakai format placeholder jelas (mis. `0561-000-0000`, `0811-0000-0000`) dan semuanya diatur dari satu file `data/config.js`.
3. Transparansi gambar AI. Setiap gambar ilustratif/foto yang dibuat dengan generative AI wajib: (a) diberi badge kecil "Ilustrasi AI" (komponen `.ai-badge`, pojok gambar), (b) atribut `data-ai-generated="true"`, (c) alt text deskriptif, (d) dicatat di halaman Disclaimer & Transparansi Gambar AI beserta daftar prompt-nya. Jangan pernah menampilkan gambar AI seolah-olah foto asli RS, pasien, atau dokter nyata.
4. Tanpa foto wajah dokter AI sebagai default. Foto profil dokter default = avatar inisial bergradasi brand (CSS). Foto AI hanya opsional jika file tersedia, tetap dengan badge "Ilustrasi AI".
5. Tidak ada klaim medis berbahaya. Konten edukasi bersifat umum, selalu diakhiri kalimat anjuran konsultasi ke dokter. Jangan membuat klaim kesembuhan/angka efektivitas.
6. Tanpa backend & tanpa API key. Jangan menaruh secret apa pun. Form kontak tidak mengirim data ke server (lihat [14.9]).
7. Tanpa bahasa Inggris pada UI kecuali istilah baku (Sunday Clinic, Medical Check Up, ICU, dsb.). Bahasa utama: Indonesia. Zona waktu WIB, format rupiah `Rp 1.250.000`, tanggal `23 Oktober 2026`.
8. Jangan menghapus fitur yang tercantum di [13]. Jika sebuah fitur tidak mungkin tanpa backend, implementasikan versi statis yang setara seperti dijelaskan di tabel [13].

---

## [4] TECH STACK (WAJIB PERSIS)

| Kebutuhan | Pilihan | Catatan |
|---|---|---|
| Markup | HTML5 semantik | `header`, `nav`, `main`, `section`, `article`, `footer`, `aside` |
| Framework CSS | Bootstrap 5.3.3 (CSS + JS bundle) | Grid, navbar, offcanvas, modal, accordion, carousel, tabs, toast |
| Gaya "ala Tailwind" | `css/tw-lite.css` buatan sendiri | Utility class + design token seperti Tailwind (lihat [7.5]); JANGAN memakai Tailwind CDN/compile |
| CSS kustom | `css/theme.css`, `css/components.css`, `css/pages.css` | Memakai CSS custom properties |
| Animasi scroll | AOS 2.3.4 | `AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 80 })`, hormati `prefers-reduced-motion` |
| Icon | Bootstrap Icons 1.11.3 (utama) | Brand sosial/WA sudah tersedia (`bi-whatsapp`, `bi-facebook`, `bi-instagram`, `bi-youtube`) |
| Slider/carousel | Swiper 11 (hero, artikel, logo mitra) | Alternatif: Bootstrap Carousel bila Swiper gagal dimuat |
| Lightbox galeri | GLightbox 3.3.0 | Galeri promo & kegiatan |
| Font | Google Fonts: "Plus Jakarta Sans" (heading, 600/700/800) + "Inter" (body, 400/500/600) | Sertakan fallback `system-ui, sans-serif` dan `display=swap` |
| JavaScript | Vanilla JS klasik (non-module) | Jangan pakai `type="module"`/`import`/`fetch` file lokal — agar `file://` tetap jalan |
| Data | File `.js` yang mengisi `window.ALFA_DATA` | Bukan `.json` (fetch ke file lokal diblokir browser) |

CDN (pin versi, urutan muat benar):
```html
<!-- CSS -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/glightbox@3.3.0/dist/css/glightbox.min.css" rel="stylesheet">
<!-- JS (sebelum </body>) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/glightbox@3.3.0/dist/js/glightbox.min.js"></script>
```
Aturan: jangan menambahkan atribut `integrity` kecuali kamu yakin 100% hash-nya benar. Semua library harus punya guard (`if (window.AOS) …`) agar situs tetap berfungsi saat CDN gagal.

---

## [5] SPESIFIKASI HOSTING & PREVIEW

- Path semua aset RELATIF (`css/theme.css`, bukan `/css/theme.css`) agar jalan di `https://user.github.io/nama-repo/` maupun `file://`.
- Routing = hash router (`#/profil-kami`, `#/jadwal/anak`). Tidak butuh server rewrite. Sertakan `404.html` yang me-redirect ke `index.html`.
- Sertakan file kosong `.nojekyll` di root.
- Jangan gunakan `localStorage` untuk data penting; boleh hanya untuk preferensi non-sensitif (mis. tema, persetujuan banner) dengan `try/catch`.
- Semua `<script>` ditaruh di akhir `body` dengan `defer`-safe urutan: config → data → utils → components → pages → router → main.
- `index.html` harus lulus: tidak ada error console saat load di Chrome, Firefox, Safari modern.

---

## [6] STRUKTUR FOLDER (BUAT PERSIS)

```text
alfasyimar/
├─ index.html
├─ 404.html
├─ .nojekyll
├─ README.md
├─ robots.txt
├─ css/
│  ├─ tw-lite.css        # utility ala Tailwind + token
│  ├─ theme.css          # CSS variables, override Bootstrap
│  ├─ components.css     # navbar, card, button, modal, badge, dll.
│  └─ pages.css          # gaya khusus per halaman
├─ js/
│  ├─ config.js          # window.ALFA_CONFIG (kontak, link, URL logo)
│  ├─ data/
│  │  ├─ nav.js          # struktur menu 42 titik
│  │  ├─ facilities.js   # 15 fasilitas
│  │  ├─ clinics.js      # 25 poliklinik
│  │  ├─ doctors.js      # dokter & psikolog + jadwal
│  │  ├─ services.js     # layanan reguler & 24 jam
│  │  ├─ pricing.js      # kelas rawat inap + paket MCU (versi harga)
│  │  ├─ content.js      # promo, video, majalah, berita, kegiatan, mutu
│  │  └─ misc.js         # mitra asuransi, karir, profil, sosial
│  ├─ utils.js           # helper (esc, rupiah, tanggal, slugify, qs)
│  ├─ components.js      # render: topbar, header, footer, breadcrumb, modal, kartu
│  ├─ pages.js           # fungsi render tiap template halaman
│  ├─ router.js          # hash router + legacy redirect + SEO meta
│  ├─ search.js          # pencarian situs
│  └─ main.js            # init: AOS, Swiper, GLightbox, event, analytics stub
└─ assets/
   ├─ img/
   │  ├─ logo.png        # salinan dari URL logo
   │  ├─ icon.png        # salinan dari URL icon / favicon
   │  ├─ placeholder.svg # fallback gambar
   │  └─ ai/             # tempat gambar hasil generative AI (lihat [16])
   └─ docs/              # (opsional)
```
Di README, jelaskan agar pengguna mengunduh logo & icon ke `assets/img/` (lihat [8]).

---

## [7] DESIGN SYSTEM

### 7.1 Karakter visual
Modern, bersih, lega (whitespace besar), profesional ala rumah sakit premium, terasa ramah dan dapat dipercaya. Sudut membulat, bayangan lembut, gradasi halus biru→teal→hijau (diambil dari logo), banyak ruang napas, tipografi tegas. Hindari tampilan ramai, terlalu banyak warna, atau stok-foto-klise. Latar utama putih dan abu sangat muda; blok bergradasi dipakai hemat sebagai aksen.

### 7.2 Palet warna (sampel dari logo — verifikasi/halus-kan dengan warna logo)
```css
:root{
  /* Brand — dari logo Alfasyimar */
  --af-blue-900:#0A2F66;   /* teks heading gelap / footer */
  --af-blue-700:#0B4FA0;   /* kata "Alfasy" pada wordmark */
  --af-blue-600:#1273D6;
  --af-blue-500:#1B84E0;   /* biru ikon */
  --af-teal-500:#12B5A6;   /* peralihan ikon */
  --af-green-500:#10A98A;  /* kata "imar" pada wordmark */
  --af-green-400:#3CC172;  /* hijau hati pada ikon */
  --af-gradient:linear-gradient(135deg,#1B84E0 0%,#12B5A6 55%,#3CC172 100%);
  --af-gradient-deep:linear-gradient(135deg,#0B4FA0 0%,#0E8F95 60%,#10A98A 100%);
  /* Netral */
  --af-ink:#0F1F3D; --af-body:#475569; --af-muted:#64748B;
  --af-line:#E2E8F0; --af-surface:#F6FAFD; --af-white:#FFFFFF;
  /* Fungsional */
  --af-danger:#E11D48;  /* khusus CTA darurat */
  --af-wa:#25D366;      /* khusus tombol WhatsApp */
  --af-warn:#F59E0B; --af-success:#16A34A;
  /* Bentuk */
  --af-radius-sm:10px; --af-radius:16px; --af-radius-lg:24px; --af-radius-pill:999px;
  --af-shadow-sm:0 1px 2px rgba(15,31,61,.06);
  --af-shadow:0 8px 30px rgba(15,31,61,.08);
  --af-shadow-lg:0 20px 50px rgba(11,79,160,.18);
}
```
Override variabel Bootstrap: `--bs-primary:#1273D6; --bs-body-font-family:'Inter'; --bs-body-color:#475569; --bs-border-radius:.75rem`. Kontras teks vs latar wajib ≥ 4.5:1 (periksa teks putih di atas gradasi).

### 7.3 Tipografi
Heading: Plus Jakarta Sans 700–800, `letter-spacing:-.02em`, skala fluid `clamp()` (H1 `clamp(2rem,4vw+1rem,3.5rem)`). Body: Inter 16px, `line-height:1.7`. Eyebrow/overline kecil huruf kapital berwarna `--af-green-500` di atas judul section.

### 7.4 Komponen inti (buat semuanya, terdokumentasi di `components.css`)
- Button: `.btn-af` (gradasi), `.btn-af-outline`, `.btn-danger-af` (darurat, ikon telepon berdenyut), `.btn-wa` (hijau WA), pill, tinggi min 44px, `:focus-visible` ring jelas, hover naik 2px + shadow.
- Card: `.card-af` radius 20px, border tipis `--af-line`, hover: shadow-lg + translateY(-4px). Varian `.card-facility` (ikon dalam lingkaran gradasi), `.card-doctor`, `.card-news`, `.card-plan`.
- Badge/Chip: `.chip` untuk hari, kategori, status; `.ai-badge` (lihat 7.6).
- Section header: eyebrow + H2 + deskripsi + garis aksen gradasi pendek.
- Breadcrumb: Beranda → Kategori → Detail (pakai `nav[aria-label="breadcrumb"]`).
- Page hero ringan: blok judul halaman berlatar gradasi lembut + pola titik/kurva SVG tipis + breadcrumb.
- Modal: Bootstrap modal untuk Lihat detail kelas/paket, video, form pesan.
- Tabel jadwal: responsif, `overflow-x:auto` dengan bayangan indikator scroll, kolom pertama sticky.
- Empty state, skeleton, toast, scroll-to-top, loading bar tipis saat pindah halaman.

### 7.5 `tw-lite.css` — utility ala Tailwind (WAJIB ADA)
Buat file utility ringan bergaya Tailwind agar markup terasa konsisten: spacing/gap (`.p-4`, `.px-6`, `.gap-3`), `.rounded-xl/2xl/3xl`, `.shadow-soft/.shadow-lift`, `.bg-brand-gradient`, `.text-brand`, `.text-ink`, `.text-muted`, `.ring-brand`, `.backdrop-blur`, `.glass` (rgba putih + blur), `.line-clamp-2/3`, `.aspect-video/.aspect-4-3/.aspect-square`, `.max-w-prose`, `.grid-auto-fit` (`repeat(auto-fit,minmax(240px,1fr))`), `.transition-all`, `.hover-lift`, `.sr-only`-kompatibel. Boleh dikombinasikan dengan class Bootstrap (grid & komponen). Dilarang memakai class Tailwind yang tidak kamu definisikan sendiri.

### 7.6 Pola animasi (AOS + CSS)
- Hero teks: `data-aos="fade-right"`; gambar hero: `data-aos="zoom-in"`.
- Grid kartu: `data-aos="fade-up"` dengan `data-aos-delay` bertahap (0, 80, 160, …, maks 400).
- Angka statistik: count-up saat terlihat (IntersectionObserver).
- Ikon darurat: pulse ring halus (CSS keyframes).
- Header: shrink + shadow saat scroll > 24px.
- Setelah router merender halaman baru, panggil `AOS.refreshHard()`.
- Bungkus animasi non-esensial dengan `@media (prefers-reduced-motion: reduce){…}` → matikan, dan set `AOS.init({disable:true})` bila pengguna memilih reduce.
- `.ai-badge`: pil kecil semi-transparan hitam 55% + teks putih 11px + ikon `bi-stars`, posisi `absolute; right:8px; bottom:8px`, wrapper gambar `.media-ai{position:relative}`.

---

## [8] ASET MEREK (LOGO & ICON)

- Logo (wordmark horizontal + tagline): `https://uploads.onecompiler.io/42bwrvdku/1792750712383/Logo.png`
- Icon (simbol salib + figur + hati, tanpa teks): `https://uploads.onecompiler.io/42bwrvdku/1792752429857/icon.png`

Aturan pemakaian:
1. Simpan di `js/config.js`: `logoUrl`, `iconUrl`, plus `logoLocal:'assets/img/logo.png'`, `iconLocal:'assets/img/icon.png'`.
2. Setiap `<img>` logo memakai URL remote lebih dulu dengan `onerror="this.onerror=null;this.src=ALFA_CONFIG.logoLocal"` sebagai fallback.
3. Header: logo horizontal tinggi 44px (desktop) / 38px (mobile). Footer: versi logo pada kartu putih atau `filter` agar terbaca di latar gelap. Favicon, apple-touch-icon, loader, ikon floating, avatar fallback, og:image: memakai icon.
4. Jangan mengubah proporsi/warna logo. Beri `clear space` ≥ tinggi huruf "A".
5. `<link rel="icon" href="assets/img/icon.png">` dengan fallback URL remote.
6. Di README, instruksikan pengguna mengunduh kedua file ke `assets/img/` agar situs tidak bergantung pada hosting pihak ketiga.

---

## [9] SITEMAP & ROUTING (42 TITIK NAVIGASI)

Total = Beranda (1) + Profil (2) + Fasilitas (15) + Dokter & Psikolog (7) + Pelayanan (10) + Artikel (5) + Lain-lain (2) = 42.

| Grup menu | Item → rute hash | Template |
|---|---|---|
| Beranda | `#/` | home |
| Profil Kami | Profil Kami `#/profil-kami` · Indikator Mutu `#/indikator-mutu` (+ `#/indikator-mutu/2026` … `2022`) | profil · mutu |
| Fasilitas Unggulan (15) | `#/fasilitas` (katalog) · `#/fasilitas/{slug}` | fasilitas-katalog · fasilitas-detail |
| Dokter & Psikolog (7) | Jadwal `#/jadwal` · Sunday Clinic `#/sunday-clinic` · Spesialis `#/dokter-spesialis` · Umum `#/dokter-umum` · Gigi Umum `#/dokter-gigi-umum` · Gigi Spesialis `#/dokter-gigi-spesialis` · Psikolog `#/psikolog` | jadwal-indeks · sunday · direktori |
| (turunan) | `#/jadwal/{slug-poli}` · `#/dokter/{id}?kategori={spesialis\|umum\|gigi-umum\|gigi-spesialis\|psikolog}` | jadwal-detail · profil-dokter |
| Pelayanan (10) | Reguler: Rawat Jalan `#/pelayanan/rawat-jalan` · Rawat Inap `#/pelayanan/rawat-inap` · Kamar Operasi `#/pelayanan/kamar-operasi` · MCU `#/pelayanan/mcu` · Rehab Medik `#/pelayanan/rehab-medik`. 24 Jam: UGD `#/pelayanan/ugd` · Laboratorium `#/pelayanan/laboratorium` · Radiologi `#/pelayanan/radiologi` · Farmasi `#/pelayanan/farmasi` · Ambulans `#/pelayanan/ambulans` | rawat-jalan · rawat-inap · mcu · layanan-generik |
| Artikel (5) | Promo `#/artikel/promo` · Video Edukasi `#/artikel/video-edukasi` · Majalah `#/artikel/majalah` · Berita & Info Kesehatan `#/artikel/berita` (+ `#/artikel/berita/{slug}`) · Kegiatan `#/artikel/kegiatan` (+ `#/artikel/kegiatan/{slug}`) | galeri · video · majalah · berita · kegiatan |
| Lain-lain (2) | Rekanan Asuransi `#/rekanan-asuransi` · Karir `#/karir` | logo-grid · karir |
| Sistem | `#/kontak` · `#/disclaimer-ai` · `#/kebijakan-privasi` · `#/cari?q=` · 404 | statis · pencarian · not-found |

Legacy redirect (FR-32): buat tabel `LEGACY_MAP` di `router.js` yang memetakan path gaya lama (`/tentang/profil-kami`, `/fasilitas-unggulan/{nama}`, `/jadwal/Poliklinik-Anak`, `/pelayanan/mcu`, `/artikel/berita`, `/kerja-sama`, `/karir`, dst.) ke rute hash baru, dan jalankan jika `location.hash` kosong tetapi `location.pathname`/query `?p=` berisi path lama. Cantumkan minimal 15 pemetaan.

Slug fasilitas (15, SEO-friendly, bukan Base64):
`kolposkopi, endoskopi, laparaskopi, oct, eye-care, multi-slice-ct-scan-128, dialisis, mamografi, klinik-andrologi, klinik-nyeri, klinik-estetika, nicu-hcu-picu-icu, myah, cbct, bronkoskopi`

---

## [10] LAYOUT GLOBAL (SHARED SHELL) — URUTAN BLOK

Render sekali di `index.html`, sedangkan `<main id="app">` diganti oleh router.

1. Utility/Top bar (desktop; di mobile jadi satu baris ringkas): ikon telepon + nomor utama · ikon lokasi + alamat singkat · ikon sosial Facebook/Instagram/YouTube di kanan. Latar `--af-blue-900`, teks putih 13px.
2. Header & navigasi (sticky, glass putih + blur): logo kiri · menu tengah · tombol "Pendaftaran Online" (`.btn-af`) + tombol ikon Cari kanan.
   - Desktop: 6 kelompok menu (Profil, Fasilitas, Dokter, Pelayanan, Artikel, Lain-lain) + Beranda. Fasilitas = mega menu 3 kolom (15 item, ikon kecil) dengan kartu CTA di sisi kanan. Pelayanan = mega menu 2 kolom ("Reguler" & "24 Jam", item 24 jam bertanda titik hijau). Dropdown lain = dropdown biasa. Hover & fokus keyboard (`Enter/Space/Esc/Arrow`) keduanya didukung.
   - Mobile/Tablet (<992px): tombol hamburger → Bootstrap Offcanvas kiri dengan accordion bertingkat; di bagian atas offcanvas selalu ada tombol Darurat merah + tombol WhatsApp; fokus terjebak (focus trap) dan `Esc` menutup.
3. Page title bar (semua halaman selain Beranda): H1 tunggal + breadcrumb.
4. Konten utama `<main id="app" tabindex="-1">` — setelah navigasi, fokus dipindah ke `main` (aksesibilitas) dan `document.title` diperbarui.
5. Navigasi terkait: blok "Sebelumnya / Berikutnya" atau "Layanan terkait" di akhir halaman detail.
6. Footer (4 kolom di desktop): (a) logo + tagline + deskripsi singkat + sosial; (b) Tautan cepat; (c) Kontak: telepon utama, UGD, Ambulans, WhatsApp poliklinik, WhatsApp Layanan Pengaduan (terpisah dari darurat), alamat, jam; (d) Jam operasional + peta statis (gambar AI/ilustrasi peta, jangan iframe Google Maps default — sediakan tombol "Buka di Google Maps" ke URL pencarian). Baris bawah: copyright "© 2026 RS Alfasyimar", tautan Kebijakan Privasi · Disclaimer & Gambar AI, atribusi ikon ("Ikon: Bootstrap Icons — MIT License"; "Animasi: AOS"), dan pita Website demo.
7. Overlay kontak "Kirim Pesan Langsung": tombol floating (pojok kanan bawah, ikon `bi-chat-dots`) membuka modal berisi form (Nama, Email, No. HP, Pesan, Persetujuan, Tutup/Kirim).
8. Floating action rail (mobile): bar bawah tetap 3 tombol — Darurat (merah) · WhatsApp Poli · Daftar Online. Di desktop: tombol darurat kecil melayang di kiri bawah. CTA darurat selalu terlihat dan one-tap `tel:`.
9. Scroll-to-top, loading bar tipis di atas saat route berubah, toast container.

---

## [11] BERANDA — URUTAN SECTION (DESKTOP, DARI ATAS KE BAWAH)

1. Hero slider (Swiper, 3 slide, autoplay 6 dtk, pause on hover, panah + bullet): kolom kiri teks (eyebrow "Rumah Sakit Terpercaya", H1, deskripsi, 2 tombol), kolom kanan gambar AI di dalam bentuk blob/rounded besar dengan kartu mengambang kecil ("24 Jam UGD", "25+ Poliklinik", "Dokter Berpengalaman") yang mengambang halus. Latar gradasi sangat lembut + elemen dekoratif salib/kurva.
2. Strip CTA Utama (tumpang-tindih ke bawah hero, 3 kartu kaca): (1) Gawat Darurat — merah, nomor UGD besar, tombol `tel:` + WA Ambulans; (2) WhatsApp Poliklinik — hijau, tombol chat; (3) Pendaftaran Online — gradasi brand, tombol buka link eksternal.
3. Sunday Clinic banner: kartu lebar bergradasi dengan ikon kalender, teks singkat, 2 tombol (Lihat Jadwal Minggu · Pendaftaran Sunday Clinic).
4. Pintasan cepat (grid 4 ikon-kartu): Jadwal Poliklinik · Cari Dokter · Promo · Medical Check Up. Plus kotak pencarian cepat dokter/poli (dropdown poliklinik + input nama dokter → ke hasil).
5. Statistik/angka (count-up): tahun melayani, jumlah dokter, tempat tidur, poliklinik, pasien per tahun — semua angka fiktif & diberi catatan "data demo".
6. 15 Fasilitas Unggulan: section header + grid kartu 5×3 desktop / 3 kolom tablet / 2 kolom mobile (ikon, nama, deskripsi 1 baris, "Baca Selengkapnya →"); tombol "Lihat Semua Fasilitas".
7. Layanan Kami: 5 layanan reguler (kartu bergambar) + strip Pelayanan 24 Jam (5 chip besar bertitik hijau).
8. Mengapa Alfasyimar (3–4 poin nilai dengan ikon: Berempati, Teknologi Modern, Tim Berpengalaman, Aman & Terakreditasi — teks fiktif/generik).
9. Dokter Kami (carousel) — 8 kartu dokter dari data, tombol "Lihat Profil" + "Jadwal".
10. Informasi Terbaru: 3 teaser berita (kartu bergambar AI, tanggal, kategori, "Baca").
11. Majalah Kesehatan: edisi terkini (cover AI + tombol Baca/Unduh) + 3 edisi lain kecil.
12. Testimoni singkat (3 kutipan fiktif, diberi catatan "ilustrasi/demo") — opsional tapi diutamakan.
13. Rekanan Asuransi: marquee/slider logo placeholder (kotak abu bertuliskan nama fiktif).
14. Banner penutup CTA (gradasi): "Butuh bantuan? Hubungi kami" + 3 tombol.
15. Footer (lihat [10]).

---

## [12] SPESIFIKASI TEMPLATE HALAMAN

12.1 Profil Kami: sub-tab/anchor: Profil RS · Sejarah (timeline vertikal) · Visi-Misi-Motto (kartu) · Akreditasi (badge/sertifikat fiktif) · Direksi/pimpinan (kartu avatar inisial). Sidebar lengket "Di halaman ini" pada desktop.

12.2 Indikator Mutu: daftar tahun 2026–2022 sebagai chip/kartu besar → halaman tahun berisi grid "gambar indikator" (placeholder bagan buatan CSS/SVG atau gambar AI berlabel) + tabel ringkas indikator (kepatuhan kebersihan tangan, waktu tunggu rawat jalan, dll. — angka fiktif berlabel demo).

12.3 Katalog Fasilitas & Detail Fasilitas: katalog = grid 15 kartu + kotak filter/search cepat. Detail = H1, gambar AI hero (badge), rich text (apa itu, indikasi, persiapan, alur), blok "Dokter Terkait" (kartu dokter), CTA "Lihat Jadwal" + WA + Daftar, navigasi Sebelumnya/Berikutnya antar fasilitas.

12.4 Direktori Dokter (5 kategori): header kategori + filter: pencarian nama, dropdown poliklinik, dan chip hari praktik; grid kartu (avatar, nama, bidang, poliklinik, hari ringkas, "Lihat Profil", ikon "Jadwal"). Empty state bila tidak ada hasil. Pagination/“Muat lebih banyak” jika >12 item.

12.5 Profil Dokter: kolom kiri kartu identitas (avatar, nama, spesialisasi, chip poliklinik, CTA Daftar/WA); kanan tab/accordion: Tentang · Riwayat Pendidikan · Training/Course · Jadwal Praktik (tabel mini 7 hari) + tautan "Lihat Jadwal Poliklinik". Relasi dokter↔poliklinik adalah data (array id), bukan teks keras.

12.6 Indeks Jadwal (`#/jadwal`): judul + pencarian + grid 25 kartu poliklinik (ikon, nama, jumlah dokter). Klik → Detail Jadwal.

12.7 Detail Jadwal Poliklinik: tombol "← Kembali", judul poli, tabel: kolom `Dokter | Senin | Selasa | Rabu | Kamis | Jumat | Sabtu | Minggu`. Sel dapat berisi banyak slot (mis. `08.00–11.00` dan `16.00–19.00` ditumpuk sebagai chip), sel kosong tampil "—", Minggu/libur ditandai warna. Di mobile: tabel scroll horizontal dengan indikator + kolom dokter sticky. Di bawah: CTA WhatsApp & Pendaftaran Online, serta disclaimer "Jadwal dapat berubah sewaktu-waktu. Terakhir diperbarui: {tanggal}" (FR-34). Dokter yang jadwalnya kedaluwarsa ditandai badge "Konfirmasi jadwal".

12.8 Sunday Clinic: daftar kartu/list dokter + poliklinik + jam Minggu (data diambil dari slot hari Minggu — single source of truth yang sama dengan jadwal), tombol "Pendaftaran Sunday Clinic" (link eksternal terpisah dari config).

12.9 Rawat Jalan: infografik alur (stepper horizontal 5 langkah: Daftar → Verifikasi → Poli → Pemeriksaan → Farmasi/Kasir) + uraian spesialis + informasi pendaftaran + CTA.

12.10 Rawat Inap: infografik alur + 5 kartu kelas: VVIP, VIP, Kelas I, II, III (gambar AI kamar, ringkasan, harga "mulai dari"). Tombol Lihat membuka modal (galeri kecil, daftar fasilitas, tabel harga, tanggal berlaku efektif, catatan "harga contoh/demo"); tombol Tutup; ESC & klik backdrop menutup; fokus kembali ke tombol pemicu.

12.11 Medical Check Up: teks pengantar, 7 kartu paket: Bronze, Silver, Gold, Platinum, Diamond Wanita 1, Diamond Wanita 2, Diamond Pria, tombol Lihat → modal (daftar pemeriksaan bercentang, harga, catatan, CTA daftar). Bagian Persiapan MCU (accordion: puasa, obat, pakaian, dokumen) + Jam layanan.

12.12 Layanan generik (Kamar Operasi, Rehab Medik, UGD, Lab, Radiologi, Farmasi, Ambulans): hero kecil, rich text, daftar fitur/ceklis, galeri 2–4 gambar AI berlabel, kartu kontak khusus (UGD & Ambulans: nomor besar, tombol `tel:` + WA — breadcrumb harus sesuai halaman, mis. "Pelayanan → Ambulans"), layanan terkait.

12.13 Promo: galeri kartu promo (gambar AI poster) via GLightbox, tanggal mulai/akhir + status "Aktif/Berakhir", filter Aktif/Semua.

12.14 Video Edukasi: grid kartu (thumbnail, durasi, judul, ringkasan). Klik → modal player `youtube-nocookie.com/embed/{id}` dimuat lazy saat dibuka; jika `youtubeId` kosong/gagal tampil fallback "Video belum tersedia (demo)". Beri kategori & filter chip.

12.15 Majalah: select filter tahun (default tahun terbaru; opsi "Semua"), grid kartu edisi (cover AI), klik → modal pratinjau (cover besar + metadata edisi + tombol "Buka PDF" yang menuju placeholder). State "tidak ada hasil" ditangani.

12.16 Berita & Info Kesehatan: listing kartu (+ kategori, pencarian, pagination) → halaman baca: H1, penulis, tanggal terbit, waktu baca, gambar AI berlabel, isi (paragraf, subjudul, kutipan, daftar), tombol bagikan (salin tautan/WA), Artikel terkait, disclaimer medis.

12.17 Kegiatan: filter tahun → kartu kegiatan → halaman album dengan galeri grid masonry-lite (GLightbox, `loading="lazy"`).

12.18 Rekanan Asuransi: grid logo (placeholder nama fiktif) dengan status aktif/nonaktif, urutan, tautan opsional; teks cara klaim umum.

12.19 Karir: tabel `Posisi | Unit | Deadline | Aksi`. Untuk demo isi 2–3 lowongan fiktif dan sediakan empty state informatif ("Saat ini belum ada lowongan, pantau halaman ini") yang aktif jika array kosong. Detail lowongan = modal + cara melamar (email placeholder).

12.20 Kontak: kartu info + form (sama dengan modal) + peta/tombol maps + kanal terpisah Darurat vs Pengaduan.

12.21 Disclaimer & Transparansi Gambar AI: penjelasan bahwa seluruh gambar ilustratif dibuat dengan generative AI, daftar tabel (nama file, lokasi pemakaian, alat/prompt), pernyataan bukan dokumentasi nyata, dan data demo.

12.22 Kebijakan Privasi (ringkas, contoh), Pencarian, 404 (ilustrasi + tombol kembali + nomor darurat tetap tampil).

---

## [13] MATRIKS FITUR (DARI PRD) → IMPLEMENTASI STATIS

| ID PRD | Fitur | Implementasi di versi GitHub Pages | Prioritas |
|---|---|---|---|
| FR-01 | Navigasi berjenjang | Mega menu desktop + offcanvas accordion mobile, keyboard-friendly | P0 |
| FR-02 | Pengelola menu | Menu dirender dari `data/nav.js` (urutan, label, path, `visible`) — tanpa ubah HTML | P0 |
| FR-03 | Halaman profil | Template 12.1 | P1 |
| FR-04 | Hero banner | Swiper dari array `banners` (gambar, alt, CTA, urutan) | P0 |
| FR-05 | Area CTA utama | Strip 3 CTA (darurat/WA/daftar) | P0 |
| FR-06/07 | Katalog & detail fasilitas | 15 fasilitas + dokter terkait + CTA | P0 |
| FR-08/09 | Direktori & profil dokter | 5 kategori, filter, profil lengkap | P0 |
| FR-10/11 | 25 poliklinik & tabel jadwal | Multi-slot per hari, hari kosong, Minggu | P0 |
| FR-12 | Sunday Clinic | Diturunkan dari slot Minggu | P0 |
| FR-13 | Outbound pendaftaran | Satu sumber `config.registration` & `config.sundayRegistration`; `rel="noopener noreferrer"`; jika URL kosong → toast fallback | P0 |
| FR-14 | WhatsApp click-to-chat | `https://wa.me/{nomor}?text={pesan awal}`; tanpa data sensitif | P0 |
| FR-15 | Emergency click-to-call | `tel:` pada top bar, hero, floating, footer, halaman UGD/Ambulans | P0 |
| FR-16 | Artikel layanan | Rich text + gambar AI berlabel | P0 |
| FR-17 | Kelas rawat inap | 5 kartu + modal + harga berversi & tanggal efektif | P1 |
| FR-18 | Paket MCU | 7 paket + modal | P1 |
| FR-19 | Promo | Galeri + periode aktif | P1 |
| FR-20 | Video edukasi | Thumbnail + lazy modal embed | P1 |
| FR-21 | Majalah | Filter tahun + modal | P1 |
| FR-22 | Berita | Listing + detail + terkait | P1 |
| FR-23 | Galeri kegiatan | Filter tahun + album + lazy | P1 |
| FR-24 | Mitra asuransi | Logo grid + status | P1 |
| FR-25 | Karir | Tabel + empty state | P1 |
| FR-26 | Kontak cepat | Form 4 field + validasi + success/error + honeypot + consent ([14.9]) | P0 |
| FR-27 | Footer & legal | Footer lengkap, privasi, pengaduan | P0 |
| FR-28 | CMS berbasis peran | Tidak ada backend. Pengganti: seluruh konten di `js/data/*.js` + panduan edit di README. Tulis jelas di README bahwa CMS asli butuh backend | P0* |
| FR-29 | Media library | Folder `assets/img/` + field `alt`, `credit`, `ai` pada setiap objek gambar | P1 |
| FR-30 | Pencarian situs | `search.js`: indeks klien atas fasilitas, layanan, dokter, poli, berita; hasil dikelompokkan; modal pencarian + halaman `#/cari` | P1 |
| FR-31 | Analytics event | `track(event, params)` stub → `console.debug` + `window.dataLayer` bila ada; tanpa PII | P1 |
| FR-32 | Redirect legacy | `LEGACY_MAP` ([9]) | P0 |
| FR-33 | Audit perubahan | Field `updatedAt` + `status` pada data; tampil "Terakhir diperbarui" | P1 |
| FR-34 | Pemeriksaan jadwal | Disclaimer + badge "Konfirmasi jadwal" untuk data > 30 hari | P0 |

---

## [14] SPESIFIKASI DATA & PERILAKU

14.1 `config.js` (satu-satunya tempat mengubah kontak & link):
```js
window.ALFA_CONFIG = {
  name: "RS Alfasyimar", tagline: "Coring with Heart, Healing with Trust",
  logoUrl: "https://uploads.onecompiler.io/42bwrvdku/1792750712383/Logo.png",
  iconUrl: "https://uploads.onecompiler.io/42bwrvdku/1792752429857/icon.png",
  logoLocal: "assets/img/logo.png", iconLocal: "assets/img/icon.png",
  address: "Jl. Contoh Sehat No. 1, Pontianak, Kalimantan Barat (alamat fiktif)",
  phoneMain: "0561-000-0000", phoneEmergency: "0561-000-0001", phoneAmbulance: "0811-0000-0002",
  waPoli: "62811000000003", waAmbulance: "62811000000002", waComplaint: "62811000000004",
  registrationUrl: "#/kontak", sundayRegistrationUrl: "#/kontak",   // ganti dengan URL sistem pendaftaran asli
  social: { facebook:"#", instagram:"#", youtube:"#" },
  hours: { ugd:"24 Jam", poli:"Senin–Sabtu 08.00–20.00", sunday:"Minggu 09.00–13.00" },
  lastScheduleUpdate: "2026-10-23", isDemo: true
};
```
(Nomor di atas placeholder — pertahankan format palsu yang jelas.)

14.2 Fasilitas (15): objek `{slug, name, icon(bi-*), summary, description[], indications[], preparation[], doctors[id], image, alt, ai:true}`. Daftar nama: Kolposkopi, Endoskopi, Laparaskopi, OCT, Eye Care, Multi Slice CT-Scan 128 Slices, Dialisis, Mamografi, Klinik Andrologi, Klinik Nyeri, Klinik Estetika, NICU / HCU / PICU / ICU, MYAH, CBCT (Cone Beam Computed Tomography), Bronkoskopi. Tulis deskripsi orisinal 60–120 kata tiap fasilitas.

14.3 Poliklinik (25), slug dari nama: Anak, Kebidanan & Kandungan, Penyakit Dalam, Bedah Umum, Bedah Ortopedi, Bedah Saraf, Bedah Urologi, Bedah Digestif, Bedah Plastik, Saraf, Jantung & Pembuluh Darah, Paru, THT-KL, Mata, Kulit & Kelamin, Gigi Umum, Gigi Spesialis, Psikiatri, Psikologi, Gizi Klinik, Rehabilitasi Medik, Andrologi, Klinik Nyeri, Klinik Estetika, Dokter Umum.

14.4 Dokter (fiktif, ≥ 30 orang): sebar di 5 kategori (spesialis ≥ 14, umum ≥ 5, gigi umum ≥ 3, gigi spesialis ≥ 3, psikolog ≥ 3) dan setiap poliklinik minimal 1 dokter. Nama rekaan umum (hindari kemiripan dengan tokoh nyata), tulis catatan "nama fiktif" di README. Skema:
```js
{ id, slug, name, category:"spesialis|umum|gigi-umum|gigi-spesialis|psikolog", specialty,
  clinics:[clinicSlug…], facilities:[facilitySlug…], about, education:[{year,text}], training:[{year,text}],
  schedule:{ senin:[["08.00","11.00"],["16.00","19.00"]], selasa:[], … minggu:[] },
  photo:null, updatedAt:"2026-10-23" }
```
Jadwal bervariasi (multi-slot, hari kosong, beberapa dokter praktik Minggu untuk Sunday Clinic). Detail jadwal & Sunday Clinic dihitung dari data ini (single source).

14.5 Harga (`pricing.js`): objek berversi `{effectiveDate:"2026-10-01", note:"Harga contoh untuk demo", classes:[{key:"vvip", name:"VVIP", from:…, facilities:[…], rates:[{label, price}]}…], mcu:[{key, name, targetGender, price, items:[…], notes}]}`. Formatter `rupiah()` memakai `Intl.NumberFormat('id-ID')`.

14.6 Konten (`content.js`): ≥ 6 promo, ≥ 6 video (ID YouTube boleh kosong), ≥ 8 majalah (2026–2023), ≥ 8 berita (isi 150–250 kata, kategori beragam), ≥ 5 kegiatan beralbum 6–12 foto, indikator mutu 2022–2026.

14.7 Router (`router.js`): parse `location.hash` → `{path, params, query}`; tabel rute → fungsi render; 404 handler; `scrollTo(0,0)`; update `document.title` ("Judul — RS Alfasyimar"), `meta[name=description]`, `link[rel=canonical]`, `og:*`, JSON-LD `Hospital` (disuntik via JS); tandai menu aktif (`aria-current="page"`); tutup offcanvas/dropdown; fokus ke `main`; jalankan `AOS.refreshHard()`, `GLightbox` re-init, `Swiper` re-init; dukung tombol back/forward; tangani error render dengan halaman fallback (jangan layar putih).

14.8 Keamanan JS: semua teks dari data yang dimasukkan ke HTML melewati `esc()`; jangan memakai `innerHTML` dengan input pengguna mentah; link eksternal `rel="noopener noreferrer"` + `target="_blank"`.

14.9 Form kontak (statis): field Nama (wajib, ≥3), Email (format valid), No. HP (pola Indonesia `^(\+62|62|0)8[1-9][0-9]{6,10}$`), Pesan (wajib, 10–500 karakter, penghitung), checkbox persetujuan privasi (wajib), honeypot tersembunyi, throttle (maks 1 kirim/30 dtk di memori). Peringatan teks: *"Jangan tulis diagnosis atau data rekam medis di sini. Untuk keadaan darurat hubungi UGD."* Validasi Bootstrap (`is-invalid` + pesan error aksesibel `aria-describedby`). Saat submit: tidak ada data dikirim ke server; tampilkan state sukses (toast + panel konfirmasi) dan tawarkan "Lanjutkan via WhatsApp" (pesan awal tanpa data sensitif) serta `mailto:` sebagai alternatif. Sediakan opsi konfigurasi `ALFA_CONFIG.formEndpoint` (kosong) bila pengguna ingin menghubungkan Formspree/Formsubmit — dokumentasikan di README.

14.10 Pencarian: debounce 200 ms, normalisasi huruf kecil & hilangkan diakritik, skor sederhana (judul > ringkasan), hasil dikelompokkan (Fasilitas, Dokter, Poliklinik, Layanan, Berita), `Ctrl/⌘+K` membuka modal.

14.11 Analytics stub: event minimal — `cta_emergency_click`, `cta_whatsapp_click`, `cta_register_click`, `doctor_profile_view`, `schedule_view`, `filter_change`, `outbound_error`. Tanpa PII.

---

## [15] AKSESIBILITAS, PERFORMA, SEO (ACCEPTANCE)

- WCAG 2.2 AA: satu `<h1>` per tampilan, urutan heading logis, label pada semua input, `:focus-visible` jelas, area tap ≥ 44px, kontras ≥ 4.5:1, tombol ikon punya `aria-label`, modal fokus-trap, skip link "Lewati ke konten" paling awal, `aria-live="polite"` untuk toast/hasil filter, `lang="id"`.
- Responsif: uji 360, 768, 1024, 1440 px; tidak ada overflow horizontal; tabel jadwal scroll sendiri.
- Performa: `loading="lazy"` + `decoding="async"` + atribut `width/height` (cegah CLS) pada gambar non-hero; hero pertama `fetchpriority="high"`; `preconnect` ke `fonts.googleapis.com`, `fonts.gstatic.com`, `cdn.jsdelivr.net`; gambar AI diutamakan format WebP ≤ 200 KB; tidak ada library tambahan di luar daftar [4]; render list panjang bertahap.
- SEO: `<title>` & `<meta description>` unik per rute, `meta viewport`, `theme-color:#1273D6`, Open Graph/Twitter card, JSON-LD `Hospital`/`MedicalOrganization`, `robots.txt`, `<noscript>` berisi pesan + nomor darurat.
- Fallback gagal-muat: gambar → `placeholder.svg` bergradasi brand; CDN gagal → situs tetap terbaca; link pendaftaran kosong → toast bantuan.
- Dark mode: tidak wajib. Jika dibuat, harus lengkap dan kontras terjaga (jangan setengah jadi).

---

## [16] KEBIJAKAN GAMBAR — GENERATIVE AI

Karena kamu tidak dapat menghasilkan file gambar binary, lakukan ini:
1. Setiap slot gambar merujuk path `assets/img/ai/{nama-file}.webp`, dengan fallback otomatis ke `placeholder.svg` (`onerror`). Placeholder berupa gradasi brand + ikon + teks kecil nama slot, sehingga situs tetap cantik sebelum gambar AI ditaruh.
2. Semua gambar bertanda `data-ai-generated="true"` + `.ai-badge` "Ilustrasi AI" + alt deskriptif (tanpa kata "gambar/foto dari").
3. Di akhir jawaban, tampilkan "Paket Prompt Gambar AI": tabel berisi *nama file · rasio · tempat pemakaian · prompt (bahasa Inggris, siap tempel ke Midjourney/DALL·E/Imagen/Firefly)*, minimal 20 baris, mencakup: hero-1/2/3, ikon fasilitas bergambar (opsional), rawat-inap (vvip, vip, kelas-1/2/3), mcu-hero, ugd, lab, radiologi, farmasi, ambulans, kamar-operasi, rehab, 8 cover majalah, thumbnail berita/kegiatan, poster promo, galeri tentang-kami.
4. Gaya prompt gambar yang diinginkan: *"clean modern hospital interior, bright natural light, soft blue and teal accents (#1B84E0, #12B5A6, #3CC172), shallow depth of field, realistic, no text, no logos, no identifiable real people, high resolution"*. Hindari wajah close-up nyata, merek dagang, teks di dalam gambar, dan tanda salib/logo RS lain.
5. Buat juga halaman `#/disclaimer-ai` yang memuat tabel yang sama, sebagai bentuk transparansi publik.

---

## [17] ARSITEKTUR KODE (JS)

- Satu namespace global `window.Alfa = { config, data, utils, components, pages, router, search }`; tanpa variabel global liar.
- Fungsi render murni: `pages.home()` mengembalikan string HTML; router memasangnya ke `#app`.
- Event delegation pada `document` (`data-action="open-modal"`, `data-track="…"`).
- Kode berkomentar bagian-bagian penting (bahasa Indonesia), fungsi pendek, nama jelas, tanpa kode mati.
- `try/catch` pada inisialisasi library pihak ketiga.
- Hindari `eval`, `document.write`, inline `onclick` panjang (kecuali `onerror` fallback gambar).

---

## [18] PRIVASI & KEPATUHAN (DARI PRD)

Tidak meminta data kesehatan lewat form umum; consent eksplisit; tidak menyimpan PII; tidak mengirim PII ke analytics; kanal Darurat dan Pengaduan dipisah; semua jadwal/harga/nomor memiliki tanggal pembaruan; halaman privasi menjelaskan bahwa demo ini tidak menyimpan data.

---

## [19] SIAPA PENGGUNA & ALUR UTAMA (UNTUK KEPUTUSAN DESAIN)

Persona: pasien baru, pasien lama, keluarga pasien, pengunjung konten kesehatan, pelamar kerja. Alur wajib mulus dalam ≤ 3 klik:
A. Beranda → Jadwal Dokter → pilih poli → lihat dokter & jam → WA/Daftar Online.
B. Dokter → kategori → Lihat Profil → Jadwal Poli → Daftar.
C. Beranda → Sunday Clinic → jadwal Minggu → Pendaftaran Sunday Clinic.
D. Beranda/floating → Darurat → `tel:`/WA ambulans (satu ketukan).
E. Pelayanan → Rawat Inap/MCU → Lihat (modal) → Tutup → Hubungi.
F. Footer → Pengaduan WA, atau Kirim Pesan Langsung → form.
G. Artikel → Berita/Video/Majalah/Kegiatan/Promo → konten → terkait.

---

## [20] PROTOKOL GENERASI & FORMAT OUTPUT

Karena proyek besar, kerjakan BERTAHAP dan jangan berhenti di tengah file.

1. Mulai jawaban dengan "Rencana Singkat" (maks 15 baris): daftar file yang akan dibuat dan urutannya.
2. Hasilkan file satu per satu, masing-masing dalam blok kode dengan judul path penuh sebelum blok, contoh: `### 📄 css/theme.css` lalu blok kode berbahasa sesuai file (mis. css). Setiap file harus utuh dan siap disalin.
3. Urutan: (1) `index.html` → (2) `css/*` → (3) `js/config.js` → (4) `js/data/*` → (5) `js/utils.js` → (6) `js/components.js` → (7) `js/pages.js` → (8) `js/router.js` → (9) `js/search.js` → (10) `js/main.js` → (11) `404.html`, `robots.txt`, `.nojekyll` → (12) `README.md` → (13) Paket Prompt Gambar AI → (14) Checklist QA.
4. Jika output terpotong, berhenti rapi di akhir file terakhir yang lengkap dan tulis: `⏸ Lanjut ke: <nama file berikutnya> — balas "LANJUT"`. Saat pengguna membalas "LANJUT", teruskan dari file itu tanpa mengulang file sebelumnya dan tanpa merangkum ulang.
5. Jika memungkinkan (kamu punya tools file/ZIP), buat langsung folder & ZIP `alfasyimar-website.zip`. Jika tidak, tampilkan seluruh file seperti di atas.
6. Jangan menambahkan penjelasan panjang di luar format; komentar hanya yang perlu.

---

## [21] CHECKLIST QA (JALANKAN SEBELUM MENYATAKAN SELESAI, LAPORKAN HASILNYA)

- [ ] `index.html` terbuka dari `file://` tanpa error console; seluruh script klasik dan urutannya benar.
- [ ] Semua 42 titik navigasi terbuka tanpa 404; legacy path memetakan ke rute baru.
- [ ] Mega menu desktop + offcanvas mobile berfungsi, keyboard & `Esc` OK, tombol Darurat selalu terlihat.
- [ ] 15 fasilitas, 25 poliklinik, 5 kategori dokter, 7 paket MCU, 5 kelas rawat inap terbaca dari data dan tampil benar.
- [ ] Jadwal multi-slot/kosong/Minggu tampil benar; Sunday Clinic konsisten dengan jadwal; disclaimer tanggal ada.
- [ ] Modal Lihat/Tutup rawat inap & MCU: ESC, backdrop, fokus kembali.
- [ ] Filter tahun majalah & kegiatan: default, hasil kosong, pilihan tahun.
- [ ] Form kontak: validasi, honeypot, consent, success/error, alternatif WA/mailto; tidak ada data keluar.
- [ ] CTA `tel:` dan `wa.me` benar; link pendaftaran bersumber dari `config`.
- [ ] Semua gambar AI: badge + alt + `data-ai-generated`; halaman `#/disclaimer-ai` lengkap; fallback placeholder jalan.
- [ ] Logo & icon dimuat dari URL yang diberikan dengan fallback lokal; favicon terpasang.
- [ ] Responsif 360/768/1024/1440 tanpa overflow; AOS aktif & menghormati reduced-motion.
- [ ] Kontras, heading, label, skip link, `lang="id"`, meta/JSON-LD/OG terpasang.
- [ ] README menjelaskan: preview, deploy GitHub Pages (Settings → Pages → Deploy from branch → `main` / root), mengunduh logo ke `assets/img/`, menaruh gambar AI, mengedit data, mengganti nomor & link pendaftaran, keterbatasan (tanpa CMS/backend).
- [ ] Tidak ada teks/foto/nomor/harga yang disalin dari RS nyata; semua berlabel demo.

Format jawaban penutup: (1) ringkasan 5 baris apa yang dibuat, (2) hasil checklist di atas (✅/⚠️ dengan catatan), (3) langkah deploy GitHub Pages 5 langkah, (4) daftar hal yang perlu dikerjakan manual oleh pengguna (unduh logo, taruh gambar AI, ganti nomor/URL asli).

---

## [22] LAMPIRAN — RINGKASAN PRD YANG MENJADI DASAR (REFERENSI KLONING)

- Produk: portal informasi rumah sakit + pintu masuk pendaftaran eksternal. Fokus: kenali layanan, cari dokter & jadwal, instruksi pendaftaran, kontak darurat, edukasi kesehatan.
- Navigasi: 7 kelompok (Beranda, Profil Kami [2], Fasilitas Unggulan [15], Dokter & Psikolog [7], Pelayanan [10], Artikel [5], Lain-lain [2]) = 42 titik.
- Shell global: top bar (telp, alamat, sosial) → header + menu → judul halaman + breadcrumb → konten → navigasi terkait → footer → overlay "Kirim Pesan Langsung".
- Beranda (urutan konten): banner rotasi → CTA Darurat / WhatsApp Poli / Pendaftaran Online → Sunday Clinic + 2 CTA → pintasan Promo/Jadwal → 15 fasilitas (grid kartu) → 3 teaser berita → Majalah → footer + form pesan.
- Template: profil, indikator mutu per tahun, fasilitas detail (+dokter terkait), direktori & profil dokter, indeks & detail jadwal (7 hari, multi-slot), Sunday Clinic, rawat jalan (alur), rawat inap (5 kelas + modal), MCU (7 paket + modal), layanan lain, promo, video (modal), majalah (filter tahun), berita, kegiatan (filter tahun + galeri), rekanan, karir (empty state), form kontak.
- Perilaku kritis: CTA darurat one-tap; pendaftaran = tautan keluar (jangan klaim booking sukses); jadwal single source; harga berversi; redirect legacy; WCAG 2.2 AA; Core Web Vitals (LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1); data privasi minimal.
- Temuan audit yang harus dihindari di versi baru: breadcrumb Ambulans salah label; URL pendaftaran tidak konsisten; menu mobile salah tautan; label ganda "Gawat Darurat1234"; empty state karir tanpa penjelasan; harga tanpa tanggal berlaku; jadwal tersebar tanpa sumber tunggal; slug Base64; filter tahun tanpa penanganan hasil kosong.

---
— AKHIR PROMPT. Mulai kerjakan dengan "Rencana Singkat" lalu `index.html`. —
