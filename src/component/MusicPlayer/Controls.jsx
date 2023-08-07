
import { useState,useEffect } from 'react';
import ReactLoading from 'react-loading';

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
    <div className='h-full w-full'>
        <button onClick={togglePlayPause} className=" relative w-full h-full flex flex-col justify-center items-center text-white text-3xl opacity-70">
          {isPlaying ? <IoPauseSharp /> &&  <ReactLoading  type={"balls"} color={"white"} height={'20%'} width={'20%'} /> : <IoPlaySharp />}
        </button>
    </div>
  );
};

export default Controls;