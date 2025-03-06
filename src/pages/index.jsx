import React from "react";
import Features from "./home/feature"
import AboutInnovator from "./home/Innovator"
import Products from "./home/products";
import About from "./home/about";
import Hero from "./home/hero";
import Contact from "./home/contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features/>
      <About />
      <AboutInnovator/>
      <Products/>
      <Contact/>
    </div>
  );
};

export default Home;