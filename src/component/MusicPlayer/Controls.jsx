
import { useState,useEffect } from 'react';


// icons
import {
  IoPlaySharp,
  IoPauseSharp,
} from 'react-icons/io5';

const Controls = ({ audioRef }) => { 
  const [isPlaying, setIsPlaying] = useState(false); 
  const [isLoading, setIsLoading] = useState(false); 
 
  const togglePlayPause = () => { 
    setIsPlaying(prev => !prev); 
  }; 
 
  useEffect(() => { 
    try { 
      if (isPlaying) { 
        setIsLoading(true); 
        audioRef.current.play().then(() => setIsLoading(false)); 
      } else { 
        audioRef.current.pause(); 
      } 
    } catch (error) { 
      console.error(error); 
    } 
  }, [isPlaying, audioRef]); 
 
  return ( 
    <div className='h-full w-full'> 
      <button 
        onClick={togglePlayPause} 
        className='relative w-full h-full flex flex-col justify-center items-center text-white text-3xl opacity-70' 
      > 
        {isPlaying ? ( 
          <> 
            <IoPauseSharp /> 
            {isLoading } 
          </> 
        ) : ( 
          <IoPlaySharp /> 
        )} 
      </button> 
    </div> 
  ); 
}; 

export default Controls;