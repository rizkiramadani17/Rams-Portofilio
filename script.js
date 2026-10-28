document.addEventListener('DOMContentLoaded', () => {

    // --- FITUR DARK MODE ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                themeToggleBtn.textContent = 'Light Mode';
            } else {
                themeToggleBtn.textContent = 'Dark Mode';
            }
        });
    }

    // --- VALIDASI FORM & MENAMPILKAN DATA ---
    // Menyesuaikan dengan ID di HTML kamu
    const contactForm = document.getElementById('contactform'); 
    const formMessage = document.getElementById('form-message');
    const dataContainer = document.getElementById('data-container');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah halaman reload

            // Mengambil nilai input (id="name" dan id="email")
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const pesan = document.getElementById('pesan').value.trim();

            // 1. Validasi tidak boleh kosong
            if (name === '' || email === '' || pesan === '') {
                formMessage.textContent = '❌ Peringatan: Semua kolom harus diisi!';
                formMessage.style.color = 'red';
                dataContainer.style.display = 'none';
                return;
            }

            // 2. Validasi Format Email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                formMessage.textContent = '❌ Peringatan: Format email tidak valid! (contoh: nama@email.com)';
                formMessage.style.color = 'red';
                dataContainer.style.display = 'none';
                return;
            }

            // 3. Menampilkan pesan berhasil
            formMessage.textContent = '✅ Pesan Anda berhasil dikirim!';
            formMessage.style.color = 'green';

            // 4. Menampilkan data di bawah form
            dataContainer.style.display = 'block';
            dataContainer.innerHTML = `
                <h4>Data yang Dikirim:</h4>
                <p><strong>Nama:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Pesan:</strong> ${pesan}</p>
            `;

            // Mengosongkan form setelah berhasil
            contactForm.reset(); 
        });
    }
});