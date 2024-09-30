"use client";
import { useEffect } from "react";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const Gallery = () => {
  useEffect(() => {
    import("@fancyapps/ui").then((Fancybox) => {
      Fancybox.Fancybox.bind('[data-fancybox="gallery"]', {}); // Correct initialization
    });
  }, []);

  return (
    <div className="row g-4 mt-3">
      <div className="col-md-3">
        <a href="assets/images/gallery-1.png" data-fancybox="gallery">
          <img src="assets/images/gallery-1.png" alt="Thumbnail 1" />
        </a>
      </div>
      <div className="col-md-3">
        <a href="assets/images/gallery-2.png" data-fancybox="gallery">
          <img src="assets/images/gallery-2.png" alt="Thumbnail 1" />
        </a>
      </div>
      <div className="col-md-3">
        <a href="assets/images/gallery-3.png" data-fancybox="gallery">
          <img src="assets/images/gallery-3.png" alt="Thumbnail 1" />
        </a>
      </div>
      <div className="col-md-3">
        <a href="assets/images/gallery-3.png" data-fancybox="gallery">
          <img src="assets/images/gallery-3.png" alt="Thumbnail 1" />
        </a>
      </div>
      <div className="col-md-3">
        <a href="assets/images/gallery-3.png" data-fancybox="gallery">
          <img src="assets/images/gallery-3.png" alt="Thumbnail 1" />
        </a>
      </div>
      <div className="col-md-3">
        <a href="assets/images/gallery-3.png" data-fancybox="gallery">
          <img src="assets/images/gallery-3.png" alt="Thumbnail 1" />
        </a>
      </div>
      <div className="col-md-3">
        <a href="assets/images/gallery-2.png" data-fancybox="gallery">
          <img src="assets/images/gallery-2.png" alt="Thumbnail 1" />
        </a>
      </div>
      <div className="col-md-3">
        <a href="assets/images/gallery-1.png" data-fancybox="gallery">
          <img src="assets/images/gallery-1.png" alt="Thumbnail 1" />
        </a>
      </div>
    </div>
  );
};

export default Gallery;
