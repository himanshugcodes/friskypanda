import React from "react";

const about = () => {
  return (
    <>
      <div className="breadcrumb-wrapper bg-cover">
        <div className="line-shape">
          <img src="assets/img/breadcrumb-shape/line.png" alt="shape-img" />
        </div>
        <div className="plane-shape float-bob-y">
          <img src="assets/img/breadcrumb-shape/plane.png" alt="shape-img" />
        </div>
        <div className="doll-shape float-bob-x">
          <img src="assets/img/breadcrumb-shape/doll.png" alt="shape-img" />
        </div>
        <div className="parasuit-shape float-bob-y">
          <img src="assets/img/breadcrumb-shape/parasuit.png" alt="shape-img" />
        </div>
        <div className="frame-shape">
          <img src="assets/img/breadcrumb-shape/frame.png" alt="shape-img" />
        </div>
        <div className="bee-shape float-bob-x">
          <img src="assets/img/breadcrumb-shape/bee.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="page-heading">
            <h1 className="wow fadeInUp" data-wow-delay=".3s">
              About Us
            </h1>
            <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
