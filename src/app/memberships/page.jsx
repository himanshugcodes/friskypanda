import React from "react";
import { FaChevronRight } from "react-icons/fa";
import QuoteForm from "../../component/QuoteForm";
import Image from "next/image";

const Memberships = () => {
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
              Membership
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
              <li>Membership</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Membership */}
      <section className="memberships section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <Image
                src="/assets/images/membership1.jpeg"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
                width={1131}
                height={1600}
                alt="Frisky Panda"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="memberships section-padding">
        <div className="container">
          <div className="column">
            <div className="pricing-card basic">
              <div className="pricing-header">
                <span className="plan-title">Panda Cub Plan</span>
                <div className="price-circle">
                  <span className="price-title">
                    <small></small>
                    <span>600</span>
                  </span>
                  <span className="info">INR</span>
                </div>
              </div>
              <div className="badge-box">
                <span>Save 35%</span>
              </div>
              <ul>
                <li>1 Hour Play</li>
                <li>5% off cafe purchases</li>
                <li>INR 200 per additional hour</li>
                <li>Access to exclusive member-only events</li>
                <li>Priority booking for special events and parties</li>
              </ul>
              <div className="buy-button-box">
                <a href="#quote" className="buy-now">
                  BUY NOW
                </a>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="pricing-card eco">
              <div className="popular">Popular</div>
              <div className="pricing-header">
                <span className="plan-title">Panda Explorer Plan</span>
                <div className="price-circle">
                  <span className="price-title">
                    <small></small>
                    <span>4000</span>
                  </span>
                  <span className="info">INR</span>
                </div>
              </div>
              <div className="badge-box">
                <span>Save 15%</span>
              </div>
              <ul>
                <li>Unlimited play sessions per month</li>
                <li>15% off cafe purchases</li>
                <li>1 free guest pass per month</li>
                <li>15% off birthday party bookings</li>
                <li>Access to member-only events </li>
              </ul>
              <div className="buy-button-box">
                <a href="#quote" className="buy-now">
                  BUY NOW
                </a>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="pricing-card pro">
              <div className="popular">Limited Time Offer</div>
              <div className="pricing-header">
                <span className="plan-title">Panda VIP Plan</span>
                <div className="price-circle">
                  <span className="price-title">
                    <small></small>
                    <span>20000</span>
                  </span>
                  <span className="info">INR</span>
                </div>
              </div>
              <div className="badge-box">
                <span>Save 60%</span>
              </div>
              <ul>
                <li>Unlimited play sessions for up to 2 children</li>
                <li>20% off cafe purchases and party bookings</li>
                <li>2 free guest passes per month</li>
                <li>Exclusive VIP member events</li>
                <li>Free birthday party for the member child</li>
              </ul>
              <div className="buy-button-box">
                <a href="#quote" className="buy-now">
                  BUY NOW
                </a>
              </div>
            </div>
          </div>
        </div>
         
      </section>*/}
      {/* CTA Form */}
      <QuoteForm />
    </>
  );
};

export default Memberships;
