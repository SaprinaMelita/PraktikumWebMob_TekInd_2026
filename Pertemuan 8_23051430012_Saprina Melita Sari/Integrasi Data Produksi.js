const API_POSTS = "https://jsonplaceholder.typicode.com/posts";
const API_USERS = "https://jsonplaceholder.typicode.com/users";

let semuaKaryawan = [];

// Ambil elemen
const btnLoad     = document.getElementById("btnLoad");
const btnFilter   = document.getElementById("btnFilter");
const loading     = document.getElementById("loading");
const cInsiden    = document.getElementById("containerInsiden");
const cKaryawan   = document.getElementById("containerKaryawan");
const statusBadge = document.getElementById("statusBadge");
const modalDetailBS = new bootstrap.Modal(document.getElementById("modalDetail"));

// ================= UTILITY =================
const setLoading = (v) => {
  loading.classList.toggle("d-none", !v);
  btnLoad.disabled = v;
};

const inisial = (nama) =>
  nama.split(" ").slice(0, 2).map(w => w[0].toUpperCase()).join("");

const getStatus = (id) => {
  const list = [
    { label: "Kritis", cls: "badge-kritis" },
    { label: "Sedang", cls: "badge-sedang" },
    { label: "Rendah", cls: "badge-rendah" },
  ];
  return list[id % list.length];
};

// ================= INSIDEN (BAHASA INDONESIA) =================
function renderInsiden(posts) {
  cInsiden.innerHTML = "";

  const data = posts.slice(0, 10);
  document.getElementById("jumlahInsiden").textContent =
    `${data.length} insiden`;

  const daftarMasalah = [
    "Kerusakan mesin produksi",
    "Keterlambatan proses produksi",
    "Kesalahan input bahan baku",
    "Gangguan sistem operasional",
    "Penurunan kualitas produk"
  ];

  data.forEach((post, i) => {
    const status = getStatus(post.id);

    const judul = daftarMasalah[post.id % daftarMasalah.length];
    const deskripsi = `Insiden berupa ${judul.toLowerCase()} sedang dalam proses penanganan oleh tim produksi. (ID: ${post.id})`;

    cInsiden.innerHTML += `
      <div class="col-md-6 col-lg-4">
        <div class="card-insiden">
          <div class="insiden-meta">
            <span>TKT-${String(post.id).padStart(4,"0")}</span>
            <span class="${status.cls}">${status.label}</span>
          </div>

          <p class="insiden-title"><b>${judul}</b></p>
          <p class="insiden-desc">${deskripsi}</p>

          <div class="insiden-footer">
            <span>Pelapor: User #${post.userId}</span>
            <button class="btn-tindak" data-id="${post.id}">
              Tindak Lanjut
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

// Klik tindak lanjut
cInsiden.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-tindak")) {
    alert(`Insiden ${e.target.dataset.id} sedang diproses oleh tim maintenance`);
  }
});

// ================= KARYAWAN =================
function renderKaryawan(data) {
  cKaryawan.innerHTML = "";

  document.getElementById("jumlahKaryawan").textContent =
    `${data.length} karyawan`;

  if (data.length === 0) {
    cKaryawan.innerHTML = `
      <div class="col-12 text-center">
        <p>Tidak ada data karyawan</p>
      </div>`;
    return;
  }

  data.forEach((user) => {
    cKaryawan.innerHTML += `
      <div class="col-md-6 col-lg-4">
        <div class="card-karyawan">
          <div class="avatar">${inisial(user.name)}</div>
          <p><b>${user.name}</b></p>
          <p>${user.email}</p>
          <p>${user.phone}</p>
          <p>${user.address.city}</p>

          <button class="btn-detail"
            data-user="${encodeURIComponent(JSON.stringify(user))}">
            Lihat Detail
          </button>
        </div>
      </div>
    `;
  });
}

// Detail modal
cKaryawan.addEventListener("click", (e) => {
  if (!e.target.classList.contains("btn-detail")) return;

  const user = JSON.parse(
    decodeURIComponent(e.target.dataset.user)
  );

  document.getElementById("detailNama").textContent       = user.name;
  document.getElementById("detailUsername").textContent   = user.username;
  document.getElementById("detailEmail").textContent      = user.email;
  document.getElementById("detailTelepon").textContent    = user.phone;
  document.getElementById("detailWebsite").textContent    = user.website;
  document.getElementById("detailPerusahaan").textContent = user.company?.name ?? "-";
  document.getElementById("detailAlamat").textContent =
    `${user.address.street}, ${user.address.suite}, ${user.address.city} ${user.address.zipcode}`;

  modalDetailBS.show();
});

// ================= FETCH DATA =================
async function muatData() {
  setLoading(true);

  try {
    const [resPosts, resUsers] = await Promise.all([
      fetch(API_POSTS),
      fetch(API_USERS)
    ]);

    if (!resPosts.ok) throw new Error("Gagal mengambil data insiden");
    if (!resUsers.ok) throw new Error("Gagal mengambil data karyawan");

    const posts = await resPosts.json();
    const users = await resUsers.json();

    semuaKaryawan = users;

    renderInsiden(posts);
    renderKaryawan(users);

    statusBadge.className = "status-badge status-online";
    statusBadge.innerHTML = `<span class="status-dot"></span> Online`;

  } catch (err) {
    alert(err.message);
  }

  setLoading(false);
}

// ================= FILTER =================
btnFilter.addEventListener("click", () => {
  if (semuaKaryawan.length === 0) {
    alert("Muat data terlebih dahulu");
    return;
  }

  const keyword = prompt("Masukkan nama kota:")?.toLowerCase();
  if (!keyword) return;

  const hasil = semuaKaryawan.filter(u =>
    u.address.city.toLowerCase().includes(keyword)
  );

  renderKaryawan(hasil);
});

// ================= TAMBAH KARYAWAN =================
document.getElementById("formTambahKaryawan").addEventListener("submit", (e) => {
  e.preventDefault();

  const karyawanBaru = {
    id: semuaKaryawan.length + 1,
    name: document.getElementById("inputNama").value,
    email: document.getElementById("inputEmail").value,
    phone: "-",
    username: document.getElementById("inputNama").value.toLowerCase().replace(/\s+/g, "."),
    website: "-",
    company: { name: document.getElementById("inputPerusahaan").value },
    address: {
      street: "-",
      suite: "-",
      city: document.getElementById("inputKota").value,
      zipcode: "-"
    }
  };

  semuaKaryawan.push(karyawanBaru);
  renderKaryawan(semuaKaryawan);

  bootstrap.Modal.getInstance(document.getElementById("modalTambah"))?.hide();
  e.target.reset();
});

// ================= LOAD =================
btnLoad.addEventListener("click", muatData);