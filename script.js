// Ambil elemen teks informasi
const infoText = document.getElementById('infoText');

// Ambil elemen-elemen tombol berdasarkan ID
const btnNama = document.getElementById('btnNama');
const btnTtl = document.getElementById('btnTtl');
const btnAlamat = document.getElementById('btnAlamat');
const btnJurusan = document.getElementById('btnJurusan');

// Event Listener saat tombol Nama diklik
btnNama.addEventListener('click', function() {
    infotext('HAI NAMA SAYA  MUIZ ADKHA MAULANA KERAP DINPANGGIL MUIS');
});

// Event Listener saat tombol Tempat & Tgl Lahir diklik
btnTtl.addEventListener('click', function() {
    infotext('SAYA LAHIR DI MALANG, 21 NOVEMBER 2009');
});

// Event Listener saat tombol Alamat diklik
btnAlamat.addEventListener('click', function() {
    infotex('SAYA TINGGAL DI DESA PRAMUKA LEBAKHARJO AMPELGADING');
});

// Event Listener saat tombol Jurusan diklik
btnJurusan.addEventListener('click', function() {
    infotext('SAYA MEMILIH JURUSAN TKJ (TEKNIK KOMPUTER DAN JARINGAN KARENA SAYA INGIN BISA MENGUASAI TEKNIK TERSEBUT');
});

// Logika Tombol Kirim Salam
const btnSapa = document.getElementById('btnSapa');
const pesanSapa = document.getElementById('pesanSapa');

btnSapa.addEventListener('click', function() {
    alert('HAI..! TERIMAKASIH TELAH MENGUNJUNGI WEBSITE SAYA SALAM KENAL YAA...!:>');
});
