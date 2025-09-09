import Button from '../components/Button';
import BannerDoctor from '../components/BannerDoctor';

const Dokter = () => {
    return(
        <section id="cari-dokter" className="px-2 pt-6 lg:pt-16 lg:px-20 dokterBG">
          <div className="container">
            <h1 data-aos="fade-up" className="text-center font-semibold text-darkblue lg:text-lg pt-2 aos-init aos-animate">-Layanan kami.</h1>
            <div data-aos="fade-up" className='lg:flex lg:justify-center aos-init aos-animate'>
              <h1 className="text-4xl lg:text-5xl font-bold text-black mr-2 lg:mr-4">Temukan Dokter</h1>
              <h1 className="text-4xl lg:text-5xl font-bold text-darkblue underline transition duration-300 ease-in-out hover:text-lightblue">Gigimu</h1>
            </div>
            <p data-aos="fade-up" className='mt-4 aos-init aos-animate'>Pilih dokter gigi yang kamu inginkan dan konsultasikan gigimu.</p>
            <div data-aos="fade-up" className="flex flex-wrap lg:px-24 pt-8 pb-4 aos-init aos-animate">
              <div className="carousel rounded-box py-3">
                <div className="carousel-item mx-2 lg:mx-3">
                  <BannerDoctor
                    id= {"1"}
                    profile= {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxqeT3EgjGLrIn1ZUepCKpPui0ea5I6RcxQ&usqp=CAU"}
                    name= {"drg. Alex"}
                    address= {"Jl. Kenangan, Denpasar, Bali"}
                    rate= {"5.0"}
                    alumnus= {"Alumnus Universitas Pembangunan Nasional Veteran Jakarta, 2017"}
                  />
                </div> 
                <div className="carousel-item mx-2 lg:mx-3">
                  <BannerDoctor
                    id= {"1"}
                    profile= {"http://assets.kompasiana.com/items/album/2022/01/17/dokter-61e5974080a65a632a030c09.jpg"}
                    name= {"drg. Yenny Hartanti"}
                    address= {"Jl. Gatot Kaca, Denpasar, Bali"}
                    rate= {"5.0"}
                    alumnus= {"Alumnus Universitas Pembangunan Nasional Veteran Jakarta, 2017"}
                  />
                </div> 
                <div className="carousel-item mx-2 lg:mx-3">
                  <BannerDoctor
                    id= {"1"}
                    profile= {"https://healthcareevolutions.com.au/wp-content/uploads/2019/11/home-1-550H.jpg"}
                    name= {"drg. Annisa Handayani"}
                    address= {"Jl. Sandat, Denpasar, Bali"}
                    rate= {"5.0"}
                    alumnus= {"Alumnus Universitas Pembangunan Nasional Veteran Jakarta, 2017"}
                  />
                </div> 
                <div className="carousel-item mx-2 lg:mx-3">
                  <BannerDoctor
                    id= {"1"}
                    profile= {"https://static.honestdocs.id/system/blog_articles/main_hero_images/000/005/310/original/iStock-913714110_%281%29.jpg"}
                    name= {"drg. Fariska, Sp.PM"}
                    address= {"Jl. Gajah Mada, Denpasar, Bali"}
                    rate= {"4.9"}
                    alumnus= {"Alumnus Universitas Pembangunan Nasional Veteran Jakarta, 2017"}
                  />
                </div> 
              </div>
            </div>
            <div data-aos="fade-up" className='aos-init aos-animate pb-12'>
              <Button button={"Lihat Dokter Lainnya"} link={"/cari-dokter"}/>
            </div>
          </div>
        </section>
    );
};

export default Dokter;
