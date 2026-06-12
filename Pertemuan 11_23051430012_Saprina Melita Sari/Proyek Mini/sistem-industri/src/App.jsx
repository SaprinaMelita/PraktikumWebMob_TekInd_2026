import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from './Halaman/Dashboard';
import Inventori from './Halaman/Inventori';
import LaporanKualitas from './Halaman/LaporanKualitas';
import NotFound from './Halaman/NotFound';

import Navbar from './Komponen/Navbar';

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