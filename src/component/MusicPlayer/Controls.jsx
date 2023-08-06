import { useState,useEffect } from 'react';


// icons
import {
  IoPlaySharp,
  IoPauseSharp,
} from 'react-icons/io5';

const Controls = ({ audioRef }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

 useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);

  
  return (
    <div className='f-4'>
      <div >
        <button onClick={togglePlayPause}>
          {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
        </button>
      </div>
    </div>
  );
};

export default Controls;