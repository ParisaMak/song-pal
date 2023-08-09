
import Controls from './controls';
import DisplayTrack from './DisplayTrack';
import { useRef} from 'react';

const AudioPlayer = ({song}) => {
  
  const audioRef = useRef()
  return (
      <div className='h-full '>
        <DisplayTrack 
        song={song} 
        audioRef={audioRef} 
       />
        <Controls  
        audioRef={audioRef} />
    </div>
  )
};
export default AudioPlayer;