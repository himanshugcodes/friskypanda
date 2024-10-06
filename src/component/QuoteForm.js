import React from "react";
import { FaArrowRight } from "react-icons/fa";

const QuoteForm = () => {
  return (
    <>
      <section className="quote-area bg-item bg-section-padding" id="quote">
        <div className="container">
          <div className="quote-item item-two">
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
                <input
                  type="text"
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
        <div className="bottom-shape">
          <img src="/assets/images/top.png" alt="Frisky Panda" />
        </div>
      </section>
    </>
  );
};

export default QuoteForm;
