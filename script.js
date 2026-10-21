// Ambil elemen teks informasi dan kotak informasi
const infoText = document.getElementById('infoText');
const infoBox = document.getElementById('infoBox'); // Tambahan untuk target scroll

// Ambil elemen-elemen tombol berdasarkan ID
const btnNama = document.getElementById('btnNama');
const btnTtl = document.getElementById('btnTtl');
const btnAlamat = document.getElementById('btnAlamat');
const btnJurusan = document.getElementById('btnJurusan');

// Fungsi pembantu untuk mengubah teks sekaligus menggulir layar otomatis ke kotak info
function tampilkanDanGeser(teks) {
    infoText.innerHTML = teks;
    
    // Perintah otomatis pindah/scroll ke kotak jawaban dengan mulus (smooth)
    infoBox.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
    });
}

// Event Listener saat tombol Nama diklik
btnNama.addEventListener('click', function() {
    tampilkanDanGeser("<b>Nama Lengkap:</b> MUIZ ADKHA MAULANA");
});

// Event Listener saat tombol Tempat & Tgl Lahir diklik
btnTtl.addEventListener('click', function() {
    tampilkanDanGeser("<b>Tempat, Tgl Lahir:</b> MALANG, 21 NOVEMBER 2009");
});

// Event Listener saat tombol Alamat diklik
btnAlamat.addEventListener('click', function() {
    tampilkanDanGeser("<b>Alamat:</b> LEBAKHARJO, AMPELGADING");
});

// Event Listener saat tombol Jurusan diklik
btnJurusan.addEventListener('click', function() {
    tampilkanDanGeser("<b>Jurusan:</b> TKJ (Teknik Komputer dan Jaringan)");
});

// Logika Tombol Kirim Salam
const btnSapa = document.getElementById('btnSapa');
const pesanSapa = document.getElementById('pesanSapa');

btnSapa.addEventListener('click', function() {
    pesanSapa.textContent = "Terima kasih sudah menyapa! Salam kenal dari saya, Muiz! ✨";
});
