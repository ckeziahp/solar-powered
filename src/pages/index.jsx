import React from "react";
import Features from "./home/features"
import AboutInnovator from "./home/aboutInnovator"
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
      <Products />
      <Contact/>
    </div>
  );
};

export default Home;