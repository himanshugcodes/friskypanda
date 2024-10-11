import React from "react";
import { FaChevronRight } from "react-icons/fa";
import QuoteForm from "../../component/QuoteForm";

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
      <section className="memberships section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                nihil reiciendis delectus dicta ex fuga, cupiditate tempora
                velit aliquam assumenda alias vero tenetur blanditiis nobis
                saepe repellendus doloremque cum dolorem! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Iste, ipsa laboriosam vel
                voluptatibus, odit ipsam quam accusantium vitae eum corporis
                dolorum impedit aperiam! Laborum praesentium, nisi ipsum id odio
                accusamus. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Fuga tenetur rem ut, ad vitae explicabo repellat sapiente
                nihil minima. Cupiditate facere minus, nulla pariatur illo unde
                autem fuga nam tenetur.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                nihil reiciendis delectus dicta ex fuga, cupiditate tempora
                velit aliquam assumenda alias vero tenetur blanditiis nobis
                saepe repellendus doloremque cum dolorem! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Iste, ipsa laboriosam vel
                voluptatibus, odit ipsam quam accusantium vitae eum corporis
                dolorum impedit aperiam! Laborum praesentium, nisi ipsum id odio
                accusamus.
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

export default Faq;
