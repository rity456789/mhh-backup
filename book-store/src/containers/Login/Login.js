import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendLogin, sendRegister } from "./actions";

function Login() {
  const isLoading = useSelector((state) => state.loginReducer.isSending);
  const dispatch = useDispatch();
  const usernameEl = useRef("");
  const passwordEl = useRef("");
  const fullnameEl = useRef("");
  const usernameRegisterEl = useRef("");
  const passwordRegisterEl = useRef("");
  const emailEl = useRef("");
  const phoneEl = useRef("");
  const addressEl = useRef("");
  const onRegister = () => {
    const account = {
      ten: fullnameEl.current.value,
      tenDangNhap: usernameRegisterEl.current.value,
      matKhau: passwordRegisterEl.current.value,
      email: emailEl.current.value,
      soDienThoai: phoneEl.current.value,
      diaChi: addressEl.current.value,
      vaiTro: "khach_hang",
    };
    dispatch(sendRegister(account));
  };
  const onLogin = () => {
    const username = usernameEl.current.value;
    const password = passwordEl.current.value;
    dispatch(sendLogin(username, password));
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-8">
          <div className="accordion" id="accordion1">
            <div className="card card-panel bg-white shadow-sm mb-2">
              <div
                className="card-header py-4 bg-white"
                role="button"
                id="headingOne"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <h2 className="h4 mb-0">Register now</h2>
              </div>
              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion1"
              >
                <div className="card-body p-0">
                  <hr className="m-0" />
                  <div className="p-4 p-md-6">
                    <form>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control form-control-simple"
                              placeholder="Fullname: *"
                              ref={fullnameEl}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control form-control-simple"
                              placeholder="Username: *"
                              ref={usernameRegisterEl}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control form-control-simple"
                              placeholder="Password: *"
                              ref={passwordRegisterEl}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control form-control-simple"
                              placeholder="Email: *"
                              ref={emailEl}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control form-control-simple"
                              placeholder="Phone: *"
                              ref={phoneEl}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control form-control-simple"
                              placeholder="Address: *"
                              ref={addressEl}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="custom-control custom-checkbox custom-checkbox-primary py-2">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customExampleCheck1"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customExampleCheck1"
                            >
                              I have read and accepted the{" "}
                              <a href="#">terms and conditions</a>
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox custom-checkbox-primary py-2">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customExampleCheck2"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customExampleCheck2"
                            >
                              Subscribe to exciting newsletters and great tips
                            </label>
                          </div>
                        </div>
                        {isLoading ? (
                          <div className="loading" key={1}>
                            <div
                              className="spinner-border text-primary"
                              role="status"
                            >
                              <span className="sr-only">Loading...</span>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        <div
                          className="col-md-12 text-right py-4"
                          onClick={() => onRegister()}
                        >
                          <span className="btn btn-primary">
                            Create an account
                          </span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* Checkout login */}
            <div className="card card-panel bg-white shadow-sm mb-2">
              <div
                className="card-header py-4 collapsed bg-white"
                role="button"
                id="headingTwo"
                data-toggle="collapse"
                data-target="#collapseTwo1"
                aria-expanded="false"
                aria-controls="collapseTwo1"
              >
                <h2 className="h4 mb-0"> Already member?</h2>
              </div>
              <div
                id="collapseTwo1"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion1"
              >
                <div className="card-body p-0">
                  <hr className="m-0" />
                  <div className="p-4 p-md-6">
                    <form>
                      <div className="row justify-content-center py-4">
                        <div className="col-md-8">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control form-control-simple"
                              placeholder="Username"
                              ref={usernameEl}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control form-control-simple"
                              placeholder="Password"
                              ref={passwordEl}
                            />
                          </div>
                          <div className="custom-control custom-checkbox custom-checkbox-primary py-2">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="rememberCheck"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="rememberCheck"
                            >
                              Remember me
                            </label>
                          </div>
                          {isLoading ? (
                            <div className="loading" key={1}>
                              <div
                                className="spinner-border text-primary"
                                role="status"
                              >
                                <span className="sr-only">Loading...</span>
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                          <div
                            className=" text-right py-4"
                            onClick={() => onLogin()}
                          >
                            <span className="btn btn-dark">Sign in</span>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
