import React from "react";

const Navbar = () => {
  return (
    <>

<nav class="navbar navbar-expand-lg navbar-light bg-white">

  <div class="container">

    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>


    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <a class="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src="./images/logo.svg"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center flex-grow-1">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Videos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Testimonials</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
    <div class="d-flex align-items-center">
      
      <a class="link-secondary me-3" href="#">
        <i class="fas fa-shopping-cart"></i>
      </a>
      <div >
        <a
          class="btn btn-outline-primary me-3"
          href="#"
          id="navbarDropdownMenuLink"
        >
          Login
        </a>
      </div>
      <div >
      <a
          class="btn btn-primary me-3"
          href="#"
          id="navbarDropdownMenuLink"
        >
          Login
        </a>
      </div>
    </div>
  </div>
</nav>
    </>
  );
};

export default Navbar;
