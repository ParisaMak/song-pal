import React  from 'react';
import { useEffect, useState } from 'react'; 
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
import axios from 'axios'; 



const App = ( ) => {

  const [ songs , setSongs ] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() =>{
 
    setIsLoading(true);
    axios.get(
      'https://shazam-core.p.rapidapi.com/v1/charts/world',
         { headers: {
          'X-RapidAPI-Key': '53c14de0e0msh35541b6d6f0feb1p166c7fjsn6fcc9ebaa163',
          'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
        }
        }
      )
    .then(res => setSongs(res),
                 setIsLoading(false),
                 setErrorMessage(false)
              )
    .catch((errorMessage) => {
                setErrorMessage(true);
                console.log(errorMessage);
                setIsLoading(false);
    });
  
  },[])

  return ( 
    <div className="relative flex "> 
      <Sidebar /> 
      <div className='flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]'> 
        <Searchbar /> 
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse"> 
      
          <div className="flex-1 h-fit pb-40"> 
            <Routes> 
              <Route path="/" element={<Discover 
                songs={songs} 
                isLoading={isLoading} 
                errorMessage={errorMessage} />} /> 
              <Route path="/top-artists" element={<TopArtists />} /> 
              <Route path="/top-charts" element={<TopCharts />} /> 
              <Route path="/around-you" element={<AroundYou />} /> 
              <Route path="/artists/:id" element={<ArtistDetails />} /> 
              <Route path="/songs/:songid" element={<SongDetails />} /> 
              <Route path="/search/:searchTerm" element={<Search />} /> 
            </Routes> 
          </div> 
          <div className="xl:sticky relative top-0 h-fit"> 
            <TopPlay songs={songs} /> 
          </div> 
        </div> 
      </div> 
    </div> 
  ); 
}; 
 
export default App;
