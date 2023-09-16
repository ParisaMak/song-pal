import MusicPlayer from './component/MusicPlayer/index'
import { Search, Discover, TopArtists, TopCharts ,AroundYou ,ArtistDetails, SongDetails, Searchbar, Sidebar ,TopPlay , } from "./pages"; 
import { Routes, Route } from "react-router-dom"; 
import { useSelector } from 'react-redux';

const App = ( ) => {
 const {activeSong} = useSelector((state) => state.player)

 return (
  <div className="h-full relative w-full flex flex-col">
    <div className="h-full w-full flex-1 flex flex-col-reverse bg-gradient-to-br from-black to-[#121286] lg:flex-row ">
      <Sidebar />
      <div className="relative flex w-full flex-col overflow-y-scroll hide-scrollbar px-8 pb-10">
        <Searchbar />
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/top-artists" element={<TopArtists />} />
          <Route path="/top-charts" element={<TopCharts />} />
          <Route path="/around-you" element={<AroundYou />} />
          <Route path="/artists/:id" element={<ArtistDetails />} />
          <Route path="/songs/:songid" element={<SongDetails />} />
          <Route path="/search/:searchTerm" element={<Search />} />
        </Routes>
      </div>
      <div className="top-0 ">
        <TopPlay />
      </div>
    </div>
    {activeSong?.title && (
      <div className="w-full fixed h-28 bottom-0 flex  bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl">
        <MusicPlayer />
      </div>
    )}
  </div>
);
};

export default App;
 