import Footer from '../components/Footer';
import Hero from '../components/Hero';
import About from '../components/About';
import Dokter from '../components/Dokter';
import Blog from '../components/Blog';
import Kontak from '../components/Kontak';

const Beranda = (props) => {
    return (
      <div className='bg-background'>
        <div>
          <Hero/>
          <About/>
          <Dokter/>
          <Blog/>
          <Kontak/>
        </div>
        <Footer/>
      </div>
    );
  };
  
  export default Beranda;
  