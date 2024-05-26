import React from "react";
import logoName from "../media/LogoNamev2.png";
import Logo from "../media/Logov2.PNG";
import { motion } from "framer-motion";
import Hearbeat from "./heartbeat";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__brand">
        {/* <img className="logo" src={Logo} alt="AimSwasthya" /> */}
        <img className="logoname" src={logoName} alt="AimSwasthya" />
        <Hearbeat/>
      </div>
      <ul className="navbar__links">
        <li>
          <a onClick={() => scrollToSection("about")}>
            <motion.div
              whileHover={{ scale: 1.05, color: "#B8D5DD" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <b>About</b>
            </motion.div>
          </a>
        </li>
        <li>
          <a onClick={() => scrollToSection("services")}>
            <motion.div
              whileHover={{ scale: 1.05, color: "#B8D5DD" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <b>Services</b>
            </motion.div>
          </a>
        </li>
        <li>
          <a onClick={() => scrollToSection("contact")}>
            <motion.div
              whileHover={{ scale: 1.05, color: "#B8D5DD" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <b>Contact Us</b>
            </motion.div>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
