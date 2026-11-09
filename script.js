/* Data naskah diambil dari "Langkah dan Script.docx" */
const STEPS = [
 {
  "id": "1.1",
  "phase": "Pendahuluan",
  "title": "Salam dan Doa Pembuka",
  "seconds": 60,
  "rpm": {
   "guru": "Guru membuka pelajaran dengan salam dan meminta seorang murid memimpin doa. Guru mengecek kehadiran dan kesiapan perlengkapan belajar. Guru menanyakan kabar murid. Guru mengajak ice breaking singkat jika perlu. Guru memberi asesmen diagnostik kognitif untuk menilai pemahaman awal tentang graph. Guru mengaitkan materi Tree dengan hubungan antarlokasi pada peta Buleleng. Guru mengajukan pertanyaan pemantik: “Bagaimana kalian menggambarkan hubungan antara Pantai Lovina, Air Terjun Gitgit, Pura Beji, Danau Buyan, dan Kota Singaraja supaya mudah dipahami?” Guru menyampaikan tujuan pembelajaran.",
   "siswa": "Murid menjawab salam dan berdoa bersama. Murid menjawab presensi dan menyiapkan perlengkapan belajar. Murid menyampaikan kabar mereka. Murid mengikuti ice breaking jika ada. Murid mengerjakan asesmen diagnostik sendiri. Murid mengingat materi Tree dan menghubungkannya dengan pengalaman sehari-hari. Murid membaca pertanyaan pemantik dan menyampaikan dugaan awal. Murid menyimak tujuan pembelajaran."
  },
  "ref": "1.1 Salam dan doa pembuka",
  "items": [
   {
    "type": "aksi",
    "text": "Guru berdiri di depan kelas dengan senyum ramah. Murid sudah duduk rapi dalam enam kelompok, masing-masing lima murid."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Om Swastyastu, selamat pagi, anak-anak."
   },
   {
    "type": "siswa",
    "who": "SEMUA MURID",
    "detail": "serentak",
    "text": "Om Swastyastu, selamat pagi, Bapak.",
    "note": "Murid menyatukan kedua tangan di depan dada."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Sebelum kita memulai pelajaran, Bapak minta [KRISNA] untuk memimpin doa. Silakan, Nak."
   },
   {
    "type": "siswa",
    "who": "[KRISNA]",
    "detail": "Ketua kelas, Ketua Kel. 1",
    "text": "(berdiri) Kita awali pelajaran dengan berdoa menurut agama dan kepercayaan masing-masing. Berdoa, mulai. … Berdoa selesai."
   },
   {
    "type": "aksi",
    "text": "Seluruh murid menunduk dan berdoa dengan hening sekitar 10 detik."
   },
   {
    "type": "siswa",
    "who": "[KRISNA]",
    "detail": "Ketua kelas, Ketua Kel. 1",
    "text": "Berdoa selesai. Terima kasih, teman-teman."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Terima kasih, [KRISNA]. Silakan duduk kembali."
   }
  ]
 },
 {
  "id": "1.2",
  "phase": "Pendahuluan",
  "title": "Presensi dan Kesiapan Belajar",
  "seconds": 45,
  "rpm": {
   "guru": "Guru membuka pelajaran dengan salam dan meminta seorang murid memimpin doa. Guru mengecek kehadiran dan kesiapan perlengkapan belajar. Guru menanyakan kabar murid. Guru mengajak ice breaking singkat jika perlu. Guru memberi asesmen diagnostik kognitif untuk menilai pemahaman awal tentang graph. Guru mengaitkan materi Tree dengan hubungan antarlokasi pada peta Buleleng. Guru mengajukan pertanyaan pemantik: “Bagaimana kalian menggambarkan hubungan antara Pantai Lovina, Air Terjun Gitgit, Pura Beji, Danau Buyan, dan Kota Singaraja supaya mudah dipahami?” Guru menyampaikan tujuan pembelajaran.",
   "siswa": "Murid menjawab salam dan berdoa bersama. Murid menjawab presensi dan menyiapkan perlengkapan belajar. Murid menyampaikan kabar mereka. Murid mengikuti ice breaking jika ada. Murid mengerjakan asesmen diagnostik sendiri. Murid mengingat materi Tree dan menghubungkannya dengan pengalaman sehari-hari. Murid membaca pertanyaan pemantik dan menyampaikan dugaan awal. Murid menyimak tujuan pembelajaran."
  },
  "ref": "1.2 Presensi dan kesiapan belajar",
  "items": [
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Sekarang Bapak cek kehadiran. [KRISNA], apakah ada teman yang tidak hadir hari ini?"
   },
   {
    "type": "siswa",
    "who": "[KRISNA]",
    "detail": "Ketua kelas, Ketua Kel. 1",
    "text": "Lapor, Pak. Seluruh murid kelas [KELAS, 9.8] hadir hari ini, berjumlah tiga puluh orang. Tidak ada yang sakit, izin, maupun alpa.",
    "note": "Bila ada yang tidak hadir, ubah kalimat ini."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Terima kasih atas laporannya. Coba periksa meja kalian masing-masing. Buku tulis dan alat tulis sudah siap?"
   },
   {
    "type": "siswa",
    "who": "SEMUA MURID",
    "detail": "serentak",
    "text": "Sudah siap, Pak."
   }
  ]
 },
 {
  "id": "1.3",
  "phase": "Pendahuluan",
  "title": "Menanyakan Kabar",
  "seconds": 30,
  "rpm": {
   "guru": "Guru membuka pelajaran dengan salam dan meminta seorang murid memimpin doa. Guru mengecek kehadiran dan kesiapan perlengkapan belajar. Guru menanyakan kabar murid. Guru mengajak ice breaking singkat jika perlu. Guru memberi asesmen diagnostik kognitif untuk menilai pemahaman awal tentang graph. Guru mengaitkan materi Tree dengan hubungan antarlokasi pada peta Buleleng. Guru mengajukan pertanyaan pemantik: “Bagaimana kalian menggambarkan hubungan antara Pantai Lovina, Air Terjun Gitgit, Pura Beji, Danau Buyan, dan Kota Singaraja supaya mudah dipahami?” Guru menyampaikan tujuan pembelajaran.",
   "siswa": "Murid menjawab salam dan berdoa bersama. Murid menjawab presensi dan menyiapkan perlengkapan belajar. Murid menyampaikan kabar mereka. Murid mengikuti ice breaking jika ada. Murid mengerjakan asesmen diagnostik sendiri. Murid mengingat materi Tree dan menghubungkannya dengan pengalaman sehari-hari. Murid membaca pertanyaan pemantik dan menyampaikan dugaan awal. Murid menyimak tujuan pembelajaran."
  },
  "ref": "1.3 Menanyakan kabar",
  "items": [
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Baik, bagaimana kabar kalian pagi ini?"
   },
   {
    "type": "siswa",
    "who": "SEMUA MURID",
    "detail": "serentak",
    "text": "Baik, Pak!"
   }
  ]
 },
 {
  "id": "1.4",
  "phase": "Pendahuluan",
  "title": "Ice Breaking Peregangan Tiga Hitungan",
  "seconds": 75,
  "rpm": {
   "guru": "Guru membuka pelajaran dengan salam dan meminta seorang murid memimpin doa. Guru mengecek kehadiran dan kesiapan perlengkapan belajar. Guru menanyakan kabar murid. Guru mengajak ice breaking singkat jika perlu. Guru memberi asesmen diagnostik kognitif untuk menilai pemahaman awal tentang graph. Guru mengaitkan materi Tree dengan hubungan antarlokasi pada peta Buleleng. Guru mengajukan pertanyaan pemantik: “Bagaimana kalian menggambarkan hubungan antara Pantai Lovina, Air Terjun Gitgit, Pura Beji, Danau Buyan, dan Kota Singaraja supaya mudah dipahami?” Guru menyampaikan tujuan pembelajaran.",
   "siswa": "Murid menjawab salam dan berdoa bersama. Murid menjawab presensi dan menyiapkan perlengkapan belajar. Murid menyampaikan kabar mereka. Murid mengikuti ice breaking jika ada. Murid mengerjakan asesmen diagnostik sendiri. Murid mengingat materi Tree dan menghubungkannya dengan pengalaman sehari-hari. Murid membaca pertanyaan pemantik dan menyampaikan dugaan awal. Murid menyimak tujuan pembelajaran."
  },
  "ref": "1.4 ICE BREAKING 1: Peregangan Tiga Hitungan",
  "items": [
   {
    "type": "aksi",
    "text": "Semua murid berdiri di samping bangku masing-masing. Guru berdiri di depan dan mencontohkan gerakan."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Semuanya, berdiri di samping bangku masing-masing. Kita peregangan dulu supaya badan segar dan siap belajar. Ikuti hitungan Bapak, ya. Ada tiga gerakan, setiap gerakan tiga hitungan."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Gerakan pertama, angkat kedua tangan setinggi-tingginya ke atas, lalu tarik tubuh ke atas. Satu, dua, tiga."
   },
   {
    "type": "siswa",
    "who": "SEMUA MURID",
    "detail": "serentak",
    "text": "Satu, dua, tiga.",
    "note": "Gerakan: kedua tangan lurus ke atas, tahan tiga hitungan."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Gerakan kedua, putar bahu ke belakang dengan pelan. Satu, dua, tiga."
   },
   {
    "type": "siswa",
    "who": "SEMUA MURID",
    "detail": "serentak",
    "text": "Satu, dua, tiga.",
    "note": "Gerakan: bahu diputar ke belakang, satu putaran tiap hitungan."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Gerakan ketiga, tarik napas dalam lewat hidung, lalu buang pelan lewat mulut. Satu, dua, tiga."
   },
   {
    "type": "siswa",
    "who": "SEMUA MURID",
    "detail": "serentak",
    "text": "Satu, dua, tiga.",
    "note": "Gerakan: tarik napas dalam bersama-sama, lalu hembuskan pelan."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Bagus sekali. Badan sudah lebih segar. Silakan duduk kembali, kita mulai pelajarannya."
   }
  ]
 },
 {
  "id": "1.5",
  "phase": "Pendahuluan",
  "title": "Asesmen Diagnostik",
  "seconds": 240,
  "rpm": {
   "guru": "Guru membuka pelajaran dengan salam dan meminta seorang murid memimpin doa. Guru mengecek kehadiran dan kesiapan perlengkapan belajar. Guru menanyakan kabar murid. Guru mengajak ice breaking singkat jika perlu. Guru memberi asesmen diagnostik kognitif untuk menilai pemahaman awal tentang graph. Guru mengaitkan materi Tree dengan hubungan antarlokasi pada peta Buleleng. Guru mengajukan pertanyaan pemantik: “Bagaimana kalian menggambarkan hubungan antara Pantai Lovina, Air Terjun Gitgit, Pura Beji, Danau Buyan, dan Kota Singaraja supaya mudah dipahami?” Guru menyampaikan tujuan pembelajaran.",
   "siswa": "Murid menjawab salam dan berdoa bersama. Murid menjawab presensi dan menyiapkan perlengkapan belajar. Murid menyampaikan kabar mereka. Murid mengikuti ice breaking jika ada. Murid mengerjakan asesmen diagnostik sendiri. Murid mengingat materi Tree dan menghubungkannya dengan pengalaman sehari-hari. Murid membaca pertanyaan pemantik dan menyampaikan dugaan awal. Murid menyimak tujuan pembelajaran."
  },
  "ref": "1.5 Asesmen diagnostik, Google Forms",
  "items": [
   {
    "type": "aksi",
    "text": "Guru menampilkan tautan atau kode QR Google Forms di layar proyektor. Murid menyiapkan perangkat."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Sebelum masuk ke materi, Bapak ingin tahu sejauh mana pengetahuan awal kalian tentang graph. Silakan buka Google Forms lewat tautan di layar atau scan QR code ini. Soalnya singkat dan ini bukan ujian penentu nilai rapor, jadi kerjakan sendiri dan jujur ya.",
    "note": "Tautan ada di Lampiran 1 RPM. Di kelas nyata, asesmen ini sebaiknya diberikan sebelum jam pelajaran agar tidak memakan waktu."
   },
   {
    "type": "aksi",
    "text": "Murid mengerjakan asesmen secara mandiri. Guru berkeliling mengamati."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Waktu mengerjakan sudah selesai. Silakan kirim jawaban kalian. Terima kasih sudah mengerjakan dengan jujur. Hasilnya Bapak pakai untuk menyesuaikan bantuan belajar kalian."
   }
  ]
 },
 {
  "id": "1.6",
  "phase": "Pendahuluan",
  "title": "Apersepsi Tree dan Peta Buleleng",
  "seconds": 60,
  "rpm": {
   "guru": "Guru membuka pelajaran dengan salam dan meminta seorang murid memimpin doa. Guru mengecek kehadiran dan kesiapan perlengkapan belajar. Guru menanyakan kabar murid. Guru mengajak ice breaking singkat jika perlu. Guru memberi asesmen diagnostik kognitif untuk menilai pemahaman awal tentang graph. Guru mengaitkan materi Tree dengan hubungan antarlokasi pada peta Buleleng. Guru mengajukan pertanyaan pemantik: “Bagaimana kalian menggambarkan hubungan antara Pantai Lovina, Air Terjun Gitgit, Pura Beji, Danau Buyan, dan Kota Singaraja supaya mudah dipahami?” Guru menyampaikan tujuan pembelajaran.",
   "siswa": "Murid menjawab salam dan berdoa bersama. Murid menjawab presensi dan menyiapkan perlengkapan belajar. Murid menyampaikan kabar mereka. Murid mengikuti ice breaking jika ada. Murid mengerjakan asesmen diagnostik sendiri. Murid mengingat materi Tree dan menghubungkannya dengan pengalaman sehari-hari. Murid membaca pertanyaan pemantik dan menyampaikan dugaan awal. Murid menyimak tujuan pembelajaran."
  },
  "ref": "1.6 Apersepsi: mengaitkan Tree dengan peta Buleleng",
  "items": [
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Pada pertemuan sebelumnya kita sudah belajar struktur data Tree. Siapa yang masih ingat apa saja bagian dari Tree? [YASMIN], silakan."
   },
   {
    "type": "siswa",
    "who": "[YASMIN]",
    "detail": "Ketua Kel. 3",
    "text": "Tree terdiri dari node, Pak, yaitu titik yang menyimpan data, dan hubungan antarnode yang tersusun bertingkat dari atas ke bawah."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Betul. Ada yang ingin menambahkan? [ADELA]?"
   },
   {
    "type": "siswa",
    "who": "[ADELA]",
    "detail": "Ketua Kel. 5",
    "text": "Pada Tree, setiap node kecuali yang paling atas hanya punya satu node di atasnya, Pak."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Bagus sekali, itu ciri penting dari Tree. Sekarang bayangkan peta Buleleng. Ada Kota Singaraja, Pantai Lovina, Air Terjun Gitgit, dan Danau Buyan, dan semuanya dihubungkan oleh jalan. Apakah hubungan antartempat seperti ini sama dengan Tree? Simpan dulu pertanyaan itu di kepala kalian.",
    "note": "Tampilkan peta Buleleng di layar."
   }
  ]
 },
 {
  "id": "1.7",
  "phase": "Pendahuluan",
  "title": "Pertanyaan Pemantik",
  "seconds": 45,
  "rpm": {
   "guru": "Guru membuka pelajaran dengan salam dan meminta seorang murid memimpin doa. Guru mengecek kehadiran dan kesiapan perlengkapan belajar. Guru menanyakan kabar murid. Guru mengajak ice breaking singkat jika perlu. Guru memberi asesmen diagnostik kognitif untuk menilai pemahaman awal tentang graph. Guru mengaitkan materi Tree dengan hubungan antarlokasi pada peta Buleleng. Guru mengajukan pertanyaan pemantik: “Bagaimana kalian menggambarkan hubungan antara Pantai Lovina, Air Terjun Gitgit, Pura Beji, Danau Buyan, dan Kota Singaraja supaya mudah dipahami?” Guru menyampaikan tujuan pembelajaran.",
   "siswa": "Murid menjawab salam dan berdoa bersama. Murid menjawab presensi dan menyiapkan perlengkapan belajar. Murid menyampaikan kabar mereka. Murid mengikuti ice breaking jika ada. Murid mengerjakan asesmen diagnostik sendiri. Murid mengingat materi Tree dan menghubungkannya dengan pengalaman sehari-hari. Murid membaca pertanyaan pemantik dan menyampaikan dugaan awal. Murid menyimak tujuan pembelajaran."
  },
  "ref": "1.7 Pertanyaan pemantik",
  "items": [
   {
    "type": "aksi",
    "text": "Guru menampilkan pertanyaan pemantik di layar."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Bapak punya pertanyaan pemantik untuk kalian: Sekarang bayangkan hubungan antarlokasi di Kabupaten Buleleng. Bagaimana cara menggambarkan hubungan antara beberapa lokasi yang terhubung? Pikirkan sebentar, lalu sampaikan dugaan awal kalian."
   },
   {
    "type": "siswa",
    "who": "[PANIA]",
    "detail": "Anggota Kel. 5",
    "text": "Menurut saya, lokasi digambar sebagai titik, lalu hubungannya digambar dengan garis, Pak."
   },
   {
    "type": "siswa",
    "who": "[ADELA]",
    "detail": "Ketua Kel. 5",
    "text": "Menurut saya, bisa digambar di peta, lalu lokasi yang berdekatan dihubungkan dengan garis."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Terima kasih, dua-duanya dugaan yang bagus. Belum Bapak benarkan atau salahkan, karena nanti kalian akan membuktikannya sendiri.",
    "note": "Guru sengaja tidak menjelaskan konsep Graph."
   }
  ]
 },
 {
  "id": "1.8",
  "phase": "Pendahuluan",
  "title": "Penyampaian Tujuan Pembelajaran",
  "seconds": 45,
  "rpm": {
   "guru": "Guru membuka pelajaran dengan salam dan meminta seorang murid memimpin doa. Guru mengecek kehadiran dan kesiapan perlengkapan belajar. Guru menanyakan kabar murid. Guru mengajak ice breaking singkat jika perlu. Guru memberi asesmen diagnostik kognitif untuk menilai pemahaman awal tentang graph. Guru mengaitkan materi Tree dengan hubungan antarlokasi pada peta Buleleng. Guru mengajukan pertanyaan pemantik: “Bagaimana kalian menggambarkan hubungan antara Pantai Lovina, Air Terjun Gitgit, Pura Beji, Danau Buyan, dan Kota Singaraja supaya mudah dipahami?” Guru menyampaikan tujuan pembelajaran.",
   "siswa": "Murid menjawab salam dan berdoa bersama. Murid menjawab presensi dan menyiapkan perlengkapan belajar. Murid menyampaikan kabar mereka. Murid mengikuti ice breaking jika ada. Murid mengerjakan asesmen diagnostik sendiri. Murid mengingat materi Tree dan menghubungkannya dengan pengalaman sehari-hari. Murid membaca pertanyaan pemantik dan menyampaikan dugaan awal. Murid menyimak tujuan pembelajaran."
  },
  "ref": "1.8 Penyampaian tujuan pembelajaran",
  "items": [
   {
    "type": "aksi",
    "text": "Guru menampilkan tujuan pembelajaran di layar."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Tujuan pembelajaran hari ini ada dua. Pertama, kalian dapat menganalisis karakteristik struktur data Graph beserta komponennya, yaitu vertex dan edge, serta membedakannya dengan Tree. Kedua, kalian dapat menganalisis jenis-jenis Graph, yaitu directed graph, undirected graph, dan weighted graph, lalu menentukan jenis yang paling sesuai untuk suatu permasalahan. Sudah jelas?"
   },
   {
    "type": "siswa",
    "who": "SEMUA MURID",
    "detail": "serentak",
    "text": "Sudah jelas, Pak."
   }
  ]
 },
 {
  "id": "2.1",
  "phase": "Kegiatan Inti",
  "title": "Stimulation / Pemberian Rangsangan",
  "seconds": 420,
  "rpm": {
   "guru": "Guru menampilkan peta atau gambar lokasi di Buleleng: Kota Singaraja, Pantai Lovina, Air Terjun Gitgit, dan Danau Buyan. Guru bertanya cara menggambarkan hubungan antarlokasi. Guru mengaitkan stimulus dengan materi Tree dan menahan penjelasan konsep Graph.",
   "siswa": "Murid mengamati peta atau gambar yang guru tampilkan. Murid menyampaikan pendapat dari pengalaman mereka mengenal lokasi di Buleleng. Murid menduga cara menggambarkan hubungan antarlokasi."
  },
  "ref": "2.1 Stimulation / Pemberian Rangsangan",
  "items": [
   {
    "type": "aksi",
    "text": "Guru menampilkan peta wisata Buleleng lewat media interaktif di proyektor: Kota Singaraja, Pantai Lovina, Air Terjun Gitgit, dan Danau Buyan."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Perhatikan layar. Ini peta lokasi wisata di sekitar Singaraja. Amati baik-baik letak tempatnya dan jalan yang menghubungkannya."
   },
   {
    "type": "aksi",
    "text": "Murid mengamati peta sekitar 10 detik."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Siapa yang pernah mengunjungi salah satu tempat ini? Ceritakan pengalamannya. [MARTIN]?"
   },
   {
    "type": "siswa",
    "who": "[MARTIN]",
    "detail": "Ketua Kel. 4",
    "text": "Saya pernah ke Air Terjun Gitgit bersama keluarga."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Terima kasih. [TASYA], bagaimana dengan pengalamanmu?"
   },
   {
    "type": "siswa",
    "who": "[TASYA]",
    "detail": "Anggota Kel. 3",
    "text": "Saya pernah ke Pantai Lovina, Pak. Dari Kota Singaraja naik motor sekitar dua puluh menit, jalannya langsung menuju Lovina."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Bagus. Sekarang pikirkan: lokasi mana yang langsung terhubung dengan Singaraja, dan bagaimana menuju Danau Buyan dari Singaraja? Jangan dijawab dulu. Kita akan menyelidikinya bersama.",
    "note": "Guru menahan penjelasan konsep."
   }
  ]
 },
 {
  "id": "2.2",
  "phase": "Kegiatan Inti",
  "title": "Problem Statement / Identifikasi Masalah",
  "seconds": 300,
  "rpm": {
   "guru": "Guru membagikan LKM dan menjelaskan masalah yang perlu diselesaikan. Guru membimbing murid merumuskan pertanyaan tentang simpul, sisi, dan jalur antarlokasi. Guru memeriksa pemahaman murid terhadap tugas dan menahan jawaban akhir.",
   "siswa": "Murid membaca masalah di LKM. Murid berdiskusi merumuskan pertanyaan yang akan mereka selidiki. Murid mencatat pertanyaan tersebut."
  },
  "ref": "2.2 Problem Statement / Identifikasi Masalah",
  "items": [
   {
    "type": "aksi",
    "text": "Guru membagikan LKM kepada enam kelompok (masing-masing lima murid). Ketua kelompok maju mengambil LKM."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "LKM ini berisi masalah yang harus kalian selesaikan. Ada enam lokasi wisata: Pantai Lovina, Air Terjun Gitgit, Pura Beji, Danau Buyan, Kota Singaraja, dan Pelabuhan Celukan Bawang, yang terhubung oleh jalur jalan. Bagaimana menggambarkan hubungan antarlokasi itu dan menelusuri jalan dari satu lokasi ke lokasi lain? Baca masalahnya dalam hati, lalu rumuskan pertanyaan yang akan kalian selidiki."
   },
   {
    "type": "aksi",
    "text": "Murid berdiskusi dalam kelompok. Guru berkeliling dan menghampiri Kelompok 1."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Kelompok 1, apa yang kalian pahami dari masalah di LKM?"
   },
   {
    "type": "siswa",
    "who": "[KRISNA]",
    "detail": "Ketua kelas, Ketua Kel. 1",
    "text": "Kami harus menggambarkan enam tempat wisata dan jalan penghubungnya, Pak, lalu mencari rute dari satu tempat ke tempat lain."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Betul. Lalu pertanyaan apa yang ingin kalian selidiki?"
   },
   {
    "type": "siswa",
    "who": "[KRISNA]",
    "detail": "Ketua kelas, Ketua Kel. 1",
    "text": "Apa nama bagian-bagian pada gambar itu dan berapa jumlahnya, Pak? Kami juga ingin tahu bagaimana menelusuri rute antartempat."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Pertanyaan yang sangat baik. Catat di LKM. Bapak tidak akan langsung memberi jawabannya, kalian yang akan menemukannya."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Sebelum lanjut, Bapak cek dulu. Apakah ada kelompok yang belum paham masalah atau tugasnya?"
   },
   {
    "type": "siswa",
    "who": "[PANIA]",
    "detail": "Anggota Kel. 5",
    "text": "Kami sudah paham, Pak."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Bagus. Kalau nanti ada yang bingung, jangan ragu bertanya. Kalian juga boleh menyampaikan pendapat dengan bahasa yang paling nyaman bagi kalian.",
    "note": "Penerapan CRT: murid bebas memilih bahasa."
   }
  ]
 },
 {
  "id": "2.3",
  "phase": "Kegiatan Inti",
  "title": "Data Collection / Pengumpulan Data",
  "seconds": 780,
  "rpm": {
   "guru": "Guru membagikan media interaktif kepada murid sebagai sumber belajar. Guru mengarahkan murid mengamati diagram dan mengeksplorasi media interaktif. Guru memberi contoh visual dan pertanyaan pengarah kepada murid yang perlu bantuan. Guru memantau diskusi dan mendorong semua anggota kelompok ikut berpartisipasi.",
   "siswa": "Murid mengamati diagram dan mengeksplorasi media sesuai petunjuk LKM. Murid mengidentifikasi vertex (simpul) dan edge (sisi). Murid menghitung vertex dan edge, lalu menelusuri jalur antarlokasi. Murid mencatat hasil pengamatan di LKM."
  },
  "ref": "2.3 Data Collection / Pengumpulan Data",
  "items": [
   {
    "type": "aksi",
    "text": "Guru membagikan tautan atau kode QR media interaktif kepada setiap kelompok sebagai sumber belajar."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Sekarang masuk ke Kegiatan 1 dan 2 di LKM, yaitu Mengamati dan Eksplorasi. Bapak bagikan media interaktif sebagai sumber belajar kalian. Silakan pindai kode QR atau buka tautan yang Pak sudah bagikan. Jelajahi media itu, lalu ikuti petunjuk LKM untuk mengidentifikasi vertex dan edge, menghitung jumlahnya, dan menelusuri jalur antarlokasi. Catat semua hasil pengamatan di LKM. Ingat, semua anggota harus ikut berperan.",
    "note": "Tautan media interaktif ada di Lampiran 1 RPM."
   },
   {
    "type": "aksi",
    "text": "Kelompok membuka media interaktif dan mengeksplorasinya sambil mengisi LKM."
   },
   {
    "type": "aksi",
    "text": "Guru menghampiri Kelompok 1 yang hasil asesmen awalnya sudah siap."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Krisna, hasil asesmen awal kamu menunjukkan kalian sudah siap. [KRISNA], Bapak minta kamu menjadi pemimpin diskusi dan tutor sebaya. Bantu kelompok lain kalau mereka bertanya.",
    "note": "Diferensiasi sesuai hasil asesmen awal."
   },
   {
    "type": "siswa",
    "who": "[KRISNA]",
    "detail": "Ketua kelas, Ketua Kel. 1",
    "text": "Siap, Pak. Saya akan membantu dan menjelaskan dengan bahasa yang mudah dipahami."
   },
   {
    "type": "aksi",
    "text": "Guru mencatat jalannya diskusi pada lembar observasi diskusi kelompok (keaktifan, kerja sama, komunikasi, tanggung jawab, berpikir kritis)."
   },
   {
    "type": "aksi",
    "text": "Diskusi Kelompok 2. Kelompok 2 diskusikan terkait pembagian tugas dan soal-soalnya."
   },
   {
    "type": "aksi",
    "text": "Guru menghampiri Kelompok 4 yang terlihat bingung."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Bagaimana, ada yang bisa Bapak bantu?"
   },
   {
    "type": "siswa",
    "who": "[MARTIN]",
    "detail": "Ketua Kel. 4",
    "text": "Kami masih bingung membedakan vertex dan edge, Pak."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Tidak apa-apa. Ini Bapak berikan glosarium bergambar sebagai bantuan. Sekarang coba perhatikan diagram di media interaktif. Lokasi wisata digambar sebagai apa?",
    "note": "Scaffolding untuk kelompok yang perlu penguatan: glosarium bergambar dan pertanyaan pengarah."
   },
   {
    "type": "siswa",
    "who": "[MARTIN]",
    "detail": "Ketua Kel. 4",
    "text": "Sebagai titik, Pak."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Lalu jalan yang menghubungkan dua lokasi digambar sebagai apa?"
   },
   {
    "type": "siswa",
    "who": "[MARTIN]",
    "detail": "Ketua Kel. 4",
    "text": "Sebagai garis, Pak. Jadi titik itu vertex, dan garis itu edge."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Tepat sekali. Kamu menemukannya sendiri. Sekarang lanjutkan menghitung jumlahnya."
   },
   {
    "type": "siswa",
    "who": "[MARTIN]",
    "detail": "Ketua Kel. 4",
    "text": "Baik, Pak. Terima kasih."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Bapak lihat semua anggota kelompok sudah ikut berpartisipasi. Teruskan, dan pastikan setiap hasil dicatat di LKM."
   }
  ]
 },
 {
  "id": "2.4",
  "phase": "Kegiatan Inti",
  "title": "Data Processing / Pengolahan Data",
  "seconds": 780,
  "rpm": {
   "guru": "Guru membimbing murid mengolah hasil pengamatan lewat pertanyaan pengarah. Guru membantu murid yang kesulitan menghitung simpul dan sisi serta menentukan jalur. Guru memberi tantangan lanjutan: membandingkan beberapa jalur atau menganalisis perbedaan Graph dan Tree. Guru memberi umpan balik dan menahan penyelesaian tugas murid.",
   "siswa": "Murid menyelesaikan tugas di LKM dari hasil pengamatan. Murid menghitung vertex dan edge serta menentukan jalur antarlokasi. Murid yang sudah siap mengerjakan tantangan lanjutan: membandingkan jalur atau karakteristik Graph dan Tree. Murid mendiskusikan hasil analisis dan menulis alasannya."
  },
  "ref": "2.4 Data Processing / Pengolahan Data",
  "items": [
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Sekarang Kegiatan 3, yaitu Analisis. Gunakan hasil pengamatan kalian untuk menjawab pertanyaan di LKM: menghitung vertex dan edge, dan menganalisis jenis graph. Manfaatkan pertanyaan pengarah di LKM. Bapak akan berkeliling."
   },
   {
    "type": "aksi",
    "text": "Guru menghampiri Kelompok 3."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Kelompok 3, perhatikan jalan antara Singaraja dan Pantai Lovina. Apakah bisa dilalui dari dua arah?"
   },
   {
    "type": "siswa",
    "who": "[YASMIN]",
    "detail": "Ketua Kel. 3",
    "text": "Bisa, Pak. Dari Singaraja ke Lovina bisa, dari Lovina ke Singaraja juga bisa. Jadi garisnya tidak punya arah."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Graph yang sisinya tidak berarah disebut apa?"
   },
   {
    "type": "siswa",
    "who": "[TASYA]",
    "detail": "Anggota Kel. 3",
    "text": "Undirected graph, Pak."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Kalau ada jalan satu arah, misalnya di dalam Kota Singaraja, bagaimana kita menggambarkannya?"
   },
   {
    "type": "siswa",
    "who": "[YASMIN]",
    "detail": "Ketua Kel. 3",
    "text": "Sisinya diberi tanda panah, Pak. Itu namanya directed graph."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Betul. Lalu bagaimana kalau di setiap jalan kita tuliskan jaraknya dalam kilometer?"
   },
   {
    "type": "siswa",
    "who": "[TASYA]",
    "detail": "Anggota Kel. 3",
    "text": "Itu weighted graph, Pak, karena setiap edge punya bobot, yaitu jaraknya."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Bagus. Untuk aplikasi peta yang menghitung jarak dan rute, menurut kalian jenis graph apa yang paling sesuai, dan mengapa?"
   },
   {
    "type": "siswa",
    "who": "[YASMIN]",
    "detail": "Ketua Kel. 3",
    "text": "Weighted graph, Pak, karena aplikasi peta perlu tahu jarak atau waktu tiap jalan. Kalau ada jalan satu arah, graph-nya juga berarah."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Alasan yang logis. Tuliskan alasan itu di LKM."
   },
   {
    "type": "aksi",
    "text": "Guru menghampiri Kelompok 1 yang sudah selesai lebih cepat."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Kelompok 1, kerja kalian bagus."
   },
   {
    "type": "aksi",
    "text": "Guru menghampiri Kelompok 5."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Kelompok 5, bagaimana hasil hitungan vertex dan edge kalian? [PANIA]?"
   },
   {
    "type": "siswa",
    "who": "[PANIA]",
    "detail": "Anggota Kel. 5",
    "text": "Kami menghitung tiga vertex dan tiga edge, Pak."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Hitungannya sudah tepat. Sekarang jelaskan alasan kalian memilih jenis graph di LKM, jangan hanya menuliskan jawabannya."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Bagus, Teman-teman, waktu diskusi sudah hampir habis. Pastikan jawaban dan alasan kalian sudah tertulis di LKM."
   }
  ]
 },
 {
  "id": "2.6",
  "phase": "Kegiatan Inti",
  "title": "Verification / Pembuktian",
  "seconds": 720,
  "rpm": {
   "guru": "Guru meminta beberapa kelompok menyampaikan hasil analisis. Guru mengarahkan murid memeriksa identifikasi vertex, edge, dan jalur. Guru memfasilitasi diskusi untuk membandingkan hasil antarkelompok dan meluruskan miskonsepsi. Guru menegaskan perbedaan Graph dan Tree.",
   "siswa": "Murid mempresentasikan hasil analisis lewat diagram atau penjelasan lisan. Murid membandingkan hasilnya dengan hasil kelompok lain. Murid menanggapi kelompok lain dengan santun. Murid memperbaiki jawaban dari hasil verifikasi dan umpan balik guru."
  },
  "ref": "2.6 Verification / Pembuktian",
  "items": [
   {
    "type": "aksi",
    "text": "Pembagian waktu: presentasi Kelompok 2 sekitar 3 menit, tanggapan dan perbaikan sekitar 2 menit, presentasi Kelompok 3 sekitar 2 menit, penegasan guru sekitar 3 menit, perbaikan jawaban di LKM sekitar 2 menit."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Sekarang tahap verifikasi, yaitu Kegiatan 4 di LKM. Karena waktu kita terbatas, hanya dua kelompok yang presentasi, yaitu Kelompok 1 dan Kelompok 2. Kelompok lain tetap menyimak, membandingkan dengan hasil kalian sendiri, dan menanggapi dengan santun. Hasil LKM semua kelompok akan Bapak periksa. Kelompok 1, silakan."
   },
   {
    "type": "aksi",
    "text": "Kelompok 2 maju membawa LKM dan diagram."
   },
   {
    "type": "siswa",
    "who": "[Krisna]",
    "detail": "Ketua Kel. 1",
    "text": "Selamat pagi, Bapak dan teman-teman. Kami dari Kelompok 2 akan menyampaikan hasil diskusi kami. Pertama, titik mewakili lokasi dan disebut vertex, sedangkan garis penghubung mewakili jalan dan disebut edge. Kedua, pada graph yang kami buat dari kartu lokasi ada enam vertex dan tujuh edge. Ketiga, tidak semua vertex harus terhubung langsung dengan vertex lainnya. Contohnya Lovina hanya terhubung langsung dengan Singaraja dan Gerokgak. Keempat, pada perbandingan dengan Tree, Graph bentuk hubungannya bebas dan boleh memiliki siklus, sedangkan Tree berjenjang dari atas ke bawah dan tidak memiliki siklus. Graph kami memiliki siklus, yaitu Singaraja, Seririt, Busungbiu, Kubutambahan, lalu kembali ke Singaraja, jadi bukan Tree. Selain itu, Tree dengan enam node hanya punya lima edge, sedangkan graph kami punya tujuh edge. Demikian presentasi kami, terima kasih.",
    "note": "Ganti “selamat pagi” sesuai waktu take."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Terima kasih, Kelompok 1. Kelompok lain, adakah tanggapan atau pertanyaan?"
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Bagus sekali. Kalau tidak ada tanggapan. Selanjutnya Kelompok 2, silakan sampaikan analisis jenis graph."
   },
   {
    "type": "siswa",
    "who": "[MUTIARA]",
    "detail": "Ketua Kel. 2",
    "text": "Dari Kelompok 2, kami menyampaikan hasil Kegiatan 3. Diagram 1 tidak memiliki arah dan tidak memiliki bobot, jadi undirected graph. Diagram 2 memiliki arah yang ditunjukkan panah dan tidak berbobot, jadi directed graph. Diagram 3 memiliki bobot berupa jarak 8, 10, dan 6 kilometer, jadi weighted graph. Terima kasih.",
    "note": "Sesuaikan angka jarak dengan LKM."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Terima kasih, Kelompok 2. Mari kita beri tepuk tangan untuk kelompok yang sudah tampil."
   },
   {
    "type": "siswa",
    "who": "SEMUA MURID",
    "detail": "serentak",
    "text": "(bertepuk tangan)"
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Sekarang Bapak tegaskan perbedaan Graph dan Tree sesuai tabel 4A. Bentuk hubungannya, pada Graph bebas, pada Tree bertingkat dari atas ke bawah. Kemungkinan membentuk siklus, Graph boleh memiliki siklus, sedangkan Tree tidak pernah. Pola hubungannya, pada Graph tidak harus ada vertex paling atas dan satu vertex boleh terhubung ke banyak vertex, sedangkan pada Tree ada satu node paling atas dan setiap node lain punya satu node di atasnya. Tree sebenarnya adalah bentuk khusus dari Graph yang tidak memiliki siklus.",
    "note": "Tampilkan gambar pembanding Graph dan Tree di layar."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Jadi dugaan [ADELA] tadi, yaitu menggambar seperti Tree, belum bisa menggambarkan semua jalan di Buleleng ini. Sedangkan dugaan [PANIA] tentang tanda dan garis ternyata tepat. Silakan perbaiki jawaban di LKM berdasarkan hasil verifikasi tadi.",
    "note": "Callback ke dugaan awal di 1.7."
   },
   {
    "type": "aksi",
    "text": "Murid memperbaiki jawaban di LKM."
   }
  ]
 },
 {
  "id": "2.7",
  "phase": "Kegiatan Inti",
  "title": "Generalization / Menarik Kesimpulan",
  "seconds": 600,
  "rpm": {
   "guru": "Guru membimbing murid merumuskan kesimpulan tentang Graph, vertex, edge, dan jalur antarsimpul. Guru bertanya untuk membantu murid menyimpulkan perbedaan Graph dan Tree. Guru meminta murid mengisi refleksi di LKM. Guru menegaskan konsep utama yang murid temukan.",
   "siswa": "Murid menyusun kesimpulan dari hasil pengamatan dan analisis. Murid menjelaskan perbedaan Graph dan Tree dengan kalimat sendiri. Murid menulis hal yang sudah dipahami dan hal yang masih perlu dipelajari. Murid menyampaikan kesimpulan secara lisan atau tertulis."
  },
  "ref": "2.7 Generalization / Menarik Kesimpulan",
  "items": [
   {
    "type": "aksi",
    "text": "Pembagian waktu: tanya jawab kesimpulan sekitar 5 menit, menulis refleksi di LKM sekitar 3 menit, satu murid membacakan refleksi sekitar 2 menit."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Sekarang kita rumuskan kesimpulan dari semua yang sudah kita temukan. Pernyataan pertama, Graph merupakan apa? [KRISNA], silakan."
   },
   {
    "type": "siswa",
    "who": "[KRISNA]",
    "detail": "Ketua kelas, Ketua Kel. 1",
    "text": "Graph merupakan struktur data yang menggambarkan hubungan antarobjek, Pak, yang terdiri dari titik dan garis penghubung."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Bagus. Pernyataan kedua, komponen utama Graph terdiri atas apa? [ILKA]?"
   },
   {
    "type": "siswa",
    "who": "[ILKA]",
    "detail": "Anggota Kel. 2",
    "text": "Komponen utama Graph terdiri atas vertex atau simpul, dan edge atau sisi, Pak."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Tepat. Pernyataan ketiga, jenis Graph yang telah kita pelajari adalah apa saja? [MARTIN]?"
   },
   {
    "type": "siswa",
    "who": "[MARTIN]",
    "detail": "Ketua Kel. 4",
    "text": "Ada tiga, Pak. Undirected graph, sisinya tidak berarah. Directed graph, sisinya berarah. Weighted graph, sisinya memiliki bobot, misalnya jarak."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Terakhir, sebutkan jenis-jenis Graph yang kita pelajari. [TASYA]?"
   },
   {
    "type": "siswa",
    "who": "[TASYA]",
    "detail": "Anggota Kel. 3",
    "text": "Ada tiga, Pak. Undirected graph, sisinya tidak berarah. Directed graph, sisinya berarah. Weighted graph, sisinya punya bobot, misalnya jarak."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Sempurna. Pernyataan keempat, dalam memilih jenis Graph untuk suatu permasalahan, kita perlu memperhatikan apa? [PANIA]?"
   },
   {
    "type": "siswa",
    "who": "[PANIA]",
    "detail": "Anggota Kel. 5",
    "text": "Kita perlu memperhatikan apakah hubungan antarobjeknya berarah atau tidak, dan apakah hubungan itu memiliki nilai atau bobot, seperti jarak, Pak."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Contoh yang sangat tepat. Bapak rangkum konsep utama yang kalian temukan hari ini. Graph menggambarkan hubungan antarobjek lewat vertex dan edge. Berbeda dari Tree, Graph boleh membentuk siklus. Jenisnya bisa undirected, directed, atau weighted, dan pemilihannya bergantung pada arah serta bobot hubungan. Konsep ini dipakai di aplikasi peta, media sosial, dan jaringan komputer."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Sekarang isi bagian refleksi di LKM. Tuliskan hal yang sudah kalian pahami dan hal yang masih perlu dipelajari."
   },
   {
    "type": "aksi",
    "text": "Murid menulis refleksi di LKM."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Siapa yang bersedia menyampaikan refleksinya? [ADELA], silakan."
   },
   {
    "type": "siswa",
    "who": "[ADELA]",
    "detail": "Ketua Kel. 5",
    "text": "Konsep baru yang saya pelajari adalah Graph, Pak. Bagian yang paling mudah saya pahami adalah perbedaan directed dan undirected graph, karena directed graph memakai panah. Yang masih membuat saya bingung adalah cara menentukan jenis graph yang paling sesuai untuk suatu masalah."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Terima kasih, [ADELA]. Itu refleksi yang jujur dan akan menjadi bekal belajar kita berikutnya."
   }
  ]
 },
 {
  "id": "3.1",
  "phase": "Penutup",
  "title": "Refleksi Pembelajaran",
  "seconds": 180,
  "rpm": {
   "guru": "Guru mengajak murid merefleksikan pemahaman, kesulitan, dan pengalaman bekerja sama dalam kelompok. Guru memberikan asesmen akhir untuk menilai pemahaman setelah belajar. Guru menyampaikan materi pertemuan berikutnya. Guru menutup pembelajaran dengan doa dan salam.",
   "siswa": "Murid menyampaikan refleksi secara lisan atau tertulis. Murid mengerjakan asesmen akhir sendiri. Murid menyimak informasi tentang pertemuan berikutnya. Murid berdoa dan menjawab salam penutup."
  },
  "ref": "3.1 Refleksi",
  "items": [
   {
    "type": "aksi",
    "text": "Murid kembali duduk dengan tenang. Guru berdiri di depan kelas."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Sekarang kita refleksi bersama. Bagaimana perasaan kalian belajar graph hari ini? Bagian mana yang terasa sulit? [MARTIN]?"
   },
   {
    "type": "siswa",
    "who": "[MARTIN]",
    "detail": "Ketua Kel. 4",
    "text": "Awalnya saya sulit membedakan vertex dan edge, Pak. Setelah berdiskusi dan dibantu pertanyaan dari Bapak, saya jadi lebih paham. Belajar lewat lokasi di Buleleng juga seru."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Terima kasih. Bagaimana pengalaman bekerja sama dalam kelompok? [ADELA]?"
   },
   {
    "type": "siswa",
    "who": "[ADELA]",
    "detail": "Ketua Kel. 5",
    "text": "Kerja sama membuat tugas lebih cepat selesai, Pak. Kami belajar membagi tugas dan menghargai pendapat teman."
   }
  ]
 },
 {
  "id": "3.1b",
  "phase": "Penutup",
  "title": "Asesmen Akhir",
  "seconds": 240,
  "rpm": {
   "guru": "Guru mengajak murid merefleksikan pemahaman, kesulitan, dan pengalaman bekerja sama dalam kelompok. Guru memberikan asesmen akhir untuk menilai pemahaman setelah belajar. Guru menyampaikan materi pertemuan berikutnya. Guru menutup pembelajaran dengan doa dan salam.",
   "siswa": "Murid menyampaikan refleksi secara lisan atau tertulis. Murid mengerjakan asesmen akhir sendiri. Murid menyimak informasi tentang pertemuan berikutnya. Murid berdoa dan menjawab salam penutup."
  },
  "ref": "3.1 Asesmen akhir",
  "items": [
   {
    "type": "aksi",
    "text": "Murid mengerjakan asesmen akhir secara mandiri, lalu mengumpulkan LKM."
   }
  ]
 },
 {
  "id": "3.1c",
  "phase": "Penutup",
  "title": "Informasi Pertemuan Berikutnya",
  "seconds": 60,
  "rpm": {
   "guru": "Guru mengajak murid merefleksikan pemahaman, kesulitan, dan pengalaman bekerja sama dalam kelompok. Guru memberikan asesmen akhir untuk menilai pemahaman setelah belajar. Guru menyampaikan materi pertemuan berikutnya. Guru menutup pembelajaran dengan doa dan salam.",
   "siswa": "Murid menyampaikan refleksi secara lisan atau tertulis. Murid mengerjakan asesmen akhir sendiri. Murid menyimak informasi tentang pertemuan berikutnya. Murid berdoa dan menjawab salam penutup."
  },
  "ref": "3.1 Informasi pertemuan berikutnya",
  "items": [
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Pertemuan berikutnya, kita akan memakai graph untuk mempelajari pencarian jalur, yaitu bagaimana aplikasi peta memilih rute. Silakan buka kembali media interaktif di rumah sebagai bekal.",
    "note": "Sesuaikan dengan materi pertemuan berikutnya."
   },
   {
    "type": "siswa",
    "who": "SEMUA MURID",
    "detail": "serentak",
    "text": "Baik, Pak."
   }
  ]
 },
 {
  "id": "3.2",
  "phase": "Penutup",
  "title": "Doa dan Salam Penutup",
  "seconds": 120,
  "rpm": {
   "guru": "Guru mengajak murid merefleksikan pemahaman, kesulitan, dan pengalaman bekerja sama dalam kelompok. Guru memberikan asesmen akhir untuk menilai pemahaman setelah belajar. Guru menyampaikan materi pertemuan berikutnya. Guru menutup pembelajaran dengan doa dan salam.",
   "siswa": "Murid menyampaikan refleksi secara lisan atau tertulis. Murid mengerjakan asesmen akhir sendiri. Murid menyimak informasi tentang pertemuan berikutnya. Murid berdoa dan menjawab salam penutup."
  },
  "ref": "3.2 Doa dan salam penutup",
  "items": [
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Sekarang kita tutup pelajaran dengan doa. [KRISNA], silakan pimpin doa."
   },
   {
    "type": "siswa",
    "who": "[KRISNA]",
    "detail": "Ketua kelas, Ketua Kel. 1",
    "text": "(berdiri) Baik, Pak. Teman-teman, mari kita berdoa menurut agama dan kepercayaan masing-masing. Berdoa, dimulai."
   },
   {
    "type": "aksi",
    "text": "Seluruh murid menunduk dan berdoa dengan hening sekitar 10 detik."
   },
   {
    "type": "siswa",
    "who": "[KRISNA]",
    "detail": "Ketua kelas, Ketua Kel. 1",
    "text": "Berdoa selesai. Terima kasih, teman-teman."
   },
   {
    "type": "guru",
    "who": "GURU",
    "detail": "Bapak",
    "text": "Terima kasih, [KRISNA]. Demikian pelajaran kita hari ini. Tetap semangat belajar. Om Santih, Santih, Santih, Om.",
    "note": "Ganti salam penutup bila perlu."
   },
   {
    "type": "siswa",
    "who": "SEMUA MURID",
    "detail": "serentak",
    "text": "Om Santih, Santih, Santih, Om. Terima kasih, Bapak.",
    "note": "Murid menyatukan tangan di depan dada."
   },
   {
    "type": "aksi",
    "text": "Guru tersenyum dan melambaikan tangan."
   }
  ]
 }
];

