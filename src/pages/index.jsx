import React from "react";


import Services from "./home/services";
import Company from "./home/company";
import About from "./home/about";
import Hero from "./home/hero";
import Contact from "./home/contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Company />
      <About />
      <Services />
      <Contact/>
    </div>
  );
};

export default Home;