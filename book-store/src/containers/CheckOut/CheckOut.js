import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cart from "./Components/Cart";
import Delivery from "./Components/Delivery";
import Payment from "./Components/Payment";
import Receipt from "./Components/Receipt";

function CheckOut() {
  const step = useSelector((state) => state.checkOutReducer.step);
  return (
    <section className="pt-0">
      {/* Checkout steps */}
      <div className="pt-3 pt-lg-4 pb-5 pb-lg-6 mb-2 mb-lg-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="steps steps-sm">
                <ul className="row">
                  <li className={`col ${step === 1 ? "current" : ""}`}>
                    <span className="step-item" data-text="Checkout">
                      <span>1</span>
                    </span>
                  </li>
                  <li className={`col ${step === 2 ? "current" : ""}`}>
                    <span className="step-item" data-text="Delivery">
                      <span>2</span>
                    </span>
                  </li>
                  <li className={`col ${step === 3 ? "current" : ""}`}>
                    <span className="step-item" data-text="Payment">
                      <span>3</span>
                    </span>
                  </li>
                  <li className={`col ${step === 4 ? "current" : ""}`}>
                    <span className="step-item" data-text="Receipt">
                      <span>4</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cart items */}
      {step === 1 && <Cart></Cart>}
      {step === 2 && <Delivery></Delivery>}
      {step === 3 && <Payment></Payment>}
      {step === 4 && <Receipt></Receipt>}
    </section>
  );
}

export default CheckOut;
