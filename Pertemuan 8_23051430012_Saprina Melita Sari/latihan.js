const btnLoad = document.getElementById('btnLoad');
const btnFilter = document.getElementById('btnFilter');
const container = document.getElementById('containerKaryawan');
const loading = document.getElementById('loading');
const formTambah = document.getElementById('formTambahKaryawan');

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Variabel untuk menyimpan data agar bisa digunakan kembali oleh fungsi filter
let daftarKaryawan = [];

// --- 1. FUNGSI MUAT SEMUA DATA ---
btnLoad.addEventListener('click', function () {
    loading.classList.remove('d-none');
    container.innerHTML = '';

    fetch(API_URL)
        .then(function (response) {
            if (!response.ok) throw new Error('Gagal mengambil data');
            return response.json();
        })
        .then(function (data) {
            // Simpan data asli ke dalam variabel daftarKaryawan
            daftarKaryawan = data;

            // Render semua data ke layar
            renderData(daftarKaryawan);
        })
        .catch(function (error) {
            container.innerHTML = `<div class="alert alert-danger w-100">Error: ${error.message}</div>`;
        })
        .finally(function () {
            loading.classList.add('d-none');
        });
});

// --- 2. FUNGSI FILTER KOTA DENGAN HURUF 'S' ---
btnFilter.addEventListener('click', function () {
    // Validasi jika data belum dimuat
    if (daftarKaryawan.length === 0) {
        alert("Harap klik 'Muat Semua Data' terlebih dahulu!");
        return;
    }

    // Filter dari variabel daftarKaryawan
    const hasilFilter = daftarKaryawan.filter(function (item) {
        return item.address.city.toLowerCase().includes('s');
    });

    // Tampilkan hasil filter ke layar
    container.innerHTML = '';
    renderData(hasilFilter);
});

// --- 3. FUNGSI TAMBAH DATA (POST) ---
formTambah.addEventListener('submit', function (e) {
    e.preventDefault();

    const dataBaru = {
        name: document.getElementById('inputNama').value,
        email: document.getElementById('inputEmail').value,
        company: { name: document.getElementById('inputPerusahaan').value },
        address: { city: document.getElementById('inputKota').value }
    };

    fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataBaru)
    })
        .then(function (response) {
            if (!response.ok) throw new Error('Gagal menambah data');
            return response.json();
        })
        .then(function (result) {
            // Tutup Modal
            const modalInstance = bootstrap.Modal.getInstance(document.getElementById('modalTambah'));
            modalInstance.hide();
            formTambah.reset();

            // Tampilkan card baru di paling atas
            renderData([result], true);

            // Masukkan data baru ke variabel daftarKaryawan agar sinkron saat difilter nanti
            daftarKaryawan.unshift(result);

            alert("Karyawan baru berhasil ditambahkan!");
        })
        .catch(function (error) {
            alert("Error: " + error.message);
        });
});

// --- 4. FUNGSI RENDER (MURNI MENAMPILKAN) ---
function renderData(data, isNew = false) {
    data.forEach(function (karyawan) {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-3';

        col.innerHTML = `
            <div class="card h-100 shadow-sm ${isNew ? 'border-success border-2' : ''}">
                <div class="card-body">
                    <h5 class="card-title">${karyawan.name}</h5>
                    <p class="card-text text-muted mb-1">Email: ${karyawan.email}</p>
                    <p class="card-text mb-1">Perusahaan: ${karyawan.company.name}</p>
                    <p class="card-text"><small>Kota: ${karyawan.address.city}</small></p>
                    <button class="btn btn-sm btn-outline-primary" onclick="cariKaryawan(${karyawan.id})">
                        Detail Profil
                    </button>
                </div>
            </div>
        `;

        if (isNew) {
            container.prepend(col);
        } else {
            container.appendChild(col);
        }
    });
}

async function cariKaryawan(id) {
    try {
        console.log(`Mencari data ID: ${id}...`);

        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        if (!response.ok) {
            throw new Error('Data tidak ditemukan');
        }

        const data = await response.json();
        console.log('Ditemukan:', data);

        // 1. Masukkan data yang didapat ke dalam elemen-elemen di HTML (Modal)
        document.getElementById('detailNama').innerText = data.name;
        document.getElementById('detailUsername').innerText = data.username;
        document.getElementById('detailEmail').innerText = data.email;
        document.getElementById('detailTelepon').innerText = data.phone;
        document.getElementById('detailWebsite').innerText = data.website;
        document.getElementById('detailPerusahaan').innerText = data.company.name;

        // Menggabungkan alamat agar lebih rapi
        document.getElementById('detailAlamat').innerText =
            `${data.address.street}, ${data.address.suite}, ${data.address.city}, ${data.address.zipcode}`;

        // 2. Memunculkan Pop-up Modal menggunakan sintaks bawaan Bootstrap JS
        const modalElement = document.getElementById('modalDetail');
        const modalInstance = new bootstrap.Modal(modalElement);
        modalInstance.show();

    } catch (error) {
        console.error(error);
        alert("Terjadi kesalahan: " + error.message);
    }
}