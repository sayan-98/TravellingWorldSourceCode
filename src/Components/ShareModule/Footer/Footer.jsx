import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { ImFacebook2 } from "react-icons/im";
import {
  FaInstagram,
  FaLinkedin,
  FaHome,
  FaPhoneAlt,
  FaCopyright,
} from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <>
      <footer className="footer_background text-white pt-5 pb-4">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <Link to="/" className="navbar-brand">
                <img
                  src="./Images/logo.png"
                  alt="Logo"
                  className="imgStyle"
                />
              </Link>
              <p className="mt-3" >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quaerat fuga illo, repudiandae rerum inventore eligendi neque
                suscipit nisi perspiciatis voluptates?
              </p>
            </div>
            <div className="col-md-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-danger-emphasis">
                Heading
              </h5>
              <p>
                <Link to="/" className="text-white linkStyle">
                  Home
                </Link>
              </p>
              <p>
                <Link to="/about" className="text-white linkStyle">
                  About
                </Link>
              </p>
              <p>
                <Link to="/product" className="text-white linkStyle">
                  Product
                </Link>
              </p>
              
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-danger-emphasis">
                Links
              </h5>
              <p>
                <Link to="/" className="text-white linkStyle">
                  <ImFacebook2 /> <span>Facebook Page</span>
                </Link>
              </p>
              <p>
                <Link to="/" className="text-white linkStyle">
                  <FaInstagram />
                  <span>Instagram Profile</span>
                </Link>
              </p>
              <p>
                <Link to="/" className="text-white linkStyle">
                  <FaLinkedin /> <span>LinkedIn Profile</span>
                </Link>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 linkStyle">
              <h5 className="text-uppercase mb-4 font-weight-bold text-danger-emphasis">
                Contact
              </h5>
              <p>
                <FaHome /> <span>Kolkata, West Bengal</span>
              </p>
              <p>
                <CgMail /> <span>abc@gmail.com</span>
              </p>
              <p>
                <FaPhoneAlt /> <span>+91 0000000000</span>
              </p>
            </div>
          </div>
          <hr className="mb-4" />
          <div className="row align-items-center ">
            <div className="col-md-7 col-lg-8">
            {/* <center>
            <div className="youtube-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/KeZrQ6h7ZDY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe></div>
            </center> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
