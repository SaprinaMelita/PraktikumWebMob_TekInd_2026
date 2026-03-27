// Proyek Mini - Sistem Antrian Job Shop

// a. Array of Objects
let antrianMesin = [
    { idJob: "J01", namaProses: "Drilling",  durasi: 30 },
    { idJob: "J02", namaProses: "Milling",   durasi: 45 },
    { idJob: "J03", namaProses: "Turning",   durasi: 20 }
];

// b. & c. Function prosesAntrian
function prosesAntrian(antrian) {
    console.log("--- Memulai Proses Antrian ---");
    for (let i = 0; i < antrian.length; i++) {
        console.log("Memproses Job " + antrian[i].idJob + 
                    " - " + antrian[i].namaProses + 
                    " selama " + antrian[i].durasi + " menit");
    }
    console.log("--- Antrian Selesai ---");
}

// Panggil pertama kali
prosesAntrian(antrianMesin);

// d. Tambah 1 job baru lalu panggil lagi
antrianMesin.push({ idJob: "J04", namaProses: "Grinding", durasi: 15 });
console.log("Job baru ditambahkan!");
prosesAntrian(antrianMesin);

function tampilAntrian() {
    let list = document.getElementById("listAntrian");
    list.innerHTML = "";

    for (let i = 0; i < antrianMesin.length; i++) {
        let li = document.createElement("li");
        li.className = "list-group-item";
        li.innerText = "Memproses Job " + antrianMesin[i].idJob +
                       " - " + antrianMesin[i].namaProses +
                       " selama " + antrianMesin[i].durasi + " menit";
        list.appendChild(li);
    }
}

function tambahJob() {
    antrianMesin.push({ idJob: "J04", namaProses: "Grinding", durasi: 15 });
    tampilAntrian();
}