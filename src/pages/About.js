import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SimplePopper from "./popup";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddCardIcon from "@mui/icons-material/AddCard";

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
        <h4 className="content-about-text">
          Discover a seamless way to book appointments with top-tier
          specialists, ensuring you receive the highest quality of care tailored
          to your needs. Say goodbye to the frustration of waiting for hours or
          dealing with cumbersome paperwork. With our app, you can effortlessly
          schedule appointments, access expert medical advice, and keep track of
          your health records securely. Streamline your healthcare journey and
          prioritize your well-being with ease and convenience at your
          fingertips.
        </h4>
      </div>
      <div>
        <SimplePopper />
      </div>
      <div className="card-container">
        <div className="about-card">
          <div className="imageBox">
            <img src="https://th.bing.com/th/id/OIP.g4GztI08bxhztFvAyvgIygAAAA?rs=1&pid=ImgDetMain" />
            <div className="imageBox-centered">
              <h2>Doctors near you</h2>
              <LocationOnIcon />
            </div>
          </div>
          <div className="about-content">
            <h4>
              Select from over 100 specialist doctors with diverse array of
              medical experts to meet your unique healthcare needs.
            </h4>
          </div>
        </div>
        <div className="about-card">
          <div className="imageBox">
            <img src="https://p0.pikist.com/photos/529/727/mobile-phone-mobile-smartphone-smart-phone-cell-phone-phone-technology-device-white.jpg" />
            <div className="imageBox-centered">
              <h2>Book Appointments</h2>
              <CalendarMonthIcon />
            </div>
          </div>
          <div className="about-content">
            <h4>
              Easily book hassle-free appointments with our streamlined booking
              process ensures that you can schedule appointments quickly and
              efficiently.
            </h4>
          </div>
        </div>
        <div className="about-card">
          <div className="imageBox">
            <img src="https://thumbs.dreamstime.com/b/medical-report-14709207.jpg" />
            <div className="imageBox-centered">
              <h2>Access your Health card</h2>
              <AddCardIcon />
            </div>
          </div>
          <div className="about-content">
            <h4>
              Our seamless system allows you to receive your comprehensive
              health report right after your appointment, ensuring you have all
              the information you need at your fingertips.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
