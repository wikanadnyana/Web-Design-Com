import Doctor from '../assets/images/Doctor5.png';  // sumber: https://www.istockphoto.com/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro'
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Regis = () => {
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
        <section id="home" class="lg:pt-16 lg:px-24 loginBG">
          <div class="container">
            <div class="flex flex-wrap">
              <div className="lg:mx-auto lg:w-1/2 hidden lg:flex">
                <div className="mt-4 pt-12">
                  <img src={Doctor} alt="DoctorImage" className="scale-125" />
                </div>
              </div>
              <div class="w-full lg:flex lg:mx-auto px-4 lg:w-2/5">
                <div class="relative mt-24 lg:right-0 lg:mt-5">
                  <div className="card mx-auto w-92 lg:w-96 bg-white bg-opacity-80 lg:bg-opacity-30 backdrop-blur-sm border border-white shadow-xl">
                    <div className="card-body">
                      <h1 className="text-center text-2xl text-black font-semibold">
                        Registrasi Sekarang!
                      </h1>
                      <p className="text-center">
                        Silahkan Buat Akun Terlebih Dahulu.
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
                              <span className="label-text">Nama</span>
                            </label>
                            <input
                              type="text"
                              placeholder="Masukkan nama"
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
                                autoComplete="new-password"
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
                                Saya setuju dengan semua <a className='text-sky-600 font-medium'>ketentuan layanan</a>
                              </label>
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
                          Sudah memiliki akun?
                          <Link
                            to="/login"
                            className="px-2 font-medium text-sky-600 hover:text-sky-500"
                          >
                            Masuk
                          </Link>
                        </p>
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

export default Regis;
