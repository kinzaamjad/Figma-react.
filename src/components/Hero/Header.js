import React from "react";

const Header = () => {
  return (
    <>
      <div className="container">
        <div class="row d-flex justify-content-center">
          <div class="col col-md-6 col-lg-5 d-flex flex-column justify-content-center mb-4 mb-md-0">
            <h1 className="hero-heading">The Future<br/> of Estimating</h1>
            <p>
              Your time is money, and we respect that. Register your company,
              install our mobile app, or log in on our web portal.
            </p>
            <a href="#" className="btn btn-primary w-25">Get started</a>
          </div>

          <div class="col col-md-6 col-lg-7 justify-content-end d-flex">
            <video controls poster="./images/header-poster.svg" height={300}>
                <source />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

<div></div>





export default Header;
