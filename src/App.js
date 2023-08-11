import React  from 'react';
import Searchbar from "./component/Searchbar"; 
import Sidebar from "./component/Sidebar"; 
import Search from "./pages/Search"; 
import Discover from "./pages/Discover"; 
import TopArtists from "./pages/TopArtists"; 
import TopCharts from "./pages/TopCharts"; 
import AroundYou from "./pages/AroundYou"; 
import ArtistDetails from "./pages/ArtistsDetails"; 
import SongDetails from "./pages/SongDetails"; 
import TopPlay from "./component/TopPlay"; 
import { Routes, Route } from "react-router-dom"; 
import { useSelector } from 'react-redux';
import  MusicPlayer  from "./component/MusicPlayer/index"

const App = ( ) => {
 const {activeSong} = useSelector((state) => state.player)
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     setErrorMessage(false);
  
  //     try {
  //       const response = await fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', {
  //         headers: {
  //           'X-RapidAPI-Key': '53c14de0e0msh35541b6d6f0feb1p166c7fjsn6fcc9ebaa163',
  //           'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
  //         },
  //         method: 'GET',
  //       });
  //       const data = await response.json();
  //       console.log(data);
  //       setSongs(data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       setErrorMessage(true);
  //       console.log(error);
  //       setIsLoading(false);
  //     }
  //   };
  
  //   fetchData();
  // }, []);


  // useEffect(() => {
  //   const urls = [
  //     'https://shazam-core.p.rapidapi.com/v1/charts/world',
  //     'https://shazam-core.p.rapidapi.com/v1/tracks/details?track_id=667312288']

  //     const headers = {
  //       'X-RapidAPI-Key': '53c14de0e0msh35541b6d6f0feb1p166c7fjsn6fcc9ebaa163',
  //       'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
  //     };
      
  //     const fetchData = async () => {
  //       try {
  //         const responses = await Promise.all(urls.map(url => fetch(url, { method: 'GET', headers })));
  //         const results = await Promise.all(responses.map(resp => resp.json()));
  //         console.log(results);
  //         setSongs(results[0])
  //         setIsLoading(false);
       
  //       } catch (error) {
  //         console.error('Error:', error);
  //         setErrorMessage(true);
  //         setIsLoading(false);
  //       }
  //     };
    
  //     fetchData();
   
    
  // }, []);

  return ( 
    <div className="relative flex "> 
      <Sidebar /> 
      <div className='flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]'> 
        <Searchbar /> 
        <div className="px-6 h-[calc(100vh)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse"> 
      
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

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}

    </div> 
  ); 
}; 
 
export default App;
