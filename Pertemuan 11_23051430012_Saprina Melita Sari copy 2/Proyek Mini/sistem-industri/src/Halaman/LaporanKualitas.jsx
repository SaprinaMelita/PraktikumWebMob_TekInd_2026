import React from 'react';
import { Link } from 'react-router-dom';

function LaporanKualitas() {

    // Mock data manual
    const dataCacat = [
        {
            id: 1,
            nama: "Produk Gear",
            jenis: "Retak"
        },
        {
            id: 2,
            nama: "Produk Baut",
            jenis: "Ukuran Tidak Sesuai"
        },
        {
            id: 3,
            nama: "Produk Bearing",
            jenis: "Permukaan Kasar"
        }
    ];

    return (
        <div className="container mt-4">

            <h1 className="mb-4">
                Laporan Kualitas Produksi
            </h1>

            <Link
                to="/"
                className="btn btn-secondary mb-3"
            >
                Kembali ke Dashboard
            </Link>

            <table className="table table-bordered table-striped">

                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nama Produk</th>
                        <th>Jenis Cacat</th>
                    </tr>
                </thead>

                <tbody>

                    {dataCacat.map((item) => (

                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nama}</td>
                            <td>{item.jenis}</td>
                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default LaporanKualitas;