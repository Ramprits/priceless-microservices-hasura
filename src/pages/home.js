import React from "react";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div>
      <Navbar
        bucketMain={[
          <section className="py-5 overflow-hidden">
            <div className="container py-5">
              <div className="row align-items-center">
                <div className="position-relative col-12 col-lg-6 order-last mt-5 mt-lg-0">
                  <img
                    className="position-relative mx-auto rounded w-100"
                    style={{ zIndex: 10 }}
                    src="https://images.unsplash.com/photo-1536940135352-b4b3875df888?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;h=1200&amp;q=80"
                    alt=""
                  />
                  <img
                    className="img-fluid position-absolute"
                    width="160"
                    height="160"
                    style={{
                      top: 0,
                      left: 0,
                      marginLeft: "-48px",
                      marginTop: "-48px"
                    }}
                    src="metis-assets/elements/blob-tear.svg"
                    alt=""
                  />
                  <img
                    className="img-fluid position-absolute"
                    width="160"
                    height="160"
                    style={{
                      top: 0,
                      left: 0,
                      marginLeft: "-48px",
                      marginTop: "-48px"
                    }}
                    src="metis-assets/elements/blob-tear.svg"
                    alt=""
                  />
                </div>
                <div className="col-12 col-lg-6 py-5">
                  <div className="row">
                    <div className="col-12 col-lg-8 mx-auto">
                      <h2 className="mt-3 mb-5 fs-1 fw-bold">Key Features</h2>
                      <div className="d-flex mb-4 pb-1">
                        <span className="me-4 text-primary">
                          <svg
                            width="32"
                            height="32"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            ></path>
                          </svg>
                        </span>
                        <div>
                          <h5>Easy to customize</h5>
                          <p className="mb-0 text-muted lh-lg">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Veritatis expedita animi.
                          </p>
                        </div>
                      </div>
                      <div className="d-flex mb-4 pb-1">
                        <span className="me-4 text-primary">
                          <svg
                            width="32"
                            height="32"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                            ></path>
                          </svg>
                        </span>
                        <div>
                          <h5>Flexible software</h5>
                          <p className="mb-0 text-muted lh-lg">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Veritatis expedita animi.
                          </p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <span className="me-4 text-primary">
                          <svg
                            width="32"
                            height="32"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                            ></path>
                          </svg>
                        </span>
                        <div>
                          <h5>Best access for all of the resources</h5>
                          <p className="mb-0 text-muted lh-lg">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Veritatis expedita animi.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ]}
      />
    </div>
  );
}

export default HomePage;
