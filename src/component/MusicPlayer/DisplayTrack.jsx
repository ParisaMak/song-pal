const DisplayTrack = ({ song ,audioRef}) => {


  const audioSource = song?.hub?.actions?.[1].uri
  return (
    <div >
      <audio 
         ref={audioRef} 
         src={audioSource} 
      />
    </div>
  );
};
export default DisplayTrack;