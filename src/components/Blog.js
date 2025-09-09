import Button from './Button';

const Blog = () =>{
    return(
      <section id="blog" className="px-2 pt-28 pb-16 lg:pt-20 lg:px-20">
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
          <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 text-start'>
              <h1 data-aos="fade-up" className="font-semibold text-darkblue lg:text-lg aos-init aos-animate">-Artikel.</h1>
              <h1 data-aos="fade-up" className="text-4xl lg:text-5xl font-bold text-black mr-2 lg:mr-4 aos-init aos-animate">Temukan Hal Menarik Seputar Gigi</h1>
              <div data-aos="fade-up" className='aos-init aos-animate'>
                <div className="w-11/12 lg:w-96 mt-8 mx-auto rounded-tl-3xl rounded-br-3xl bg-white bg-opacity-50 shadow-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 hover:shadow-lg">
                  <div className="w-full h-56 mask-square rounded-tl-3xl rounded-br-3xl ring-white">
                    <img src="https://dinkes.surakarta.go.id/wp-content/uploads/2021/08/px-gigi.png" alt="BlogImage" />
                  </div>
                  <div className="card-body text-center">
                    <p className='pt-2 text-base text-black'>2 Agustus 2022</p>
                    <h2 className="text-3xl font-semibold text-black">Menjaga Kesehatan Gigi Sejak Dini</h2>
                    <div className='mx-auto py-3'>
                    <svg width="118" height="2" viewBox="0 0 118 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="118" height="2" fill="url(#paint0_linear_414_494)"/>
                      <defs>
                        <linearGradient id="paint0_linear_414_494" x1="116" y1="0" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#D3D3D3" stop-opacity="0"/>
                          <stop offset="0.501157" stop-color="#D3D3D3"/>
                          <stop offset="1" stop-color="#D3D3D3" stop-opacity="0"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    </div>
                    <p className='pb-4'>Hasil Riset Kesehatan Dasar (Riskesdas) tahun 2018 menunjukkan 57,6% penduduk Indonesia mengalami masalah gigi dan mulut dan hanya sekitar 10,2%...</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full lg:w-1/2 lg:px-24'>
              <div data-aos="fade-up" className='aos-init aos-animate'>
                <div className="w-11/12 lg:w-96 mt-8 mx-auto rounded-tl-3xl rounded-br-3xl bg-white bg-opacity-50 shadow-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 hover:shadow-lg">
                  <div className="w-full h-56 mask-square rounded-tl-3xl rounded-br-3xl ring-white">
                    <img src="https://dinkes.deliserdangkab.go.id/wp-content/filewebsite/01a2be14c0466503a2e14ecbbe02228c.jpg" alt="BlogImage" />
                  </div>
                  <div className="card-body text-center">
                    <p className='pt-2 text-base text-black'>2 Oktober 2022</p>
                    <h2 className="text-3xl font-semibold text-black">Cara Menjaga Kesehatan Gigi</h2>
                    <div className='mx-auto py-3'>
                      <svg width="118" height="2" viewBox="0 0 118 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="118" height="2" fill="url(#paint0_linear_414_494)"/>
                        <defs>
                          <linearGradient id="paint0_linear_414_494" x1="116" y1="0" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#D3D3D3" stop-opacity="0"/>
                            <stop offset="0.501157" stop-color="#D3D3D3"/>
                            <stop offset="1" stop-color="#D3D3D3" stop-opacity="0"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <p className='pb-4'>Kesehatan gigi dan mulut sering kali diabaikan oleh masyarakat. Rendahnya kesadaran dalam merawat kesehatan gigi mulut merupakan salah satu...</p>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className='flex justify-center mt-8 lg:mt-12 lg:justify-end aos-init aos-animate'>
                <Button button={"Lihat Artikel Lainnya"} link={"/blog"}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Blog;