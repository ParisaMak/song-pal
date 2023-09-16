import { useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs }from '../pages';
import { playPause , setActiveSong } from '../redux/features/playerSlice'
import { useGetSongDetailsQuery,useGetSongRelatedQuery } from '../redux/service/shazamCore'

const SongDetails = () => {

    const dispatch = useDispatch()
    const { songid } = useParams();
    const { activeSong , isPlaying } = useSelector((state) => state.player);

    const{data:songData , isLoading: isLoadingSongDetails , error } = useGetSongDetailsQuery({ songid });

    const{data, isLoading: isLoadingRelatedSong } = useGetSongRelatedQuery ({ songid })

    if(isLoadingRelatedSong || isLoadingSongDetails ) return <Loader  titel="searching song details.." />
  
    if(error) return <Error />

    const handlePauseClick = () => {
      dispatch(playPause(false));
    };
    const handlePlayClick = (song,i) => {
      dispatch(setActiveSong({song , data ,i}))
      dispatch(playPause(true))
    };

    return(
      <div className="flex flex-col px-4 ">
          <DetailsHeader artistId=" " songData={songData} />
          <div className="mb-14  ">
            <h2 className="text-white text-3xl font-bold mt-4">
              Lyrics
            </h2>
            <div className="mt-5">
              {songData?.sections[1].type === 'LYRICS'? songData?.sections[1].text.map((line ,index ) => (
                <p key={index} className="text-gray-400 text-base my-1"> {line} </p> ))
                :<p className="text-gray-400 text-base my-1">Sorry, no lyrics found.</p>}
            </div>
          </div>
          <RelatedSongs 
              data={data}
              isPlaying ={isPlaying}
              activeSong = {activeSong}
              handlePauseClick = {handlePauseClick}
              handlePlayClick = {handlePlayClick}
          />
      </div>
    )
  
}
  
export default SongDetails;