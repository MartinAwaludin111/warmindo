// script.js

// Fungsi untuk scroll ke bagian menu
function scrollToMenu() {
    document.getElementById("menu").scrollIntoView({
      behavior: "smooth"
    });
  }
  
  // Menambahkan event listener untuk tombol navigasi
  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  
  // Fungsi untuk menampilkan pesan terima kasih jika ada interaksi
  function showThankYouMessage() {
    alert("Terima kasih sudah mengunjungi Warmindo Lezat!");
  }
  
  // Menambahkan event listener ke tombol "Lihat Menu"
  document.querySelector("#hero button").addEventListener("click", scrollToMenu);
  
  // Fungsi untuk tampilkan modal (jika ada keinginan untuk menambah fitur tambahan)
  function showOrderModal() {
    alert("Pesanan Anda telah diterima! Silakan menunggu.");
  }
  