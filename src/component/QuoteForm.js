"use client";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Instagram from "./Instagram";

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Your message has been sent!");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred.");
    }
  };

  return (
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

              <form onSubmit={handleSubmit}>
                <div
                  className="form-group"
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aos-delay="200"
                >
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
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
                    name="phone"
                    placeholder="Mobile Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div
                  className="form-group"
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aos-delay="200"
                >
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div
                  className="form-group"
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aos-delay="200"
                >
                  <textarea
                    name="message"
                    rows="7"
                    className="form-control"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="row justify-content-center">
                  <div className="col-md-12 text-center">
                    <button
                      type="submit"
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
                    </button>
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
  );
};

export default QuoteForm;
