import React from "react";
import { FaChevronRight } from "react-icons/fa";
import QuoteForm from "../../component/QuoteForm";
import Service from "../../component/Service";

const pages = () => {
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
              Indoor Play Area For Kids
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
              <li>Indoor Play Area</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Cafe */}
      <section className="section-padding main">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="main-heading">
                <h2 className="" data-aos="fade-up">
                  Experience the Ultimate Indoor Playground for Kids at Frisky
                  Panda!
                </h2>
              </div>
            </div>
          </div>
          <div className="row" data-aos="fade-up">
            <div className="col-md-12">
              <p>
                Step into Frisky Panda Playzone, the top indoor playground for
                kids where fun and adventure await in a safe, secure environment
                designed just for little ones. Our state-of-the-art indoor play
                area offers thrilling activities that keep kids engaged, active,
                and joyful.
              </p>
              <ul>
                <li>Thrilling slides and swings</li>
                <li>Challenging rock climbing walls</li>
                <li>Bouncy trampolines for endless fun</li>
              </ul>

              <h4>Safe and Secure Indoor Playzone</h4>
              <p>
                Your child safety is our top priority. Our playground is fully
                secured with CCTV monitoring for parents, so you can watch while
                they play. We are also fully fire compliant and follow strict
                safety standards to provide a safe space for kids to enjoy.
              </p>
              <h4>Relax and Recharge at Our Family-Friendly Cafe</h4>
              <p>
                While your kids enjoy active play, parents can relax in our
                comfortable seating area. Recharge with snacks or refreshments
                from our family-friendly cafe, designed with you in mind.
              </p>
              <h4>Visit Frisky Panda Playzone Today!</h4>
              <p>
                Bring your family to Frisky Panda Playzone and give your child
                the gift of active play in a vibrant indoor environment.
                Discover why we&apos;re one of the best indoor play areas for
                kids! A day at Frisky Panda promises not only physical activity
                but also unforgettable memories for your child. Join us for the
                ultimate playzone adventure!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Services All In One*/}
      <Service />
      {/* CTA Form */}
      <QuoteForm />
    </>
  );
};

export default pages;
