import Image from "next/image";
import { FaRegClock, FaMapMarker } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <section className="hero vh-100 d-flex justify-content-center align-items-center text-black text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1>Welcome to Frisky Panda.in</h1>
              <p>
                Join us for an unforgettable experience at our exclusive indoor
                playground, where our master pandas curate themed birthday
                parties that will leave your little ones beaming with joy!
              </p>
            </div>
            <div className="col-md-6 ps-5">
              <Image
                src="/assets/images/hero-1.png"
                width={410}
                height={495}
                alt="Frisky Panda"
              />
            </div>
          </div>
        </div>
        <div className="bottom-shape">
          <img src="/assets/images/bottom.webp" alt="Frisky Panda" />
        </div>
      </section>

      {/* About Section */}
      <section className="home-why section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="main-heading">
                {/* <h5 className="mt-5">Why Choose Us</h5> */}
                <h1 className="">Why Choose Us</h1>
                {/* <p>
                  Join us for an unforgettable experience at our exclusive
                  indoor playground, where our master pandas curate themed
                  birthday parties that will leave your little ones beaming with
                  joy!
                </p> */}
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-3">
              <div className="home-why-box">
                <img
                  src="/assets/images/why-choose-us-01.png"
                  alt="Frisky Panda"
                />
                <h4 className="pt-4">Indoor Playground</h4>
                <p>Exclusive Kid Friendly indoor playground</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="home-why-box">
                <img
                  src="/assets/images/why-choose-us-02.png"
                  alt="Frisky Panda"
                />
                <h4 className="pt-4">CCTV Supervision</h4>
                <p>
                  CCTV supervision to ensure maximum safety of our little ones
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="home-why-box">
                <img
                  src="/assets/images/why-choose-us-03.png"
                  alt="Frisky Panda"
                />
                <h4 className="pt-4">Frisky Panda cafe</h4>
                <p>Frisky Panda cafe especially designed for kids and moms</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="home-why-box">
                <img
                  src="/assets/images/why-choose-us-04.png"
                  alt="Frisky Panda"
                />
                <h4 className="pt-4">Fun Activities</h4>
                <p>Let our pandas entertain your kids with fun activities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="home-activities section-padding">
        <div className="bottom-shape">
          <img src="/assets/images/top.png" alt="Frisky Panda" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="main-heading">
                <h1>Activities@ Frisky Panda</h1>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-3">
              <div className="program-box-items">
                <div className="program-bg"></div>
                <div className="program-image">
                  <img
                    className="img-fluid"
                    src="assets/images/activity-01.jpg"
                    alt="img"
                  />
                </div>
                <div className="program-content text-center">
                  <h4>
                    <a href="">
                      Birthday Bonanza <br /> Special
                    </a>
                  </h4>
                  <p>Lorem ipsum dolor sit amet consectetur. Convallis</p>
                  {/* <p>
                    Join us for an unforgettable experience at our exclusive
                    indoor playground, where our master pandas curate themed
                    birthday parties that will leave your little ones beaming
                    with joy!
                  </p> */}
                  <a href="" className="arrow-icon">
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="program-box-items">
                <div className="program-bg green-bg"></div>
                <div className="program-image">
                  <img
                    className="img-fluid"
                    src="assets/images/activity-01.jpg"
                    alt="img"
                  />
                </div>
                <div className="program-content text-center">
                  <h4>
                    <a href="">Exclusive Indoor Play Area</a>
                  </h4>
                  <p>Lorem ipsum dolor sit amet consectetur. Convallis</p>
                  {/* <p>
                    Walk-in for exclusive fun-filled soft play activities
                    whichBoosts Physical Activity,Encourages Social
                    Interaction,Sensory Stimulation,Cognitive
                    Development,Nurtures Parent-Child Connection
                  </p> */}
                  <a href="" className="arrow-icon">
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="program-box-items">
                <div className="program-bg blue-bg"></div>
                <div className="program-image">
                  <img
                    className="img-fluid"
                    src="assets/images/activity-01.jpg"
                    alt="img"
                  />
                </div>
                <div className="program-content text-center">
                  <h4>
                    <a href="">Mesmerizing Kitty Party Experience </a>
                  </h4>
                  <p>Lorem ipsum dolor sit amet consectetur. Convallis</p>
                  {/* <p>
                    Let our pandas entertain your kids with fun activities while
                    you socialize with friends, and Savor tantalizing
                    finger-licking food and fresh beverages
                  </p> */}
                  <a href="" className="arrow-icon">
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="program-box-items">
                <div className="program-bg yellow-bg"></div>
                <div className="program-image">
                  <img
                    className="img-fluid"
                    src="assets/images/activity-01.jpg"
                    alt="img"
                  />
                </div>
                <div className="program-content text-center">
                  <h4>
                    <a href="">Fun & fitness for Moms & kids </a>
                  </h4>
                  <p>Lorem ipsum dolor sit amet consectetur. Convallis</p>
                  {/* <p>
                    Enjoy personalized sessions in Yoga, Zumba, Tabata, sound
                    healing, and more, designed for health, bonding, and fun
                    together!
                  </p> */}
                  <a href="" className="arrow-icon">
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-3">
              <div className="program-box-items">
                <div className="program-bg"></div>
                <div className="program-image">
                  <img
                    className="img-fluid"
                    src="assets/images/activity-01.jpg"
                    alt="img"
                  />
                </div>
                <div className="program-content text-center">
                  <h4>
                    <a href="">
                      Fisky Panda <br /> Cafe{" "}
                    </a>
                  </h4>
                  <p>
                    Enjoy a mouthwatering menu that will delight both kids and adults. From classic favorites to innovative twists, our dishes are crafted to satisfy your cravings. Specially curated healthy meal options dished out by our Master Pandas!!

                  </p>
                  <a href="" className="arrow-icon">
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Event Section */}
      <section className="home-event section-padding">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="main-heading">
                <h1 className="text-white">Upcoming Events</h1>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="event-box-item">
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <div className="event-image">
                      <a href="#">
                        <Image
                          width={134}
                          height={134}
                          src="/assets/images/event-1.png"
                          alt="image"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="event-content">
                      <h3>
                        <a href="#">Annual Cultural Programme</a>
                      </h3>
                      <ul className="event-list">
                        <li>
                          <i>
                            <FaRegClock />
                          </i>
                          8:00 AM - 10:00 PM
                        </li>
                        <li>
                          <i>
                            <FaMapMarker />
                          </i>
                          New York 56 Glassford Street
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="event-date">
                      <h4>12</h4>
                      <span>September</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="event-box-item">
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <div className="event-image">
                      <a href="#">
                        <Image
                          width={134}
                          height={134}
                          src="/assets/images/event-1.png"
                          alt="image"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="event-content">
                      <h3>
                        <a href="#">Annual Cultural Programme</a>
                      </h3>
                      <ul className="event-list">
                        <li>
                          <i>
                            <FaRegClock />
                          </i>
                          8:00 AM - 10:00 PM
                        </li>
                        <li>
                          <i>
                            <FaMapMarker />
                          </i>
                          New York 56 Glassford Street
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="event-date">
                      <h4>12</h4>
                      <span>September</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="event-box-item">
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <div className="event-image">
                      <a href="#">
                        <Image
                          width={134}
                          height={134}
                          src="/assets/images/event-1.png"
                          alt="image"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="event-content">
                      <h3>
                        <a href="#">Annual Cultural Programme</a>
                      </h3>
                      <ul className="event-list">
                        <li>
                          <i>
                            <FaRegClock />
                          </i>
                          8:00 AM - 10:00 PM
                        </li>
                        <li>
                          <i>
                            <FaMapMarker />
                          </i>
                          New York 56 Glassford Street
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="event-date">
                      <h4>12</h4>
                      <span>September</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="event-box-item">
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <div className="event-image">
                      <a href="#">
                        <Image
                          width={134}
                          height={134}
                          src="/assets/images/event-1.png"
                          alt="image"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="event-content">
                      <h3>
                        <a href="#">Annual Cultural Programme</a>
                      </h3>
                      <ul className="event-list">
                        <li>
                          <i>
                            <FaRegClock />
                          </i>
                          8:00 AM - 10:00 PM
                        </li>
                        <li>
                          <i>
                            <FaMapMarker />
                          </i>
                          New York 56 Glassford Street
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="event-date">
                      <h4>12</h4>
                      <span>September</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-contact section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <div className="main-heading">
                <h1>Gallery</h1>
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
}
