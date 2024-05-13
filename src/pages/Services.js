import React, { useEffect, useState } from "react";
import services1 from "../media/services1.PNG";
import services2 from "../media/services2.jpeg";
import services3 from "../media/services3.jpg";
import services4 from "../media/services4.webp";
import { motion } from "framer-motion";

const Services = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerWidth = 1100;

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const maxContainerX = window.innerWidth - containerWidth;
  const normalizedXLeft = (scrollPosition / maxScroll) * maxContainerX;
  const normalizedXRight = maxContainerX - normalizedXLeft;

  return (
    <section id="services">
      <div className="services_page">
        <motion.div
          initial={{ x: -containerWidth }} // Initial position off-screen to the left
          animate={{ x: normalizedXLeft }} // Animate based on scroll position
          transition={{ duration: 0.3 }} // Animation duration
        >
          <div className="services_container">
            <div className="servicesleft">
              <img src={services1} alt="Image 1" />
            </div>
            <div className="servicesright">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: containerWidth }} // Initial position off-screen to the right
          animate={{ x: normalizedXRight }} // Animate based on scroll position
          transition={{ duration: 0.3 }} // Animation duration
        >
          <div className="services_container">
            <div className="servicesleft">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="servicesright">
              <img src={services3} alt="Image 2" />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -containerWidth }} // Initial position off-screen to the left
          animate={{ x: normalizedXLeft }} // Animate based on scroll position
          transition={{ duration: 0.3 }} // Animation duration
        >
          <div className="services_container">
            <div className="servicesleft">
              <img src={services2} alt="Image 3" />
            </div>
            <div className="servicesright">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: containerWidth }} // Initial position off-screen to the right
          animate={{ x: normalizedXRight }} // Animate based on scroll position
          transition={{ duration: 0.3 }} // Animation duration
        >
          <div className="services_container">
            <div className="servicesleft">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="servicesright">
              <img src={services3} alt="Image 2" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
