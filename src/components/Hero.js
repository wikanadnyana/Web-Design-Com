import Teeth from '../assets/images/teeth.png'; // sumber: https://iconscout.com/
import BGTeeth from '../assets/images/bgteeth.png';
import Shield from '../assets/images/shield.png';   // sumber: https://iconscout.com/
import Button from '../components/Button';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react';

const Hero = () =>{
    const [counterOn, setCounterOn] = useState(false);

    return(
        <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
            <section id="beranda" className="pt-6 lg:pt-20 px-4 lg:px-20 heroBG">
                <div className="container">
                    <div className="w-full flex flex-wrap">
                        <div className="w-full lg:w-1/2 self-start mt-20">
                            <h1 className="text-start font-semibold text-darkblue lg:text-lg">-Konsultasikan gigimu bersama kami.</h1>
                            <h1 className="text-start text-4xl lg:text-6xl font-bold text-black mt-1">Lindungi Kesehatan</h1>
                            <div className='flex flex-wrap mt-1 lg:mt-4'>
                                <h1 className="text-start text-4xl lg:text-6xl font-bold text-darkblue underline transition duration-300 ease-in-out hover:text-lightblue mr-2 lg:mr-4">Gigimu</h1>
                                <h1 className="text-start text-4xl lg:text-6xl font-bold text-black">Sekarang!</h1>
                            </div>
                            <p className="text-start mt-6 lg:mt-8 text-md">Gigi merupakan salah satu bagian yang sangat penting pada tubuh manusia, jika gigi Anda bermasalah maka Anda akan mengalami kesulitan dan hari-hari Anda terganggu. Dapatkan informasi kesehatan gigi akurat langsung dari Pakarnya!</p>
                            { counterOn && 
                                <div className="flex justify-start mt-8 animate__animated animate__fadeInUp">
                                    <Button button={"Mulai Analisis"} link={"/sistem-pakar"}/>
                                </div>
                            }
                        </div>
                        <div className="w-full lg:w-1/2 mt-6 lg:mt-4">
                            { counterOn &&
                                <div className="absolute right-0 lg:right-28 top-96 lg:top-16 z-20 animate__animated animate__fadeInUp">
                                    <img src={Shield} alt="Shield" className='scale-50 lg:scale-75'/>
                                </div>
                            }
                            <div className='relative z-10 img-hero'>
                                <img src={Teeth} alt="HeroImage" className='absolute scale-70 lg:scale-150 right-16 lg:right-44 lg:mt-28'/>
                            </div>
                            <img src={BGTeeth} alt="BGTeeth" className='mx-auto lg:mt-12'/>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="z-30 animate__animated animate__fadeInUp card card-compact w-full lg:w-4/5 bg-white bg-opacity-40 backdrop-blur-md shadow-md">
                            <div className="py-5 grid grid-cols-4 divide-x-2 divide-slate-100">
                                <div>
                                    <h1 className='text-xl lg:text-4xl text-darkblue font-bold py-2'><CountUp start={0} end={2000} duration={2} delay={0}/>+</h1>
                                    <h1 className='text-sm lg:text-lg text-black font-semibold'>Pengguna</h1>
                                    <p className='text-sm'>sistem pakar</p>
                                </div>
                                <div>
                                    <h1 className='text-xl lg:text-4xl text-darkblue font-bold py-2'><CountUp start={0} end={99} duration={2} delay={0}/>%</h1>
                                    <h1 className='text-sm lg:text-lg text-black font-semibold'>Ulasan Positif</h1>
                                    <p className='text-sm'>dari pengguna</p>
                                </div>
                                <div>
                                    <h1 className='text-xl lg:text-4xl text-darkblue font-bold py-2'><CountUp start={0} end={15} duration={2} delay={0}/></h1>
                                    <h1 className='text-sm lg:text-lg text-black font-semibold'>Diagnosa Penyakit</h1>
                                    <p className='text-sm'>penyakit gigi</p>
                                </div>
                                <div>
                                    <h1 className='text-xl lg:text-4xl text-darkblue font-bold py-2'><CountUp start={0} end={125} duration={2} delay={0}/></h1>
                                    <h1 className='text-sm lg:text-lg text-black font-semibold'>Dokter Gigi</h1>
                                    <p className='text-sm'>seluruh Indonesia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollTrigger>
    );
};

export default Hero;