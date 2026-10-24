// Menunggu DOM dimuat sepenuhnya
document.addEventListener('DOMContentLoaded', () => {

    // --- Q5: Fitur Kreativitas - Dark Mode ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Mengubah teks tombol berdasarkan tema
        if (body.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = '☀️ Light Mode';
        } else {
            themeToggleBtn.textContent = '🌙 Dark Mode';
        }
    });

    // --- Q4: Validasi Form dan Menampilkan Pesan ---
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');
    const dataContainer = document.getElementById('data-container');

    contactForm.addEventListener('submit', function(event) {
        // Mencegah halaman reload saat form disubmit
        event.preventDefault();

        // Mengambil nilai input
        const nama = document.getElementById('nama').value.trim();
        const email = document.getElementById('email').value.trim();
        const pesan = document.getElementById('pesan').value.trim();

        // Q4: Validasi tidak boleh kosong
        if (nama === '' || email === '' || pesan === '') {
            formMessage.textContent = '❌ Peringatan: Semua kolom harus diisi!';
            formMessage.style.color = 'red';
            dataContainer.style.display = 'none';
            return;
        }

        // Q4: Validasi Format Email menggunakan Regex
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            formMessage.textContent = '❌ Peringatan: Format email tidak valid! (contoh: nama@email.com)';
            formMessage.style.color = 'red';
            dataContainer.style.display = 'none';
            return;
        }

        // Q4: Menampilkan pesan berhasil
        formMessage.textContent = '✅ Pesan Anda berhasil dikirim!';
        formMessage.style.color = 'green';

        // Q5: Menampilkan data form di bawah setelah dikirim
        dataContainer.style.display = 'block';
        dataContainer.innerHTML = `
            <h4>Data yang Dikirim:</h4>
            <p><strong>Nama:</strong> ${nama}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Pesan:</strong> ${pesan}</p>
        `;

        // Mengosongkan form setelah berhasil
        contactForm.reset();
    });
});