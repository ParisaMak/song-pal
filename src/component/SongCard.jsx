import { Link } from 'react-router-dom';
import { playPause , setActiveSong } from '../redux/features/playerSlice'
import { useDispatch } from 'react-redux';
import PlayPause from './PlayPause';

const SongCard = ({ song , isPlaying , activeSong , data ,i }) =>{
  const dispatch = useDispatch()
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  
  const handlePlayClick = () => {
    dispatch(setActiveSong({song , data ,i}))
    dispatch(playPause(true))
  };

  return(

    <div className='flex flex-col  w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer '> 
     
      <div className='relative w-full h-56 group flex justify-center  '>
           <div className={`absolute inset-2 justify-center items-center bg-black bg-opacity-50 rounded-lg group-hover:flex ${activeSong?.title === song.title? 'flex bg-black  bg-opacity-70' : 'hidden'}`}>
            <PlayPause 
            isPlaying ={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={ handlePauseClick}
            handlePlay={ handlePlayClick }
            />
           </div>

           <img className="rounded-lg  border-4 border-white" src={song?.images?.coverart}  key={song?.key} alt="song-img" />
      </div>
    
      <div className='mt-2 flex flex-col p-1 text-center'>
        <p className='font-semibold text-lg text-white truncate'>
          <Link to={`/songs/${song?.key}`}>
            {song.title}
          </Link>
        </p>
        <p className='text-sm truncate text-gray-300 mt-1'>
        <Link to={`/artists/${song?.artists && song?.artists[0] ? song?.artists[0]?.adamid : ''}`}>
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );

}

export default SongCard;