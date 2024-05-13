import React from "react";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import "./App.css";
import Information from "./pages/Information";
import { motion, useScroll } from "framer-motion";

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
      {/* <Information /> */}
      <Contact />
    </div>
  );
}

export default App;
