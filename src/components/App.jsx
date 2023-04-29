import React, { useState } from "react";
import Header from "./Header";
import Hero from './Hero'
import AboutUs from "./Aboutus";
import OurWork from "./Ourwork";
import Blog from "./Blog";
import Team from "./Team";
import Contact from "./ContactForm";
import Footer from "./Footer";
import Modal from "./Modal";

export const App = () => {
  const [modal, setModal] = useState(null)
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <OurWork setModal={setModal} />
      <Blog />
      <Team />
      <Contact />
      <Footer />
      {modal && <Modal src={modal.src} alt={modal.alt} unshowModal={() => setModal(null)}/>}
    </div>
  );
};
