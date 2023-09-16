import React from 'react';
import loader from '../asset/loader.svg'

const Loader = ({title}) => {

   return(
    <div className='w-full h-full flex justify-center flex-col'>
    <img src={loader} alt="loader" className='w-32 h-32 object-contain' />
    <h1 className="font-bold  mt-2 text-white">{title || 'Loading..'}</h1>
</div>
   )
}
  
export default Loader;