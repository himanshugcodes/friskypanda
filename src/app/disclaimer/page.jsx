import React from "react";
import { FaChevronRight } from "react-icons/fa";
import QuoteForm from "../../component/QuoteForm";

const Disclaimer = () => {
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
              Disclaimer
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
              <li>Disclaimer</li>
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
                The information provided by Frisky Panda Playzone (we, us, or
                our) on this website is for general informational purposes only.
                All content, including services, products, pricing, and event
                details, is provided in good faith; however, we make no
                representation or warranty of any kind, express or implied,
                regarding the accuracy, reliability, or completeness of this
                information.
              </p>
              <h4> General Information </h4>
              <p>
                While we strive to ensure that the information on our website is
                accurate and current, we make no guarantee that the information
                provided will be free from errors or omissions. Any reliance on
                the material provided on this site is at your own risk.
              </p>
              <h4>Health and Safety </h4>
              <p>
                Frisky Panda Playzone is designed to provide a safe and
                enjoyable environment for children. However, visitors assume all
                responsibility for supervising children and ensuring safe play
                within the facility. We are not liable for any injuries or
                damages that may occur during your visit.
              </p>
              <h4>Third-Party Links</h4>
              <p>
                Our website may contain links to third-party websites or
                services. These links are provided for convenience only, and we
                do not endorse, monitor, or have control over the content or
                practices of these external websites. We assume no
                responsibility for any information or services provided by
                third-party sites.
              </p>
              <h4>Limitation of Liability</h4>
              <p>
                In no event shall Frisky Panda Playzone, nor its directors,
                employees, or affiliates, be liable for any indirect,
                incidental, consequential, or punitive damages arising from your
                use of this site or our services. This limitation applies to
                damages from errors, interruptions, or inaccuracies on the
                website.
              </p>
              <h4> Changes to Information</h4>
              <p>
                Frisky Panda Playzone reserves the right to make changes to our
                services, pricing, and policies without prior notice.
                Information provided on this site is subject to change, and we
                encourage users to confirm details directly with us if needed.
              </p>
              <h4> Contact Us </h4>
              <p>
                For any questions regarding this Disclaimer or the website,
                please contact us at: Frisky Panda Playzone{" "}
              </p>
              <p>contact us at: Frisky Panda Playzone</p>
              <p>Email: info@friskypanda.in</p>
              <p>Phone: +91 90054 36999</p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Form */}
      <QuoteForm />
    </>
  );
};

export default Disclaimer;
