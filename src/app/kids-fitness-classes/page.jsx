import React from "react";
import { FaChevronRight } from "react-icons/fa";
import QuoteForm from "../../component/QuoteForm";
import Service from "../../component/service";

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
              Fun and Fitness For Moms and Kids
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
              <li>Fun and Fitness For Moms and Kids</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Cafe */}
      <section className="cafe section-padding main">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="main-heading">
                <h2 className="" data-aos="fade-up">
                  Fun and Fitness for Moms and Kids at Frisky Panda!
                </h2>
              </div>
            </div>
          </div>
          <div className="row" data-aos="fade-up">
            <div className="col-md-12">
              <p>
                At Frisky Panda Playzone, we bring fun and fitness activities
                for moms and kids in one dynamic space! Designed to promote
                active play and bonding, our playzone is the perfect environment
                for parents and children to stay fit, socialize, and create
                lasting memories together.
              </p>

              <h4>Engaging Activities for All Ages</h4>
              <p>
                Our indoor fitness play area offers exciting activities suitable
                for toddlers, older kids, and parents. From interactive games to
                obstacle courses, we keep kids moving and having fun while moms
                join in the fitness fun or relax nearby. These activities
                encourage physical activity, building strength, flexibility, and
                coordination in kids, while offering moms a fun, kid-friendly
                space to enjoy their fitness routines.
              </p>
              <h4>Mom-Friendly Fitness Classes and Kid Care</h4>
              <p>
                Our mom-focused fitness sessions are designed to help you meet
                your wellness goals while our expert staff ensures your
                child&apos;s playtime is safe and supervised. We offer group
                workouts like yoga, pilates, and light aerobics that combine
                exercise with a social atmosphere for moms.
              </p>
              <h4>Join Us for Active Family Fun</h4>
              <p>
                Bring your family to Frisky Panda and enjoy family-friendly
                fitness that promotes health, bonding, and joy. At Frisky Panda,
                we&apos;re committed to creating a safe, engaging, and
                fitness-focused environment for moms and kids alike.Join Us and
                Discover why we&apos;re the go-to indoor play and fitness
                destination for families!
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
