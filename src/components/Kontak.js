import Kontak from '../assets/images/kontakImage.png';
import Torus from '../assets/images/Torus2.png';

const About = () =>{
    return(
        <section id="kontak" className="px-2 pb-24 lg:pt-16 lg:px-20">
          <div className='relative w-full blur-xxl'>
            <span className='absolute left-0'>
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
            <h1 data-aos="fade-up" className="text-center font-semibold text-darkblue lg:text-lg aos-init aos-animate">-Hubungi kami.</h1>
            <h1 data-aos="fade-up" className="text-4xl lg:text-4xl font-bold text-black mr-2 lg:mr-4 aos-init aos-animate">Ada Pertanyaan, Keluhan, atau Saran?</h1>
            <p data-aos="fade-up" className='mt-4 aos-init aos-animate'>Pesan Anda akan dijawab melalui email. Yuk jangan ragu untuk diskusi dengan kami!</p>
            <div data-aos="fade-up" className='flex flex-wrap justify-center mt-8 aos-init aos-animate'>
              <div className='relative hidden lg:flex'>
                <img src={Kontak} alt="KontakImage" className='mx-4'/>
              </div>
              <div className="w-full lg:w-2/5 mx-4 rounded-tl-3xl rounded-br-3xl bg-white bg-opacity-50 shadow-md aos-init aos-animate">
                <div className="card-body">
                  <form>
                    <div className="form-control w-full max-w-xs mx-auto">
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
                          <span className="label-text">E-mail</span>
                        </label>
                        <input
                          type="email"
                          placeholder="Masukkan e-mail"
                          autoComplete="email"
                          required
                          className="input input-bordered rounded-full input-info bg-white bg-opacity-50 w-full max-w-xs"
                        />
                      </div>
                      <div>
                        <label className="label pt-2 pb-1">
                          <span className="label-text">Pesan</span>
                        </label>
                        <textarea 
                          placeholder="Masukkan pesan anda"
                          required
                          className="textarea textarea-bordered rounded-xl textarea-info bg-white bg-opacity-50 w-full max-w-xs">
                        </textarea>
                      </div>
                      <div>
                        <button className="py-3 px-4 mt-4 mb-3 bg-gradient-to-b from-lightblue to-darkblue flex rounded-full w-full justify-center text-white font-semibold transition duration-300 ease-in-out hover:opacity-80 hover:shadow-xl active:bg-darkblue">
                          Kirim
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div data-aos="fade-up" className="absolute hidden lg:flex lg:right-0 top-32 lg:top-28 -z-10 aos-init aos-animate">
                <img src={Torus} alt="Torus" className='scale-50 lg:scale-75'/>
              </div>
            </div>
          </div>
        </section>
    );
};

export default About;