(function () {
'use strict';
var $ = function (id) { return document.getElementById(id); };
var esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); };
var hl = function (s) { return esc(s).replace(/\[[^\]]+\]/g, function (m) { return '<mark>' + m + '</mark>'; }); };
var TOTAL = STEPS.reduce(function (a, s) { return a + s.seconds; }, 0);
var PHASES = {};
STEPS.forEach(function (s) { PHASES[s.phase] = (PHASES[s.phase] || 0) + s.seconds; });

function fmt(ms) {
  var s = Math.max(0, Math.ceil(ms / 1000));
  return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
}

function dl(sec) {
  var m = Math.floor(sec / 60), d = sec % 60;
  return (m ? m + ' mnt' : '') + (m && d ? ' ' : '') + (d ? d + ' dtk' : '');
}

var st, ticker = null, toastTimer = null;
function fresh() {
  st = { started: false, paused: false, finished: false, idx: 0, endAt: 0,
         remain: STEPS[0].seconds * 1000, done: new Set() };
}
fresh();

/* ---------- rendering ---------- */
function buildList() {
  var html = '', phase = '';
  STEPS.forEach(function (s, i) {
    if (s.phase !== phase) {
      phase = s.phase;
      html += '<li class="grp">' + esc(phase) + '<em>' + (PHASES[phase] / 60) + ' menit</em></li>';
    }
    html += '<li class="step todo" data-i="' + i + '"><span class="ico"></span><span>' +
            esc(s.title) + '</span><span class="mn">' + dl(s.seconds) + '</span></li>';
  });
  $('stepList').innerHTML = html;
}

