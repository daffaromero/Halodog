## Halodog
## **Project Senior Project TI**

### Kelompok Tulations

| Jabatan | Nama | NIM |
| --- | --- | --- |
| Ketua | [Muhamad Thoriq Ahnaf](https://github.com/MuhamadThoriqAhnaf) | 20/460553/TK/51142 |
| Anggota 1 | [Daffa Muhammad Romero](https://github.com/daffaromero) | 20/456363/TK/50493 |
| Anggota 2 | [Muhammad Zikriansyah](https://github.com/MuhammadZikriansyah) | 20/456373/TK/50503 |
| Anggota 3 | [Ruth Perdana Saragih](https://github.com/ruthps) | 20/460565/TK/51154 |

**Departemen Teknik Elektro dan Teknologi Informasi, Fakultas Teknik, Universitas Gadjah Mada**

## Produk
Nama: Halodog<br>
Jenis: Aplikasi web

## Latar Belakang & Permasalahan
Banyak faktor yang dapat mempengaruhi konsultasi penyakit hewan, sehingga dapat mempersulit proses konsultasi. Beberapa faktor yang mungkin menjadi tantangan dalam konsultasi penyakit hewan meliputi: 
- Keterbatasan pengetahuan: Penyakit hewan tergolong kompleks dan sulit untuk didiagnosis. Dokter hewan bisa saja tidak memiliki pengetahuan yang cukup tentang penyakit tertentu atau teknologi terbaru yang digunakan dalam pengobatan.
- Jangkauan yang terbatas: Beberapa wilayah mungkin memiliki akses yang terbatas terhadap fasilitas medis atau dokter hewan. Hal ini mempersulit pemilik hewan peliharaan untuk mendapatkan konsultasi penyakit bagi hewan peliharaan mereka. 
- Biaya yang tinggi: Biaya konsultasi dokter hewan dan perawatan hewan terbilang mahal. Beberapa pemilik hewan peliharaan mungkin tidak mampu membayar biaya perawatan untuk hewan peliharaan mereka. 
- Kurangnya ketersediaan dokter hewan: Jumlah dokter hewan yang terbatas dan tidak tersebar merata dapat mengakibatkan ketersediaan yang terbatas dalam memberikan konsultasi dan perawatan. 

Dengan menggunakan teknologi seperti AI, cloud computing, dan jaringan komputer, konsultasi penyakit hewan dapat menjadi lebih mudah dan dapat diakses oleh orang-orang di mana saja. Ini dapat membantu mengatasi beberapa tantangan dalam memberikan perawatan yang tepat dan efektif untuk hewan peliharaan, serta memberikan solusi untuk masalah di bidang kesehatan hewan.

## Rumusan Permasalahan
- Bagaimana memastikan seluruh dokter hewan memiliki pengetahuan yang cukup. 
- Bagaimana cara agar semua orang dapat mengkonsultasikan penyakit yang diderita hewan. 
- Bagaimana cara agar semua orang mendapatkan pelayanan konsultasi terkait penyakit hewan yang murah. 
- Bagaimana menjawab ketersediaan dokter hewan yang terbatas.

## Ide Solusi
Menyediakan sebuah aplikasi berbentuk web di mana pengguna dapat memasukkan gejala – gejala dari hewan untuk mengetahui penyakit apa yang hewan tersebut derita. Sistem ini akan menerapkan **AI** yang digunakan untuk menyimpulkan penyakit dan penangananya, berdasarkan gejala – gejala yang diinputkan. Selain itu, kami akan menggunakan prinsip **Jaringan Komputer** berupa pengunaan Load Balancer, dan protocol HTTPS untuk koneksi yang lebih aman. Serta penggunaan cloud database sebagai penerapan **Cloud Computing**.

## Analisis Kompetitor
### Halodoc

| Kompetitor 1 | Halodoc |
| --- | --- |
| Nama Produk | Halodoc |
| Jenis Kompetitor | Direct |
| Jenis Produk | Konsultasi medis, pemesanan obat, pengiriman obat, asuransi kesehatan |
| Target Customer | Membutuhkan layanan kesehatan yang mudah diakses dan dapat dijangkau segala daerah di Indonesia. |
| Key Competitive Advantage & Unique Value | Layanan terintegrasi, layanan 24 jam, jangkauan luas |

| Kelebihan | Kekurangan |
| --- | --- |
| + Akses yang mudah dan praktis | - Harga layanan mahal |
| + Layanan yang disediakan lengkap | - Bergantung pada koneksi internet untuk memberikan layanan yang baik. |
| + Banyaknya dokter yang tersedia, termasuk berbagai spesialisasi | - Pengguna masih perlu mendatangi dokter secara langsung untuk konsultasi fisik. |


### Klikdokter

| Kompetitor 2 | Klikdokter |
| --- | --- |
| Nama Produk | Klikdokter |
| Jenis Kompetitor | Indirect |
| Jenis Produk | Informasi Kesehatan, Booking, dan Chat Dokter |
| Target Customer | Pasien dan keluarga pasien, asuransi kesehatan, perusahaan |
| Key Competitive Advantage & Unique Value | Gratis dan terintegrasi, kualitas konten tinggi |

| Kelebihan | Kekurangan |
| --- | --- |
| + Konten kesehatan yang bermanfaat | - Layanan terbatas |
| + Layanan konsultasi dokter online | - Akurasi tidak dapat selalu terjamin |
| + Biaya gratis | - Tidak bisa menangani kasus darurat |


### Pawlyclinic

| Kompetitor 3 | Pawlyclinic |
| --- | --- |
| Nama Produk | Pawlyclinic |
| Jenis Kompetitor | Direct |
| Jenis Produk | Informasi kesehatan, booking, chat dokter, dan kirim obat |
| Target Customer | Hewan peliharaan dan pemiliknya |
| Key Competitive Advantage & Unique Value | 24 jam, dikhususkan untuk hewan peliharaan |

| Kelebihan | Kekurangan |
| --- | --- |
| + Akses dokter hewan tersedia 24 jam | - Kualitas layanan bergantung pada koneksi internet |
| + Memiliki toko untuk membeli obat-obatan dan suplemen lainnya | - Ketergantungan pada klinik mitra untuk konsultasi fisik |
| + Banyaknya dokter spesialis yang terdaftar | - Ketergantungan pada dokter hewan |
| + Pemeriksaan melalui video | |

## SDLC

### Metodologi SDLC
#### Metodologi yang digunakan
Scrumban
#### Alasan pemilihan metodologi
Scrumban memiliki beberapa kelebihan, yaitu: 
- <b>Fleksibilitas</b><br>
  Scrumban memberikan fleksibilitas dalam mengatur dan menyesuaikan proses pengembangan perangkat lunak.
- <b>Mengurangi pemborosan</b><br>
  Dengan menggunakan prinsip-prinsip lean dari Kanban, Scrumban membantu mengurangi pemborosan dalam pengembangan perangkat lunak.
- <b>Menggabungkan kelebihan dari Scrum dan Kanban</b><br>
  Scrum memungkinkan tim untuk fokus pada tujuan yang jelas dan berorientasi pada pengiriman produk. Sementara itu, Kanban memberikan fleksibilitas dan kontrol yang lebih besar terhadap aliran kerja.
- <b>Meningkatkan kualitas produk</b><br>
  Scrumban memungkinkan tim untuk memprioritaskan pekerjaan dan meningkatkan kualitas produk.
- <b>Mudah diadopsi</b><br>
  Scrumban lebih mudah diadopsi daripada Scrum atau Kanban secara terpisah. Scumban memungkinkan tim untuk memulai dengan menggunakan Scrum, sambil memanfaatkan prinsip-prinsip dari Kanban.

### Perancangan Tahap 1-3 SDLC
#### Tujuan dari produk
Mempermudah konsultasi penyakit hewan, sehingga dapat diakses oleh orang-orang di mana saja. Ini dapat membantu mengatasi beberapa tantangan dalam memberikan perawatan yang tepat dan efektif untuk hewan peliharaan, serta memberikan solusi untuk masalah di bidang kesehatan hewan.

#### Pengguna potensial
- Pemilik hewan peliharaan
- Dokter hewan
- Mahasiswa jurusan Kedokteran Hewan
- Petugas kebun binatang

#### Use Case Diagram
![Use Case Diagram](https://user-images.githubusercontent.com/70407002/223353494-dbeced9d-caa6-4b51-b76b-0db2af67037d.png)
![Use Case Diagram](https://user-images.githubusercontent.com/70407002/223353499-c59ee947-3200-46d1-b90a-4f53387c437c.png)


#### Functional requirements

| FR | Deskripsi |
| --- | --- |
| FR 1: Sign Up | User harus dapat melakukan pendaftaran akun baru. |
| FR 2: Login | User harus dapat masuk ke aplikasi dengan akun yang telah didaftarkan. |
| FR 3: Input gejala | Sistem harus dapat membaca hasil masukan dari user. |
| FR 4: Search Penyakit | User dapat melakukan pencarian terhadap penyakit yang berada di database. |
| FR 5: Lihat daftar penyakit | User dapat melihat daftar penyakit hewan yang berada di database  beserta gejala-gejalanya. |
| FR 6: Search Location | User dapat melakukan pencarian terhadap lokasi dokter/ klinik hewan terdekat. |
| FR 7: Create penyakit, hewan, dan lokasi dokter | Sistem harus dapat membuat entry baru di tabel-tabel database sesuai dengan request yang dibuat oleh admin. |
| FR 8: Read penyakit, hewan, lokasi dokter | Sistem harus dapat membaca dan menampilkan data yang diinginkan sesuai request. |
| FR 9: Update penyakit, hewan, lokasi dokter | Sistem harus dapat melakukan pembaruan di database sesuai dengan request yang dibuat oleh admin. |
| FR 10: Delete penyakit, hewan, dan lokasi dokter | Sistem harus dapat melakukan penghapusan pada database terkait penyakit, hewan, dan lokasi dokter. |

#### Entity Relationship Diagram
![ERD](https://user-images.githubusercontent.com/70407002/223355381-4311218a-4760-4c18-a1e6-aee642582ede.png)

#### Low-fidelity Wireframe
![Login](https://user-images.githubusercontent.com/70407002/223001197-eac50cf1-a1a2-4d8a-933c-29ef064ff7ec.png)
![Input Gejala](https://user-images.githubusercontent.com/70407002/223001194-23636396-3061-4343-af6a-d37d8e17446a.png)
![Search Penyakit](https://user-images.githubusercontent.com/70407002/223001187-95d2c1f9-37fd-4b49-b12c-1a81ffd045e0.png)
![Dokter Terdekat](https://user-images.githubusercontent.com/70407002/223001192-ed5676b7-4ef3-4683-baf9-eb1a3738c856.png)

#### Gantt chart
![Gantt chart](https://user-images.githubusercontent.com/70407002/223001421-040b7916-0d40-4126-9d4a-ce9e7a5e56ea.png)
