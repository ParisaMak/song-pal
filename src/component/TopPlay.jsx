import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import AudioPlayer from './MusicPlayer/AudioPlayer'
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';

const TopPlay = ({songs}) => {

  const topPlay = songs?.slice(0,5);
   console.log(topPlay)
  if (!songs) {
    return null;
  }

  const divRef = useRef(null)
  const swiperSlides = topPlay.map((song) => (
    <SwiperSlide
      key={song.key}
      style={{ width: '16%', height: 'auto' }}
      className="shadow-lg rounded-full animate-slideright"
    >
      <Link to={`/artist/${song?.artists[0].adamid}`}>
        <img src={song?.images.background} alt="name" className='rounded-full w-full object-cover' />
      </Link>
    </SwiperSlide>
  ));


  return (
    <div ref={divRef} className= "mt-2  xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] h-screen flex flex-col ">
      
      <div className='w-full flex flex-col mt-1'>
        <div className='text-white bold text-xl flex flex-row justify-between items-center'>
          <h2>Top Charts</h2>
          <p className='text-gray-300 text-base cursor-pointer'>
            <Link to='/top-charts'>
              See More
            </Link>
          </p>
        </div>
        <div className='mt-4 flex flex-col gap-0'> 
        <ol className='w-full flex flex-col items-start text-white  m-3'>
          {topPlay.map((song, i) => {
            return(
              <li className="w-full flex flex-row justify-between items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-1" key={song.title}>
              <div className="flex flex-row flex-1 justify-center items-center">
                 <h3 className='font-bold text-base text-white'>{i + 1}. </h3>
                <img className="w-12 h-12 rounded-lg ml-3" src={song?.images?.coverart} alt={song?.title} />
                <div className='flex-1 flex flex-col justify-start items-start mx-3 '>
                  <Link to={`/songs/${song.key}`}>
                    <p className='text-sm font-bold text-white'>{song.title}</p>
                  </Link>
                  <Link to={`/songs/${song.key}`}>
                    <p className='text-sm text-gray-300 mt-1'>{song?.subtitle}</p>
                  </Link>
                </div>
              </div>
              <div className='scale-75'>
              <AudioPlayer

              song={song} />
              </div>
           </li>
            )
          })}
          </ol>
        </div>

      </div>
      <div className='w-full flex flex-col mt-8'>
        <div className='text-white  bold text-xl flex flex-row justify-between items-center'>
          <h2>Top Artists</h2>
          <p className='text-gray-300 text-base cursor-pointer'>
            <Link to='/top-charts'>
              See More
            </Link>
          </p>
        </div>
        <Swiper 
          slidesPerView='auto' 
          spaceBetween={15} 
          freeMode 
          centeredSlides
          centeredSlidesBounds 
          modules={[FreeMode]} 
          className="mt-4"
          mousewheel={true}
        >
          {swiperSlides}
        </Swiper>
      </div>
    </div>
  );
}
export default TopPlay;