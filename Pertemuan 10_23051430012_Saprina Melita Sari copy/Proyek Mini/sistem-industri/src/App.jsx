import React, { useState } from "react";

// Import Komponen
import KartuMesin from "./komponen/KartuMesin";
import KartuKaryawan from "./komponen/KartuKaryawan";
import CounterProduksi from "./komponen/CounterProduksi";
import JamDigital from "./komponen/JamDigital";
import OEE from "./komponen/OEE";

function App() {

  // State untuk switch halaman
  const [halaman, setHalaman] = useState("latihan");

  return (
    <div className="container mt-4">

      {/* Judul */}
      <h1 className="text-center mb-4">
        Monitoring Lini Produksi A
      </h1>

      {/* Footer */}
      <footer className="text-center mb-4 text-muted">
        Dibuat oleh Saprina Melita Sari | NIM: 23051430012
      </footer>

      {/* Tombol Navigasi */}
      <div className="text-center mb-4">

        <button
          className={`btn me-2 ${halaman === "latihan"
              ? "btn-primary"
              : "btn-outline-primary"
            }`}
          onClick={() => setHalaman("latihan")}
        >
          Halaman Latihan
        </button>

        <button
          className={`btn ${halaman === "oee"
              ? "btn-success"
              : "btn-outline-success"
            }`}
          onClick={() => setHalaman("oee")}
        >
          OEE Kalkulator
        </button>

      </div>

      {/* ================= HALAMAN LATIHAN ================= */}
      {halaman === "latihan" && (
        <>

          {/* Kartu Mesin */}
          <div
            className="card border-0 mb-5"
            style={{
              borderRadius: "16px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >

            <div className="card-body p-4">

              <h3 className="text-center fw-semibold mb-4">
                Praktik Monitoring Lini Produksi A
              </h3>

              <div className="row g-4">

                <div className="col-md-4">
                  <div className="h-100 hover-card">
                    <KartuMesin
                      nama="CNC-Turning-01"
                      status="Running"
                      produksi={150}
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="h-100 hover-card">
                    <KartuMesin
                      nama="CNC-Milling-02"
                      status="Maintenance"
                      produksi={0}
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="h-100 hover-card">
                    <KartuMesin
                      nama="Press-Hydraulic-05"
                      status="Stop"
                      produksi={85}
                    />
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Counter Produksi */}
          <div className="row mt-4">
            <div className="col-12">
              <CounterProduksi />
            </div>
          </div>

          {/* Jam Digital */}
          <div className="row mt-3">
            <div className="col-12">
              <JamDigital />
            </div>
          </div>

          <hr className="my-5" />

          {/* Data Karyawan */}
          <h2 className="text-center mb-4">
            Data Karyawan Lini A
          </h2>

          <div className="row">

            <div className="col-md-4">
              <KartuKaryawan
                nama="Rajeshwari Fazwa"
                jabatan="Manager"
                bagian="Produksi"
              />
            </div>

            <div className="col-md-4">
              <KartuKaryawan
                nama="Lokamari Onza"
                jabatan="Operator"
                bagian="Assembly"
              />
            </div>

            <div className="col-md-4">
              <KartuKaryawan
                nama="Jasuari Dewi"
                jabatan="QC"
                bagian="Quality Control"
              />
            </div>

          </div>

        </>
      )}

      {/* ================= HALAMAN OEE ================= */}
      {halaman === "oee" && (
        <div className="text-center">
          <OEE />
        </div>
      )}

    </div>
  );
}

export default App;