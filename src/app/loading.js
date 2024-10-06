import React from "react";

const loading = () => {
  return (
    <section className="mt-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="shimmer"></div>
          </div>
          <div className="col-md-6">
            <div className="shimmer"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default loading;
