import React from 'react';
import loader from '../asset/loader.svg'
const Loader = () => {
   return(
    <div className='w-full h-full flex justify-center items-cente flex-col'>
    <img src={loader} alt="loader" className='w-32 h-32 object-contain' />
    <h1 className="font-boldtext-2xl textwhite mt-2">loading...</h1>
</div>
   )
}
  
export default Loader;