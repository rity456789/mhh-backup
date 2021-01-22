import React from "react";
import { useDispatch } from "react-redux";
import { goToNextStep, goToPrevStep } from "../actions";

function Delivery() {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-8">
          {/* Delivery alert */}
          <div className="alert alert-warning shadow-sm rounded mb-4 p-3 p-lg-4 mb-5 p-md-5">
            <h2 className="h6">Delivery info</h2>
            <p>
              A frequently overlooked, powerful fulfillment option is offering
              local pick-up. If you have a physical location and can allow your
              customers to forgo paying shipping costs altogether, you should!
            </p>
          </div>
          <h2 className="pre-label font-size-base">Select delivery</h2>
          {/* Delivery oneday shipping */}
          <div className="accordion br-sm" id="accordionDeliveryExample">
            <div className="card card-fill mb-3 shadow-sm rounded">
              <div className="card-header p-3 p-md-5">
                <div className="row">
                  <div className="col-md-6">
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        id="customRadio1"
                        name="customRadio"
                        className="custom-control-input"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-controls="collapseOne"
                      />
                      <label
                        className="custom-control-label pl-2 pl-lg-4"
                        htmlFor="customRadio1"
                      >
                        <span className="h5 m-0">One-day Shipping</span>
                        <br />
                        <small>Estimated around 24 hrs</small>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 text-right">
                    <div className="h4 m-0 pt-3 pt-lg-0">$ 199,00</div>
                  </div>
                </div>
              </div>
              <div
                id="collapseOne"
                className="collapse pt-0"
                aria-labelledby="customRadio1"
                data-parent="#accordionDeliveryExample"
              >
                <hr className="m-0" />
                <div className="card-body">
                  Possimus, consectetur ullam dicta explicabo sit corrupti
                  incidunt exercitationem optio quos doloremque neque placeat
                  recusandae obcaecati ab quidem commodi, eaque earum unde?
                </div>
              </div>
            </div>
            {/* Delivery economy shipping */}
            <div className="card card-fill mb-3 shadow-sm rounded">
              <div className="card-header p-3 p-md-5">
                <div className="row">
                  <div className="col-md-6">
                    <div className="custom-control custom-radio">
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
                        <span className="h5 m-0">Economy Shipping</span>
                        <br />
                        <small>You will receive order in 1-3 days</small>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 text-right">
                    <div className="h4 m-0 pt-3 pt-lg-0">$ 99,00</div>
                  </div>
                </div>
              </div>
              <div
                id="collapseTwo"
                className="collapse pt-0"
                aria-labelledby="customRadio2"
                data-parent="#accordionDeliveryExample"
              >
                <hr className="m-0" />
                <div className="card-body">
                  Incidunt exercitationem optio quos doloremque neque placeat
                  recusandae obcaecati ab quidem commodi, eaque earum unde?
                </div>
              </div>
            </div>
            {/* Delivery free shipping */}
            <div className="card card-fill mb-3 shadow-sm rounded">
              <div className="card-header p-3 p-md-5">
                <div className="row">
                  <div className="col-md-6">
                    <div className="custom-control custom-radio">
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
                        <span className="h5 m-0">Free shipping</span>
                        <br />
                        <small>Available for smaller packages</small>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 text-right">
                    <div className="h4 m-0 pt-3 pt-lg-0">Free</div>
                  </div>
                </div>
              </div>
              <div
                id="collapseThree"
                className="collapse pt-0"
                aria-labelledby="customRadio3"
                data-parent="#accordionDeliveryExample"
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
          {/* Delivery buttons */}
          <div className="py-3">
            <div className="row align-items-center no-gutters">
              <div className="col-6">
                <button
                  className="btn btn-dark btn-primary btn-rounded px-lg-5"
                  onClick={() => dispatch(goToPrevStep())}
                >
                  Back
                </button>
              </div>
              <div className="col-6 text-right">
                <button
                  className="btn btn-primary btn-rounded px-lg-5"
                  onClick={() => dispatch(goToNextStep())}
                >
                  Proceed to payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
