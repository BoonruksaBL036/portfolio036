import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import ProjectsBox from "./components/ProjectsBox";
import AboutBox from "./components/AboutBox";
import FeaturedBox from "./components/FeaturedBox";
import ContactBox from "./components/ContactBox";
import Footer from "./components/Footer";
import Typed from "typed.js";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    /**Type Effect */
    const typingEffect = new Typed(".typedText", {
      strings: ["Boonruksa", "Winanon", "BLLovely"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    });
    return () => {
      typingEffect.destroy();
    };
  }, []);
  return (
    <>
      <div className="App">
        <Header />
        <main className="wrapper">
          <FeaturedBox />
          <AboutBox />
          <ProjectsBox />
          <ContactBox />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
