import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Inventori() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch data
    useEffect(() => {

        setLoading(true);

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {

                // Ambil 5 data pertama
                setProducts(data.slice(0, 5));

                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });

    }, []);

    return (
        <div className="container mt-4">

            <h1>Data Inventori Bahan Baku</h1>

            <Link
                to="/"
                className="btn btn-secondary mb-3"
            >
                Kembali ke Dashboard
            </Link>

            {/* LOADING STATE */}
            {loading ? (

                <h3>Memuat data...</h3>

            ) : (

                <table className="table table-striped">

                    <thead>
                        <tr>
                            <th>ID Item</th>
                            <th>Nama Bahan</th>
                            <th>Status Supplier</th>
                        </tr>
                    </thead>

                    <tbody>

                        {products.map((item) => (

                            <tr key={item.id}>

                                <td>{item.id}</td>

                                {/* DYNAMIC LINK */}
                                <td>
                                    <Link to={`/inventori/${item.id}`}>
                                        {item.title}
                                    </Link>
                                </td>

                                <td>
                                    <span className="badge bg-success">
                                        Available
                                    </span>
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            )}

        </div>
    );
}

export default Inventori;