import React from "react";
import { FaChevronRight } from "react-icons/fa";
import QuoteForm from "../../component/QuoteForm";
import Image from "next/image";
import { FaRegClock, FaMapMarker, FaArrowRight } from "react-icons/fa";

const Events = () => {
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
              Events
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
              <li>Events</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Event Section */}
      <div className="main-event">
        <section className="home-event section-padding">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="event-box-item"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="400"
                >
                  <div className="row align-items-center">
                    <div className="col-md-3">
                      <div className="event-image">
                        <a href="#">
                          <Image
                            width={134}
                            height={134}
                            src="/assets/images/event-1.png"
                            alt="image"
                          />
                        </a>
                      </div>
                    </div>

                    <div className="col-md-6 order-1 order-md-0">
                      <div className="event-content">
                        <h3>
                          <a href="#">Little Monsters Bash </a>
                        </h3>
                        <ul className="event-list">
                          <li>
                            <i>
                              <FaRegClock />
                            </i>
                            3:00 PM - 7:00 PM
                          </li>
                          <li>
                            <i>
                              <FaMapMarker />
                            </i>
                            Plot No. A-1/1, Sector-H, Aliganj
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-md-3 order-0 order-md-1">
                      <div className="event-date">
                        <h4>31 </h4>
                        <span>October</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="event-box-item"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="400"
                >
                  <div className="row align-items-center">
                    <div className="col-md-3">
                      <div className="event-image">
                        <a href="#">
                          <Image
                            width={134}
                            height={134}
                            src="/assets/images/event-2.png"
                            alt="image"
                          />
                        </a>
                      </div>
                    </div>

                    <div className="col-md-6 order-1 order-md-0">
                      <div className="event-content">
                        <h3>
                          <a href="#">Joyful Junior Diwali Delight</a>
                        </h3>
                        <ul className="event-list">
                          <li>
                            <i>
                              <FaRegClock />
                            </i>
                            2:00 PM - 6:00 PM
                          </li>
                          <li>
                            <i>
                              <FaMapMarker />
                            </i>
                            Plot No. A-1/1, Sector-H, Aliganj
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-md-3 order-0 order-md-1">
                      <div className="event-date">
                        <h4> 03 </h4>
                        <span>November</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="event-box-item"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="400"
                >
                  <div className="row align-items-center">
                    <div className="col-md-3">
                      <div className="event-image">
                        <a href="#">
                          <Image
                            width={134}
                            height={134}
                            src="/assets/images/event-3.png"
                            alt="image"
                          />
                        </a>
                      </div>
                    </div>

                    <div className="col-md-6 order-1 order-md-0">
                      <div className="event-content">
                        <h3>
                          <a href="#">Fun-Tastic Fiesta </a>
                        </h3>
                        <ul className="event-list">
                          <li>
                            <i>
                              <FaRegClock />
                            </i>
                            1:00 PM - 5:00 PM
                          </li>
                          <li>
                            <i>
                              <FaMapMarker />
                            </i>
                            Plot No. A-1/1, Sector-H, Aliganj
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-md-3 order-0 order-md-1">
                      <div className="event-date">
                        <h4>14</h4>
                        <span>November</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="event-box-item"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="400"
                >
                  <div className="row align-items-center">
                    <div className="col-md-3">
                      <div className="event-image">
                        <a href="#">
                          <Image
                            width={134}
                            height={134}
                            src="/assets/images/event-4.png"
                            alt="image"
                          />
                        </a>
                      </div>
                    </div>

                    <div className="col-md-6 order-1 order-md-0">
                      <div className="event-content">
                        <h3>
                          <a href="#">Jolly Jingles Party</a>
                        </h3>
                        <ul className="event-list">
                          <li>
                            <i>
                              <FaRegClock />
                            </i>
                            2:00 PM - 6:00 PM
                          </li>
                          <li>
                            <i>
                              <FaMapMarker />
                            </i>
                            Plot No. A-1/1, Sector-H, Aliganj.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-md-3 order-0 order-md-1">
                      <div className="event-date">
                        <h4>25 </h4>
                        <span>December</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-12 text-center">
                <a
                  href="#quote"
                  className="theme-btn"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  <span>
                    Book Now
                    <i>
                      <FaArrowRight />
                    </i>
                  </span>
                </a>
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

export default Events;