function renderList() {
  document.querySelectorAll('#stepList .step').forEach(function (li) {
    var i = +li.dataset.i;
    var cls = st.done.has(i) ? 'done' : (st.started && !st.finished && i === st.idx) ? 'now' : 'todo';
    li.className = 'step ' + cls;
    li.querySelector('.ico').textContent = cls === 'done' ? '✓' : cls === 'now' ? '▶' : '';
  });
  var box = $('stepList'), a = box.querySelector('.now');   // scroll only the list, never the page
  if (a) box.scrollTo({ top: Math.max(0, a.offsetTop - (box.clientHeight - a.offsetHeight) / 2), behavior: 'smooth' });
}

function scriptHTML(s) {
  var out = '';
  if (s.rpm && (s.rpm.guru || s.rpm.siswa)) {
    out += '<details class="rpm"><summary>Kegiatan menurut rancangan pembelajaran</summary>' +
           '<h4>Guru</h4><p>' + esc(s.rpm.guru) + '</p><h4>Peserta didik</h4><p>' + esc(s.rpm.siswa) + '</p></details>';
  }
  s.items.forEach(function (it) {
    if (it.type === 'aksi') {
      out += '<div class="blk aksi"><span class="tag">AKTIVITAS</span><p>' + hl(it.text) + '</p></div>';
    } else {
      var guru = it.type === 'guru';
      var who = guru ? 'Guru' : (it.who === 'SEMUA MURID' ? 'Semua murid' : it.who);
      out += '<div class="blk ' + it.type + '"><span class="tag">' + (guru ? 'GURU' : 'PESERTA DIDIK') + '</span>' +
             '<span class="who">' + hl(who + (it.detail ? ', ' + it.detail : '')) + '</span>' +
             '<p>' + hl(it.text) + '</p>' +
             (it.note ? '<div class="note">CATATAN: ' + hl(it.note) + '</div>' : '') + '</div>';
    }
  });
  return out;
}

