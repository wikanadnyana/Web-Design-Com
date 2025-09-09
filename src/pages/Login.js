import Doctor from '../assets/images/Doctor4.png';  // sumber: https://www.istockphoto.com/
import Google from '../assets/images/google.svg';
import Facebook from '../assets/images/Facebook.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular} from '@fortawesome/fontawesome-svg-core/import.macro'
import React, { useState } from 'react';
import { Link } from "react-router-dom";


const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }
  return (
    <div>
      <div className="bg-background">
        <div className='blur-xxl'>
          <span className='absolute right-0'>
            <svg width="254" height="254" viewBox="0 0 254 254" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="127" cy="127" r="127" fill="url(#paint0_linear_172_1152)"/>
              <defs>
                <linearGradient id="paint0_linear_172_1152" x1="127" y1="0" x2="127" y2="254" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#85D9F8"/>
                  <stop offset="1" stop-color="#10B2F4"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
        <section id="home" className="lg:pt-16 lg:px-24 loginBG">
          <div className="container">
            <div className="flex flex-wrap">
              <div className="lg:mx-auto lg:w-1/2 hidden lg:flex">
                <div className="pt-16 ">
                  <img src={Doctor} alt="DoctorImage" className="scale-125" />
                </div>
              </div>
              <div className="w-full lg:flex lg:mx-auto px-4 lg:w-2/5">
                <div className="relative mt-24 lg:mt-5">
                  <div className="card mx-auto w-92 lg:w-96 bg-white bg-opacity-60 lg:bg-opacity-30 backdrop-blur-2xl border border-white shadow-xl">
                    <div className="card-body">
                      <h1 className="text-center text-2xl text-black font-semibold">
                        Selamat Datang!
                      </h1>
                      <p className="text-center">
                        Silahkan Masuk Terlebih Dahulu.
                      </p>
                      <form>
                        <div className="form-control w-full max-w-xs mx-auto">
                          <div>
                            <label className="label pt-4 pb-1">
                              <span className="label-text">E-mail</span>
                            </label>
                            <input
                              type="email"
                              placeholder="Masukkan e-mail"
                              autoComplete="email"
                              autoFocus
                              required
                              className="input input-bordered rounded-full input-info bg-white bg-opacity-50 w-full max-w-xs"
                            />
                          </div>
                          <div>
                            <label className="label pt-2 pb-1">
                              <span className="label-text">Password</span>
                            </label>
                            <div class="relative">
                              <input
                                type={passwordType} onChange={handlePasswordChange} 
                                value={passwordInput} 
                                name="password" 
                                placeholder="Masukkan password"
                                required
                                className="input input-bordered rounded-full pr-12 input-info bg-white bg-opacity-50 w-full max-w-xs"
                              />
                              <a className="absolute right-3 bottom-1 px-3 py-2 text-sm rounded-full " onClick={togglePassword}>
                                { passwordType==="password"? <i><FontAwesomeIcon className='absulute h-4' icon={regular('eye-slash')} /></i> :<i><FontAwesomeIcon className='absulute h-4' icon={regular('eye')} /></i>}
                              </a>
                            </div>
                          </div>
                          <div className="flex items-center pt-2 justify-between">
                            <div className="flex items-center">
                              <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-5 w-5 checkbox checkbox-accent"
                              />
                              <label
                                htmlFor="remember-me"
                                className="text-left ml-2 block text-sm text-gray-900"
                              >
                                Remember me
                              </label>
                            </div>
                            <div className="text-sm">
                              <a
                                href="#"
                                className="text-end font-medium text-sm text-sky-600 hover:text-sky-500"
                              >
                                Forgot your password?
                              </a>
                            </div>
                          </div>
                          <div>
                            <button className="py-3 px-4 mt-6 bg-gradient-to-b from-lightblue to-darkblue flex rounded-full w-full justify-center text-white font-semibold transition duration-300 ease-in-out hover:opacity-80 hover:shadow-xl active:bg-darkblue">
                              Masuk
                            </button>
                          </div>
                        </div>
                      </form>
                      <div className="flex flex-row">
                        <p className="text-center text-sm">
                          Belum memiliki akun?
                          <Link
                            to="/regis"
                            className="px-2 font-medium text-sky-600 hover:text-sky-500"
                          >
                            Register
                          </Link>
                        </p>
                      </div>
                      <p className="text-center text-sm">
                          - atau lanjutkan dengan -
                      </p>
                      <div className="flex flex-row mx-auto">
                        <a href='#' className='mx-3 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-90 hover:shadow-xl rounded-2xl scale-75'>
                            <img src={Google} alt="Google"/>
                        </a>
                        <a href='#' className='mx-3 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-90 hover:shadow-xl rounded-2xl scale-75'>
                            <img src={Facebook} alt="Facebook"/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
