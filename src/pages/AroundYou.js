import { useState ,useEffect } from 'react';
import axios from 'axios';
import { SongCard, Error, Loader } from '../pages';
import { useSelector } from 'react-redux';
import { useGetSongsByCountryQuery } from '../redux/service/shazamCore'

const AroundYou = () => {
  const [countryCode , setCountryCode ] = useState('');
  const [loading , setLoading ] = useState(true);
  const { activeSong , isPlaying } = useSelector((state) => state.player);
  const { data, isFetching , error } = useGetSongsByCountryQuery({countryCode});

  useEffect(() =>{
    axios.get('https://geo.ipify.org/api/v2/country?apiKey=at_ImytQoANGIUyNZcvtXA4nX1E3evxV&ipAddress=8.8.8.8')
    .then((res) => setCountryCode(res?.data?.location?.country))
    .catch((err)=> console.log(err))
    .finally(() =>setLoading(false))
  }, [countryCode])

  if ( isFetching && loading ) return <Loader title="Loading songs around you" />
  if (error && countryCode ) return <Error />

  return(
    <div className='flex flex-col '>
      <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10 '>
        Around you:
      </h2>
      <div className='flex flex-wrap justify-center gap-8'>
         {data?.map((song , i) =>{
          return <SongCard 
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            data={data}
            activeSong={activeSong}
            i={i}
          />
         })}
      </div>
    </div>
  )
};
  
export default AroundYou;