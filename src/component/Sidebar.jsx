import { HiOutlineHashtag, HiOutlineMenu, HiOutlineHome, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';
import logo from '../asset/logo.svg';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linksTo = [
    { name: 'Discover', to: '/', icon: HiOutlineHome },
    { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
    { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
    { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
  ];

  const handleClick = () => {
    setMobileMenuOpen((mobileMenuOpen) => !mobileMenuOpen);
  };

  return (
    <>
      <div className=" hidden lg:flex bg-[#191624] flex-col w-[300px] py-4 px-4 text-white " >
        <img src={logo} alt="logo" className="scale-50 stroke-white" />
        <ul>
          {linksTo.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.to}
                className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gry-400 hover:text-cyan-400"
              >
                <link.icon className="w-6 h-6 mr-2" />
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute lg:hidden block top-4 right-6 z-40">
        <button onClick={handleClick}>
          {mobileMenuOpen ? (
            <AiOutlineClose className="w-6 h-6 text-white mr-2 cursor-pointer lg:hidden" />
          ) : (
            <HiOutlineMenu className=" w-6 h-6 text-white mr-2 cursor-pointer lg:hidden" />
          )}
        </button>
      </div>

      <div
        className={`absolute top-0 h-screen w-1/3 bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? 'left-0' : '-left-full'
        }`}
      >
        <img src={logo} alt="logo" className="scale-50 stroke-white" />
        <ul>
          {linksTo.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.to}
                className="flex flex-row justify-start items-start my-8 text-sm font-medium text-gry-400 hover:text-cyan-400"
              >
                <link.icon className="w-6 h-6 mr-2" />
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;