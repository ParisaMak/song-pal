import React  from 'react';
import Searchbar  from "./component/Searchbar";
import Sidebar  from "./component/Sidebar";
import Search from "./pages/Search";
import Discover  from "./pages/Discover";
import TopArtists  from "./pages/TopArtists";
import TopCharts  from "./pages/TopCharts";
import AroundYou   from "./pages/AroundYou";
import ArtistDetails from "./pages/ArtistsDetails";
import SongDetails from "./pages/SongDetails";
import TopPlay from "./component/TopPlay";
import { Routes ,Route }  from "react-router-dom";




const App = () => {

  return (
    <div className="w-full h-full ">
      <Sidebar />
       <div className='h-full flex  flex-col bg-gradient-to-br from-black to-[#121286]'>
        <Searchbar />
          <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex">
          <div className="flex-1 h-fit pb-40">
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
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
         </div>
       </div>
    </div>
  );
}

export default App;
