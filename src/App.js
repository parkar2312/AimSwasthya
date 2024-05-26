import React from "react";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import "./App.css";
import { motion, useScroll } from "framer-motion";
import Carousel from "./pages/carousel";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="App">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <About />
      <Services />
      {/* <Carousel>
    <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
    <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
    <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
</Carousel> */}
      <Contact />
    </div>
  );
}

export default App;
