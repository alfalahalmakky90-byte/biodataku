<script>
        // DATA SLIDE SESUAI PERMINTAAN
        const daftarSlide = [
            {
                kategori: "Nama",
                jawaban: "MUIZ ADKHA MAULANA",
                komentar: "Nama panggilan saya Muiz. Senang bisa berkenalan dengan kalian semua di SMA Plus Alfalah Almakky!",
                ikon: "👤"
            },
            {
                kategori: "TTL",
                jawaban: "MALANG, 21 NOVEMBER 2009",
                komentar: "Lahir dan tumbuh di Malang. Salam hangat dari Arek Malang untuk teman-teman semua!",
                ikon: "📅"
            },
            {
                kategori: "Alamat",
                jawaban: "LEBAKHARJO, AMPELGADING",
                komentar: "Tinggal di kawasan Lebakharjo, Ampelgading yang udaranya sejuk, asri, dan ramah lingkungan.",
                ikon: "🏠"
            },
            {
                kategori: "Jurusan",
                jawaban: "TKJ (Teknik Komputer dan Jaringan)",
                komentar: "Di TKJ tidak hanya belajar merakit jaringan & hardware, tapi juga mengasah skill coding web!",
                ikon: "🎓"
            },
            {
                kategori: "Alasan Memilih TKJ",
                jawaban: "ALASAN SAYA MEMILIH JURUSAN TKJ YAITU UNTUK MEMPELAJARI CARA KERJA SISTEM KOMPUTASI DAN BISA BERPIKIR SECARA KOMPUTASIONAL AGAR SAYA BISA MENGEMBANGKAN BANYAK WEBSITE MAUPUN APLIKASI YANG MUNGKIN BISA BERGUNA UNTUK SAYA ATAUPUN MASYARAKAT NANTI",
                komentar: "Visi yang sangat visioner! Dengan kemampuan computational thinking, Muiz siap membangun teknologi berguna bagi masyarakat. 'With great power comes great responsibility!'",
                ikon: "💡"
            },
            {
                kategori: "PENUTUP",
                jawaban: "SEKIAN DARI SAYA ASSALAMUALAIKUM WR. WB.",
                komentar: "Terima kasih banyak atas perhatian teman-teman dan Bapak/Ibu guru SMA Plus Alfalah Almakky. Semoga menginspirasi!",
                ikon: "🎬"
            }
        ];

        let indexSlideAktif = 0;

        function mulaiSlide(index) {
            indexSlideAktif = index;
            tampilkanSlide();
            document.getElementById('mainMenu').classList.add('hidden');
            document.getElementById('slideSection').classList.remove('hidden');
        }

        function tampilkanSlide() {
            const slide = daftarSlide[indexSlideAktif];
            
            document.getElementById('slideBadgeText').textContent = `SLIDE ${indexSlideAktif + 1} DARI ${daftarSlide.length}`;
            document.getElementById('judulKategori').innerHTML = `${slide.ikon} ${slide.kategori.toUpperCase()}`;
            document.getElementById('isiJawaban').textContent = slide.jawaban;
            document.getElementById('isiKomentar').textContent = slide.komentar;

            const btnNext = document.getElementById('btnNextText');
            if (indexSlideAktif === daftarSlide.length - 1) {
                btnNext.textContent = "🔄 Selesai & Ulangi dari Awal";
            } else {
                btnNext.textContent = "➡ Slide Berikutnya";
            }

            // Trigger smooth animation
            const slideSec = document.getElementById('slideSection');
            slideSec.classList.remove('slide-fade');
            void slideSec.offsetWidth; // Trigger reflow
            slideSec.classList.add('slide-fade');
        }

        function slideBerikutnya() {
            if (indexSlideAktif < daftarSlide.length - 1) {
                indexSlideAktif++;
                tampilkanSlide();
            } else {
                indexSlideAktif = 0;
                tampilkanSlide();
            }
        }

        function kembaliKeMenu() {
            document.getElementById('slideSection').classList.add('hidden');
            document.getElementById('mainMenu').classList.remove('hidden');
            document.getElementById('pesanSapa').textContent = "";
        }

        function sapa() {
            const pesan = document.getElementById('pesanSapa');
            pesan.textContent = "Halo! Terima kasih sudah menyapa! Salam Spider-Tech dari Muiz! 🕷️✨";
        }
    </script>
</body>
</html>
