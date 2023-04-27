import React from "react";
import Header from "./Header";
import Hero from './Hero'
import AboutUs from "./Aboutus";
import OurWork from "./Ourwork";
import Blog from "./Blog";
import Team from "./Team";
import Contact from "./ContactForm";
import Footer from "./Footer";

export const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <OurWork />
      <Blog />
      <Team />
      <Contact />
      <Footer/>
    </div>
  );
};
