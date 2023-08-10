import React from 'react';
import loader from '../asset/loader.svg'
const Loader = ({title}) => {
   return(
    <div className='w-full  flex justify-center items-cente flex-col'>
    <img src={loader} alt="loader" className='w-32 h-32 object-contain' />
    <h1 className="font-boldtext-2xl textwhite mt-2">{title || 'Loading..'}</h1>
</div>
   )
}
  
export default Loader;