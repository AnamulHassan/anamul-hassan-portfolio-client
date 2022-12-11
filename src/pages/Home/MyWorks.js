import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { HiCode } from 'react-icons/hi';
import MyWorkCard from './MyWorkCard';
/*
main-bg- #0a1930


text-main-#ccd7f7
text-gray-#8891b0

text-high-light-#64feda


*/

const MyWorks = () => {
  const { data: projectsData = [], isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const res = await fetch('projects.json');
      const data = await res.json();
      return data;
    },
  });
  return (
    <section>
      {projectsData.length > 0 && (
        <section className="w-10/12 md:w-8/12 lg:w-10/12 mx-auto my-12 lg:my-24">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <h2 className=" w-full  text-2xl lg:text-5xl text-[#ccd7f7] font-bold tracking-tight inline-flex justify-start  items-center">
              <HiCode className="text-[#64feda] mr-1" /> Things that I've create
            </h2>
            <span className="w-full inline-block h-[2px] lg:h-[3px] bg-[#8891b0] bg-opacity-40 mt-1 lg:mt-3"></span>
          </div>
          <div className="mt-12 space-y-20">
            {projectsData.map((project, index) => (
              <MyWorkCard
                key={index}
                project={project}
                index={index}
                isLoading={isLoading}
              ></MyWorkCard>
            ))}
          </div>
        </section>
      )}
    </section>
  );
};

export default MyWorks;
