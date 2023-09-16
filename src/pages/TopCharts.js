import { SongCard, Error,Loader } from '../pages';
import { useSelector } from 'react-redux';
import {useGetTopChartsQuery} from '../redux/service/shazamCore'

const TopCharts = () => {
  const { activeSong , isPlaying } = useSelector((state) => state.player);
  const { data, isFetching , error } = useGetTopChartsQuery();

  if ( isFetching ) return <Loader title="Loading top charts" />
  if (error) return <Error />

  return(
    <div className='flex flex-col '>
      <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10 '>
        Discover Top Charts:
      </h2>
      <div className='flex flex-wrap  justify-center gap-8'>
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
  
export default TopCharts;