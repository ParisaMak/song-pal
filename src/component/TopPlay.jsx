
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';

const TopPlay = () => {
  const divRef = useRef(null)

  return(
<div ref={divRef}></div>
  )
};
  
export default TopPlay;