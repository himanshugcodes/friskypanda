import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Instagram from "./Instagram";

const QuoteForm = () => {
  return (
    <>
      <section className="quote-area bg-item bg-section-padding" id="quote">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="quote-item item-two mb-4 mb-md-0">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div
                      className="main-heading"
                      data-aos="fade-up"
                      data-aos-duration="900"
                      data-aos-delay="100"
                    >
                      <h1 className="text-white">Contact with us</h1>
                    </div>
                  </div>
                </div>

                <form>
                  <div
                    className="form-group"
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="200"
                  >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>

                  <div
                    className="form-group"
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="200"
                  >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mobile Number"
                    />
                  </div>

                  <div
                    className="form-group"
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="200"
                  >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>

                  <div
                    className="form-group"
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="200"
                  >
                    <textarea
                      id=""
                      name=""
                      rows="7"
                      className="form-control"
                      placeholder="Message"
                    />
                  </div>

                  <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                      <a
                        href="/contact"
                        className="theme-btn"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                      >
                        <span>
                          Submit
                          <i>
                            <FaArrowRight />
                          </i>
                        </span>
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* Instagram */}
            <div className="col-md-5">
              <div className="quote-item item-two ">
                <div className="row justify-content-center pb-2">
                  <div className="col-md-8">
                    <div
                      className="main-heading"
                      data-aos="fade-up"
                      data-aos-duration="900"
                      data-aos-delay="100"
                    >
                      <h1 className="text-white">Follow Us</h1>
                    </div>
                  </div>
                  <Instagram />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-shape">
          <img src="/assets/images/top.png" alt="Frisky Panda" />
        </div>
      </section>
    </>
  );
};

export default QuoteForm;
