import { HiOutlineHashtag, HiOutlineHome, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';
import logo from "../asset/logo.svg"
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri'
import { Fragment } from 'react';
import { useState } from 'react';


const Sidebar = () => {

const [ mobileMenuOpen , setMobileMenuOpen ] =useState(false)
  
  const linksTo = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
  ];

  const handleClick = () => {
 
  }

   return(
   <Fragment>

    <div className="hidden md:flex bg-[#191624]  flex-col w-60 py-4 px-12  text-white">

        <img  src={logo} alt="logo" className="scale-50 stroke-white" />

        <ul >
          {linksTo.map((link) =>(
            <li key={link.name}>
              <NavLink 
              to={link.to}
              className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gry-400 hover:text-cyan-400"
              onClick={handleClick}
              >{link.icon}
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
    </div>

    <div className='absolute md:hideen block top-6 right-3'>
        { mobileMenuOpen ? <RiCloseLine className='w-6 h-6 text-white mr-2' /> : <HiOutlineHashtag className='w-6 h-6 text-white mr-2'/> }
    </div>

       <div className={`absolute top-5 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>

        <img  src={logo} alt="logo" className="scale-50 stroke-white" />

        <ul >
          {linksTo.map((link) =>(
            <li key={link.name}>
              <NavLink 
              to={link.to}
              className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gry-400 hover:text-cyan-400"
              handleClick={()=> setMobileMenuOpen(false)}
              >{link.name}
              {link.icon}
              </NavLink>
            </li>
          ))}
        </ul>
    </div>

 </Fragment>
   )
};

export default Sidebar;
