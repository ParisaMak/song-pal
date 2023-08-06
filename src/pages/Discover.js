import { useEffect , useState }  from 'react';
import Error from '../component/Error';
import Loader from '../component/Loader';
import SongCard from '../component/SongCard';
import {genres} from '../asset/constants';
import axios from 'axios';
import options from './request'



const Discover = () => {

const [ songs , setSongs ] = useState('')
const [isLoading, setIsLoading] = useState(false);
const [errorMessage, setErrorMessage] = useState("");

useEffect(() =>{
 
  setIsLoading(true);
  axios.get(
     options.worldChart,
       { headers: {
        'X-RapidAPI-Key': '53c14de0e0msh35541b6d6f0feb1p166c7fjsn6fcc9ebaa163',
        'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
      }
      }
    )
  .then(res => setSongs(res),
             setIsLoading(false))
  .catch((errorMessage) => {
              setErrorMessage("Unable to fetch user list");
              console.log(errorMessage);
              setIsLoading(false);
  });
},[])



  

console.log(songs.data)
  const genreTitle = 'Pop';

  return(
    <div className="flex flex-col">
        <div>{isLoading ? <Loader title="Loading Songs...."/> : null}</div>
        {errorMessage && <p className="error">,<Error /></p>}
       <div className=" w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
           <h2 className="font-bold text-3xl text-blue"> Discover {genreTitle}</h2>
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
      {songs.data?.map((song ) => {
        return <SongCard key={song.key} song={song}/>
      })}

       </div>
    </div>
  )
}

export default Discover;