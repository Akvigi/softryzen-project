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
import data from "./Ourwork/data";

export const App = () => {
  const [modal, setModal] = useState(null)

  const heroRef = React.createRef(null);
	const aboutUsRef = React.createRef(null);
  const workRef = React.createRef(null);
  const blogRef = React.createRef(null);
  const contactRef = React.createRef(null);

  const onScroll = section => window.scrollTo({ top: section.current.offsetTop - 100, behavior: 'smooth' });

  let prevID = modal ? modal.index - 1 : null
  let nextID = modal ? modal.index + 1 : null
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
      {modal && <Modal
        jsrc={modal.jsrc}
        jsrcx2={modal.jsrcx2}
        wsrc={modal.wsrc}
        wsrcx2={modal.wsrcx2}
        alt={modal.alt}
        indexData={modal.index}
        getPrevios={() => setModal({...data[modal.index - 1], index: prevID})}
        getNext={() => setModal({ ...data[modal.index + 1], index: nextID })}
        unshowModal={() => setModal(null)} />}
    </div>
  );
};
