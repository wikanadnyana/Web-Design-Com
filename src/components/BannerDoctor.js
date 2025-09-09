import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const CardDoctor = ({id, profile, name, rate, alumnus}) => {
    return (
      <div className='mx-auto'>
        <div className="card card-compact w-56 bg-white shadow-sm mb-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 hover:shadow-lg">
          <span className='absolute left-0 mt-8 z-10'>
            <svg width="52" height="29" viewBox="0 0 52 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M49.0093 0H2C0.895431 0 0 0.89543 0 2V27C0 28.1046 0.89543 29 2 29H49.0093C50.5548 29 51.5163 27.3218 50.7347 25.9886L44.5929 15.5114C44.2268 14.8868 44.2268 14.1131 44.5929 13.4886L50.7347 3.01144C51.5163 1.67815 50.5548 0 49.0093 0Z" fill="url(#paint0_linear_175_1601)"/>
              <defs>
                <linearGradient id="paint0_linear_175_1601" x1="26.25" y1="0" x2="26.25" y2="29" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#85D9F8"/>
                  <stop offset="1" stop-color="#10B2F4"/>
                </linearGradient>
                </defs>
              </svg>
          </span>
          <span className='absolute left-1 mt-9 z-10'>
            <p className="font-semibold text-white text-sm"><FontAwesomeIcon icon={solid('star')} />{rate}</p>
          </span>
          <div className="avatar justify-center py-4 pt-6">
            <div className="w-24 lg:w-28 rounded-full ring ring-white shadow-lg shadow-sky-400/30">
                <img src={profile} alt="doctor-image"/>
            </div>
          </div>
          <div className="text-center pb-4">
            <h1 className="text-xl text-black font-semibold px-2">
              {name}
            </h1>
            <div className='flex justify-center py-3'>
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
            <p className="text-sm px-2">
              {alumnus}
            </p>
          </div>
          <div className='flex flex-wrap justify-center pb-6'>
            <p className='px-3 py-1 rounded-md text-sm bg-slate-50 mx-2'><FontAwesomeIcon className='mr-2' icon={solid('briefcase')} />6 Tahun</p>
            <p className='px-3 py-1 rounded-md text-sm bg-slate-50 mx-2'><FontAwesomeIcon className='mr-2' icon={solid('thumbs-up')} />97.0%</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default CardDoctor;
  