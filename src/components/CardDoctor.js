import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro'

const CardDoctor = ({id, profile, name, address, rate}) => {
    return (
      <div className='mx-auto'>
        <div className="card card-compact w-44 lg:w-56 bg-white shadow-sm mb-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 hover:shadow-lg">
          <label htmlFor="detail">
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
            <div className="avatar justify-center py-4 pt-8">
              <div className="w-24 lg:w-28 rounded-full ring ring-white shadow-lg shadow-sky-400/30">
                <img src={profile} alt="doctor-image"/>
              </div>
            </div>
            <div className="text-center pb-4 lg:pb-8">
              <h1 className="text-xl text-black font-semibold px-2">{name}</h1>
              <p className="text-sm pt-2 px-2">{address}</p>
            </div>
            <div class="grid grid-cols-2 divide-x-2 divide-white">        
              <label htmlFor="jadwal" className="flex flex-row justify-center py-2 bg-sky-200 hover:bg-sky-100 text-sm text-slate-700">
                <p>
                  <FontAwesomeIcon className='mr-1' icon={regular('calendar')} />Jadwal
                </p>
              </label>
              <label htmlFor="chat" key={id} className="flex flex-row justify-center py-2 bg-sky-200 hover:bg-sky-100 text-sm text-slate-700">
                <p>
                  <FontAwesomeIcon className='mr-1' icon={regular('envelope')} />Chat
                </p>
              </label>
            </div>
          </label>
        </div>

        {/* Modal Jadwal */}
        <input type="checkbox" id="jadwal" className="modal-toggle" />
        <label htmlFor="jadwal" className="modal cursor-pointer">
          <label className="modal-box relative bg-white" for="">
            <label htmlFor="jadwal" className="text-slate-300 absolute right-3 top-3"><FontAwesomeIcon className='h-7' icon={regular('circle-xmark')} /></label>
            <h3 className="text-xl font-bold text-black pb-2">Jadwal Praktek Dokter</h3>
            <p><FontAwesomeIcon className='mr-1' icon={solid('location-dot')} /> Jl. Kenangan, Denpasar, Bali</p>
            <div className="overflow-x-auto px-2 lg:px-4 pt-4">
              <table className="table table-normal w-full text-black text-center">
                <thead>
                  <tr>
                    <th className='bg-sky-100'>Hari</th>
                    <th className='bg-sky-100'>Jam Kerja</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className='bg-white'>Senin</th>
                    <td className='bg-white'>12:00-16:00 WITA</td>
                  </tr>
                  <tr>
                    <th className='bg-white'>Rabu</th>
                    <td className='bg-white'>12:00-16:00 WITA</td>
                  </tr>
                  <tr>
                    <th className='bg-white'>Jumat</th>
                    <td className='bg-white'>12:00-16:00 WITA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </label>
        </label>

        {/* Modal Chat */}
        <input type="checkbox" id="chat" className="modal-toggle" />
        <label htmlFor="chat" className="modal cursor-pointer">
          <label className="modal-box relative bg-sky-50 lg:w-1/4 max-w-5xl px-0 py-0" for="">
            <label htmlFor="chat" className="text-white z-10 absolute right-4 top-5"><FontAwesomeIcon className='h-7' icon={regular('circle-xmark')} /></label>
            <div className="avatar flex justify-start items-stretch bg-gradient-to-r from-cyan-500 to-blue-500 py-3">
              <div className="w-10 rounded-full self-center ring ring-white ml-4">
                  <img src={profile} alt="doctor-image"/>
              </div>
              <h1 className='text-white font-semibold text-xl ml-3 self-center'>{name}</h1>
            </div>
            <div className='py-44'></div>
            <form>
              <div className='form-control w-full flex'>
                <textarea  class="input bg-white bg-opacity-50 pr-16 w-full" placeholder="Ketik pesan disini..." required/>
                <button type="submit" class="absolute right-2 lg:right-2.5 mt-1 px-2.5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-xl"><FontAwesomeIcon className='pr-1 h-4' icon={regular('paper-plane')} /></button>
              </div>
            </form>
          </label>
        </label>

        {/* Modal Detail */}
        <input type="checkbox" id="detail" className="modal-toggle" />
        <label htmlFor="detail" className="modal cursor-pointer">
          <label className="modal-box relative bg-white" for="">
            <label htmlFor="detail" className="text-slate-300 absolute right-3 top-3"><FontAwesomeIcon className='h-7' icon={regular('circle-xmark')} /></label>
            <div className="avatar justify-center pt-2">
              <div className="w-24 lg:w-36 rounded-full ring ring-white shadow-lg shadow-sky-400/30">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxqeT3EgjGLrIn1ZUepCKpPui0ea5I6RcxQ&usqp=CAU" alt="doctor-image"/>
              </div>
            </div>
            <h3 className="text-xl font-bold text-black pt-3">Drg. Dewi Farah Pratiwi</h3>
            <p className=' text-black pt-1'>Dokter Gigi</p>
            <div className='flex flex-wrap justify-center pt-3'>
              <p className='px-3 py-1 rounded-md text-sm bg-slate-50 mx-3'><FontAwesomeIcon className='mr-2' icon={solid('briefcase')} />6 Tahun</p>
              <p className='px-3 py-1 rounded-md text-sm bg-slate-50 mx-3'><FontAwesomeIcon className='mr-2' icon={solid('thumbs-up')} />97.0%</p>
            </div>
            <div className='px-3 pb-3 pt-3'>
              <div className='flex flex-wrap pt-4'>
                <div className='w-1/6'>
                  <FontAwesomeIcon className='scale-125' icon={solid('user-graduate')} />
                </div>
                <div className='w-5/6 pr-4'>
                  <h1 className='text-start text-black font-semibold'>Alumnus</h1>
                  <p className='text-start text-sm'>Universitas Pembangunan Nasional "Veteran" Jakarta, 2017</p>
                </div>
              </div>
              <div className='flex flex-wrap pt-4'>
                <div className='w-1/6'>
                <FontAwesomeIcon className='scale-125' icon={solid('house-chimney-medical')} />
                </div>
                <div className='w-5/6 pr-4'>
                  <h1 className='text-start text-black font-semibold'>Praktik/Klinik</h1>
                  <p className='text-start text-sm'>Jl. Kenangan, Denpasar, Bali</p>
                </div>
              </div>
              <div className='flex flex-wrap pt-4'>
                <div className='w-1/6'>
                <FontAwesomeIcon className='scale-125' icon={solid('id-card')} />
                </div>
                <div className='w-5/6 pr-4'>
                  <h1 className='text-start text-black font-semibold'>Nomor STR</h1>
                  <p className='text-start text-sm'>3111123138185055</p>
                </div>
              </div>
            </div>
          </label>
        </label>
      </div>
    );
  };
  
  export default CardDoctor;
  