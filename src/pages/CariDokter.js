import CardDoctor from '../components/CardDoctor';
import Footer from '../components/Footer';

const CariDokter = () => {
  return (
    <div>
      <div className=" bg-background">
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
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 pb-8">
                <h1 className="lg:text-start text-3xl font-bold text-black">
                  Cari Dokter Gigi
                </h1>
              </div>
              <div className="w-full lg:w-1/2 flex pb-8 justify-center lg:justify-end">
                <form>   
                  <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>  
                  <div class="relative">
                      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                      </div>
                      <input type="search" id="default-search" class="block p-4 pl-10 pr-20 input input-bordered rounded-full input-info bg-white bg-opacity-50 w-full max-w-xs" placeholder="Cari lokasi, jadwal" required/>
                      <button type="submit" class="absolute right-2 lg:right-2.5 bottom-1.5 px-4 py-2 text-sm rounded-full bg-gradient-to-b from-lightblue to-darkblue text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-xl">Cari</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="hidden lg:w-1/5 lg:flex">
                <div className="relative lg:right-0">
                  <div className="card card-compact mx-auto w-56 bg-white bg-opacity-80 backdrop-blur-sm border border-white shadow-md">
                    <div className="card-body">
                      <h1 className="text-center text-lg text-black font-semibold">
                        FILTER
                      </h1>
                      <form>
                        <div className="form-control w-full max-w-xs">
                          <label className="label pt-4 pb-1">
                            <span className="label-text">Jadwal</span>
                          </label>
                          <input
                            type="date"
                            className="input input-bordered input-sm rounded-full input-info bg-white bg-opacity-50 w-full max-w-xs"
                          />
                          <label className="label pt-2 pb-1">
                            <span className="label-text">Lokasi</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Masukkan Lokasi"
                            className="input input-bordered input-sm rounded-full input-info bg-white bg-opacity-50 w-full max-w-xs"
                          />
                          <div>
                            <button className="py-2 px-4 mt-4 bg-gradient-to-b from-lightblue to-darkblue flex rounded-full w-full justify-center text-white font-semibold transition hover:opacity-80 hover:shadow-xl">
                              Terapkan
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center lg:w-4/5">
                <div className='flex flex-wrap'>
                  <CardDoctor
                    id= {"1"}
                    profile= {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxqeT3EgjGLrIn1ZUepCKpPui0ea5I6RcxQ&usqp=CAU"}
                    name= {"drg. Alex"}
                    address= {"Jl. Kenangan, Denpasar, Bali"}
                    rate= {"5.0"}
                  />
                  <CardDoctor
                    id= {"2"}
                    profile= {"http://assets.kompasiana.com/items/album/2022/01/17/dokter-61e5974080a65a632a030c09.jpg"}
                    name= {"drg. Yenny"}
                    address= {"Jl. Gatot Kaca, Denpasar, Bali"}
                    rate= {"5.0"}
                  />
                  <CardDoctor
                    id= {"3"}
                    profile= {"https://healthcareevolutions.com.au/wp-content/uploads/2019/11/home-1-550H.jpg"}
                    name= {"drg. Annisa"}
                    address= {"Jl. Sandat Sari, Denpasar, Bali"}
                    rate= {"5.0"}
                  />
                  <CardDoctor
                    id= {"4"}
                    profile= {"https://static.honestdocs.id/system/blog_articles/main_hero_images/000/005/310/original/iStock-913714110_%281%29.jpg"}
                    name= {"drg. Fariska"}
                    address= {"Jl. Gajah Mada, Denpasar, Bali"}
                    rate= {"4.9"}
                  />
                  <CardDoctor
                    id= {"5"}
                    profile= {"https://img.okezone.com/content/2022/05/24/65/2599329/studi-jenjang-pendidikan-dokter-sampai-jadi-profesor-makan-waktu-berapa-lama-1NDnWT2wUd.jpg"}
                    name= {"drg. Jennifer"}
                    address= {"Jl. Wagimin, Denpasar, Bali"}
                    rate= {"4.9"}
                  />
                  <CardDoctor
                    id= {"6"}
                    profile= {"https://orlandohandsurgery.com/wp-content/uploads/2016/01/docGWhite_website-1.png"}
                    name= {"drg. Shubert"}
                    address= {"Jl. Mawar Melati, Denpasar, Bali"}
                    rate= {"4.8"}
                  />
                  <CardDoctor
                    id= {"7"}
                    profile= {"https://orlandohandsurgery.com/wp-content/uploads/2016/01/DrBrianWhite_website-1024x748-white-bkgd-670x500-1-e1552586868880.jpg"}
                    name= {"drg. Pramudianto"}
                    address= {"Jl. Akasia Jaya, Denpasar, Bali"}
                    rate= {"4.7"}
                  />
                  <CardDoctor
                    id= {"8"}
                    profile= {"https://tvline.com/wp-content/uploads/2020/08/the-doctors.jpg?w=620"}
                    name= {"drg. Harris"}
                    address= {"Jl. Harmoni, Denpasar, Bali"}
                    rate= {"4.7"}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default CariDokter;
