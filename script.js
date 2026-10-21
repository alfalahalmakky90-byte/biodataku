// Ambil elemen teks informasi
const infoText = document.getElementById('infoText');

// Ambil elemen-elemen tombol berdasarkan ID
const btnNama = document.getElementById('btnNama');
const btnTtl = document.getElementById('btnTtl');
const btnAlamat = document.getElementById('btnAlamat');
const btnJurusan = document.getElementById('btnJurusan');

// Event Listener saat tombol Nama diklik
btnNama.addEventListener('click', function() {
    infoText.innerHTML = "<b>Nama Lengkap:</b> MUIZ ADKHA MAULANA";
});

// Event Listener saat tombol Tempat & Tgl Lahir diklik
btnTtl.addEventListener('click', function() {
    infoText.innerHTML = "<b>Tempat, Tgl Lahir:</b> MALANG, 21 NOVEMBER 2009";
});

// Event Listener saat tombol Alamat diklik
btnAlamat.addEventListener('click', function() {
    infoText.innerHTML = "<b>Alamat:</b> LEBAKHARJO, AMPELGADING";
});

// Event Listener saat tombol Jurusan diklik
btnJurusan.addEventListener('click', function() {
    infoText.innerHTML = "<b>Jurusan:</b> TKJ (Teknik Komputer dan Jaringan)";
});

// Logika Tombol Kirim Salam
const btnSapa = document.getElementById('btnSapa');
const pesanSapa = document.getElementById('pesanSapa');

btnSapa.addEventListener('click', function() {
    pesanSapa.textContent = "Terima kasih sudah menyapa! Salam kenal dari saya, Muiz! ✨";
});
