import Image from "next/image";

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
      <section className="home-why d-flex align-items-center vh-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <div className="main-heading">
                {/* <h5 className="mt-5">Why Choose Us</h5> */}
                <h1 className="mt-5">Why Choose Us</h1>
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
    </>
  );
}