function renderStep() {
  var s = STEPS[st.idx], n = STEPS[st.idx + 1];
  $('phaseLabel').textContent = s.phase + ', langkah ' + (st.idx + 1) + ' dari ' + STEPS.length;
  $('stepTitle').textContent = s.title;
  $('stepDur').textContent = fmt(s.seconds * 1000);
  $('nextUp').textContent = n ? 'Berikutnya: ' + n.title : 'Langkah terakhir';
  $('scriptRef').textContent = 'Naskah ' + s.ref;
  $('scriptBody').innerHTML = scriptHTML(s);
  $('scriptBody').scrollTop = 0;
  renderList();
}

function paint() {
  var s = STEPS[st.idx], dur = s.seconds * 1000;
  var rem = st.finished ? 0 : (st.paused || !st.started) ? st.remain : Math.max(0, st.endAt - Date.now());
  $('clock').textContent = fmt(rem);
  $('stepLeft').textContent = fmt(rem);
  $('stepBar').style.width = (100 * (1 - rem / dur)) + '%';
  var sec = rem / 1000, red = Math.min(60, 0.2 * s.seconds), yel = Math.min(120, 0.4 * s.seconds);
  document.body.dataset.urgency = sec < red ? 'danger' : sec < yel ? 'warn' : 'ok';
  var prepSec = Math.min(30, Math.round(s.seconds * 0.3));
  var pb = $('prepBanner'), n = STEPS[st.idx + 1];
  if (st.started && !st.finished && sec > 0 && sec <= prepSec) {
    pb.innerHTML = '<span>Bersiap ke langkah berikutnya</span><b>' + esc(n ? n.title : 'Penutupan pembelajaran') + '</b>';
    pb.classList.add('show');
  } else pb.classList.remove('show');
  var before = 0;
  for (var i = 0; i < st.idx; i++) before += STEPS[i].seconds * 1000;
  var el = st.finished ? TOTAL * 1000 : before + dur - rem;
  $('overallPct').textContent = Math.min(100, Math.floor(100 * el / (TOTAL * 1000))) + '%';
  $('overallBar').style.width = (100 * el / (TOTAL * 1000)) + '%';
  $('overallSteps').textContent = st.done.size + ' / ' + STEPS.length + ' langkah selesai';
}

