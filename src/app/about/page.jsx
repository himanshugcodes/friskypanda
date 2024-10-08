import React from "react";
import { FaChevronRight } from "react-icons/fa";
import QuoteForm from "../../component/QuoteForm";

const about = () => {
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
              About Us
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
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>

      {/* About us */}
      <section className="about section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="about-img" data-aos="fade-right">
                <img src="/assets/images/about/about.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-content" data-aos="fade-left">
                <h4>About Us</h4>
                <h2 className="">Welcome to best Playzone for your child</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Blanditiis deleniti provident necessitatibus optio doloremque
                  sequi perferendis eligendi, praesentium iure nulla! Voluptate
                  ea quo laudantium animi ullam commodi repudiandae corporis
                  sint. Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Molestias in hic laboriosam minus sint, sed dolorem
                  aliquam numquam explicabo non quod vero .
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  architecto nesciunt evenie, repudiandae corporis sint. Lorem
                  ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* USP Section */}
      <div className="home-why-about">
        <section className="home-why section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="main-heading">
                  {/* <h5 className="mt-5">Why Choose Us</h5> */}
                  <h1 className="" data-aos="fade-up">
                    Why Choose Us
                  </h1>
                  {/* <p>
                  Join us for an unforgettable experience at our exclusive
                  indoor playground, where our master pandas curate themed
                  birthday parties that will leave your little ones beaming with
                  joy!
                </p> */}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div
                  className="home-why-box"
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aos-delay="200"
                >
                  <img
                    className="mb-md-2"
                    src="/assets/images/why-choose-us-01.png"
                    alt="Frisky Panda"
                  />
                  <h4 className="pt-2 pt-md-4">Indoor Playground</h4>
                  <p>Exclusive Kid Friendly indoor playground</p>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="home-why-box"
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aos-delay="500"
                >
                  <img
                    src="/assets/images/why-choose-us-02.webp"
                    alt="Frisky Panda"
                  />
                  <h4 className="pt-2 pt-md-4">CCTV Supervision</h4>
                  <p>
                    CCTV supervision to ensure maximum safety of our little ones
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="home-why-box"
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aos-delay="800"
                >
                  <img
                    src="/assets/images/why-choose-us-03.webp"
                    alt="Frisky Panda"
                  />
                  <h4 className="pt-2 pt-md-4">Frisky Panda cafe</h4>
                  <p>Frisky Panda cafe especially designed for kids and moms</p>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="home-why-box"
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aos-delay="1100"
                >
                  <img
                    src="/assets/images/why-choose-us-04.webp"
                    alt="Frisky Panda"
                  />
                  <h4 className="pt-2 pt-md-2">Fun Activities</h4>
                  <p>Let our pandas entertain your kids with fun activities</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-shape">
            <img src="/assets/images/top.png" alt="Frisky Panda" />
          </div>
        </section>
      </div>
      {/* CTA Form */}
      <QuoteForm />
    </>
  );
};

export default about;
