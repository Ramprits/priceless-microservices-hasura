import React from "react";
import { useTitle } from "react-use";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
function Navbar(props) {
  const { user } = useAuth();
  useTitle(props.title);
  const buckets = {
    main: Array.isArray(props.bucketMain) ? props.bucketMain : []
  };

  const CustomLink = styled(Link)``;
  return (
    <div>
      <section>
        <nav className="position-relative navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img
                src="metis-assets/logos/metis/metis.svg"
                alt=""
                width="106"
              />
            </Link>
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
                  <CustomLink className="nav-link" to="/products">
                    Product
                  </CustomLink>
                </li>
                <li className="nav-item me-4">
                  <CustomLink className="nav-link" to="/company">
                    Company
                  </CustomLink>
                </li>
              </ul>
              <div className="ms-auto">
                {!user && (
                  <>
                    <CustomLink
                      className="btn btn-outline-primary me-2"
                      to="/login"
                    >
                      Log In
                    </CustomLink>
                    <CustomLink className="btn btn-primary" to="/register">
                      Sign Up
                    </CustomLink>
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
                <CustomLink href="#">
                  <img
                    className="img-fluid"
                    src="metis-assets/logos/metis/metis.svg"
                    alt=""
                    width="106"
                  />
                </CustomLink>
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
                    <CustomLink className="nav-link" href="#">
                      Product
                    </CustomLink>
                  </li>
                  <li className="nav-item">
                    <CustomLink className="nav-link" href="#">
                      Company
                    </CustomLink>
                  </li>
                  <li className="nav-item">
                    <CustomLink className="nav-link" href="#">
                      About Us
                    </CustomLink>
                  </li>
                  <li className="nav-item">
                    <CustomLink className="nav-link" href="#">
                      Features
                    </CustomLink>
                  </li>
                </ul>
                <div className="border-top pt-4 mb-5">
                  <CustomLink
                    className="btn btn-outline-primary w-100 mb-2"
                    href="#"
                  >
                    Log in
                  </CustomLink>
                  <CustomLink className="btn btn-primary w-100" href="#">
                    Sign up
                  </CustomLink>
                </div>
              </div>
              <div className="mt-auto">
                <p>
                  <span>Get in Touch</span>
                  <CustomLink href="#">info@example.com</CustomLink>
                </p>
                <CustomLink className="me-2" href="#">
                  <img src="metis-assets/icons/facebook-blue.svg" alt="" />
                </CustomLink>
                <CustomLink className="me-2" href="#">
                  <img src="metis-assets/icons/twitter-blue.svg" alt="" />
                </CustomLink>
                <CustomLink className="me-2" href="#">
                  <img src="metis-assets/icons/instagram-blue.svg" alt="" />
                </CustomLink>
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
