import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Service = () => {
  return (
    <>
      <section className="home-activities section-padding">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-3">
              <div
                className="program-box-items"
                data-aos="zoom-in"
                data-aos-duration="900"
                data-aos-delay="400"
              >
                <div className="program-bg"></div>
                <div className="program-image">
                  <img
                    className="img-fluid"
                    src="assets/images/activity-01.webp"
                    alt="img"
                  />
                </div>
                <div className="program-content text-center">
                  <h4>
                    <a href="/birthday-parties">
                      Birthday Bonanza <br /> Special
                    </a>
                  </h4>
                  <p>
                    Join us for an unforgettable experience at our exclusive
                  </p>

                  <a
                    href="/birthday-parties"
                    className="program-one__item__rm"
                    title="Read More"
                    target="_blank"
                  >
                    <span>
                      <FaArrowRight />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="program-box-items"
                data-aos="zoom-in"
                data-aos-duration="900"
                data-aos-delay="600"
              >
                <div className="program-bg green-bg"></div>
                <div className="program-image">
                  <img
                    className="img-fluid"
                    src="assets/images/activity-02.png"
                    alt="img"
                  />
                </div>
                <div className="program-content text-center">
                  <h4>
                    <a href="/indoor-play-area">Exclusive Indoor Play Area</a>
                  </h4>
                  <p>
                    Walk-in for exclusive fun-filled soft play activities which
                    Boosts Physical
                  </p>

                  <a
                    href="/indoor-play-area"
                    className="program-one__item__rm green-bg-btn"
                    title="Read More"
                    target="_blank"
                  >
                    <span>
                      <FaArrowRight />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="program-box-items"
                data-aos="zoom-in"
                data-aos-duration="900"
                data-aos-delay="800"
              >
                <div className="program-bg blue-bg"></div>
                <div className="program-image">
                  <img
                    className="img-fluid"
                    src="assets/images/activity-03.webp"
                    alt="img"
                  />
                </div>
                <div className="program-content text-center">
                  <h4>
                    <a href="/kitty-party">
                      Mesmerizing Kitty Party Experience{" "}
                    </a>
                  </h4>
                  <p>Let our pandas entertain your kids with fun activities</p>

                  <a
                    href="/kitty-party"
                    className="program-one__item__rm blue-bg-btn"
                    title="Read More"
                    target="_blank"
                  >
                    <span>
                      <FaArrowRight />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="program-box-items"
                data-aos="zoom-in"
                data-aos-duration="900"
                data-aos-delay="1000"
              >
                <div className="program-bg yellow-bg"></div>
                <div className="program-image">
                  <img
                    className="img-fluid"
                    src="assets/images/activity-04.webp"
                    alt="img"
                  />
                </div>
                <div className="program-content text-center">
                  <h4>
                    <a href="/kids-fitness-classes">
                      Fun and Fitness For Moms and Kids{" "}
                    </a>
                  </h4>
                  <p>
                    Enjoy personalized sessions in Yoga, Zumba, Tabata, sound
                    healing
                  </p>

                  <a
                    href="/kids-fitness-classes"
                    className="program-one__item__rm yellow-bg-btn"
                    title="Read More"
                    target="_blank"
                  >
                    <span>
                      <FaArrowRight />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-shape">
          <img src="/assets/images/bottom.webp" alt="Frisky Panda" />
        </div>
      </section>
    </>
  );
};

export default Service;
