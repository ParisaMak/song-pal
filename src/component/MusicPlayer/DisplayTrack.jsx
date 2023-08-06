const DisplayTrack = ({ song ,audioRef ,setDuration , progressBarRef}) => {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  const audioSource = song?.hub?.actions?.[1].uri
  return (
    <div className="bg-green-500">
      <audio 
         ref={audioRef} 
         src={audioSource} 
         onLoadedMetadata={onLoadedMetadata}/>
    </div>
  );
};
export default DisplayTrack;