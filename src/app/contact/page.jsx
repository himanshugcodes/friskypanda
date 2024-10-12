import React from "react";
import {
  FaChevronRight,
  FaMapMarkedAlt,
  FaMapMarker,
  FaMapMarkerAlt,
  FaMobileAlt,
} from "react-icons/fa";
import QuoteForm from "../../component/QuoteForm";
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

const Contact = () => {
  return (
    <>
      <div className="breadcrumb-wrapper bg-cover">
        <div className="line-shape">
          <img src="assets/images/element/line.png" alt="shape-img" />
        </div>
        <div className="plane-shape float-bob-y">
          <img src="assets/images/element/plane.png" alt="shape-img" />
        </div>
        <div className="doll-shape float-bob-x">
          <img src="assets/images/element/doll.png" alt="shape-img" />
        </div>
        <div className="parasuit-shape float-bob-y">
          <img src="assets/images/element/parasuit.png" alt="shape-img" />
        </div>
        <div className="frame-shape">
          <img src="assets/images/element/frame.png" alt="shape-img" />
        </div>
        <div className="bee-shape float-bob-x">
          <img src="assets/images/element/bee.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="page-heading">
            <h1 className="wow fadeInUp" data-wow-delay=".3s">
              Contact Us
            </h1>
            <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <i className="">
                  <FaChevronRight />
                </i>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Us */}

      <section className="contact section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-12">
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="contact-box mb-3 mb-md-0">
                    <i>
                      <FaMobileAlt />
                    </i>
                    <p>Have any question?</p>
                    <h4>
                      <a href="tel:919005436999">+91 90054 36999</a>
                    </h4>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-box-two mb-3 mb-md-0">
                    <i>
                      <FaEnvelope />
                    </i>
                    <p>Send Email</p>
                    <h4>
                      <a href="mailto:info@friskypanda.in">
                        info@friskypanda.in
                      </a>
                    </h4>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-box-three mb-3 mb-md-0">
                    <i>
                      <FaMapMarkerAlt />
                    </i>
                    <p>Visit Anytime</p>
                    <h4>
                      <a href="">
                        Plot No. A-1/1, Sector-H, Aliganj Street - Bajrang Bali,
                        Lucknow
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7116.636348640126!2d80.94202104118725!3d26.893395556634342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995732770ddc47%3A0xaed581dfe88ffb!2sPark%20bajrang%20wali%20ward%20sec%20l%20aliganj!5e0!3m2!1sen!2sin!4v1728249782765!5m2!1sen!2sin"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <QuoteForm />
    </>
  );
};

export default Contact;
