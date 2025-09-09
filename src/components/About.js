import Doctor from '../assets/images/Doctor3.png'; // sumber: https://www.istockphoto.com/
import Button from '../components/Button';

const About = () =>{
    return(
      <section id="about" className="px-4 pt-20 lg:pt-8 lg:px-20 pb-16">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="hidden lg:w-1/2 lg:flex">
              <div data-aos="fade-up" className="relative aos-init aos-animate">
                <img src={Doctor} alt="AboutImage" className='scale-90'/>
              </div>
            </div>
            <div data-aos="fade-up" className="w-full lg:w-1/2 lg:mt-36 aos-init aos-animate">
              <h1 className="text-start font-semibold text-darkblue lg:text-lg">-Tentang kami.</h1>
              <div className='flex flex-wrap'>
                <h1 className="text-start text-4xl lg:text-5xl font-bold text-black mr-2 lg:mr-4">Kenapa</h1>
                <h1 className="text-start text-4xl lg:text-5xl font-bold text-darkblue underline transition duration-300 ease-in-out hover:text-lightblue">Mai Dental</h1>
                <h1 className="text-start text-4xl lg:text-5xl font-bold text-black">?</h1>
              </div>
              <p className="text-start mt-8 pr-4">Mai Dental merupakan website berbasis Sistem Pakar yang bertujuan untuk meningkatkan kesadaran masyarakat sekaligus memfasilitasi masyarakat agar dapat melakukan pemeriksaan gigi dan mulut secara rutin sesuai dengan prosedur yang ada</p>
              <div data-aos="fade-up" className="flex justify-start mt-8 aos-init aos-animate">
                <Button button={"Coba Sekarang!"} link={"/sistem-pakar"}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default About;