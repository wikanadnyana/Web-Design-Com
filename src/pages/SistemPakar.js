import Teeth from '../assets/images/teeth.png'; // sumber: https://iconscout.com/
import BGTeeth from '../assets/images/bgteeth.png';
import Glass from '../assets/images/glass.png'; // sumber: https://iconscout.com/
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";

const SistemPakar= () => {
    const [counterOn, setCounterOn] = useState(false);

    return(
        <div>
            <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
                <section id="sistem-pakar" className="pt-6 lg:pt-20 px-4 lg:px-20 heroBG">
                    <div className="container">
                        <div className="w-full flex flex-wrap">
                            <div className="w-full lg:w-1/2 self-start mt-20">
                                <h1 className="text-start font-semibold text-darkblue lg:text-lg">-Sistem Pakar Penyakit Gigi.</h1>
                                <h1 className="text-start text-4xl lg:text-6xl font-bold text-black mt-1">Diagnosa</h1>
                                <div className='flex flex-wrap mt-1 lg:mt-4'>
                                    <h1 className="text-start text-4xl lg:text-6xl font-bold text-darkblue underline transition duration-300 ease-in-out hover:text-lightblue mr-2 lg:mr-4">Gigimu</h1>
                                    <h1 className="text-start text-4xl lg:text-6xl font-bold text-black">Sekarang!</h1>
                                </div>
                                <p className="text-start mt-6 lg:mt-8 text-md">Sistem Pakar adalah sistem informasi yang berisi pengetahuan seorang pakar sehingga dapat digunakan untuk konsultasi. Website Mai Dental merupakan website berbasis Sistem Pakar yang menggunakan algoritma Certainty Factor.</p>
                                { counterOn && 
                                    <div className="flex justify-start animate__animated animate__fadeInUp">
                                        <a href="#diagnosa" className="py-3 px-6 mt-6 bg-gradient-to-b from-lightblue to-darkblue rounded-full text-white font-semibold transition duration-300 ease-in-out hover:opacity-80 hover:shadow-xl active:bg-darkblue">
                                            Mulai Analisis
                                        </a>
                                    </div>
                                }
                            </div>
                            <div className="w-full lg:w-1/2 mt-6 lg:mt-4 ">
                                { counterOn &&
                                    <div className="absolute -right-0 lg:right-28 top-96 lg:top-16 z-20 animate__animated animate__fadeInUp">
                                        <img src={Glass} alt="Glass" className='scale-50 lg:scale-75'/>
                                    </div>
                                }
                                <div className='relative z-10 img-hero'>
                                    <img src={Teeth} alt="HeroImage" className='absolute scale-70 lg:scale-150 right-16 lg:right-44 lg:mt-28'/>
                                </div>
                                <img src={BGTeeth} alt="BGTeeth" className='mx-auto lg:mt-12'/>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollTrigger>
            <section id="diagnosa" className="pt-20 px-4 pb-16 lg:pt-20 lg:px-20 bg-background">
                <div className='relative w-full blur-xxl'>
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
                <div className="container">
                    <div data-aos="fade-up" className="w-full flex flex-wrap z-50 aos-init aos-animate">
                        <div className="w-full lg:w-2/6 px-2 pt-6 lg:pt-0 z-50">
                            <div className="card w-full bg-white bg-opacity-50 z-50 lg:bg-opacity-30 backdrop-blur-xl border border-white shadow-md">
                                <div className="card-body">
                                    <h1 className="text-center text-2xl text-black font-semibold">
                                        Data Pasien
                                    </h1>
                                    <p className="text-center">
                                        Silahkan isi data diri Anda terlebih dahulu.
                                    </p>
                                    <form>
                                        <div className="form-control w-full max-w-xs mx-auto pb-4">
                                            <div>
                                                <label className="label pt-4 pb-1">
                                                    <span className="label-text">Nama</span>
                                                </label>
                                                <input
                                                type="text"
                                                placeholder="Masukkan nama lengkap"
                                                required
                                                className="input input-bordered rounded-full input-info bg-white bg-opacity-50 w-full max-w-xs"
                                                />
                                            </div>
                                            <div>
                                                <label className="label pt-2 pb-1">
                                                    <span className="label-text">Umur</span>
                                                </label>
                                                <input
                                                type="text"
                                                placeholder="Masukkan umur"
                                                required
                                                className="input input-bordered rounded-full input-info bg-white bg-opacity-50 w-full max-w-xs"
                                                />
                                            </div>
                                            <div>
                                                <label className="label pt-2 pb-1">
                                                    <span className="label-text">Alamat</span>
                                                </label>
                                                <input
                                                type="text"
                                                placeholder="Masukkan alamat"
                                                required
                                                className="input input-bordered rounded-full input-info bg-white bg-opacity-50 w-full max-w-xs"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full lg:w-4/6 px-2 pt-6 lg:pt-0">
                            <div className="card card-compact w-full z-20 bg-white bg-opacity-50 lg:bg-opacity-30 backdrop-blur-xl border border-white shadow-md">
                                <div className="card-body mt-4">
                                    <h1 className="text-center text-2xl text-black font-semibold">
                                        Diagnosa Penyakit Gigi
                                    </h1>
                                    <p className="text-center">
                                        Silahkan isi data sesuai dengan yang Anda rasakan.
                                    </p>
                                    <form>
                                        <div className="overflow-x-auto mt-8">
                                            <table className="table table-normal w-full">
                                                <thead>
                                                <tr>
                                                    <td className='bg-lightblue text-white'>No.</td>
                                                    <td className='bg-lightblue text-white'>Pertanyaan</td>
                                                    <td className='bg-lightblue text-center text-white'>Jawaban</td>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className='bg-white'>1</td>
                                                    <td className='bg-white'>Apakah kamu mengalami nyeri saat mengunyah?</td>
                                                    <td className='text-center bg-white'>
                                                        <select className="select select-info lg:w-4/6 mx-2 bg-white">
                                                            <option disabled selected>Pilih jawaban</option>
                                                            <option>Tidak Tahu</option>
                                                            <option>Mungkin</option>
                                                            <option>Kemungkinan besar</option>
                                                            <option>Hampir Pasti</option>
                                                            <option>Pasti</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className='bg-white'>2</td>
                                                    <td className='bg-white'>Apakah kamu mengalami gusi berdarah?</td>
                                                    <td className='text-center bg-white'>
                                                        <select className="select select-info lg:w-4/6 mx-2 bg-white">
                                                            <option disabled selected>Pilih jawaban</option>
                                                            <option>Tidak Tahu</option>
                                                            <option>Mungkin</option>
                                                            <option>Kemungkinan besar</option>
                                                            <option>Hampir Pasti</option>
                                                            <option>Pasti</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className='bg-white'>3</td>
                                                    <td className='bg-white'>Apakah kamu mengalami gusi bengkak?</td>
                                                    <td className='text-center bg-white'>
                                                        <select className="select select-info lg:w-4/6 mx-2 bg-white">
                                                            <option disabled selected>Pilih jawaban</option>
                                                            <option>Tidak Tahu</option>
                                                            <option>Mungkin</option>
                                                            <option>Kemungkinan besar</option>
                                                            <option>Hampir Pasti</option>
                                                            <option>Pasti</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className='flex justify-center'>
                                            <label htmlFor="hasil">
                                                <p className="py-3 px-12 mt-6 bg-gradient-to-b from-lightblue to-darkblue flex rounded-full justify-center text-white font-semibold transition duration-300 ease-in-out hover:opacity-80 hover:shadow-xl active:bg-darkblue">
                                                    Submit
                                                </p>
                                            </label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal Hasil */}
                <input type="checkbox" id="hasil" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 lg:w-8/12 lg:pl-12 max-w-5xl bg-white">
                        <div className="w-full rounded-tl-3xl rounded-br-3xl bg-darkblue py-3">
                            <h1 className='text-white font-semibold text-xl ml-3'>Hasil Diagnosis Penyakit Gigi</h1>
                        </div>
                        <div className='flex flex-wrap pt-4 text-black'>
                            <div className='w-1/6 mt-2'>
                                <p className='text-start'>Nama</p>
                            </div>
                            <div className='w-auto pr-3 mt-2'>
                                <p className='px-2'>:</p>
                            </div>
                            <div className='w-4/6 mt-2'>
                                <p className='text-start'>Alex</p>
                            </div>
                            <div className='w-1/6 mt-2'>
                                <p className='text-start'>Alamat</p>
                            </div>
                            <div className='w-auto pr-3 mt-2'>
                                <p className='px-2'>:</p>
                            </div>
                            <div className='w-4/6 mt-2'>
                                <p className='text-start'>Denpasar, Bali</p>
                            </div>
                            <div className='w-1/6 mt-2'>
                                <p className='text-start'>Tanggal</p>
                            </div>
                            <div className='w-auto pr-3 mt-2'>
                                <p className='px-2'>:</p>
                            </div>
                            <div className='w-4/6 mt-2'>
                                <p className='text-start'>12 September 2022</p>
                            </div>
                        </div>
                        <h1 className='text-left text-black text-base font-semibold mt-4'>Gejala yang dirasakan</h1>
                        <li className='text-left text-black mt-2'>Nyeri saat mengunyah</li>
                        <li className='text-left text-black mt-2'>Gusi berdarah</li>
                        <h1 className='text-left text-black text-base font-semibold mt-4'>Anda kemungkinan besar terkena penyakit <strong className='font-bold'>Periodontitis</strong></h1>
                        <div className='flex flex-wrap text-black'>
                            <div className='w-1/6 mt-2'>
                                <p className='text-start'>Definisi</p>
                            </div>
                            <div className='w-auto pr-3 mt-2'>
                                <p className='px-2'>:</p>
                            </div>
                            <div className='w-4/6 mt-2'>
                                <p className='text-start'>Periodontitis merupakan salah satu komplikasi dari radang gusi (gingivitis) yang tidak terobati. Jika kondisi ini terjadi dalam jangka panjang, jaringan di sekitar gusi dan gigi akan rusak sehingga menyebabkan gigi tanggal. Pada kasus yang parah, periodontitis dapat menyebabkan kemunculan abses atau kumpulan nanah di gigi.</p>
                            </div>
                            <div className='w-1/6 mt-2'>
                                <p className='text-start'>Penyebab</p>
                            </div>
                            <div className='w-auto pr-3 mt-2'>
                                <p className='px-2'>:</p>
                            </div>
                            <div className='w-4/6 mt-2'>
                                <p className='text-start'>Periodontitis bermula dari penumpukan plak di gigi. Plak ini terbentuk akibat interaksi sisa-sisa makanan dengan bakteri yang normalnya hidup di mulut. Jika tidak dibersihkan, plak tersebut akan mengeras dan membentuk karang gigi yang menjadi media bakteri berkembang biak.</p>
                            </div>
                            <div className='w-1/6 mt-2'>
                                <p className='text-start'>Solusi</p>
                            </div>
                            <div className='w-auto pr-3 mt-2'>
                                <p className='px-2'>:</p>
                            </div>
                            <div className='w-4/6 mt-2'>
                                <p className='text-start'>Scaling, untuk menghilangkan karang gigi dan bakteri dari permukaan gigi atau bagian bawah gusi Root planing, untuk membersihkan dan mencegah penumpukan bakteri dan karang gigi lebih lanjut, serta untuk menghaluskan permukaan akar Pemberian antibiotik oral, obat kumur atau gel, untuk menghilangkan bakteri penyebab infeksi</p>
                            </div>
                        </div>
                        <div className="modal-action flex justify-start">
                            <Link to="/cari-dokter"
                                className="rounded-full py-3 px-6 text-base font-semibold text-white bg-gradient-to-b from-lightblue to-darkblue transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 hover:opacity-80 active:bg-darkblue active:text-white hover:shadow-lg">
                                Tanya Dokter
                            </Link>
                            <label htmlFor="hasil" className="rounded-full py-3 px-6 text-base font-semibold text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 hover:opacity-80 active:bg-darkblue active:text-white hover:shadow-lg">Selesai</label>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
};
export default SistemPakar;