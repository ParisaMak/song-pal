
import AudioPlayer from './MusicPlayer/AudioPlayer';

import { Link } from 'react-router-dom';

const SongCard = ({song,key}) =>{

  return(

    <div className='flex flex-col  w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer '> 
      <div className='relative w-full h-56 group flex justify-center  '>
           <div className='absolute flex inset-2 justify-center items-end bg-black bg-opacity-50 rounded-lg group-hover:bg-white/5 active:bg-opacity-100'>
            <AudioPlayer
            className='w-full h-full flex flex-col justify-between items-center '
            song={song} />
            <p >{song?.artists?.alias} </p>
           </div>
           <img className="rounded-lg  border-4 border-white" src={song?.images?.coverart}  key={key} alt="" />
      </div>
      <div className='mt-2 flex flex-col p-1 text-center'>
        <p className='font-semibold text-lg text-white truncate'>
          <Link to={`/songs/${song?.key}`}>
            {song.title}
          </Link>
        </p>
        <p className='text-sm truncate text-gray-300 mt-1'>
          <Link to={`/artists/${song?.subtitle}`}>
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );

}

export default SongCard;