function setState() {
  document.body.dataset.state = !st.started ? 'idle' : st.finished ? 'finished' : st.paused ? 'paused' : 'running';
  $('btnPause').textContent = st.paused ? 'LANJUTKAN' : 'PAUSE';
}

function toast(msg, sub) {
  var t = $('toast');
  t.innerHTML = '<b>' + esc(msg) + '</b><span>' + esc(sub) + '</span>';
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { t.classList.remove('show'); }, 2800);
}

function enter(msg) {
  renderStep();
  paint();
  if (msg) toast(msg, STEPS[st.idx].title);
}

/* ---------- timer engine (timestamp based) ---------- */
function resetClock() {
  var d = STEPS[st.idx].seconds * 1000;
  if (st.paused) st.remain = d; else st.endAt = Date.now() + d;
}

function tick() {
  if (!st.started || st.paused || st.finished) return;
  var moved = false, t = Date.now();
  while (t >= st.endAt) {
    st.done.add(st.idx);
    if (st.idx === STEPS.length - 1) { finish(); return; }
    st.idx++;
    st.endAt += STEPS[st.idx].seconds * 1000;   // no drift between steps
    moved = true;
  }
  if (moved) enter('BERPINDAH KE LANGKAH BERIKUTNYA'); else paint();
}

