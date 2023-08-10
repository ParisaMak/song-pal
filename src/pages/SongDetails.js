import { useParams } from "react-router";

const SongDetails = () => {
  
    const { songid } =useParams();
    console.log(songid)
    return(
      <div className="flex flex-col ">
       DetailsHeader
      </div>
    )
  
}
  
export default SongDetails;