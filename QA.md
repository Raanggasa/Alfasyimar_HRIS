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
