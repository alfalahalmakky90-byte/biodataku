<script>
        function goToSlide(slideIndex) {
            // Sembunyikan semua slide
            const slides = document.querySelectorAll('.slide');
            slides.forEach(slide => slide.classList.remove('active'));

            // Tampilkan slide tujuan berdasarkan ID
            const targetSlide = document.getElementById('slide-' + slideIndex);
            if (targetSlide) {
                targetSlide.classList.add('active');
            }
            
            // Scroll halus ke atas agar pas di layar HP/Laptop
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function sapa() {
            document.getElementById('pesanSapa').textContent = "Terima kasih sudah menyapa! Salam jaring laba-laba dari Muiz! 🕷️✨";
        }
    </script>
</body>
</html>
