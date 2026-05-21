import React, { useState } from "react";

function CounterProduksi() {
    // Deklarasi state
    const [jumlah, setJumlah] = useState(0);
    const [target, setTarget] = useState(100);
    const [status, setStatus] = useState("RUNNING");

    // Handler tambah produksi
    const tambahProduksi = () => {
        setJumlah(jumlah + 1);
    };

    // Handler reset shift
    const reset = () => {
        setJumlah(0);
        setStatus("RUNNING");
    };

    // Handler emergency
    const emergencyStop = () => {
        setStatus("EMERGENCY");
    };

    return (
        <div className="text-center p-4 border rounded bg-light">

            <h5 className="text-muted">
                Latihan 2: Conditional Rendering
            </h5>

            <h3>Simulasi Hitung Produk</h3>

            <h1 className="display-4">{jumlah}</h1>

            <p>Target: {target} Unit</p>

            <h5>Status: {status}</h5>

            {/* Conditional Rendering */}
            {jumlah >= target ? (
                <div className="alert alert-success d-inline-block">
                    🎉 Target Tercapai!
                </div>
            ) : (
                <div className="alert alert-secondary d-inline-block">
                    Produksi Berjalan...
                </div>
            )}

            <div className="mt-3">

                {/* Tombol +1 */}
                <button
                    className="btn btn-primary me-2"
                    onClick={tambahProduksi}
                    disabled={status === "EMERGENCY"}
                >
                    +1
                </button>

                {/* Tombol Reset */}
                <button
                    className="btn btn-secondary me-2"
                    onClick={reset}
                >
                    Reset Shift
                </button>

                {/* Tombol Emergency */}
                <button
                    className="btn btn-warning"
                    onClick={emergencyStop}
                >
                    Emergency Stop
                </button>

            </div>

            {/* Pesan merah */}
            {status === "EMERGENCY" && (
                <div className="alert alert-danger mt-3">
                    ⚠️ EMERGENCY STOP AKTIF!
                </div>
            )}

        </div>
    );
}

export default CounterProduksi;