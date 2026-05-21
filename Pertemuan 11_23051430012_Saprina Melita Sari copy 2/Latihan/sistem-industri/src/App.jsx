import React from 'react';
import {
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Dashboard from './Halaman/Dashboard';
import Inventori from './Halaman/Inventori';
import NotFound from './Halaman/NotFound';


// ================= NAVBAR =================
function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">

      <div className="container">

        <Link
          className="navbar-brand"
          to="/"
        >
          Sistem Pabrik
        </Link>

        <div className="navbar-nav">

          <Link
            className="nav-link"
            to="/"
          >
            Dashboard
          </Link>

          <Link
            className="nav-link"
            to="/inventori"
          >
            Inventori
          </Link>

          <Link
            className="nav-link"
            to="/laporan-kualitas"
          >
            Laporan Kualitas
          </Link>

        </div>

      </div>

    </nav>
  );
}


// ================= APP =================
function App() {

  return (
    <div>

      <Navbar />

      <Routes>

        {/* Dashboard */}
        <Route
          path="/"
          element={<Dashboard />}
        />

        {/* Inventori */}
        <Route
          path="/inventori"
          element={<Inventori />}
        />

        {/* Laporan Kualitas */}
        <Route
          path="/laporan-kualitas"
          element={<LaporanKualitas />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </div>
  );
}

export default App;