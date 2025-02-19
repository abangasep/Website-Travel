// Ambil semua tombol 'Beli Sekarang!' dari destinasi-item dan paket-wisata-item
const beliButtons = document.querySelectorAll('.destinasi-item button, .paket-wisata-item button');
const destinasi = document.querySelector('#destinasi');
const paketWisata = document.querySelector('#paket-wisata');
const kontak = document.querySelector('#kontak');
const main = document.querySelector('main'); // Container utama untuk destinasi, paket, kontak

// Fungsi untuk menangani pembelian
function handlePembelian(event) {
    // Sembunyikan semua elemen utama
    destinasi.classList.add('hide-all');
    paketWisata.classList.add('hide-all');
    kontak.classList.add('hide-all');

    // Buat elemen untuk pesan sukses
    const successMessageContainer = document.createElement('div');
    successMessageContainer.classList.add('success-message-container');
    successMessageContainer.textContent = "Pembelian Anda berhasil dan akan segera diproses.";

    // Tambahkan elemen pesan sukses ke dalam body agar berada di atas
    document.body.appendChild(successMessageContainer); // Menambahkan ke dalam body

    // Menambahkan efek transisi untuk pesan sukses
    setTimeout(() => {
        successMessageContainer.style.opacity = '1';
    }, 500); // Menunggu setengah detik sebelum animasi muncul
}

// Menambahkan event listener ke setiap tombol 'Beli Sekarang'
beliButtons.forEach(button => {
    button.addEventListener('click', handlePembelian);
});
