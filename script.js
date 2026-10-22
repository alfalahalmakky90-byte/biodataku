// 1. Fitur Spider-Sense Alert
const spiderSenseBtn = document.getElementById('spider-sense-btn');
const heroCard = document.getElementById('hero-card');

spiderSenseBtn.addEventListener('click', () => {
    // Tambah kelas animasi
    heroCard.classList.add('spider-sense-active');
    
    // Tampilkan notifikasi
    alert('⚡ SPIDER-SENSE BERGETAR! Bahaya atau Ide Startup Baru Terdeteksi!');

    // Matikan efek setelah 3 detik
    setTimeout(() => {
        heroCard.classList.remove('spider-sense-active');
    }, 3000);
});

// 2. Fitur Toggle Identitas Rahasia (Peter Parker vs Spider-Man Mode)
const toggleBtn = document.getElementById('toggle-identity-btn');
const heroName = document.getElementById('hero-name');
const heroAlias = document.getElementById('hero-alias');
const heroBio = document.getElementById('hero-bio');

let isHeroMode = false;

toggleBtn.addEventListener('click', () => {
    isHeroMode = !isHeroMode;

    if (isHeroMode) {
        heroName.innerText = "Spider-Coder 🕷️";
        heroAlias.innerText = "Alias: Pahlawan Kode Web";
        heroBio.innerText = "Menggunakan keyboard untuk membasmi bug dan membangun solusi startup untuk masa depan!";
        toggleBtn.innerText = "🔄 Kembali ke Identitas Biasa";
    } else {
        heroName.innerText = "[Nama Kamu]";
        heroAlias.innerText = "Alias: The Friendly Neighborhood Developer";
        heroBio.innerText = `"Dengan kekuatan coding yang besar, datang pula tanggung jawab proyek yang besar!" Saya berfokus pada dunia teknologi.`;
        toggleBtn.innerText = "🔄 Ubah Identitas Rahasia";
    }
});
