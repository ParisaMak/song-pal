
const SongBarArtist = ({ song, i, activeSong}) => {

  return(
  <div className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${activeSong?.title === song?.title ? 'bg-[#4c426e]' : 'bg-transparent'} py-2 p-4 rounded-lg cursor-pointer mb-2`}>
    <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        className="w-20 h-20 rounded-lg"
        src={song?.attributes?.artwork?.url}
        alt={song?.artistName
        }
      />
      <div className="flex-1 flex flex-col justify-center mx-3">
        <p className="text-xs md:font-bold lg:text-md text-gray-300 mt-1">
          { song?.attributes?.name}
        </p>
        <p className="hidden md:block text-gray-400 mt-1">
          { song?.attributes?.albumName}
        </p>
      </div>
    </div>
     
  </div>
);
}
export default SongBarArtist;
