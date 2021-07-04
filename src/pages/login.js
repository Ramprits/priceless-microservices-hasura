import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/authContext";
import LOGIN_USER from "../graphql/login";

function LoginPage() {
  const auth = useAuth();
  const history = useHistory();
  const [error, setError] = useState("");
  const [onLogin, { loading }] = useMutation(LOGIN_USER, {
    onError: () => {
      setError("email or password incorrect Please again later");
    },
    onCompleted: (data) => {
      auth.setCurrentUser(data.login);
      history.push("/");
    }
  });
  console.log("loading", loading);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (params) => {
    onLogin({ variables: { email: params.email, password: params.password } });
  };

  return (
    <div>
      <section className="py-5">
        <div className="container text-center">
          <a className="d-inline-block mb-5" href="#">
            <img
              className="img-fluid"
              src="metis-assets/logos/metis/metis.svg"
              alt=""
              width="106"
            />
          </a>
          <div className="row mb-4">
            <div className="col-12 col-md-8 col-lg-5 mx-auto">
              <div className="p-4 shadow-sm rounded bg-white">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <span className="text-muted">Sign In</span>
                  <h2 className="mb-4 fw-light">Join our community</h2>
                  <div className="mb-3 input-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="name@email.com"
                      {...register("email", { required: true })}
                    />
                    <span className="input-group-text">
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="mb-3 input-group">
                    <input
                      className="form-control"
                      type="password"
                      {...register("password", { required: true })}
                      placeholder="Enter your password"
                    />
                    <div className="input-group-text">
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  {error && (
                    <div className="text-danger my-2 d-flex">{error}</div>
                  )}
                  {loading && !error ? (
                    <div className="spinner-border" role="status" />
                  ) : (
                    <button
                      type="submit"
                      className={`btn btn-primary mb-4 w-100`}
                    >
                      Sign In
                    </button>
                  )}

                  <p className="mb-4 text-muted">or continue with</p>
                  <button
                    className="btn btn-outline-secondary mb-2 w-100 text-start"
                    href="#"
                  >
                    <img
                      className="img-fluid me-2"
                      src="metis-assets/logos/facebook-sign.svg"
                    />
                    <span>Sign In with Facebook</span>
                  </button>
                  <button
                    className="btn btn-outline-secondary w-100 text-start"
                    href="#"
                  >
                    <img
                      className="img-fluid me-2"
                      src="metis-assets/logos/google-sign.svg"
                    />
                    <span>Sign In with Google</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <p className="text-center">
            <a href="#">Police privacy</a> and <a href="#">Terms of Use</a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
