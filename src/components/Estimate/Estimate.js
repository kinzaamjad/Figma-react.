import React from "react";

const Estimate = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-9 col-md-6 col">
            <div className="row">
              <h1 className="estimate-heading pb-5">
                Estimates that save you time and
                <br /> communication with the carrier
              </h1>
              <div className="col col-md-3">
                <img src="./images/estimate.svg" alt="" />
                <p className="estimate-subheading">The most accurate and documented estimates in the industry</p>
              </div>
              <div className="col col-md-2">
              <img src="./images/representation.svg" alt="" />
              <p className="estimate-subheading">Representation of the full scope of the project</p>
              </div>
              <div className="col col-md-2">
              <img src="./images/time-saving.svg" alt="" />
              <p className="estimate-subheading">Time-saving estimates and communication with the carrier</p>
              </div>
              <div className="col col-md-2">
              <img src="./images/paper-project.svg" alt="" />
              <p className="estimate-subheading">Proper project valuation</p>
              </div>
              <div className="col col-md-3">
              <img src="./images/automated.svg" alt="" />
              <p className="estimate-subheading">Automated process management with our free app</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col">
            <img src="./images/qr-code.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Estimate;
