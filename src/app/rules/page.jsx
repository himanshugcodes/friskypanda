import React from "react";
import { FaChevronRight } from "react-icons/fa";
import QuoteForm from "../../component/QuoteForm";

const Rules = () => {
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
              Frisky Panda Rules
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
              <li>Frisky Panda Rules</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Membership */}
      <section className="main section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>
                {" "}
                <strong> Socks Only:</strong> For hygiene reasons, socks are
                required for both children and adults inside the play area. No
                bare feet or shoes allowed. Socks are available for purchase at
                the entrance if needed.
              </p>
              <p>
                <strong>Age Restrictions:</strong> Our playzone is designed for
                children aged 2-12. We have specific areas for younger and older
                children to ensure safe play for everyone.
              </p>
              <p>
                <strong>Health and Safety:</strong> No food, drinks, or gum are
                allowed in the play area. Please enjoy snacks in our designated
                cafe seating area.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Form */}
      <QuoteForm />
    </>
  );
};

export default Rules;
