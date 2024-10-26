import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaAngleRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import ContactButtons from "./ContactButtons";
import TwakTo from "./TwakTo";

const footer = () => {
  return (
    <>
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
                <p className="mt-3">
                  Frisky Panda Playzone is the ultimate indoor play destination
                  for kids, featuring fun, safe, and exciting activities. Our
                  cafe offers delicious treats for parents to enjoy while their
                  children play. Perfect for birthdays, playdates, and family
                  outings. Visit our indoor play area in Aliganj Square Lucknow
                  today.
                </p>
              </div>
            </div>
            <div className="col-6 col-md-2 ps-md-5">
              <div className="single-footer ps-md-2">
                <div className="single-footer-head">
                  <h3>Quick Links</h3>
                </div>
                <ul className="quick-links">
                  {/* <li>
                  <Link href="">Home</Link>
                </li> */}
                  <li>
                    <Link href="/about">
                      <FaAngleRight /> About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/activities">
                      {" "}
                      <FaAngleRight /> Activities
                    </Link>
                  </li>
                  <li>
                    <Link href="/events">
                      {" "}
                      <FaAngleRight />
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link href="/friskypanda-menu.pdf" target="_blank">
                      {" "}
                      <FaAngleRight />
                      Cafe
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery">
                      {" "}
                      <FaAngleRight />
                      Gallery
                    </Link>
                  </li>
                  {/* <li>
                  <Link href="">Membership</Link>
                </li> */}
                  <li>
                    <Link href="/contact">
                      {" "}
                      <FaAngleRight />
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6  col-md-3 ps-md-5">
              <div className="single-footer ms-md-5">
                <div className="single-footer-head">
                  <h3>Other Links</h3>
                </div>
                <ul className="quick-links">
                  <li>
                    <Link href="/memberships">
                      {" "}
                      <FaAngleRight />
                      Membership
                    </Link>
                  </li>
                  <li>
                    <Link href="/rules">
                      <FaAngleRight />
                      Frisky Panda Rules
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers">
                      {" "}
                      <FaAngleRight />
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      {" "}
                      <FaAngleRight />
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link href="/disclaimer">
                      {" "}
                      <FaAngleRight />
                      Disclaimer
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
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
                      <FaMobileAlt />
                    </i>
                    <a href="tel:+919005436999">+91 90054 36999</a>
                  </li>
                  <li>
                    <i>
                      <FaEnvelope />
                    </i>

                    <a href="mailto:info@friskypanda.in">info@friskypanda.in</a>
                  </li>
                  <li>
                    <i>
                      <FaMapMarkerAlt />
                    </i>
                    <a
                      href="https://maps.app.goo.gl/yAqARm6w7Wbv81AU9"
                      target="_blank"
                    >
                      Aliganj square, plot no.A-1/1, sector-h, aliganj street
                      and city expansion, Lucknow, Uttar Pradesh 226024
                    </a>
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
            <div className="footer-wrapper d-flex align-items-center  justify-content-between flex-wrap">
              <p className="footer-copyright mb-0 pb-3 pb-md-0">
                © 2024 <a href="https://friskypanda.in/">Frisky Panda</a>
              </p>
              <div className="footer-global-social">
                {/* <h3>Connect with us</h3> */}
                <ul className="footer-global-social-link">
                  <li>
                    <a href="#" target="blank">
                      <i>
                        <FaFacebookF />
                      </i>
                    </a>
                  </li>

                  <li>
                    <a href="" target="blank">
                      <i>
                        <FaInstagram />
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
        {/* <div className="bottom-shape">
          <img src="/assets/images/bottom.webp" alt="Frisky Panda" />
        </div> */}
      </footer>
      <ContactButtons />
      {/* <section className="mobile-footer">
        <div className="container-fluid">
          <div className="row align-item-center justify-content-center">
            <div className="col-4 box">
              <a href="tel:9839864444">
                <i>
                  <FaPhoneAlt />
                </i>
                <p> Call</p>
              </a>
            </div>
            <div className="col-4 box">
              <a href="https://api.whatsapp.com/send?phone=919839864444&text=Hello,">
                <i>
                  <FaWhatsapp />
                </i>
                <p> Whatsapp</p>
              </a>
            </div>
            <div className="col-4 box">
              <a href="mailto:info@friskypanda.in">
                <i>
                  <FaMailBulk />
                </i>
                <p> Mail</p>
              </a>
            </div>
          </div>
        </div>
      </section> */}
      {/* <div className="tpt">
        <div className="call">
          <a className="ripple" href="tel:9839864444" target="blank">
            <i>
              <FaPhoneAlt />
            </i>
          </a>
        </div>
        <div className="whatsapp ">
          <a
            className="ripple"
            href="https://api.whatsapp.com/send?phone=919839864444&text=Hello,"
            target="blank"
          >
            <i>
              <i>
                <FaWhatsapp />
              </i>
            </i>
            
          </a>
        </div>
      </div> */}
      {/* <TwakTo /> */}
    </>
  );
};

export default footer;
