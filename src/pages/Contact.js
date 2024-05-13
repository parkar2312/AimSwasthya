import React from "react";
import BusinessIcon from "@mui/icons-material/Business";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import logoName from "../media/LogoNamev2.png";
import Logo from "../media/Logov2.PNG";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactForm from "./userForm";

const Contact = () => {
  return (
    <section id="contact">
      <div class="contact-container">
        <div class="contact-info">
          {/* <h2 class="contact-title">Contact Us</h2>
    <p class="contact-text">We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.</p> */}

          <div class="flex-container">
            <div class="contact-forms">
              <div className="contact-logo">
                <img className="logo" src={Logo} alt="AimSwasthya" />
                <img className="logoname" src={logoName} alt="AimSwasthya" />
              </div>
              <div className="contact-about">
                A easy solution app for patients to connect with specialized
                doctors around you.
              </div>
            </div>

            <div class="contact-form">
              <h4 class="contact-title">Contact</h4>
              <div class="contact-detail">
                <BusinessIcon />
                <p>Delhi, India</p>
              </div>
              <div class="contact-detail">
                <EmailIcon />
                <p>hello@example.com</p>
              </div>
              <div class="contact-detail">
                <PhoneIcon />
                <p>+91987654321</p>
              </div>
              <div>
                <div className="social-wrapper">
                  <a href="https://youtube.com" className="youtube social">
                    <YouTubeIcon />
                  </a>

                  <a href="https://twitter.com" className="twitter social">
                    <XIcon />
                  </a>

                  <a href="https://instagram.com" className="instagram social">
                    <InstagramIcon />
                  </a>

                  <a href="https://github.com" className="github social">
                    <GitHubIcon />
                  </a>
                </div>
              </div>
            </div>
            <div class="contact-form">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
