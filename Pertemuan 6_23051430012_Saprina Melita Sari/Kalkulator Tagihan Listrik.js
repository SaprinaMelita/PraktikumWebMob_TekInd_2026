// PROYEK MINI - Kalkulator Tagihan Listrik
const inputDaya = document.getElementById('inputDaya');
const inputJam = document.getElementById('inputJam');
const hasilListrik = document.getElementById('hasilListrik');
const totalKwh = document.getElementById('totalKwh');
const totalBiaya = document.getElementById('totalBiaya');

function hitungListrik() {
    let daya = parseFloat(inputDaya.value);
    let jam = parseFloat(inputJam.value);

    if (isNaN(daya) || isNaN(jam) || daya <= 0 || jam <= 0) {
        hasilListrik.classList.add('d-none');
        return;
    }

    let kwh = (daya * jam) / 1000;
    let biaya = kwh * 1500;

    totalKwh.innerText = kwh.toFixed(2) + " kWh";
    totalBiaya.innerText = "Rp " + biaya.toLocaleString('id-ID');

    hasilListrik.classList.remove('d-none');
}

inputDaya.addEventListener('input', hitungListrik);
inputJam.addEventListener('input', hitungListrik);