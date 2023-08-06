
import Controls from './Controls';
import DisplayTrack from './DisplayTrack';
import ProgressBar from './ProgressBar';
import { useRef , useState } from 'react';

const AudioPlayer = ({song}) => {
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef()
  const progressBarRef = useRef();
  return (
    <div className="flex flex-row justify-center items-center">
      <div className='flex flex-col justify-center items-center w-full'>
        <DisplayTrack 
        song={song} 
        audioRef={audioRef} 
        progressBarRef={progressBarRef}
        setDuration={setDuration}

       />
        <Controls  
        audioRef={audioRef}
        progressBarRef={progressBarRef}
        setTimeProgress={setTimeProgress}
        duration={duration}/>
        
        <ProgressBar 
        progressBarRef={progressBarRef}
        audioRef={audioRef}
        timeProgress={timeProgress}
        duration={duration} />
      </div>
    </div>
  )
};
export default AudioPlayer;