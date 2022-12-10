import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div
      data-aos-duration="500"
      data-aos-delay="50"
      data-aos-easing="ease-in-out"
      data-aos="zoom-out-right"
      className="w-10/12 md:w-8/12 lg:w-10/12 mx-auto select-none"
    >
      <h4
        data-aos="fade-right"
        className=" font-mono text-[#64feda] text-lg font-semibold tracking-wider"
      >
        Hi, my name is
      </h4>
      <h2
        data-aos="fade-left"
        className="text-[#ccd7f7] text-4xl lg:text-6xl font-bold tracking-tight my-2 lg:selection:my-4"
      >
        Anamul Hassan
      </h2>
      <h2
        data-aos="fade-right"
        className="text-[#8891b0] text-4xl lg:text-6xl font-bold tracking-tight"
      >
        I build things for the web
      </h2>
      <p
        data-aos="fade-left"
        className="font-semibold mt-4 lg:mt-6 leading-8 text-md lg:text-lg"
      >
        I'm a MERN Stack Web Developer building the Front-end of Websites and
        Web Applications that leads to the success of the overall product. Check
        out some of my work in the projects section. I also like sharing content
        related to the stuff that I have learned over the years in Web
        Development so it can help other people in the Dev Community. Feel free
        to connect or follow me on my Linkedin where I post useful content
        related to Web Development and Programming.
      </p>
      <Link className="text-[#64feda] border-y-[2px] border-x-[1px] border-[#64feda] hover:bg-[#64feda] hover:bg-opacity-10 duration-300  rounded-lg py-2 px-4  font-sans font-semibold text-xl mt-4 inline-block">
        Check out my projects
      </Link>
    </div>
  );
};

export default Hero;
