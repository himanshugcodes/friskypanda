import React from "react";
import { FaChevronRight } from "react-icons/fa";
import QuoteForm from "../../component/QuoteForm";
import Service from "../../component/Service";

const BirthdayParties = () => {
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
              Birthday Parties
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
              <li>Birthday Parties</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Cafe */}
      <section className="cafe section-padding main pb-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="main-heading">
                <h2 className="" data-aos="fade-up">
                  Unforgettable Birthday Experiences at Friskypanda Indoorplay
                  and Cafe!
                </h2>
              </div>
            </div>
          </div>
          <div className="row" data-aos="fade-up">
            <div className="col-md-12">
              <p>
                Looking for the perfect venue for your child&apos;s next
                birthday? At Frisky Panda Indoor Play Area in Lucknow, we
                specialize in creating magical, unforgettable birthday
                experiences that your child and their friends will remember for
                years! Our vibrant, safe indoor playground is the ideal setting
                for fun-filled, themed birthday parties tailored to your
                child&apos;s favorite activities and interests. From playful
                pandas to adventurous explorers, we craft custom party themes
                that spark excitement and joy.
              </p>

              <h4>
                Why Choose Frisky Panda Playzone for Your Child&apos;s Birthday?
              </h4>
              <p>
                As the go-to indoor playzone and party venue in Lucknow, we
                offer a seamless, all-inclusive party experience designed to
                make your child&apos;s special day hassle-free and
                unforgettable. Heres how we take care of everything:
              </p>
              <p>
                <strong>Custom Invitations:</strong> We create fun, themed
                invitations that match the party&apos;s design, helping you set
                the tone for an amazing celebration right from the start.
              </p>
              <p>
                <strong> Delicious Themed Cakes:</strong> No birthday is
                complete without cake! Choose from our variety of delicious cake
                flavors, all tailored to your party&apos;s theme. Whether
                it&apos;s a superhero, princess, or jungle-themed cake, we’ve
                got you covered.
              </p>
              <p>
                <strong>Birthday Star&apos;s Attire:</strong> We make your child
                feel extra special with stylish party attire designed to match
                the theme, ensuring they&apos;re the star of the show. Expert
                Party Hosting: Our experienced team of party hosts ensures that
                everything runs smoothly from start to finish. From setting up
                games and activities to managing the schedule, we make sure your
                party is fun, stress-free, and memorable.
              </p>
              <p>
                <strong>Personalized Return Gifts:</strong> Send your guests
                home with customized return gifts that fit the party theme.
                These thoughtful keepsakes are a great way to leave a lasting
                impression.
              </p>
              <h4>A Fun, Safe, and Exciting Space</h4>

              <p>
                At Frisky Panda Playzone, we prioritize safety and cleanliness,
                ensuring a safe environment for all children. Our play
                structures, ball pits, and adventure zones are designed to keep
                kids entertained for hours. Parents can relax and enjoy the
                celebration while we take care of the details.
              </p>
              <p>
                Book Your Dream Party Today, Whether you&apos;re planning a
                small, intimate gathering or a larger celebration, Frisky Panda
                Playzone is your go-to birthday party destination in Lucknow.
                Let us handle the logistics, decorations, and entertainment, so
                you can focus on creating lasting memories with your child.
              </p>
              <p>
                Contact us now to book the ultimate birthday party at
                Friskypanda Indoorplay and Cafe!
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

export default BirthdayParties;
