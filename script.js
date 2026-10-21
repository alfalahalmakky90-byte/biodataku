// Fungsi untuk menampilkan informasi data diri sesuai tombol yang diklik
function tampilkanInfo(kategori) {
    const infoText = document.getElementById('infoText');

    switch (kategori) {
        case 'MUIZ ADKHA MAULANA':
            infoText.innerHTML = "<b>Nama Lengkap:</b> MUIZ ADKHA MAULANA";
            break;
        case 'MALANG, 21 NOVEMBER 2009':
            infoText.innerHTML = "<b>Tempat, Tgl Lahir:</b> MALANG, 21 NOVEMBER 2009";
            break;
        case 'LEBAKHARJO,AMPELGADING':
            infoText.innerHTML = "<b>Alamat:</b> LEBAKHARJO, AMPELGADING";
            break;
        case 'TKJ(TEKNIK KOMPUTER DAN JARINGAN':
            infoText.innerHTML = "<b>Jurusan:</b> TKJ (Teknik Komputer dan Jaringan)";
            break;
        default:
            infoText.innerHTML = "Pilih salah satu tombol di atas untuk melihat detail data diri saya!";
    }
}

// Logika Tombol Kirim Salam
const btnSapa = document.getElementById('btnSapa');
const pesanSapa = document.getElementById('pesanSapa');

btnSapa.addEventListener('click', function() {
    pesanSapa.textContent = "Terima kasih sudah menyapa! Salam kenal dari saya, Muiz! ✨";
});