function start() {
  if (st.started && !st.finished) return;
  fresh();
  st.started = true;
  st.endAt = Date.now() + STEPS[0].seconds * 1000;
  $('startScreen').classList.add('hidden');
  $('endScreen').classList.add('hidden');
  setState();
  enter();
  if (!ticker) ticker = setInterval(tick, 200);
}

function finish() {
  st.finished = true;
  STEPS.forEach(function (_, i) { st.done.add(i); });
  clearInterval(ticker); ticker = null;
  renderList(); paint(); setState();
  $('endScreen').classList.remove('hidden');
}

function togglePause() {
  if (!st.started) { start(); return; }
  if (st.finished) { start(); return; }
  if (st.paused) { st.endAt = Date.now() + st.remain; st.paused = false; }
  else { st.remain = Math.max(0, st.endAt - Date.now()); st.paused = true; }
  setState(); paint();
}

function skip() {
  if (!st.started || st.finished) return;
  st.done.add(st.idx);
  if (st.idx === STEPS.length - 1) { finish(); return; }
  st.idx++;
  resetClock();
  enter('BERPINDAH KE LANGKAH BERIKUTNYA');
}

function prev() {
  if (!st.started || st.finished) return;
  if (st.idx > 0) {
    st.done.delete(st.idx); st.idx--; st.done.delete(st.idx);
    resetClock(); enter('KEMBALI KE LANGKAH SEBELUMNYA');
  } else { resetClock(); enter('LANGKAH DIULANG'); }
}

