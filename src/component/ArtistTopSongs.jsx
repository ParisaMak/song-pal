import SongBarArtist from './songBarArtist'

const ArtistTopSongs = ({ data, isPlaying , activeSong}) => {

  return(
    <div className='flex flex-col'>
      <h1 className='font-bold text-3xl text-white'>Top Songs:</h1>
      <div className='mt-6 w-full flex flex-col '>
       {data?.map((song,i) =>{
        
        return <SongBarArtist
            key = {song.id}
            song = {song}
            i={i}
            isPlaying ={isPlaying}
            activeSong = {activeSong}
        />
       })}

      </div>
    </div>
  )

}
  
export default ArtistTopSongs;