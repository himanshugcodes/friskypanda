import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Gallery from "../../component/Gallery";
import QuoteForm from "../../component/QuoteForm";

const page = () => {
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
              Gallery
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
              <li>Gallery</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Gallery */}
      <section className="home-gallery section-padding">
        <div className="container">
          {/* <div className="row justify-content-center">
            <div className="col-md-6 mb-4">
              <div
                className="main-heading"
                data-aos="flip-left"
                data-aos-duration="900"
                data-aos-delay="300"
              >
                <img src="/assets/images/heading-gallery.webp" alt="" />
                
              </div>
            </div>
          </div> */}
          <Gallery />
        </div>
        <div className="bottom-shape">
          <img src="/assets/images/bottom.webp" alt="Frisky Panda" />
        </div>
      </section>
      {/* CTA Form */}
      <QuoteForm />
    </>
  );
};

export default page;
