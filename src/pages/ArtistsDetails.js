import { useParams } from "react-router";
import { useSelector } from 'react-redux';
import DetailsHeader from '../component/DetailsHeader';
import Error from '../component/Error';
import Loader from '../component/Loader';
import RelatedSongs from '../component/RelatedSongs';
import { useGetArtistDetailsQuery } from '../redux/service/shazamCore'

const ArtistDetails = () => {

    const { id:artistId } = useParams();
    const { activeSong , isPlaying } = useSelector((state) => state.player);

    const{data:artistData , isLoading: isLoadingArtistDetails , error } = useGetArtistDetailsQuery ({ artistId });

    if(isLoadingArtistDetails) return <Loader  titel="Loading Artist details.." />
  
    if(error) return <Error />

    return(
      <div className="flex flex-col ">
      <DetailsHeader 
       artistId = {artistId}
       artistData={artistData} />

      <RelatedSongs 
      data={Object.values(artistData?.songs)}
      artistId={artistId}
      isPlaying ={isPlaying}
      activeSong = {activeSong}
   
      />
      </div>
    )
  
}
  
export default ArtistDetails;