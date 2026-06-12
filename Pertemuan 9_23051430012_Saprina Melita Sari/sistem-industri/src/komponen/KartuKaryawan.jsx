import React from 'react';

function KartuKaryawan(props) {
    // Menerima data dari props
    const nama = props.nama;
    const jabatan = props.jabatan;
    const bagian = props.bagian;

    return (
        <div className="card shadow-sm p-3 mb-3">
            <div className="card-body">
                <h5 className="card-title">{nama}</h5>
                <p>
                    Jabatan: <strong>{jabatan}</strong>
                </p>
                <p>
                    Bagian: <strong>{bagian}</strong>
                </p>
            </div>
        </div>
    );
}

export default KartuKaryawan;