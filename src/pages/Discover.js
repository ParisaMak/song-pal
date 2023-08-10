
import Error from '../component/Error';
import Loader from '../component/Loader';
import SongCard from '../component/SongCard';
import {genres} from '../asset/constants';
import { useGetTopChartsQuery } from '../redux/service/shazamCore';


const Discover = () => {
   const {data:songs , isLoading, error} = useGetTopChartsQuery()
  const genreTitle = 'Pop';
  console.log(songs)
   if(isLoading) return <Loader title ="Loading song..."/>
   if(error) return <Error />;

   return(
    <div className="flex flex-col ">
       <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
           <h2 className=" font-bold text-3xl text-white"> Discover {genreTitle}</h2>
           
           <select 
              onChange={() => {}}
              value=""
              className="bg-black text-gray-300 p-3 text-sm rounded-lg  outline-none sm:mt-0 mt-5">
            {genres.map((genre) => {
               return <option  
               key={genre.value}
               value={genre.value}
               >{genre.title}</option>
            })}
           </select>
           
       </div>
       <div className='flex flex-wrap sm: justify-center items-center gap-8'>
         {songs?.map((song , i ) => {
         return <SongCard key={song.key} i={i} song={song}/>;})}
       </div>
    </div>
  )
}

export default Discover;