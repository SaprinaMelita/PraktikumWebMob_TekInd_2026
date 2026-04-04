// ======================
// AUDIT 5S
// ======================

// 1. Ambil elemen
const formAudit = document.getElementById('formAudit');
const tabelAudit = document.getElementById('tabelAudit');
const btnHapusSemua = document.getElementById('btnHapusSemua');

// 2. Ambil data dari LocalStorage atau inisialisasi kosong
let dataAudit = JSON.parse(localStorage.getItem('dataAudit')) || [];

// 3. Fungsi render tabel
function renderTabel() {
    tabelAudit.innerHTML = '';
    dataAudit.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.tanggal}</td>
            <td>${item.auditor}</td>
            <td>${item.skor}</td>
        `;
        tabelAudit.appendChild(row);
    });
}

// 4. Render tabel pertama kali
renderTabel();

// 5. Event submit form
formAudit.addEventListener('submit', function(e) {
    e.preventDefault();

    const auditor = document.getElementById('auditor').value;
    const seiri = document.getElementById('seiri').checked;
    const seiton = document.getElementById('seiton').checked;
    const seiso = document.getElementById('seiso').checked;
    const seiketsu = document.getElementById('seiketsu').checked;
    const shitsuke = document.getElementById('shitsuke').checked;

    // Hitung skor
    const total = [seiri, seiton, seiso, seiketsu, shitsuke].filter(v => v).length;
    const skor = Math.round((total / 5) * 100);

    // Tambahkan ke array
    const tanggal = new Date().toLocaleDateString('id-ID');
    dataAudit.push({ tanggal, auditor, skor });

    // Simpan ke LocalStorage
    localStorage.setItem('dataAudit', JSON.stringify(dataAudit));

    // Render tabel
    renderTabel();

    // Reset form
    formAudit.reset();
});

// 6. Hapus semua data
btnHapusSemua.addEventListener('click', () => {
    if (confirm('Apakah yakin ingin menghapus semua data audit?')) {
        dataAudit = [];
        localStorage.removeItem('dataAudit');
        renderTabel();
    }
});