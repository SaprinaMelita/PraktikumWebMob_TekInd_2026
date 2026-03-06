// Komentar single line

// 1. Variabel & Tipe Data
let namaMesin = "CNC-Mazak-01"; // String
let targetHarian = 500; // Number
let isOperational = true; // Boolean

// Menampilkan ke console browser (Tekan F12 -> Console)
console.log("Mesin: " + namaMesin);
console.log("Target: " + targetHarian);

// 2. Operator Aritmatika
let produksiPagi = 200;
let produksiSiang = 150;
let totalProduksi = produksiPagi + produksiSiang;

console.log("Total saat ini: " + totalProduksi);

// Hitung sisa kekurangan target
let kekurangan = targetHarian - totalProduksi;
console.log("Kekurangan target: " + kekurangan);

// Simulasi data pembacaan sensor (jam operasional)
let jamOperasional = 1250; // dalam jam
let batasMaksimal = 1200; // batas sebelum maintenance wajib

console.log("--- Cek Status Maintenance ---");

// Logika If/Else
if (jamOperasional >= batasMaksimal) {
 console.log("PERINGATAN: Mesin mencapai batas maksimal!");
 console.log("Status: MAINTENANCE WAJIB (Stop Produksi)");
} else if (jamOperasional > 1000) {
 console.log("Status: SIAP HATI-HATI (Segera jadwalkan maintenance)");
} else {
 console.log("Status: BERJALAN NORMAL");
}

// Data Input
let jamKerjaPlanned = 8; // Jam
let jamKerjaAktual = 6.5; // Jam (Ada 1.5 jam breakdown)

// Perhitungan
let availability = (jamKerjaAktual / jamKerjaPlanned) * 100;

// Pembulatan 2 angka di belakang koma
availability = availability.toFixed(2);

console.log("Planned Time: " + jamKerjaPlanned + " Jam");
console.log("Actual Time: " + jamKerjaAktual + " Jam");
console.log("Availability: " + availability + "%");

// Logika Penilaian Kualitas Availability
if (availability >= 90) {
 console.log("Kategori: WORLD CLASS");
 } else if (availability >= 80) {
 console.log("Kategori: BAIK (Tetap monitor)");
} else {
 console.log("Kategori: BURUK (Perlu investigasi penyebab breakdown)");
}

// Latihan 1 (Matematika)

// Variabel
let gajiPokok = 3000000; // contoh gaji pokok per bulan
let jamLembur = 3; // jumlah jam lembur

// Upah lembur per jam = 1.5 x (gaji pokok / 173)
let upahLemburPerJam = 1.5 * (gajiPokok / 173);

// Total gaji
let totalGaji = gajiPokok + (jamLembur * upahLemburPerJam);

// Tampilkan di console
console.log("=== Perhitungan Gaji Karyawan ===");
console.log("Gaji Pokok: Rp " + gajiPokok);
console.log("Jam Lembur: " + jamLembur + " jam");
console.log("Upah Lembur per Jam: Rp " + upahLemburPerJam.toFixed(2));
console.log("Total Gaji: Rp " + totalGaji.toFixed(2));

/// Latihan 2 (Logika Switch)

// Input kode shift
let namaOperator = prompt("Masukkan Nama Operator:");
let kodeShift = prompt("Masukkan Kode Shift (1=Pagi, 2=Siang, 3=Malam):");
let namaShift;

// Logika switch
switch (kodeShift) {
    case "1":
        namaShift = "Pagi"; 
        alert("Halo " + namaOperator + ", Selamat bekerja. Tetap semangat!");
        break;

    case "2":
        namaShift = "Siang";
        alert("Halo " + namaOperator + ", Selamat bekerja. Tetap semangat!");
        break;

    case "3":
        namaShift = "Malam";
        alert("Halo " + namaOperator + ", Shift malam memiliki tambahan uang makan sebesar Rp 20.000.");
        break;

    default:
        namaShift = "Shift Tidak Valid";
}

// Tampilkan hasil
alert("Shift Anda: " + namaShift);
console.log("Kode Shift: " + kodeShift);
console.log("Nama Shift: " + namaShift);