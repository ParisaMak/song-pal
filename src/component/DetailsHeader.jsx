import { Link } from "react-router-dom";

const DetailHeader = ({songData}) => {
  return(
    <div className="relative  w-full flex flex-col ">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28"></div>
      <div className="absolute inset-0 flex items-center">
         <img 
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black" 
         src = {songData?.images?.coverart} 
          alt="art"
          />
          <div className="ml-5">
            <p className="text-gray-200 text-xl my-1 font-bold">
              {songData?.title}
            </p>
            <Link to={`/artists/${songData?.artists[0].adamid}`}>
              <p className="text-gray-400 font-semibold my-1 ">
                 {songData?.artists[0].alias}
              </p>
            </Link>
            <p className="text-gray-500 text-base my-1 ">{songData?.genres.primary}</p>
          </div>
      </div>
    </div>
  )
}
  
export default DetailHeader;