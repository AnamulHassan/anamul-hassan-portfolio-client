import React from 'react';
import Hero from './Hero';
import MyWorks from './MyWorks';

const Home = () => {
  return (
    <section className="w-full mx-auto">
      <div>
        <Hero></Hero>
      </div>
      <div>
        <MyWorks></MyWorks>
      </div>
    </section>
  );
};

export default Home;
