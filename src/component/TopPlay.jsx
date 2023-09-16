import { Link } from 'react-router-dom';
import {useSelector , useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import  PlayPause from './PlayPause';
import {playPause ,setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery,useGetArtistsQuery } from '../redux/service/shazamCore';

const TopPlay = ( ) => {
   const {data} = useGetTopChartsQuery();
   const {data:artists} = useGetArtistsQuery()
   const { activeSong , isPlaying } = useSelector((state) => state.player);
   const dispatch = useDispatch()
   const divRef = useRef(null)
   useEffect(() => {
    divRef.current.scrollIntoView({behavior:'smooth'})
   })

   const topPlay = data?.slice(0,5);
   const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = (song,i) => {
    dispatch(setActiveSong({ data , song ,i }))
    dispatch(playPause(true))
  };

  const topArtists =artists?.slice(0,5);

  return (
    <div ref={divRef} className= "flex-1  flex flex-col h-full mt-[40px] lg:max-w-[450px] lg:mt-0 ">
      
      <div className='w-full flex flex-col mt-1 px-4 '>
        <div className='text-white bold text-xl flex flex-row justify-between items-center mt-1'>
          <h2>Top Charts</h2>
          <p className='text-gray-300  text-[11px] cursor-pointer'>
            <Link to='/top-charts'>
              See More
            </Link>
          </p>
        </div>
        <div className='mt-2 flex flex-col gap-0'> 
        <ol className='w-full flex flex-col items-start text-white '>
          {topPlay?.map((song, i) => {
            return(
              <li className="w-full flex flex-row justify-between items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-1" key={song.title} >
              <div className="flex flex-row flex-1 justify-center items-center">
                 <h3 className='font-bold text-base text-white'>{i + 1}. </h3>
                <img className="w-12 h-12 rounded-lg ml-3" src={song?.images?.coverart} alt={song?.title} />
                <div className='flex-1 flex flex-col justify-start items-start mx-3 '>
                  <Link to={`/songs/${song.key}`}>
                    <p className='text-sm font-bold text-white'>{song.title}</p>
                  </Link>
                  <Link to={`/artists/${song?.artists[0].adamid}`}>
                    <p className='text-sm text-gray-300 mt-1'>{song?.subtitle}</p>
                  </Link>
                </div>
              </div>
              <div className='scale-75'>
                <PlayPause
                isPlaying={isPlaying}
                activeSong={activeSong}
                song={song}
                handlePause={handlePauseClick}
                handlePlay={() => handlePlayClick(song,i)} />
              </div>
           </li>
            )
          })}
          </ol>
        </div>
      </div>
      <div className='flex flex-col h-full mt-2 '>
        <div className='text-white  bold text-xl flex flex-row justify-between items-center px-4'>
          <h2>Top Artists</h2>
          <p className='text-gray-300  text-[11px]  cursor-pointer'>
            <Link to='/top-artists'>
              See More
            </Link>
          </p>
        </div>
        <div className=" w-screen flex mt-4  border-box lg:w-full ">
          <div className='flex gap-4 items-center overflow-x-scroll flex-nowrap scrollbar-hide justify-between  lg:justify-between mx-4 '>
          {topArtists?.map((song) => (
            <div className=' w-[100px] h-auto shrink-0 sm:w-[150px]' key={song.key}>
              <Link to={`/artists/${song?.artists[0].adamid}`}  >
                <img src={song?.images.background} alt="name" className='rounded-full object-cover  ' />
                <p className='text-white text-sm text-center mt-1'>{song.artists[0].alias}</p>
              </Link>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopPlay;