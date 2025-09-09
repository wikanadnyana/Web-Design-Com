import React, {useEffect} from 'react';
import './App.css';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Beranda from './pages/Beranda';
import CariDokter from './pages/CariDokter';
import Blog from './pages/Blog';
import DetailBlog from './pages/DetailBlog';
import Login from './pages/Login';
import Regis from './pages/Regis';
import SistemPakar from './pages/SistemPakar';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Beranda />}/>
          <Route path="sistem-pakar" element={<SistemPakar />} />
          <Route path="/cari-dokter" element={<CariDokter />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/detail-blog" element={<DetailBlog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regis" element={<Regis />} />
      </Routes>
    </div>
  );
}

export default App;

