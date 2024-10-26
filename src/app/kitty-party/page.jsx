import React from "react";
import { FaChevronRight } from "react-icons/fa";
import QuoteForm from "../../component/QuoteForm";
import Service from "../../component/Service";

const pages = () => {
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
              Mesmerizing Kitty Party Experience
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
              <li>Mesmerizing Kitty Party Experience</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Cafe */}
      <section className="cafe section-padding main">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="main-heading">
                <h2 className="" data-aos="fade-up">
                  Kitty Party Bliss at Frisky Panda – A Perfect Escape for Moms!
                </h2>
              </div>
            </div>
          </div>
          <div className="row" data-aos="fade-up">
            <div className="col-md-12">
              <p>
                Moms, it&apos;s time to relax and unwind! Join us for an
                exclusive Kitty Party experience at Frisky Panda Playzone where
                we blend fun, relaxation, and memorable moments. Our
                mom-friendly indoor play area offers the ideal escape for moms
                and an adventure-packed space for kids!
              </p>

              <h4>You Relax, We Entertain</h4>
              <p>
                At Frisky Panda, we handle the kid-care so you can enjoy quality
                time with friends. Rejuvenate with delicious refreshments and
                unwind as you catch up with friends in a cozy, family-friendly
                café setting. Enjoy peace of mind knowing your kids are engaged
                in safe, supervised activities.
              </p>
              <h4>Kids Paradise Awaits</h4>
              <p>
                Our kid-friendly indoor playground offers a world of excitement
                for the little ones! With interactive games, engaging
                entertainment, and endless fun led by our “Master Pandas,” kids
                have a memorable time while you relax. We’ve designed an
                environment that’s safe, secure, and packed with adventure, so
                both you and your children can have a perfect day.
              </p>
              <h4>Our Promise to You</h4>
              <p>
                Your child&apos;s well-being is our top priority. We guarantee a
                safe and secure playzone, with personalized attention for each
                child to ensure they feel special and cared for. Frisky Panda
                Playzone creates unforgettable memories for moms and kids alike.
              </p>
              <h4>Join the Fun!</h4>
              <p>
                Book your Kitty Party at Frisky Panda today and enjoy a day
                filled with laughter, relaxation, and joy. Rediscover the
                perfect balance of “me-time” and family fun with us!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Services All In One*/}
      <Service />
      {/* CTA Form */}
      <QuoteForm />
    </>
  );
};

export default pages;
