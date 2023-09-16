import { useParams } from "react-router";
import { useSelector } from 'react-redux';
import { DetailsHeaderArtist, Error, Loader, ArtistTopSongs } from "../pages";
import { useGetArtistDetailsQuery } from '../redux/service/shazamCore'

const ArtistDetails = () => {
    
    const { id:artistId } = useParams();
    const { activeSong , isPlaying } = useSelector((state) => state.player);
    const{data:artistData , isLoading: isLoadingArtistDetails , error } = useGetArtistDetailsQuery ({ artistId });
    const artistSongs =artistData?.data[0]?.views["top-songs"]?.data;

    if(isLoadingArtistDetails) return <Loader  titel="Loading Artist details.." />
    if(error) return <Error />

    return(
      <div className="flex flex-col">
      <DetailsHeaderArtist 
       artistId = {artistId}
       artistData={artistData} />

      <ArtistTopSongs 
      data={Object.values(artistSongs)}
      artistId={artistId}
      isPlaying ={isPlaying}
      activeSong = {activeSong}
      />
      </div>
    )
  
}
  
export default ArtistDetails;