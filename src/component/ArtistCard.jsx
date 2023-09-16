import { useNavigate,Link } from "react-router-dom";

const ArtistCard = ({track }) => {

  const navigate = useNavigate();
  return(
  <div onClick={()=>{navigate(`/artists/${track?.artists[0].adamid}`)}}
      className='flex flex-col  w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer '>
      <div className='relative w-full h-56 group flex justify-center'>
         <img className="rounded-lg  border-4 border-white" src={track?.images?.coverart} alt="song-img" />
      </div>

      <div className='mt-2 flex flex-col p-1 text-center'>
        <p className='font-semibold text-lg text-white truncate'>
          <Link to={`/songs/${track?.key}`}>
            {track.title}
          </Link>
        </p>
        <p className='text-sm truncate text-gray-300 mt-1'>
          <Link to={`/artists/${track?.artists && track?.artists[0] ? track?.artists[0]?.adamid : ''}`}>
            {track.subtitle}
          </Link>
        </p>
     </div>
  </div>
  )
}
  
export default ArtistCard;
