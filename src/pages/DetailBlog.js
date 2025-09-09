const DetailBlog = () => {
  return (
    <div>
        <div className="bg-sky-50">
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
            <section id="caridokter" className="pt-24 lg:px-20">
                <div className="container">
                    <div className="flex flex-wrap pb-8">
                        <div className="w-full lg:w-1/2">
                            <h1 className="lg:text-start text-3xl font-bold text-black">
                                Temukan Hal Menarik Seputar Gigi
                            </h1>
                        </div>
                        <div className="w-full flex lg:w-1/2 lg:justify-end justify-center">
                            <div className='mt-4 lg:mt-0 text-black'>
                                <div className="navbar-center hidden lg:flex">
                                    <ul className="menu menu-horizontal p-0 z-10">
                                        <li>
                                            <a>Terkini</a>
                                        </li>
                                        <li>
                                            <a>Kesehatan</a>
                                        </li>
                                        <li>
                                            <a>Tips & Trik</a>
                                        </li>
                                        <li tabindex={0}>
                                            <a>
                                                Lainnya
                                                <svg
                                                    className="fill-current"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                                </svg>
                                            </a>
                                            <ul className="p-2 bg-white text-black">
                                            <li>
                                                <a>Gigi</a>
                                            </li>
                                            <li>
                                                <a>Submenu 2</a>
                                            </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap pb-8">
                        <div className="w-full">
                            <div class="relative">
                                <div className="absolute hero h-96" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                                    <div className="hero-overlay bg-opacity-60"></div>
                                </div>
                            </div>
                            <div className="card mx-auto w-11/12 bg-white shadow-xl mt-72 lg:px-8">
                                <div className="card-body">
                                    <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <div className="text-sm breadcrumbs mt-4">
                                                <ul>
                                                    <li><a>Blog</a></li> 
                                                    <li><a>Kesehatan</a></li>
                                                </ul>
                                            </div>
                                            <h2 className="card-title text-black text-left text-3xl mt-4">Kesehatan Gigi & Mulut - Cara Menjaga Kesehatan Mulut</h2>
                                            <p className='text-left font-semibold text-slate-500'>Penulis: Johny</p>
                                            <p className='text-left text-slate-500 mt-4 pb-8'>Dalam situasi saat ini, menjaga kebersihan pribadi sangatlah penting. Pastinya sekarang, kamu sudah terbiasa mengenakan masker dan mencuci tangan dengan seksama. Tapi jangan lupakan pentingnya menjaga kebersihan gigi dan mulut juga, lho. Berikut adalah beberapa tips tentang cara menjaga kesehatan gigi dan mulut.
                MENGAPA KEBERSIHAN GIGI DAN MULUT ITU PENTING?
                Mulut kita adalah titik masuk ke saluran pencernaan dan pernapasan. Mulut juga merupakan rumah bagi setidaknya 700 spesies mikroba. Ini termasuk bakteri baik dan jahat. Menyikat gigi dan flossing secara teratur dapat membantu menjaga kebersihan gigi dan mulut. Namun, tanpa kebersihan gigi dan mulut yang baik, bakteri jahat dapat menyebabkan infeksi, seperti kerusakan gigi dan penyakit gusi. Jika tidak diobati, penyakit ini dapat mempengaruhi kesehatanmu secara keseluruhan.</p>
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

export default DetailBlog;
