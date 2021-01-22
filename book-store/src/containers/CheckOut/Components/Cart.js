import React from "react";
import { useDispatch } from "react-redux";
import { goToNextStep } from "../actions";

function CheckOut() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="pre-label font-size-base">Cart items</h2>
            <div
              className="bg-white shadow-sm rounded mb-3 p-3 alert alert-dismissible"
              role="alert"
            >
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
                data-toggle="tooltip"
                data-placement="top"
                title="Delete"
              >
                <span aria-hidden="true">×</span>
              </button>
              <div className="row align-items-center no-gutters p-md-2">
                <div className="col-lg-2">
                  <img
                    src="assets/images//demo/product-1.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-5 pl-lg-3 mb-2 mb-lg-0">
                  <h2 className="h5 mb-0">Coretta</h2>
                  <span>Electronics</span>
                </div>
                <div className="col-6 col-lg-2">
                  <input
                    type="number"
                    defaultValue={1}
                    className="form-control"
                  />
                </div>
                <div className="col-6 col-lg-3 text-right">
                  <div className="h5 mb-0">$490,00</div>
                  <small className="text-muted">
                    <s>$877,00</s>
                  </small>
                </div>
              </div>
            </div>
            <div
              className="bg-white shadow-sm rounded mb-3 p-3 alert alert-dismissible"
              role="alert"
            >
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
                data-toggle="tooltip"
                data-placement="top"
                title="Delete"
              >
                <span aria-hidden="true">×</span>
              </button>
              <div className="row align-items-center no-gutters p-md-2">
                <div className="col-lg-2">
                  <img
                    src="assets/images//demo/product-2.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-5 pl-lg-3 mb-2 mb-lg-0">
                  <h2 className="h5 mb-0">Tonya</h2>
                  <span>Electronics</span>
                </div>
                <div className="col-6 col-lg-2">
                  <input
                    type="number"
                    defaultValue={1}
                    className="form-control"
                  />
                </div>
                <div className="col-6 col-lg-3 text-right">
                  <div className="h5 mb-0">$419,00</div>
                  <small className="text-muted">
                    <s>$958,00</s>
                  </small>
                </div>
              </div>
            </div>
            <div
              className="bg-white shadow-sm rounded mb-3 p-3 alert alert-dismissible"
              role="alert"
            >
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
                data-toggle="tooltip"
                data-placement="top"
                title="Delete"
              >
                <span aria-hidden="true">×</span>
              </button>
              <div className="row align-items-center no-gutters p-md-2">
                <div className="col-lg-2">
                  <img
                    src="assets/images//demo/product-3.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-5 pl-lg-3 mb-2 mb-lg-0">
                  <h2 className="h5 mb-0">Raven</h2>
                  <span>Electronics</span>
                </div>
                <div className="col-6 col-lg-2">
                  <input
                    type="number"
                    defaultValue={1}
                    className="form-control"
                  />
                </div>
                <div className="col-6 col-lg-3 text-right">
                  <div className="h5 mb-0">$502,00</div>
                  <small className="text-muted">
                    <s>$857,00</s>
                  </small>
                </div>
              </div>
            </div>
            {/* Discount and promocode */}
            <div className="bg-white shadow-sm rounded mb-3 p-3">
              <div className="row align-items-center no-gutters p-md-2">
                <div className="col-lg-7">
                  <div className="py-2">
                    <label>Promo code:</label>
                    <input
                      type="text"
                      className="form-control form-control-sm w-auto"
                      name="couponcode"
                      id="couponcode"
                      placeholder="Coupon code"
                    />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="row no-gutters">
                    <div className="col-6">
                      <b>Discount 20%</b>
                    </div>
                    <div className="col-6 text-right">$ 90,00</div>
                    <div className="col-6">
                      <b>Shipping</b>
                    </div>
                    <div className="col-6 text-right">$ 50,00</div>
                    <div className="col-6">
                      <b>Vat</b>
                    </div>
                    <div className="col-6 text-right">$ 49,00</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Total price */}
            <div className="bg-white shadow-sm rounded mb-2 p-3">
              <div className="p-md-4">
                <div className="row no-gutters">
                  <div className="col-6">
                    <div className="h4 mb-0">Total price</div>
                  </div>
                  <div className="col-6 text-right">
                    <div className="h4 mb-0">$ 490,00</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Buttons */}
            <div className="py-3">
              <div className="row align-items-center no-gutters">
                <div className="col-12 text-right">
                  <button
                    className="btn btn-primary btn-rounded px-lg-5"
                    onClick={() => dispatch(goToNextStep())}
                  >
                    Next step
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
