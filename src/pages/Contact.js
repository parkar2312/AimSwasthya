import React from "react";
import BusinessIcon from "@mui/icons-material/Business";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import logoName from "../media/LogoNamev2.png";
import Logo from "../media/Logov2.PNG";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import ContactForm from "./userForm";
import Hearbeat from "./heartbeat";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-forms">
        <div className="contact-logo">
          {/* <Hearbeat/> */}
          <img className="logo" src={Logo} alt="AimSwasthya" />
          <img className="logoname" src={logoName} alt="AimSwasthya" />
          <Hearbeat />
        </div>
        <div className="contact-about">
          A easy solution app for patients to connect with specialized doctors
          around you.
        </div>
      </div>
      <div className="new-container">
        <span className="new-big-circle"></span>
        <img src="img/shape.png" className="new-square" alt="" />
        <div className="new-form">
          <div className="new-contact-info">
            <h3 className="new-title">Get connected</h3>
            <h4 className="new-text">
              Don't hesitate to reach out to us to discover more about who we
              are and what we do. We welcome your inquiries.
            </h4>

            <div className="new-info">
              <div className="new-information">
                <BusinessIcon />
                <h4 style={{ marginLeft: ".2rem" }}>
                  Aimswasthya Team - Delhi, India
                </h4>
              </div>
              <div className="new-information">
                <EmailIcon />
                <h4 style={{ marginLeft: ".2rem" }}>
                care@aimswasthya.com
                </h4>
              </div>
              <div className="new-information">
                <PhoneIcon />
                <h4 style={{ marginLeft: ".2rem" }}>+91 9599443532</h4>
              </div>
            </div>

            <div className="new-social-media">
              <p>Connect with us :</p>
              
              <div className="new-icons">
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/company/aimswasthya/">
                      <div className="fab">
                        <LinkedInIcon />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="fab">
                        <XIcon />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="fab">
                        <InstagramIcon />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://infinilex.in/">
                      <div className="fab">
                        <OpenInBrowserIcon />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="new-contact-form">
            <span className="new-circle one"></span>
            <span className="new-circle two"></span>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