function repeat() {
  if (!st.started || st.finished) return;
  resetClock();
  enter('LANGKAH DIULANG');
}

/* ---------- view options ---------- */
var scale = 1;
try { scale = parseFloat(localStorage.getItem('ukin-scale')) || 1; } catch (e) {}
function setScale(v) {
  scale = Math.min(2.5, Math.max(0.6, Math.round(v * 10) / 10));
  $('scaleLbl').textContent = Math.round(scale * 100) + '%';
  document.documentElement.style.setProperty('--scale', scale);
  try { localStorage.setItem('ukin-scale', scale); } catch (e) {}
}
function toggleFS() {
  if (document.fullscreenElement) document.exitFullscreen();
  else if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen();
}
document.addEventListener('fullscreenchange', function () {
  var on = !!document.fullscreenElement;
  $('fsBtn').textContent = on ? 'Keluar Layar Penuh' : 'Layar Penuh';
  $('btnStartFs').textContent = on ? 'KELUAR LAYAR PENUH' : 'LAYAR PENUH';
});
function setMode(m) {
  document.body.dataset.mode = m;
  document.querySelectorAll('[data-mode-btn]').forEach(function (b) {
    b.classList.toggle('on', b.dataset.modeBtn === m);
  });
}

/* ---------- wiring ---------- */
buildList();
setScale(scale);
renderStep();
paint();
setState();

