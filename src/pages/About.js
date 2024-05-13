import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SimplePopper from "./popup";

const Typewriter = ({ text }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          transition={{ duration: 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const About = () => {
  const text = "Your Most Trusted Health Partner";
  return (
    <section id="about">
      <div className="content">
        <div className="red-dash"></div>

        <h4>TOTAL HEALTH CARE SOLUTION</h4>
        <h1>
          <Typewriter text={text} />
        </h1>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </h4>
      </div>
      <div>
        <SimplePopper />
      </div>
      <div className="card-container">
        <div class="about-card">
          <div class="imageBox">
            <img src="https://picsum.photos/id/20/300/200" />
          </div>
          <div class="about-content">
            <h2>Card One</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              semper mi id blandit pellentesque. Integer facilisis diam nec
              tortor bibendum consequat.
            </p>
          </div>
        </div>
        <div class="about-card">
          <div class="imageBox">
            <img src="https://picsum.photos/id/237/300/200" />
          </div>
          <div class="about-content">
            <h2>Card Two</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              pretium massa non nulla dignissim, nec pharetra tellus auctor. Sed
              eu ipsum hendrerit, bibendum mauris.
            </p>
          </div>
        </div>
        <div class="about-card">
          <div class="imageBox">
            <img src="https://picsum.photos/id/16/300/200" />
          </div>
          <div class="about-content">
            <h2>Card Three</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              eget massa sit amet metus suscipit elementum ut at risus. Proin in
              neque facilisis, interdum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
