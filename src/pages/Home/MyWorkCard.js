import React from 'react';
import {
  FaExternalLinkSquareAlt,
  FaGithubSquare,
  FaExpand,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LoaderPrimary from '../../components/LoaderPrimary/LoaderPrimary';
import Fade from 'react-reveal/Fade';

const MyWorkCard = ({ project, index, isLoading }) => {
  console.log(project);
  const {
    projectImg01,
    projectTitle,
    projectDescription,
    technologies,
    liveLink,
    githubClientRepo,
    projectId,
  } = project;
  if (isLoading) {
    return <LoaderPrimary></LoaderPrimary>;
  }
  return (
    <section>
      <Fade bottom>
        <div
          className={`w-full  justify-center flex relative flex-col lg:flex-row ${
            +index % 2 === 0 ? '' : 'lg:flex-row-reverse'
          }`}
        >
          <div className="w-full lg:w-3/5  relative overflow-hidden">
            <img
              className="h-96 w-full rounded-md"
              src={projectImg01}
              alt={projectTitle}
            />
            <span className="bg-[#0a1930] absolute block w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-opacity-70 hover:bg-opacity-0 duration-300 cursor-pointer scale-105"></span>
          </div>
          <div
            className={`w-full lg:w-2/5 flex flex-col ${
              +index % 2 === 0
                ? 'justify-start items-end text-end'
                : 'justify-start items-start text-start'
            }`}
          >
            <h4 className="text-[#64feda] font-mono mt-2 lg:mt-0 text-md  lg:text-xl font-semibold">
              Featured Project
            </h4>
            <h2 className="text-xl lg:text-3xl font-bold text-[#ccd7f7]">
              {projectTitle ? projectTitle : 'Title not found'}
            </h2>
            <p className="bg-transparent lg:bg-[#112240] static lg:absolute w-11/12 lg:w-3/5 py-2 lg:py-8 px-0 lg:px-10 rounded-md text-sm lg:text-xl font-semibold top-1/2 lg:-translate-y-1/2 select-none">
              {projectDescription
                ? projectDescription
                : 'Description not found'}
            </p>
            <div className="static lg:absolute lg:bottom-[15%] my-2 lg:my-0 text-sm lg:text-xl">
              {technologies &&
                technologies
                  .split('*')
                  .slice(0, 5)
                  .map((tech, i) => (
                    <span key={i} className="font-mono ">
                      {tech}
                    </span>
                  ))}
            </div>
            <div className="static lg:absolute bottom-0 flex space-x-4  lg:space-x-8">
              <a
                rel="noreferrer"
                href={liveLink}
                target="_blank"
                title="github"
                className=""
              >
                <FaGithubSquare className="text-[#ccd7f7] text-xl  lg:text-3xl" />
              </a>
              <a
                rel="noreferrer"
                href={githubClientRepo}
                target="_blank"
                title="live"
                className=""
              >
                <FaExternalLinkSquareAlt className="text-[#ccd7f7] text-xl lg:text-3xl" />
              </a>
              <Link to={`project-details/${projectId}`} title="details">
                <FaExpand className="text-[#ccd7f7] text-xl lg:text-3xl" />
              </Link>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default MyWorkCard;
