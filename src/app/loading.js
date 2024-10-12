import React from "react";

const loading = () => {
  return (
    <section className="mt-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12">
                <div className="shimmer h-1 mb-4"></div>
              </div>
              <div className="col-md-12">
                <div className="shimmer h-2"></div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="shimmer h-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default loading;
