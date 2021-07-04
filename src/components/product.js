import React, { Fragment } from "react";

function Product({ items, loading }) {
  return (
    <div>
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4 fw-bold">Fresh fruits from garden</h2>
          {loading && (
            <Fragment>
              <div
                className="spinner-border d-flex justify-content-center align-items-center"
                role="status"
              />
            </Fragment>
          )}
          <div className="row mb-5">
            {items &&
              !loading &&
              items?.products.map((p) => (
                <div className="col-12 col-lg-4 mb-3" key={p.id}>
                  <a className="text-decoration-none" href="#">
                    <img
                      className="w-100 mb-3 rounded"
                      style={{ objectFit: "cover", height: "20rem" }}
                      src="https://images.unsplash.com/photo-1585441695325-21557ef66366?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                      alt=""
                    />
                  </a>
                  <h4 className="my-2 fw-bold">
                    <a className="text-decoration-none" href="#">
                      {p.name}
                    </a>
                  </h4>
                  <p className="text-muted lh-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    luctus eget justo et iaculis.
                  </p>
                </div>
              ))}
          </div>
          <div className="text-center">
            <a className="btn btn-primary" href="#">
              Show all posts
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Product;
