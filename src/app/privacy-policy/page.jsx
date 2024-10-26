import React from "react";
import { FaChevronRight } from "react-icons/fa";
import QuoteForm from "../../component/QuoteForm";

const PrivacyPolicy = () => {
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
              Privacy Policy
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
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Membership */}
      <section className="main section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4> Effective Date: 4/11/2024 </h4>
              <p>
                {" "}
                Welcome to Frisky Panda Playzone&apos;s website! Your privacy is
                important to us, and this Privacy Policy outlines how we
                collect, use, and protect your information. By accessing or
                using our website, you agree to this Privacy Policy.
              </p>
              <h4>1. Information We Collect </h4>

              <p> We may collect the following types of information:</p>
              <ul>
                <li>
                  Personal Information: Information such as your name, email
                  address, phone number, and payment details, provided when you
                  register for memberships, book events, or make purchases.
                </li>
                <li>
                  Usage Information: Information about your activity on our
                  website, including IP addresses, browser type, operating
                  system, pages visited, and time spent.
                </li>
                <li>
                  Cookies and Tracking: We use cookies and similar tracking
                  technologies to enhance user experience, analyze website
                  traffic, and customize content.
                </li>
              </ul>
              <h4>2. How We Use Your Information </h4>
              <p> We use the information collected to:</p>
              <ul>
                <li>Process transactions, bookings, and memberships</li>
                <li>
                  Communicate with you about your reservations, purchases, and
                  promotional offers
                </li>
                <li>
                  Improve our website and services by analyzing usage patterns
                </li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Comply with legal obligations</li>
              </ul>
              <h4> 3. How We Share Your Information </h4>
              <p>
                {" "}
                We do not sell, trade, or rent your personal information.
                However, we may share it:
              </p>
              <ul>
                <li>
                  With service providers: Third-party vendors who assist us in
                  operating our website, conducting business, or servicing you
                  (such as payment processors or email platforms), provided they
                  agree to protect your information.
                </li>
                <li>
                  For legal reasons: When required by law or to protect our
                  rights, property, or safety, or that of others.
                </li>
              </ul>
              <h4> 4. Data Security </h4>
              <p>
                {" "}
                We implement industry-standard security measures to protect your
                personal information. However, please note that no method of
                transmission over the internet is 100% secure, and we cannot
                guarantee absolute security.
              </p>
              <h4> 5. Your Rights and Choices </h4>
              <p> Depending on your location, you may have the right to:</p>
              <ul>
                <li>Access, correct, or delete your personal information</li>
                <li>
                  Object to or restrict certain processing of your information
                </li>
                <li>
                  Withdraw your consent for marketing communications at any time
                </li>
              </ul>
              <p>
                {" "}
                To exercise these rights, please contact us at
                info@friskypanda.in.
              </p>
              <h4> 6. Third-Party Links </h4>
              <p>
                {" "}
                Our website may include links to third-party websites. We are
                not responsible for the privacy practices or content of these
                websites. We encourage you to review the privacy policies of any
                third-party sites you visit.
              </p>
              <h4> 7. Children&apos;s Privacy </h4>
              <p>
                {" "}
                Our services are intended for parents and guardians; we do not
                knowingly collect personal information from children under 13.
                If we learn that we have inadvertently collected such
                information, we will take steps to delete it.
              </p>
              <h4> 8. Changes to This Privacy Policy </h4>
              <p>
                {" "}
                We may update this Privacy Policy periodically. Changes will be
                posted on this page with the Effective Date updated. Your
                continued use of our website constitutes acceptance of any
                changes.
              </p>
              <h4> 9. Contact Us </h4>
              <p>
                {" "}
                If you have questions or concerns about this Privacy Policy,
                please{" "}
              </p>
              <p>contact us at: Frisky Panda Playzone</p>
              <p>Email: info@friskypanda.in</p>
              <p>Phone: +91 90054 36999</p>
              <p>
                Address: Aliganj square, plot no.A-1/1, sector-h, aliganj street
                and city expansion, Lucknow, Uttar Pradesh 226024
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

export default PrivacyPolicy;
