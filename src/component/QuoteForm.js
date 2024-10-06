import React from "react";

const QuoteForm = () => {
  return (
    <>
      <section className="quote-area bg-item section-padding">
        <div className="container">
          <div className="quote-item item-two">
            <div className="content">
              <span>Get a Quote</span>
              <h3>Online Class Registration</h3>
            </div>

            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email Address"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Studying Class"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type Your Requirements"
                />
              </div>

              <button type="submit" className="default-btn">
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuoteForm;
