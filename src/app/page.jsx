import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="hero vh-100 d-flex justify-content-center align-items-center bg-primary text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1>Welcome to Frisky Panda</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In quia
                minima esse accusamus quasi ex dolorem explicabo aperiam hic
                nemo, fuga qui soluta ducimus aliquam repellat quidem, inventore
                distinctio cupiditate.
              </p>
            </div>
            <div className="col-md-6">
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
