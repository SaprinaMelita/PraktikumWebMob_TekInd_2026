// LATIHAN 1 - Function hitungLingkaran
function hitungLingkaran(jariJari) {
    let luas = Math.PI * jariJari * jariJari;
    let keliling = 2 * Math.PI * jariJari;
    return {
        luas: luas.toFixed(2),
        keliling: keliling.toFixed(2)
    };
}

let hasilLingkaran = hitungLingkaran(7);
console.log("Luas Lingkaran: " + hasilLingkaran.luas);
console.log("Keliling Lingkaran: " + hasilLingkaran.keliling);

function tampilkanLingkaran() {
    let jariJari = document.getElementById("jariJari").value;
    let hasil = hitungLingkaran(jariJari);
    document.getElementById("hasilLuas").innerText = "Luas: " + hasil.luas;
    document.getElementById("hasilKeliling").innerText = "Keliling: " + hasil.keliling;
}