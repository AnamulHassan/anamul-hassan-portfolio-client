import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiAperture } from 'react-icons/fi';

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const menuItems = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'bg-[#64feda] bg-opacity-10  leading-4 py-0  lg:py-2 px-1 lg:px-4 rounded-sm lg:rounded-lg duration-300'
            : ''
        }
        to="/"
        onClick={() => setOpen(true)}
      >
        <span className="text-[#64feda] mr-[2px] lg:mr-1">01.</span>
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'bg-[#64feda] bg-opacity-10  leading-4 py-0  lg:py-2 px-1 lg:px-4 rounded-sm lg:rounded-lg duration-300'
            : ''
        }
        to="/about"
        onClick={() => setOpen(true)}
      >
        <span className="text-[#64feda] mr-[2px]  lg:mr-1">02.</span>
        About
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'bg-[#64feda] bg-opacity-10 leading-4 py-0  lg:py-2 px-1 lg:px-4 rounded-sm lg:rounded-lg duration-300'
            : ''
        }
        to="/projects"
        onClick={() => setOpen(true)}
      >
        <span className="text-[#64feda] mr-[2px] lg:mr-1">03.</span>
        Project
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'bg-[#64feda] bg-opacity-10 leading-4 py-0  lg:py-2 px-1 lg:px-4 rounded-sm lg:rounded-lg duration-300'
            : ''
        }
        to="/contact"
        onClick={() => setOpen(true)}
      >
        <span className="text-[#64feda] mr-[2px] lg:mr-1">04.</span>
        Contact
      </NavLink>
      <a
        href="https://drive.google.com/file/d/19CnAXq6ew1y_0Ci7OnD9HEkvfIT8sWAL/view?usp=sharing"
        target="_blank"
        className={`text-[#64feda] mr-[2px] border-y-[1px] lg:border-y-[2px] border-x-[0.5px] lg:border-x-[1px] border-[#64feda] hover:bg-[#64feda] hover:bg-opacity-10 duration-300  rounded-sm lg:rounded-lg leading-4 py-0 lg:py-[9px] px-1 lg:px-4 font-sans ${
          open ? '' : 'mt-4'
        }`}
      >
        Resume
      </a>
    </>
  );
  return (
    <header className="w-full font-mono font-normal overflow-x-hidden">
      <nav className="w-11/12 mx-auto h-28 p  flex justify-between items-center">
        <div>
          <Link to="/" className="text-2xl font-semibold">
            Portfolio
          </Link>
        </div>
        <div className=" hidden lg:block space-x-6 font-semibold text-md text-[#ccd7f7]">
          {menuItems}
        </div>
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
          } duration-300 fixed z-10  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96  bg-[#0a1930] flex flex-col justify-center items-center overflow-hidden  text-[8px] lg:hidden rounded-full`}
        >
          {menuItems}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
