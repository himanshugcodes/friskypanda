"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="accordion" id="accordionExample">
      {items.map((item, index) => (
        <div
          className="accordion-item aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
          key={index}
        >
          <h2 className="accordion-header" id={`heading${index}`}>
            <button
              className={`accordion-button ${
                openIndex === index ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => toggle(index)}
            >
              {item.title}
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse collapse ${
              openIndex === index ? "show" : ""
            }`}
          >
            <div className="accordion-body">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
