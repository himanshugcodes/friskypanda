import { useEffect, useState } from "react";
import { FaPhoneAlt, FaWhatsapp, FaMailBulk } from "react-icons/fa"; // Assuming you're using react-icons

export default function ContactButtons() {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        // 200px from top
        setShowButtons(true);
      } else {
        setShowButtons(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showButtons && (
        <>
          <section
            className="mobile-footer"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="100"
          >
            <div className="container-fluid">
              <div className="row align-item-center justify-content-center">
                <div className="col-4 box">
                  <a href="tel:9839864444">
                    <i>
                      <FaPhoneAlt />
                    </i>
                    <p> Call</p>
                  </a>
                </div>
                <div className="col-4 box">
                  <a href="https://api.whatsapp.com/send?phone=919839864444&text=Hello,">
                    <i>
                      <FaWhatsapp />
                    </i>
                    <p> Whatsapp</p>
                  </a>
                </div>
                <div className="col-4 box">
                  <a href="mailto:info@friskypanda.in">
                    <i>
                      <FaMailBulk />
                    </i>
                    <p> Mail</p>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <div className="tpt">
            <div
              className="call"
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-delay="100"
            >
              <a
                className="ripple"
                href="tel:9839864444"
                target="blank"
                title="Call Us"
              >
                <i>
                  <FaPhoneAlt />
                </i>
              </a>
            </div>
            <div
              className="whatsapp"
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-delay="100"
            >
              <a
                className="ripple"
                href="https://api.whatsapp.com/send?phone=919839864444&text=Hello,"
                target="blank"
              >
                <i>
                  <FaWhatsapp />
                </i>
                {/* If you're using an image instead */}
                {/* <Image
                width={53}
                height={53}
                src="/assets/images/whatsapp.png"
                alt="image"
              /> */}
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}
