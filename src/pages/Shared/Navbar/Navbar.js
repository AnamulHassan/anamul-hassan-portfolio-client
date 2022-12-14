import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiAperture } from 'react-icons/fi';
import Fade from 'react-reveal/Fade';
import {
  HiViewGridAdd,
  HiUserCircle,
  HiTable,
  HiChatAlt2,
  HiClipboard,
} from 'react-icons/hi';

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const menuItems = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'bg-[#64feda] bg-opacity-10 inline-flex justify-center items-center  leading-4 py-0  lg:py-2 px-1 lg:px-4 rounded-sm lg:rounded-lg duration-300'
            : 'inline-flex justify-center items-center leading-4 py-0  lg:py-2 px-1 lg:px-4'
        }
        to="/"
        onClick={() => setOpen(true)}
      >
        <span>
          <HiViewGridAdd className="text-[#64feda] mr-[2px] lg:mr-1" />
        </span>
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'bg-[#64feda] bg-opacity-10 inline-flex justify-center items-center  leading-4 py-0  lg:py-2 px-1 lg:px-4 rounded-sm lg:rounded-lg duration-300'
            : 'inline-flex justify-center items-center leading-4 py-0  lg:py-2 px-1 lg:px-4'
        }
        to="/about"
        onClick={() => setOpen(true)}
      >
        <span>
          <HiUserCircle className="text-[#64feda] mr-[2px] lg:mr-1" />
        </span>
        About
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'bg-[#64feda] bg-opacity-10 inline-flex justify-center items-center  leading-4 py-0  lg:py-2 px-1 lg:px-4 rounded-sm lg:rounded-lg duration-300'
            : 'inline-flex justify-center items-center leading-4 py-0  lg:py-2 px-1 lg:px-4'
        }
        to="/projects"
        onClick={() => setOpen(true)}
      >
        <span>
          <HiTable className="text-[#64feda] mr-[2px] lg:mr-1" />
        </span>
        Project
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'bg-[#64feda] bg-opacity-10 inline-flex justify-center items-center  leading-4 py-0  lg:py-2 px-1 lg:px-4 rounded-sm lg:rounded-lg duration-300'
            : 'inline-flex justify-center items-center leading-4 py-0  lg:py-2 px-1 lg:px-4'
        }
        to="/contact"
        onClick={() => setOpen(true)}
      >
        <span>
          <HiChatAlt2 className="text-[#64feda] mr-[2px] lg:mr-1" />
        </span>
        Contact
      </NavLink>
      <a
        href="anamul-hassan--rusume.pdf"
        target="_blank"
        className={`text-[#64feda] mr-[2px] border-y-[1px] lg:border-y-[2px] border-x-[0.5px] lg:border-x-[1px] border-[#64feda] hover:bg-[#64feda] hover:bg-opacity-10 duration-300  rounded-sm lg:rounded-lg leading-4 py-0 lg:py-[9px] px-1 inline-flex justify-center items-center lg:px-4 font-sans ${
          open ? '' : 'mt-4'
        }`}
      >
        Resume
        <HiClipboard className=" ml-1" />
      </a>
    </>
  );
  return (
    <header className="w-full font-mono font-normal">
      <nav className="w-11/12 mx-auto py-8  flex justify-between items-center">
        <Fade top>
          <div>
            <Link to="/" className="text-2xl font-semibold">
              Portfolio
            </Link>
          </div>
          <div className=" hidden lg:block space-x-2 font-semibold text-sm text-[#ccd7f7]">
            {menuItems}
          </div>
        </Fade>
        <div
          onClick={() => setOpen(!open)}
          className={`border-2 border-[#ccd7f7] p-1 rounded-full z-50 block lg:hidden cursor-pointer hover:animate-spin duration-200 ${
            open ? '' : 'animate-spin'
          }`}
        >
          <FiAperture className="  text-3xl" />
        </div>
        <div
          className={`${
            open ? 'scale-0 static' : ' scale-[3.5] lg:scale-0 '
          } duration-300 fixed z-10  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96  bg-[#0a1930] flex flex-col justify-center items-center  text-[8px] lg:hidden rounded-full`}
        >
          {menuItems}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
