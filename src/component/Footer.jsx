import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaAngleRight,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaRegMap,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 pe-md-2">
            <div className="single-footer">
              <Link href="/">
                <Image
                  src="/assets/images/logo.png"
                  width={150}
                  height={154}
                  alt="Frisky Panda"
                />
              </Link>
              <p>
                Join us for an unforgettable experience at our exclusive indoor
                playground, where our master pandas curate themed birthday
                parties that will leave your little ones beaming with joy!
              </p>
            </div>
          </div>
          <div className="col-md-2 ps-md-5">
            <div className="single-footer ps-md-2">
              <div className="single-footer-head">
                <h3>Quick Links</h3>
              </div>
              <ul className="quick-links">
                {/* <li>
                  <Link href="">Home</Link>
                </li> */}
                <li>
                  <Link href="">
                    <FaAngleRight /> About Us
                  </Link>
                </li>
                <li>
                  <Link href="">
                    {" "}
                    <FaAngleRight /> Birthday Parties
                  </Link>
                </li>
                <li>
                  <Link href="">
                    {" "}
                    <FaAngleRight />
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="">
                    {" "}
                    <FaAngleRight />
                    Cafe
                  </Link>
                </li>
                <li>
                  <Link href="">
                    {" "}
                    <FaAngleRight />
                    Gallery
                  </Link>
                </li>
                {/* <li>
                  <Link href="">Membership</Link>
                </li> */}
                <li>
                  <Link href="">
                    {" "}
                    <FaAngleRight />
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 ps-md-5">
            <div className="single-footer ms-md-5">
              <div className="single-footer-head">
                <h3>Other Links</h3>
              </div>
              <ul className="quick-links">
                <li>
                  <Link href="">
                    {" "}
                    <FaAngleRight />
                    Membership
                  </Link>
                </li>
                <li>
                  <Link href="">
                    {" "}
                    <FaAngleRight />
                    Frisky Panda Rules
                  </Link>
                </li>
                <li>
                  <Link href="">
                    {" "}
                    <FaAngleRight />
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="">
                    {" "}
                    <FaAngleRight />
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="">
                    {" "}
                    <FaAngleRight />
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link href="">
                    {" "}
                    <FaAngleRight />
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 ps-md-5">
            <div className="single-footer footer-add">
              <div className="single-footer-head">
                <h3>Contact Us</h3>
              </div>
              <ul className="footer-contact">
                <li>
                  <i>
                    <FaPhoneAlt />
                  </i>
                  <a href="tel:9876543211">9876543211</a> ,
                  <a href="tel:9876543211">9876543211</a>
                </li>
                <li>
                  <i>
                    <FaEnvelope />
                  </i>

                  <a href="mailto:info@friskypanda.in">info@friskypanda.in</a>
                </li>
                <li>
                  <i>
                    <FaRegMap />
                  </i>
                  <a href="">Aliganj,Lucknow</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="bottom-shape-footer">
          <img src="assets/images/footer-bottom.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="footer-wrapper d-flex align-items-center justify-content-between">
            <p className="mb-0">
              © All Copyright 2024 by <a href="">Frisky Panda</a>
            </p>
            <div className="footer-global-social">
              <h3>Connect with us</h3>
              <ul className="footer-global-social-link">
                <li>
                  <a href="#" target="blank">
                    <i>
                      <FaFacebookF />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#" target="blank">
                    <i>
                      <FaLinkedinIn />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="" target="blank">
                    <i>
                      <FaTwitter />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="" target="blank">
                    <i>
                      <FaYoutube />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <a href="#" id="scrollUp" className="scroll-icon">
          <i className="far fa-arrow-up"></i>
        </a> */}
      </div>
      <div className="bottom-shape">
        <img src="/assets/images/bottom.webp" alt="Frisky Panda" />
      </div>
    </footer>
  );
};

export default footer;
