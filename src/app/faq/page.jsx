import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Accordion from "../../component/Accordian";
import QuoteForm from "../../component/QuoteForm";

const faqItems = [
  {
    title: "What ages is Frisky Panda Playzone suitable for?",
    content:
      "Frisky Panda Playzone is designed for children aged 2-14, with dedicated areas for toddlers and older kids to ensure safe and age-appropriate play.",
  },
  {
    title: "Can I host a birthday party at Frisky Panda Playzone?",
    content:
      "Absolutely! We offer customizable birthday party packages, including themed decor, party hosting, and food options. Contact us to plan your child&apos;s dream party.",
  },
  {
    title: "Is it possible to book the playzone for private events?",
    content:
      "Yes, we offer private bookings for birthdays, group gatherings, and special events. Please reach out for availability and pricing.",
  },
  {
    title: "Do you have any discounts or special offers?",
    content:
      "We offer seasonal promotions and discounts for members. Follow us on social media or check our website for updates on current deals!",
  },
  {
    title: "What safety measures are in place at Frisky Panda Playzone?",
    content:
      "We prioritize safety with regular sanitization, secure play equipment, and first-aid trained staff. All play areas are monitored for a safe, clean, and fun environment.",
  },
  {
    title: "Do you offer refunds if we need to cancel our booking?",
    content:
      "Cancellations are subject to our refund policy. Please contact us at least 24 hours in advance for any changes to your booking.",
  },
  {
    title: "Do you offer membership plans?",
    content:
      "Yes, we offer various membership plans. Visit our membership page for full details and pricing.",
  },
  {
    title: "Are socks required in the play area?",
    content:
      "Yes, for hygiene and safety reasons, all children and adults must wear socks inside the play area. If you forget, socks are available for purchase at the entrance.",
  },
  {
    title: "What are Frisky Panda Playzone&apos;s hours of operation?",
    content:
      "We&apos;re open daily from 10 AM to 10 PM. Please check our website or social media for holiday hours or special event closures.",
  },
  {
    title: "Can we bring our own food and drinks?",
    content:
      "Outside food and drinks are not allowed, but our cafe offers a variety of snacks, drinks, and meal options. Exceptions are made for dietary needs; please notify us in advance.",
  },
  // {
  //   title: "What",
  //   content: "We",
  // },
];

const Faq = () => {
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
              FAQs
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
              <li>FAQs</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Membership */}
      <section className="faq section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <Accordion items={faqItems} />
            </div>
          </div>
        </div>
      </section>
      {/* CTA Form */}
      <QuoteForm />
    </>
  );
};

export default Faq;