$('btnStart').onclick = start;
$('btnRestart').onclick = start;
$('btnPause').onclick = togglePause;
$('btnSkip').onclick = skip;
$('btnPrev').onclick = prev;
$('btnRepeat').onclick = repeat;
$('fsBtn').onclick = toggleFS;
$('btnStartFs').onclick = toggleFS;
$('fontUp').onclick = function () { setScale(scale + 0.1); };
$('fontDown').onclick = function () { setScale(scale - 0.1); };
document.querySelectorAll('[data-mode-btn]').forEach(function (b) {
  b.onclick = function () { setMode(b.dataset.modeBtn); };
});
document.addEventListener('click', function (e) {
  var b = e.target.closest('button');
  if (b) b.blur();            // keep Space for pause, not for re-clicking a button
});
document.addEventListener('visibilitychange', tick);
document.addEventListener('keydown', function (e) {
  if (e.ctrlKey || e.metaKey || e.altKey || e.repeat) return;
  switch (e.code) {
    case 'Space': e.preventDefault(); togglePause(); break;
    case 'ArrowRight': skip(); break;
    case 'ArrowLeft': prev(); break;
    case 'KeyF': toggleFS(); break;
    case 'Equal': case 'NumpadAdd': setScale(scale + 0.1); break;
    case 'Minus': case 'NumpadSubtract': setScale(scale - 0.1); break;
  }
});
})();
