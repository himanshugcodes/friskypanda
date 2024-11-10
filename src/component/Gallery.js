"use client";
import { useEffect } from "react";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { FaPlus, FaSearch } from "react-icons/fa";

const Gallery = () => {
  useEffect(() => {
    import("@fancyapps/ui").then((Fancybox) => {
      Fancybox.Fancybox.bind('[data-fancybox="gallery"]', {}); // Correct initialization
    });
  }, []);

  return (
    <div className="row justify-content-center g-4 ">
      <div
        className="col-md-3"
        data-aos="zoom-in"
        data-aos-duration="1200"
        data-aos-delay="300"
      >
        <div className="one__card">
          <a href="assets/images/gallery/1.jpg" data-fancybox="gallery">
            <img src="assets/images/gallery/1.jpg" alt="Thumbnail 1" />
            <span className="gallery-one__card__icon">
              <FaSearch />{" "}
            </span>
          </a>
        </div>
      </div>
      <div
        className="col-md-3"
        data-aos="zoom-in"
        data-aos-duration="1200"
        data-aos-delay="300"
      >
        <div className="one__card">
          <a href="assets/images/gallery/2.jpg" data-fancybox="gallery">
            <img src="assets/images/gallery/2.jpg" alt="Thumbnail 1" />
            <span className="gallery-one__card__icon">
              <FaSearch />{" "}
            </span>
          </a>
        </div>
      </div>
      <div
        className="col-md-3"
        data-aos="zoom-in"
        data-aos-duration="1200"
        data-aos-delay="300"
      >
        <div className="one__card">
          <a href="assets/images/gallery/3.jpg" data-fancybox="gallery">
            <img src="assets/images/gallery/3.jpg" alt="Thumbnail 1" />
            <span className="gallery-one__card__icon">
              <FaSearch />{" "}
            </span>
          </a>
        </div>
      </div>
      <div
        className="col-md-3"
        data-aos="zoom-in"
        data-aos-duration="1200"
        data-aos-delay="300"
      >
        <div className="one__card">
          <a href="assets/images/gallery/4.jpg" data-fancybox="gallery">
            <img src="assets/images/gallery/4.jpg" alt="Thumbnail 1" />
            <span className="gallery-one__card__icon">
              <FaSearch />{" "}
            </span>
          </a>
        </div>
      </div>
      <div
        className="col-md-3"
        data-aos="zoom-in"
        data-aos-duration="1200"
        data-aos-delay="300"
      >
        <div className="one__card">
          <a href="assets/images/gallery/5.jpg" data-fancybox="gallery">
            <img src="assets/images/gallery/5.jpg" alt="Thumbnail 1" />
            <span className="gallery-one__card__icon">
              <FaSearch />{" "}
            </span>
          </a>
        </div>
      </div>
      <div
        className="col-md-3"
        data-aos="zoom-in"
        data-aos-duration="1200"
        data-aos-delay="300"
      >
        <div className="one__card">
          <a href="assets/images/gallery/6.jpg" data-fancybox="gallery">
            <img src="assets/images/gallery/6.jpg" alt="Thumbnail 1" />
            <span className="gallery-one__card__icon">
              <FaSearch />{" "}
            </span>
          </a>
        </div>
      </div>
      <div
        className="col-md-3"
        data-aos="zoom-in"
        data-aos-duration="1200"
        data-aos-delay="300"
      >
        <div className="one__card">
          <a href="assets/images/gallery/7.jpg" data-fancybox="gallery">
            <img src="assets/images/gallery/7.jpg" alt="Thumbnail 1" />
            <span className="gallery-one__card__icon">
              <FaSearch />{" "}
            </span>
          </a>
        </div>
      </div>
      <div
        className="col-md-3"
        data-aos="zoom-in"
        data-aos-duration="1200"
        data-aos-delay="300"
      >
        <div className="one__card">
          <a href="assets/images/gallery/8.jpg" data-fancybox="gallery">
            <img src="assets/images/gallery/8.jpg" alt="Thumbnail 1" />
            <span className="gallery-one__card__icon">
              <FaSearch />{" "}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
