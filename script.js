// Fungsi untuk menampilkan informasi data diri sesuai tombol yang diklik
function tampilkanInfo(kategori) {
    const infoText = document.getElementById('infoText');

    switch (kategori) {
        case 'nama':
            infoText.innerHTML = "<b>Nama Lengkap:</b> MUIZ ADKHA MAULANA";
            break;
        case 'ttl':
            infoText.innerHTML = "<b>Tempat, Tgl Lahir:</b> MALANG, 21 NOVEMBER 2009";
            break;
        case 'alamat':
            infoText.innerHTML = "<b>Alamat:</b> LEBAKHARJO, AMPELGADING";
            break;
        case 'jurusan':
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
