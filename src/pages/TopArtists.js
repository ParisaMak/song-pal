import { ArtistCard , Error, Loader } from '../pages';
import { useGetArtistsQuery } from '../redux/service/shazamCore'

const TopArtists = () => {
  const { data, isFetching , error } = useGetArtistsQuery();
  if ( isFetching ) return <Loader title="Loading top charts" />
  if (error) return <Error />

  return(
    <div className='flex flex-col '>
      <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10 '>
        Discover Top Artist:
      </h2>
      <div className='flex flex-wrap justify-center gap-8'>
         {data?.map((track) =>{
          return <ArtistCard 
            key={track.key}
            track={track}
          />
         })}
      </div>
    </div>
  )
};
  
export default TopArtists;