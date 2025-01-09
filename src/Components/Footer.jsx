import React from "react";
import schoollogo from "../Assets/schoollogoii.png";
import Nav from "react-bootstrap/Nav";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <img src={schoollogo} alt="" className="footer-logo" />

        <div className="footer-top">
          <div>
            <p className="footer-p">
              Pro School Guide is a platform that connects prospective families
              with schools in a seamless and efficient manner.
            </p>
          </div>

          <div>
            <Nav className="gap-3">
              <Nav.Item>
                <Nav.Link eventKey="link-1" className="footer-nav-link">
                  About Us
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2" className="footer-nav-link">
                  Pricing
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3" className="footer-nav-link">
                  Contact Us
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-4" className="footer-nav-link">
                  FAQ
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-5" className="footer-nav-link">
                  Privacy
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-6" className="footer-nav-link">
                  T&C
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-7" className="footer-nav-link">
                  Join Our Community
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            <p className="footer-b-p">Proschoolguide ©copyright 2025</p>
          </div>

          <div>
            <Nav className="gap-3">
              <Nav.Item>
                <Nav.Link eventKey="link-1" className="footer-b-icons"><FaFacebookF /></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2"  className="footer-b-icons"><FaTwitter /></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3"  className="footer-b-icons"><FaInstagram /></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-4"  className="footer-b-icons"><FaYoutube /></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-5"  className="footer-b-icons"><FaLinkedin /></Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;