import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetStep } from "../actions";

function Receipt() {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-8">
          <div
            className="alert alert-primary shadow-sm rounded alert-dismissible fade show p-3 p-lg-4 mb-5 p-md-5"
            role="alert"
          >
            <h2 className="h6 mb-0">Your order is completed!</h2>
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          {/* Receipt shipping info */}
          <h2 className="pre-label font-size-base">Shipping info</h2>
          <div className="bg-white shadow-sm rounded mb-3 p-3 p-md-5">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <small className="pre-label">Name</small>
                  <p>John Doe</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <small className="pre-label">Email</small>
                  <p>johndoe@company.com</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <small className="pre-label">Phone</small>
                  <p>+122 523 352</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <small className="pre-label">Zip</small>
                  <p>94107</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <small className="pre-label">City</small>
                  <p>San Francisco, California</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <small className="pre-label">Address</small>
                  <p>795 Folsom Ave, Suite 600</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <small className="pre-label">Company name</small>
                  <p>Divano Corporation</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <small className="pre-label">Company phone</small>
                  <p>+122 333 6665</p>
                </div>
              </div>
            </div>
          </div>
          {/* Receipt Order details */}
          <h2 className="pre-label font-size-base">Order details</h2>
          <div className="bg-white shadow-sm rounded mb-3 p-3 p-md-5">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <small className="pre-label">Order no.</small>
                  <p>52522-63259226</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <small className="pre-label">Transaction ID</small>
                  <p>2265996</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <small className="pre-label">Order date</small>
                  <p>20/04/2020</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <small className="pre-label">Shipping arrival</small>
                  <p>25/04/2020</p>
                </div>
              </div>
            </div>
          </div>
          {/* Receipt Payment details */}
          <h2 className="pre-label font-size-base">Payment details</h2>
          <div className="bg-white shadow-sm rounded mb-3 p-3 p-md-5">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <small className="pre-label">Transaction time</small>
                  <p>20/04/2020 at 20:50</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <small className="pre-label">Amount</small>
                  <p>$ 1259,00</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <small className="pre-label">Total items</small>
                  <p>4</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <small className="pre-label">Cart details</small>
                  <p>**** **** **** 9656</p>
                </div>
              </div>
            </div>
          </div>
          {/* Buttons */}
          <div className="py-3">
            <div className="row align-items-center no-gutters">
              <div className="col-12 text-right">
                <NavLink
                  to="/"
                  className="btn btn-primary btn-rounded px-lg-5"
                  onClick={() => dispatch(resetStep())}
                >
                  Go home
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Receipt;
