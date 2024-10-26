import React from "react";
import { FaChevronRight } from "react-icons/fa";
import QuoteForm from "../../component/QuoteForm";
import Link from "next/link";

const Careers = () => {
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
              Careers
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
              <li>Careers</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Membership */}
      <section className="main section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4>Join the Frisky Panda Team!</h4>
              <p>
                Are you passionate about creating fun, safe, and memorable
                experiences for kids? At Frisky Panda Playzone, we’re always
                looking for energetic, dedicated, and enthusiastic individuals
                to join our team! Whether you love working with children,
                organizing events, or providing excellent customer service,
                there’s a place for you at Frisky Panda.
              </p>
              <h4>Current Openings</h4>
              <ul>
                <li>Playzone Attendant</li>
                <li>Event Coordinator</li>
                <li>Cafe Staff</li>
              </ul>
              <h4>How to Apply?</h4>
              <p>
                Ready to be part of the Frisky Panda team? Send your resume and
                a brief cover letter to{" "}
                <Link href="mailto:info@friskypanda.in">
                  info@friskypanda.in
                </Link>
                , We look forward to meeting you!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Form */}
      <QuoteForm />
    </>
  );
};

export default Careers;
