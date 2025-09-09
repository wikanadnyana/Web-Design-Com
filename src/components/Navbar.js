import logo from '../assets/Logo.png';
import Button from './Button';
import { Link } from "react-router-dom";

const navigation = [
  { name: 'Beranda', href: '/', current: true },
  { name: 'Sistem Pakar', href: '/sistem-pakar', current: false },
  { name: 'Cari Dokter', href: '/cari-dokter', current: false },
  { name: 'Blog', href: '/blog', current: false },
]

const Navbar = () => {
  const buttonName = "Daftar"
  const buttonLink ="/regis"

  return (
    <header class="fixed z-50 top-0 flex w-full">
      <div className="navbar lg:px-20 items-center bg-white bg-opacity-70 shadow-sm backdrop-blur-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-black rounded-box w-52"
            >
              {navigation.map((item) => (
                <li>
                  <Link className='active:bg-darkblue' to={item.href}>{item.name}</Link>
                </li>
              ))}
              <li>
                <Link to="/login"className='active:bg-darkblue'>Masuk</Link>
              </li>
              <li>
                <Link to="/regis" className="bg-gradient-to-b from-lightblue to-darkblue text-white">Daftar</Link>
              </li>
            </ul>
          </div>
          <Link to='/' className='py-auto'>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {navigation.map((item) => (
              <li>
                <Link className='active:bg-darkblue mx-3' to={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex">
          <div className="mr-4">
            <Link to="/login"
              className="rounded-full py-3 px-8 text-base font-semibold text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 hover:opacity-80 active:bg-darkblue active:text-white hover:shadow-lg">
              Masuk
            </Link>
          </div>
          <div>
            <Button button={buttonName} link={buttonLink}/>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
