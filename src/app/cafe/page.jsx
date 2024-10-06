import React from "react";
import { FaChevronRight } from "react-icons/fa";
import QuoteForm from "../../component/QuoteForm";
const Cafe = () => {
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
              Cafe
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
              <li>Cafe</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Cafe */}
      <section className="cafe section-padding">
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
                accusamus. Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Provident, culpa placeat iste nostrum ratione explicabo
                maxime commodi perferendis quia minima dolorem quas tempora
                nihil iure ut aut blanditiis libero nemo.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos ratione voluptate ipsa voluptatem consequatur
                accusamus ea? Numquam excepturi quis sunt soluta nulla?
                Repudiandae eveniet sequi nam voluptatibus assumenda repellendus
                eius?
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

export default Cafe;
