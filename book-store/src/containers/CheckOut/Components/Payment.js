import React from "react";
import { useDispatch } from "react-redux";
import { goToNextStep, goToPrevStep } from "../actions";

function Payment() {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-8">
          <h2 className="pre-label font-size-base">Choose payment</h2>
          {/* Checkout credit card */}
          <div className="accordion br-sm" id="accordionPaymentExample">
            <div className="card card-fill mb-3 shadow-sm rounded">
              <div className="card-header py-4 p-3 p-md-5">
                <div className="row align-items-center">
                  <div className="col-9">
                    <div className="custom-control custom-radio d-flex align-items-center">
                      <input
                        type="radio"
                        id="customRadio1"
                        name="customRadio"
                        className="custom-control-input form-radio"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-controls="collapseOne"
                      />
                      <label
                        className="custom-control-label pl-2 pl-lg-4"
                        htmlFor="customRadio1"
                      >
                        <span className="h5 m-0">Credit cart</span> <br />
                        <small className="d-none d-lg-inline-block">
                          MasterCard, Maestro, Visa, Visa Electron, JCB and
                          American Express
                        </small>
                      </label>
                    </div>
                  </div>
                  <div className="col-3 text-right">
                    <div className="h1 m-0">
                      <i className="fa fa-credit-card" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="collapseOne"
                className="collapse pt-0"
                aria-labelledby="customRadio1"
                data-parent="#accordionPaymentExample"
              >
                <hr className="m-0" />
                <div className="card-body">
                  <form action="/action_page.php">
                    <div className="form-row mb-1">
                      <div className="col">
                        <input
                          type="text"
                          className="form-control form-control-simple"
                          placeholder="Name on card"
                        />
                      </div>
                    </div>
                    <div className="form-row mb-1">
                      <div className="col">
                        <input
                          type="tel"
                          className="form-control form-control-simple"
                          placeholder="0000-0000-0000-0000"
                          inputMode="numeric"
                          maxLength={19}
                          pattern="[0-9\s]{13,19}"
                        />
                      </div>
                    </div>
                    <div className="form-row mb-1">
                      <div className="col">
                        <input
                          type="text"
                          className="form-control form-control-simple"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control form-control-simple"
                          placeholder="CVV"
                        />
                      </div>
                    </div>
                    <div className="form-row mt-3">
                      <div className="col">
                        <button className="btn btn-rounded btn-primary btn-sm px-3">
                          Proceed payment
                        </button>
                      </div>
                      <div className="col text-right">
                        <small>Accepted Cards</small>
                        <div className="icon-container">
                          <i
                            className="fa fa-cc-visa"
                            style={{ color: "navy" }}
                          />
                          <i
                            className="fa fa-cc-amex"
                            style={{ color: "blue" }}
                          />
                          <i
                            className="fa fa-cc-mastercard"
                            style={{ color: "red" }}
                          />
                          <i
                            className="fa fa-cc-discover"
                            style={{ color: "orange" }}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* Checkout Paypal */}
            <div className="card card-fill mb-3 shadow-sm rounded">
              <div className="card-header py-4 p-3 p-md-5">
                <div className="row align-items-center">
                  <div className="col-9">
                    <div className="custom-control custom-radio d-flex align-items-center">
                      <input
                        type="radio"
                        id="customRadio2"
                        name="customRadio"
                        className="custom-control-input"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-controls="collapseTwo"
                      />
                      <label
                        className="custom-control-label pl-2 pl-lg-4"
                        htmlFor="customRadio2"
                      >
                        <span className="h5 m-0">PayPal</span>
                        <br />
                        <small className="d-none d-lg-inline-block">
                          Purchase with your fingertips. Look for us the next
                          time you're paying from a mobile app, and checkout
                          faster on thousands of mobile websites.
                        </small>
                      </label>
                    </div>
                  </div>
                  <div className="col-3 text-right">
                    <div className="h1 m-0">
                      <i className="fa fa-paypal" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="collapseTwo"
                className="collapse pt-0"
                aria-labelledby="customRadio2"
                data-parent="#accordionPaymentExample"
              >
                <hr className="m-0" />
                <div className="card-body">
                  <p>
                    Incidunt exercitationem optio quos doloremque neque placeat
                    recusandae obcaecati ab quidem commodi, eaque earum unde?
                  </p>
                  <button className="btn btn-rounded btn-primary btn-sm px-3">
                    <i className="fa fa-paypal" /> Got to checkout
                  </button>
                </div>
              </div>
            </div>
            {/* Checkout Banktransfer */}
            <div className="card card-fill mb-3 shadow-sm rounded">
              <div className="card-header py-4 p-3 p-md-5">
                <div className="row align-items-center">
                  <div className="col-9">
                    <div className="custom-control custom-radio d-flex align-items-center">
                      <input
                        type="radio"
                        id="customRadio3"
                        name="customRadio"
                        className="custom-control-input"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-controls="collapseThree"
                      />
                      <label
                        className="custom-control-label pl-2 pl-lg-4"
                        htmlFor="customRadio3"
                      >
                        <span className="h5 m-0">Bank transfer </span>
                        <br />
                        <small className="d-none d-lg-inline-block">
                          You can make payments directly into our bank account
                          and email the bank wire transfer receipt to us. We
                          recommend bank wire transfer for payments exceeding
                          $500,00.
                        </small>
                      </label>
                    </div>
                  </div>
                  <div className="col-3 text-right">
                    <div className="h1 m-0">
                      <i className="fa fa-money" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="collapseThree"
                className="collapse pt-0"
                aria-labelledby="customRadio3"
                data-parent="#accordionPaymentExample"
              >
                <hr className="m-0" />
                <div className="card-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, consectetur ullam dicta explicabo sit corrupti
                  incidunt exercitationem optio quos doloremque neque placeat
                  recusandae obcaecati ab quidem commodi, eaque earum unde?
                </div>
              </div>
            </div>
          </div>
          {/*Buttons*/}
          <div className="py-3">
            <div className="row align-items-center no-gutters">
              <div className="col-6">
                <button
                  className="btn btn-dark btn-primary btn-rounded px-lg-5"
                  onClick={() => dispatch(goToPrevStep())}
                >
                  Delivery
                </button>
              </div>
              <div className="col-6 text-right">
                <button
                  className="btn btn-primary btn-rounded px-lg-5"
                  onClick={() => dispatch(goToNextStep())}
                >
                  Complete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
