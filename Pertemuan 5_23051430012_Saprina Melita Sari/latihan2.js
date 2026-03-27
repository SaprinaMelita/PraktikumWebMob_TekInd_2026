// LATIHAN 2 - Array Manipulation
// Taruh di PALING ATAS, sebelum semua function
let daftarCacat = ["C-001", "C-005", "C-012", "C-001", "C-020"];
let counter = 0;

for (let i = 0; i < daftarCacat.length; i++) {
    if (daftarCacat[i] === "C-001") {
        counter++;
    }
}

console.log("Cacat C-001 muncul sebanyak: " + counter + " kali");

function cariCacat() {
    let target = document.getElementById("inputCacat").value;
    let counter = 0;

    for (let i = 0; i < daftarCacat.length; i++) {
        if (daftarCacat[i] === target) {
            counter++;
        }
    }

    if (counter === 0) {
        document.getElementById("hasilCacat").innerText = "Cacat " + target + " tidak ditemukan.";
    } else {
        document.getElementById("hasilCacat").innerText = "Cacat " + target + " muncul sebanyak: " + counter + " kali";
    }
}