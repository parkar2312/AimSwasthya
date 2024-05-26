import React, { useEffect, useState } from "react";
import services2 from "../media/services1.png";
import services1 from "../media/services2.png";
import services3 from "../media/services3.png";
import services4 from "../media/services4.png";
import { motion } from "framer-motion";

const Services = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(window.innerWidth > 1200 ? 1200 : window.innerWidth);
    };

    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
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
          initial={{ x: -containerWidth }}
          animate={{ x: normalizedXLeft }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          style={{ transformOrigin: "center" }}
        >
          <div className="services_container">
            <div
              className="servicesleft"
              style={{
                background: "white",
                borderRadius: "100% 0% 100% 0% / 100% 0% 0% 0%",
              }}
            >
              <img src={services1} alt="Image 1" />
            </div>
            <div
              className="servicesright"
              style={{
                background: "white",
                borderRadius: "0% 0% 100% 0% / 0% 0% 100% 0%",
              }}
            >
             
              <h3>
              <h2>Choose your symptoms</h2>
                Navigate through a myriad of symptoms meticulously curated
                within our app, encompassing a spectrum of health concerns.
                Choose from the most sought-after symptoms or utilize the
                dynamic search bar to pinpoint your unique symptoms.
                 {/* Once
                identified, explore a comprehensive directory of specialized
                doctors adept at addressing your specific health needs. Whether
                it's a common ailment or a rare condition, our platform empowers
                you to connect with the right healthcare professionals swiftly
                and efficiently. */}
              </h3>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: containerWidth }} // Initial position off-screen to the right
          animate={{ x: normalizedXRight }} // Animate based on scroll position
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          style={{ transformOrigin: "center" }}
        >
          <div className="services_container">
            <div
              className="servicesleft"
              style={{
                background: "white",
                borderRadius: "100% 0% 100% 0% / 100% 0% 0% 0%",
              }}
            >
              <h3>
                <h2>Book an appointment</h2>
                After confirming your appointment, receive instant confirmation
                along with any pertinent details, such as location and
                preparation instructions, directly to your device.
                 {/* Additionally,
                enjoy the convenience of setting reminders to ensure you never
                miss your scheduled consultation. With our intuitive booking
                system, prioritize your health effortlessly, leaving you with
                peace of mind as you embark on your journey towards wellness. */}
              </h3>
            </div>
            <div
              className="servicesright"
              style={{
                background: "white",
                borderRadius: "0% 100% 100% 0% / 0% 100% 0% 0%",
              }}
            >
              <img src={services2} alt="Image 2" />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -containerWidth }} // Initial position off-screen to the left
          animate={{ x: normalizedXLeft }} // Animate based on scroll position
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          style={{ transformOrigin: "center" }}
        >
          <div className="services_container">
            <div
              className="servicesleft"
              style={{
                background: "white",
                borderRadius: "0% 0% 0% 100% / 0% 0% 0% 100%",
              }}
            >
              <img src={services3} alt="Image 3" />
            </div>
            <div
              className="servicesright"
              style={{
                background: "white",
                borderRadius: "0% 0% 100% 0% / 0% 0% 100% 0%",
              }}
            >
              <h3>
                <h2>Upcoming appointments</h2>
                Our app provides a user-friendly interface displaying your
                upcoming appointments, allowing you to effortlessly track the
                date, time, and designated doctor for each scheduled session.
                {/* Stay effortlessly organized and informed by receiving timely
                reminders, ensuring you never miss a vital consultation. With
                this intuitive feature, managing your healthcare commitments
                becomes a seamless part of your routine, empowering you to
                prioritize your well-being with ease and efficiency. */}
              </h3>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: containerWidth }} // Initial position off-screen to the right
          animate={{ x: normalizedXRight }} // Animate based on scroll position
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          style={{ transformOrigin: "center" }}
        >
          <div className="services_container">
            <div
              className="servicesleft"
              style={{
                background: "white",
                borderRadius: "100% 0% 100% 0% / 100% 0% 0% 0%",
              }}
            >
              <h3>
                <h2>Medical records</h2>
                Patients have exclusive access to their securely
                stored medical records, granting them the freedom to review
                their health history with utmost ease and convenience. Whether
                for personal reference or to share with healthcare providers.
                {/* ,
                our robust security measures ensure that sensitive information
                remains protected at all times. Seamlessly navigate through your
                medical records whenever the need arises, empowering you to make
                informed decisions about your health with confidence and peace
                of mind. */}
              </h3>
            </div>
            <div
              className="servicesright"
              style={{
                background: "white",
                borderRadius: "0% 0% 100% 0% / 0% 0% 100% 0%",
              }}
            >
              <img src={services4} alt="Image 2" />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="services_pages">
        <div className="services_container">
          <div
            className="servicesleft"
            style={{
              background: "white",
              borderRadius: "100% 0% 100% 0% / 100% 0% 0% 0%",
            }}
          >
            <img src={services1} alt="Image 1" />
          </div>
          <div
            className="servicesright"
            style={{
              background: "white",
              borderRadius: "0% 0% 100% 0% / 0% 0% 100% 0%",
            }}
          >
            
            <h3>
            <h2>Choose your symptoms</h2>
              Navigate through a myriad of symptoms meticulously curated within
              our app, encompassing a spectrum of health concerns. Choose from
              the most sought-after symptoms or utilize the dynamic search bar
              to pinpoint your unique symptoms. 
              {/* Once identified, explore a
              comprehensive directory of specialized doctors adept at addressing
              your specific health needs. Whether it's a common ailment or a
              rare condition, our platform empowers you to connect with the
              right healthcare professionals swiftly and efficiently. */}
            </h3>
          </div>
        </div>

        <div className="services_container">
          <div
            className="servicesleft"
            style={{
              background: "white",
              borderRadius: "100% 0% 100% 0% / 100% 0% 0% 0%",
            }}
          >
            <h3>
              <h2>Book an appointment</h2>
              After confirming your appointment, receive instant confirmation
              along with any pertinent details, such as location and preparation
              instructions, directly to your device. 
              {/* Additionally, enjoy the
              convenience of setting reminders to ensure you never miss your
              scheduled consultation. With our intuitive booking system,
              prioritize your health effortlessly, leaving you with peace of
              mind as you embark on your journey towards wellness. */}
            </h3>
          </div>
          <div
            className="servicesright"
            style={{
              background: "white",
              borderRadius: "0% 100% 100% 0% / 0% 100% 0% 0%",
            }}
          >
            <img src={services2} alt="Image 2" />
          </div>
        </div>

        <div className="services_container">
          <div
            className="servicesleft"
            style={{
              background: "white",
              borderRadius: "0% 0% 0% 100% / 0% 0% 0% 100%",
            }}
          >
            <img src={services3} alt="Image 3" />
          </div>
          <div
            className="servicesright"
            style={{
              background: "white",
              borderRadius: "0% 0% 100% 0% / 0% 0% 100% 0%",
            }}
          >
            <h3>
              <h2>Upcoming appointments</h2>
              Our app provides a user-friendly interface displaying your
              upcoming appointments, allowing you to effortlessly track the
              date, time, and designated doctor for each scheduled session. 
              {/* Stay
              effortlessly organized and informed by receiving timely reminders,
              ensuring you never miss a vital consultation. With this intuitive
              feature, managing your healthcare commitments becomes a seamless
              part of your routine, empowering you to prioritize your well-being
              with ease and efficiency. */}
            </h3>
          </div>
        </div>

        <div className="services_container">
          <div
            className="servicesleft"
            style={{
              background: "white",
              borderRadius: "100% 0% 100% 0% / 100% 0% 0% 0%",
            }}
          >
            <h3>
              <h2>Medical records</h2>
              Within our app, patients have exclusive access to their securely
              stored medical records, granting them the freedom to review their
              health history with utmost ease and convenience. Whether for
              personal reference or to share with healthcare provider.
               {/* our
              robust security measures ensure that sensitive information remains
              protected at all times. Seamlessly navigate through your medical
              records whenever the need arises, empowering you to make informed
              decisions about your health with confidence and peace of mind. */}
            </h3>
          </div>
          <div
            className="servicesright"
            style={{
              background: "white",
              borderRadius: "0% 0% 100% 0% / 0% 0% 100% 0%",
            }}
          >
            <img src={services4} alt="Image 2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
