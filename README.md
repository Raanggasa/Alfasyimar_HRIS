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
