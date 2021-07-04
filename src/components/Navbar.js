import React from "react";
import { Link } from "react-router-dom";
import { useTitle } from "react-use";
import { useAuth } from "../context/authContext";
function Navbar(props) {
  const { user } = useAuth();
  useTitle(props.title);
  const buckets = {
    main: Array.isArray(props.bucketMain) ? props.bucketMain : []
  };

  return (
    <div>
      <section>
        <nav className="position-relative navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img
                src="metis-assets/logos/metis/metis.svg"
                alt=""
                width="106"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="side-menu"
              data-target="#sideMenu04"
              aria-controls="sideMenu04"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav position-absolute top-50 start-50 translate-middle">
                <li className="nav-item me-4">
                  <Link className="nav-link" to="/products">
                    Product
                  </Link>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link" href="#">
                    Company
                  </a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
              </ul>
              <div className="ms-auto">
                {!user && (
                  <>
                    <a className="btn btn-outline-primary me-2" href="#/login">
                      Log In
                    </a>
                    <a className="btn btn-primary" href="#">
                      Sign Up
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
        <div className="d-none fixed-top top-0 bottom-0" id="sideMenu04">
          <div
            className="position-absolute top-0 end-0 bottom-0 start-0 bg-dark"
            style={{ opacity: "0.7" }}
          ></div>
          <nav
            className="navbar navbar-light position-absolute top-0 bottom-0 start-0 w-75 pt-3 pb-4 px-4 bg-white"
            style={{ overflowY: "auto" }}
          >
            <div className="d-flex flex-column w-100 h-100">
              <div className="d-flex justify-content-between mb-4">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="metis-assets/logos/metis/metis.svg"
                    alt=""
                    width="106"
                  />
                </a>
                <button
                  className="btn-close"
                  type="button"
                  data-toggle="side-menu"
                  data-target="#sideMenu04"
                  aria-controls="sideMenu04"
                  aria-label="Close"
                ></button>
              </div>
              <div>
                <ul className="navbar-nav mb-4">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Product
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Company
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Features
                    </a>
                  </li>
                </ul>
                <div className="border-top pt-4 mb-5">
                  <a className="btn btn-outline-primary w-100 mb-2" href="#">
                    Log in
                  </a>
                  <a className="btn btn-primary w-100" href="#">
                    Sign up
                  </a>
                </div>
              </div>
              <div className="mt-auto">
                <p>
                  <span>Get in Touch</span>
                  <a href="#">info@example.com</a>
                </p>
                <a className="me-2" href="#">
                  <img src="metis-assets/icons/facebook-blue.svg" alt="" />
                </a>
                <a className="me-2" href="#">
                  <img src="metis-assets/icons/twitter-blue.svg" alt="" />
                </a>
                <a className="me-2" href="#">
                  <img src="metis-assets/icons/instagram-blue.svg" alt="" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </section>

      <div>
        <main className="py-5 overflow-hidden">
          <div>
            {buckets["main"].map((component, idx) => (
              <React.Fragment key={idx}>{component}</React.Fragment>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Navbar;
