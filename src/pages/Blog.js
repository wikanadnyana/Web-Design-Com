import CardBlogLarge from '../components/CardBlogLarge';
import CardBlogSmall from '../components/CardBlogSmall';
import Footer from '../components/Footer';
  
const DetailBlog = () => {
  return (
    <div>
        <div className="bg-background">
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
            <section id="blog" className="pt-24 lg:px-20">
                <div className="container">
                    <div className="flex flex-wrap mb-6">
                        <div className="w-full lg:w-1/2 ">
                            <h1 className="lg:text-start text-3xl font-bold text-black">
                            Temukan Hal Menarik Seputar Gigi
                            </h1>
                        </div>
                        <div className="w-full lg:w-1/2 mt-4 lg:mt-0 flex justify-center lg:justify-end">
                            <form>   
                                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>  
                                <div class="relative">
                                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    </div>
                                    <input type="search" id="default-search" class="block p-4 pl-10 pr-20 input input-bordered rounded-full input-info bg-white bg-opacity-50 w-full max-w-xs" placeholder="Cari hal menarik" required/>
                                    <button type="submit" class="absolute right-2 lg:right-2.5 bottom-1.5 px-4 py-2 text-sm rounded-full bg-gradient-to-b from-lightblue to-darkblue text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-xl">Cari</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <hr />
                    <div className='text-black'>
                        <div className="navbar-center lg:flex">
                            <ul className="menu menu-horizontal p-0 z-10">
                                <li>
                                    <a className='active:bg-darkblue' href='#'>Terkini</a>
                                </li>
                                <li>
                                    <a className='active:bg-darkblue' href='#'>Kesehatan</a>
                                </li>
                                <li>
                                    <a className='active:bg-darkblue' href='#'>Tips & Trik</a>
                                </li>
                                <li tabindex={0}>
                                    <a className='active:bg-darkblue'>
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
                                    <ul className="p-2 bg-white text-black z-10">
                                        <li>
                                            <a className='active:bg-darkblue' href='#'>Gigi</a>
                                        </li>
                                        <li>
                                            <a className='active:bg-darkblue' href='#'>Penyakit</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div className="flex flex-wrap mt-4 pb-8">
                            <div className="w-full lg:w-3/4 px-4">
                                <h1 className="text-start text-2xl mt-4 mb-3 font-semibold text-black">
                                    Artikel Terbaru
                                </h1>
                                <div className='mx-auto'>
                                    <CardBlogLarge
                                        slug={"/detail-blog"} 
                                        image={"https://images.unsplash.com/photo-1611166819595-ac34987dfa57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=515&q=80"} 
                                        title={"Cara mudah menjaga kesehatan gigi dan mulut"} 
                                        author={"Alexandra"} 
                                        artikel={"Dalam situasi saat ini, menjaga kebersihan pribadi sangatlah penting. Pastinya sekarang, kamu sudah terbiasa mengenakan masker dan mencuci tangan dengan seksama. Tapi jangan lupakan pentingnya menjaga kebersihan gigi"}
                                    />
                                    <CardBlogLarge
                                        slug={"/detail-blog"} 
                                        image={"https://res.cloudinary.com/dk0z4ums3/image/upload/v1627270237/attached_image/obat-kumur-sebagai-antiseptik-dalam-menjaga-kesehatan-mulut-0-alodokter.jpg"} 
                                        title={"Atasi Sariawan dengan Obat Kumur Antiseptik"} 
                                        author={"Robert"} 
                                        artikel={"Sariawan merupakan salah satu penyakit peradangan yang paling umum menjangkiti area di sekitar mulut. Berbicara mengenai efeknya, kemunculan sariawan kerap mengganggu aktivitas keseharian penderitanya. Beruntung, mengatasi sariawan biasanya cukup dilakukan dengan obat kumur. Obat kumur untuk sariawan sendiri bisa beraneka macam, namun untuk yang berbahan Povidone-Iodine (PVP-I) dan non alkohol dianggap memiliki keunggulan."}
                                    />
                                    <CardBlogLarge
                                        slug={"/detail-blog"} 
                                        image={"https://asset.kompas.com/crops/ffw_UVYntoeKBW3VkAF57-q1Ivg=/0x0:8688x5792/750x500/data/photo/2021/05/18/60a30d5f1c583.jpg"} 
                                        title={"Lakukan Ini untuk Memberantas Karang Gigi"} 
                                        author={"Sarah"} 
                                        artikel={"Karang gigi disebabkan karena adanya penumpukan sisa makanan yang dalam jangka waktu yang lama. Biasanya, hal ini banyak ditemukan pada bagian yang tidak terkena sikat gigi saat proses membersihkan gigi. Itulah sebabnya karang gigi sering muncul pada gigi depan yang berada di rahang bawah (sisi bagian dalam) dan gigi geraham rahang atas (sisi bagian luar). Cara paling efektif  untuk menghilangkan karang gigi adalah dengan membersihkan karang gigi atau scaling yang dilakukan oleh dokter gigi. Teknik ini dilakukan dengan menggunakan bantuan alat secara manual atau dengan alat ultrasonik. Penggunaan benang gigi (dental floss) juga dapat membantu membersihkan sisa makanan yang terselip di antara gigi."}
                                    />
                                    <CardBlogLarge
                                        slug={"/detail-blog"} 
                                        image={"https://awsimages.detik.net.id/community/media/visual/2017/02/28/0a4e2aae-3575-46db-842a-b7629e6b9181_43.jpg?w=700&q=90"} 
                                        title={"Begini Cara Menjaga Kesehatan Gigi dan Mulut Anak"} 
                                        author={"Elira"} 
                                        artikel={"Kebanyakan orang tua mengabaikan kesehatan gigi anak yaitu gigi susu (sulung) karena gigi tersebut akan digantikan oleh gigi permanen. Padahal masalah gigi dan mulut pada anak juga berpengaruh pada tumbuh kembang anak. Contohnya saja, jika gigi susu berlubang dan menyebabkan rasa tidak nyaman atau bahkan sakit pada anak, maka ada kemungkinan nafsu makan anak berkurang sehingga gizi anak tidak terpenuhi. Maka dari itu, kita perlu meningkatkan pencegahan gigi berlubang sejak dini. Beberapa kebiasaan dapat dilakukan orang tua untuk mencegah gigi berlubang dan menjaga gigi tetap sehat adalah melakukan pemeriksaan rutin, menjaga kebersihan gigi, hindari memberi susu bayi ketika tidur, batasi penggunaan botol dot hingga usia 2 atau 3 tahun, dan memperhatikan makanan yang dikonsumsi oleh anak."}
                                    />
                                </div>
                            </div>
                            <div className="lg:flex lg:w-1/4 hidden">
                                <div className='mx-auto'>
                                    <h1 className="text-start text-2xl mt-4 mb-3 font-semibold text-black">
                                        Artikel Terpopuler
                                    </h1>
                                    <CardBlogSmall
                                        slug={"/detail-blog"} 
                                        image={"https://asset.kompas.com/crops/ffw_UVYntoeKBW3VkAF57-q1Ivg=/0x0:8688x5792/750x500/data/photo/2021/05/18/60a30d5f1c583.jpg"} 
                                        title={"Lakukan Ini untuk Memberantas Karang Gigi"} 
                                        author={"Sarah"}
                                    />
                                    <CardBlogSmall
                                        slug={"/detail-blog"} 
                                        image={"https://awsimages.detik.net.id/community/media/visual/2017/02/28/0a4e2aae-3575-46db-842a-b7629e6b9181_43.jpg?w=700&q=90"} 
                                        title={"Begini Cara Menjaga Kesehatan Gigi dan Mulut Anak"} 
                                        author={"Elira"}
                                    />
                                    <CardBlogSmall
                                        slug={"/detail-blog"} 
                                        image={"https://asset-a.grid.id/crop/0x0:0x0/x/photo/2020/03/13/1013303708.jpg"} 
                                        title={"Hati-Hati, Makanan dan Minuman Panas Dapat Merusak Gigimu"} 
                                        author={"Eveland"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    </div>
  );
};

export default DetailBlog;
