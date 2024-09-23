import Image from "next/image";

export default function Home() {
  return (
    <>
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
      </section>
    </>
  );
}
