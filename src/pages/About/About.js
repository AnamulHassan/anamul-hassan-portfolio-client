import React from 'react';
import { FaCaretSquareRight } from 'react-icons/fa';
import { HiCode } from 'react-icons/hi';
import imgProfile from '../../asset/images/anamul-hassan-img.jpg';
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <section className="w-10/12 md:w-8/12 lg:w-10/12 mx-auto my-12 lg:my-24">
      <Fade top>
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <h2 className=" w-full  text-2xl lg:text-5xl text-[#ccd7f7] font-bold tracking-tight inline-flex justify-start  items-center">
            <HiCode className="text-[#64feda] mr-1" /> About me
          </h2>
          <span className="w-full inline-block h-[2px] lg:h-[3px] bg-[#8891b0] bg-opacity-40 mt-1 lg:mt-3"></span>
        </div>
      </Fade>
      <div className="flex mt-12 space-x-6">
        <div className="w-full lg:w-1/2 py-6">
          <Fade left>
            <p className="text-[#ccd7f7] text-lg font-semibold">
              I'm a MERN Stack Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product. Check out some of my work in the projects section. I also
              like sharing content related to the stuff that I have learned over
              the years in Web Development so it can help other people in the
              Dev Community. Feel free to connect or follow me on my Linkedin
              where I post useful content related to Web Development and
              Programming. I'm a MERN Stack Web Developer building the Front-end
              of Websites and Web Applications that leads to the success of the
              overall product. Check out some of my work in the projects
              section. I also like sharing content related to the stuff that I
              have learned over the years in Web Development so it can help
              other people in the Dev Community. Feel free to connect or follow
              me on my Linkedin where I post useful content related to Web
              Development and Programming.
            </p>
          </Fade>
          <div className="flex space-x-6">
            <Fade bottom>
              <ul className="font-mono text-lg font-semibold flex-col mt-8">
                <li className="flex items-center justify-start">
                  <FaCaretSquareRight className="text-[#64feda] mr-2" />{' '}
                  JavaScript &#40;ES6+&#41;
                </li>
                <li className="flex items-center justify-start">
                  <FaCaretSquareRight className="text-[#64feda] mr-2" /> React
                  Js
                </li>
                <li className="flex items-center justify-start">
                  <FaCaretSquareRight className="text-[#64feda] mr-2" /> CSS
                </li>
                <li className="flex items-center justify-start">
                  <FaCaretSquareRight className="text-[#64feda] mr-2" />{' '}
                  Tailwind CSS
                </li>
              </ul>
              <ul className="font-mono text-lg font-semibold flex-col mt-8">
                <li className="flex items-center justify-start">
                  <FaCaretSquareRight className="text-[#64feda] mr-2" /> Node Js
                </li>
                <li className="flex items-center justify-start">
                  {' '}
                  <FaCaretSquareRight className="text-[#64feda] mr-2" />
                  Express Js
                </li>
                <li className="flex items-center justify-start">
                  <FaCaretSquareRight className="text-[#64feda] mr-2" />{' '}
                  Firebase
                </li>
                <li className="flex items-center justify-start">
                  <FaCaretSquareRight className="text-[#64feda] mr-2" /> Mongodb
                  CSS
                </li>
              </ul>
            </Fade>
          </div>
        </div>
        <Fade right>
          <div className="w-full lg:w-1/2 relative overflow-hidden rounded-lg border-2 border-[#64feda] hover:border-[#0a1930] p-8 hover:p-0  duration-300">
            <div>
              <img className="rounded-lg" src={imgProfile} alt="" />
              <div className=" absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-[#64feda] scale-110 select-none bg-opacity-40 hover:bg-opacity-0 duration-300 rounded-lg"></div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default About;
