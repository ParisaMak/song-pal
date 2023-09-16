import { Error, Loader, SongCard }from '../pages';
import { genres } from '../asset/constants';
import { useDispatch, useSelector } from 'react-redux';
import { useGetSongsByGenresQuery } from '../redux/service/shazamCore';
import { selectGenreListId  } from '../redux/features/playerSlice';

const Discover = () => {
 
   const { activeSong , isPlaying ,genreListId } = useSelector((state) => state.player);
   const dispatch=useDispatch();
   const {data, isLoading, error} = useGetSongsByGenresQuery(genreListId||'POP');

   if(isLoading) return <Loader title ="Loading song..." />
   if(error) return <Error />;

   return(
    <div className="w-full flex flex-col ">
       <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
           <h2 className=" font-bold text-3xl text-white">
             Discover 
             <span className='lowercase'>
               {genreListId}
             </span>
           </h2>
 
           <select 
              onChange={(e) => {dispatch(selectGenreListId(e.target.value))}}
              value={ genreListId || 'pop'}
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
         {data?.map((song , i ) => (
              <SongCard
                  key={song.key} 
                  i={i} 
                  isPlaying ={isPlaying}
                  activeSong = {activeSong}
                  data= {data}
                  song={song}/>))}
       </div>
    </div>
  )
}

export default Discover;