import { useState } from "react";
import { useNavigate } from "react-router";
import{FiSearch} from 'react-icons/fi'

const Searchbar = () => {
const navigate = useNavigate();
const [ searchTerm,setSearchTerm ]=useState("");
const handleSubmit = (e) =>{
  e.preventDefault();
  navigate(`/search/${searchTerm}`)
}

return(
    <form 
    autoComplete="off"
    onSubmit={handleSubmit}
    className="mt-4 relative h-[40px]  text-gray-400 focus-within:text-gray-600 hover:bg-gray-800 rounded-lg">
      <div className="absolute h-full flex flex-row justify-center items-center w-full">
         <FiSearch className="w-5 h-5 ml-2" />
         <input 
         type="search"
         name="search-field" 
         autoComplete="off"
         id="search-field" 
         placeholder="search "
         value={searchTerm}
         className="h-full flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white p-1"
         onChange={(e)=> setSearchTerm(e.target.value)}
         />
      </div>
    </form>
)};
  
  export default Searchbar;