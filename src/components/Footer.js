import logo from '../assets/Logo.png';
import Facebook from '../assets/sosmed/Facebook.svg';
import Twitter from '../assets/sosmed/Twitter.svg';
import Instagram from '../assets/sosmed/Instagram.svg';
import Line from '../assets/sosmed/Line.svg';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className='bg-background'>
            <footer className="footer p-10 z-50 bg-bgfooter shadow-sm backdrop-blur-lg rounded-tl-2xl rounded-tr-2xl text-black lg:px-24">
                <div>
                    <img src={logo} alt="Logo" />
                    <p className='text-start mt-4 mb-4'>Konsultasi dengan kualitas terbaik<br></br>oleh para profesional.</p>
                    <div className='flex flex-wrap'>
                        <Link to="#" className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300 hover:shadow-xl mr-6 rounded-md scale-125'>
                            <img src={Facebook} alt="Facebook"/>
                        </Link>
                        <Link to="#" className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300 hover:shadow-xl mr-6 rounded-md scale-125'>
                            <img src={Twitter} alt="Twitter"/>
                        </Link>
                        <Link to="#" className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300 hover:shadow-xl mr-6 rounded-md scale-125'>
                            <img src={Instagram} alt="Instagram"/>
                        </Link>
                        <Link to="#" className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300 hover:shadow-xl mr-6 rounded-md scale-125'>
                            <img src={Line} alt="Line"/>
                        </Link>
                    </div>  
                </div> 
                <div className='mt-3'>
                    <span className="footer-title">Layanan</span> 
                    <a className="text-left link link-hover">Sistem Pakar</a> 
                    <a className="text-left link link-hover">Cari Dokter</a>
                </div> 
                <div className='mt-3'>
                    <span className="footer-title">Blog</span> 
                    <a className="text-left link link-hover">Terkini</a> 
                    <a className="text-left link link-hover">Kesehatan</a> 
                    <a className="text-left link link-hover">Tips n Trik</a> 
                    <a className="text-left link link-hover">Lainnya</a>
                </div> 
                <div className='mt-3'>
                    <span className="footer-title">Tentang</span> 
                    <a className="text-left link link-hover">Mai Dental</a> 
                    <a className="text-left link link-hover">Kontak</a>
                </div>
            </footer>
            <hr></hr>
            <div className='bg-bgfooter'>
                <p className='text-black py-2'>©2022 Mai Dental. All rights reserved.</p>
            </div>
        </div>
    );
  };
  
  export default Footer;
  