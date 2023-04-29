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
  const heroRef = React.createRef(null);
	const aboutUsRef = React.createRef(null);
  const workRef = React.createRef(null);
  const blogRef = React.createRef(null);
  const contactRef = React.createRef(null);
  const onScroll = section => window.scrollTo({top: section.current.offsetTop - 100, behavior: 'smooth'});
  return (
    <div>
      <Header
        goToHero={() => onScroll(heroRef)}
        goToAbout={() => onScroll(aboutUsRef)}
        goToWork={() => onScroll(workRef)}
        goToBlog={() => onScroll(blogRef)}
        goToContact={() => onScroll(contactRef)} />
      <Hero refTo={heroRef} />
      <AboutUs refTo={aboutUsRef}/>
      <OurWork refTo={workRef} setModal={setModal} />
      <Blog refTo={blogRef} />
      <Team />
      <Contact refTo={contactRef} />
      <Footer />
      {modal && <Modal src={modal.src} alt={modal.alt} unshowModal={() => setModal(null)}/>}
    </div>
  );
};
