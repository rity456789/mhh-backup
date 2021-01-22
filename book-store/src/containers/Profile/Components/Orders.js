import React from "react";

function Orders() {
  return (
    <div className="col-lg-9 pt-lg-4">
      <h2 className="pre-label font-size-base">Orders in process</h2>
      <div className="mb-3 mb-lg-5">
        <div className="accordion br-sm" id="accordionOrdersExample">
          <div className="card card-fill mb-3 shadow-sm rounded">
            <div
              className="card-header bg-white py-4 p-2 p-md-4 pointer"
              id="heading-2"
              role="button"
              data-toggle="collapse"
              data-target="#collapseOne2"
              aria-expanded="true"
              aria-controls="collapseOne2"
            >
              <div className="row">
                <div className="col-xl-4">
                  <i className="icon icon-tag mr-3" />
                  <span>567585806-7</span>
                </div>
                <div className="col-6 col-xl-3">
                  <i className="icon icon-clock mr-3" />
                  <span>07 Aug, 2020</span>
                </div>
                <div className="col-6 col-xl-3 text-right">
                  <span>$419,00</span>
                </div>
                <div className="col-xl-2 text-center pt-3 pt-xl-0">
                  <small className="p-1 bg-light-success rounded-sm text-white btn-block text-uppercase">
                    Delivered
                  </small>
                </div>
              </div>
            </div>
            <div
              id="collapseOne2"
              className="collapse pt-0"
              aria-labelledby="heading-2"
              data-parent="#accordionOrdersExample"
            >
              <hr className="m-0" />
              <div className="card-body bg-white">
                <div className="mb-3 mb-lg-4 bg-light shadow-sm px-4 py-3">
                  <div className="row align-items-center no-gutters p-md-2">
                    <div className="col-lg-2">
                      <img
                        src="assets/images/demo/product-1.png"
                        className="img-fluid br-sm shadow-sm"
                        alt="Image title"
                      />
                    </div>
                    <div className="col-lg-5 pl-lg-3 py-2 py-lg-0">
                      <div>
                        <strong>Coretta</strong>
                      </div>
                      <small className="text-muted">Electronics</small>
                    </div>
                    <div className="col-6 col-lg-2">
                      <div>
                        <small className="pre-label">Qty</small>
                      </div>
                      <span>2</span>
                    </div>
                    <div className="col-6 col-lg-3 text-right">
                      <div>
                        <small className="pre-label">Total</small>
                      </div>
                      <span>$490,00</span>
                    </div>
                  </div>
                </div>
                <div className="mb-3 mb-lg-4 bg-light shadow-sm px-4 py-3">
                  <div className="row align-items-center no-gutters p-md-2">
                    <div className="col-lg-2">
                      <img
                        src="assets/images/demo/product-2.png"
                        className="img-fluid br-sm shadow-sm"
                        alt="Image title"
                      />
                    </div>
                    <div className="col-lg-5 pl-lg-3 py-2 py-lg-0">
                      <div>
                        <strong>Tonya</strong>
                      </div>
                      <small className="text-muted">Electronics</small>
                    </div>
                    <div className="col-6 col-lg-2">
                      <div>
                        <small className="pre-label">Qty</small>
                      </div>
                      <span>2</span>
                    </div>
                    <div className="col-6 col-lg-3 text-right">
                      <div>
                        <small className="pre-label">Total</small>
                      </div>
                      <span>$419,00</span>
                    </div>
                  </div>
                </div>
                <div className="mb-3 mb-lg-4 bg-light shadow-sm px-4 py-3">
                  <div className="row align-items-center no-gutters p-md-2">
                    <div className="col-lg-2">
                      <img
                        src="assets/images/demo/product-3.png"
                        className="img-fluid br-sm shadow-sm"
                        alt="Image title"
                      />
                    </div>
                    <div className="col-lg-5 pl-lg-3 py-2 py-lg-0">
                      <div>
                        <strong>Raven</strong>
                      </div>
                      <small className="text-muted">Electronics</small>
                    </div>
                    <div className="col-6 col-lg-2">
                      <div>
                        <small className="pre-label">Qty</small>
                      </div>
                      <span>2</span>
                    </div>
                    <div className="col-6 col-lg-3 text-right">
                      <div>
                        <small className="pre-label">Total</small>
                      </div>
                      <span>$502,00</span>
                    </div>
                  </div>
                </div>
                <div className="mb-3 mb-lg-4 bg-light shadow-sm px-4 py-3">
                  <div className="row align-items-center no-gutters p-md-2">
                    <div className="col-lg-2">
                      <img
                        src="assets/images/demo/product-4.png"
                        className="img-fluid br-sm shadow-sm"
                        alt="Image title"
                      />
                    </div>
                    <div className="col-lg-5 pl-lg-3 py-2 py-lg-0">
                      <div>
                        <strong>Mufi</strong>
                      </div>
                      <small className="text-muted">Electronics</small>
                    </div>
                    <div className="col-6 col-lg-2">
                      <div>
                        <small className="pre-label">Qty</small>
                      </div>
                      <span>2</span>
                    </div>
                    <div className="col-6 col-lg-3 text-right">
                      <div>
                        <small className="pre-label">Total</small>
                      </div>
                      <span>$584,00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card card-fill mb-3 shadow-sm rounded">
            <div
              className="card-header bg-white py-4 p-2 p-md-4 pointer"
              id="heading-3"
              role="button"
              data-toggle="collapse"
              data-target="#collapseOne3"
              aria-expanded="true"
              aria-controls="collapseOne3"
            >
              <div className="row">
                <div className="col-xl-4">
                  <i className="icon icon-tag mr-3" />
                  <span>571792662-6</span>
                </div>
                <div className="col-6 col-xl-3">
                  <i className="icon icon-clock mr-3" />
                  <span>31 Aug, 2020</span>
                </div>
                <div className="col-6 col-xl-3 text-right">
                  <span>$502,00</span>
                </div>
                <div className="col-xl-2 text-center pt-3 pt-xl-0">
                  <small className="p-1 bg-light-danger rounded-sm text-white btn-block text-uppercase">
                    Canceled
                  </small>
                </div>
              </div>
            </div>
            <div
              id="collapseOne3"
              className="collapse pt-0"
              aria-labelledby="heading-3"
              data-parent="#accordionOrdersExample"
            >
              <hr className="m-0" />
              <div className="card-body bg-white">
                <div className="mb-3 mb-lg-4 bg-light shadow-sm px-4 py-3">
                  <div className="row align-items-center no-gutters p-md-2">
                    <div className="col-lg-2">
                      <img
                        src="assets/images/demo/product-1.png"
                        className="img-fluid br-sm shadow-sm"
                        alt="Image title"
                      />
                    </div>
                    <div className="col-lg-5 pl-lg-3 py-2 py-lg-0">
                      <div>
                        <strong>Coretta</strong>
                      </div>
                      <small className="text-muted">Electronics</small>
                    </div>
                    <div className="col-6 col-lg-2">
                      <div>
                        <small className="pre-label">Qty</small>
                      </div>
                      <span>2</span>
                    </div>
                    <div className="col-6 col-lg-3 text-right">
                      <div>
                        <small className="pre-label">Total</small>
                      </div>
                      <span>$490,00</span>
                    </div>
                  </div>
                </div>
                <div className="mb-3 mb-lg-4 bg-light shadow-sm px-4 py-3">
                  <div className="row align-items-center no-gutters p-md-2">
                    <div className="col-lg-2">
                      <img
                        src="assets/images/demo/product-2.png"
                        className="img-fluid br-sm shadow-sm"
                        alt="Image title"
                      />
                    </div>
                    <div className="col-lg-5 pl-lg-3 py-2 py-lg-0">
                      <div>
                        <strong>Tonya</strong>
                      </div>
                      <small className="text-muted">Electronics</small>
                    </div>
                    <div className="col-6 col-lg-2">
                      <div>
                        <small className="pre-label">Qty</small>
                      </div>
                      <span>2</span>
                    </div>
                    <div className="col-6 col-lg-3 text-right">
                      <div>
                        <small className="pre-label">Total</small>
                      </div>
                      <span>$419,00</span>
                    </div>
                  </div>
                </div>
                <div className="mb-3 mb-lg-4 bg-light shadow-sm px-4 py-3">
                  <div className="row align-items-center no-gutters p-md-2">
                    <div className="col-lg-2">
                      <img
                        src="assets/images/demo/product-3.png"
                        className="img-fluid br-sm shadow-sm"
                        alt="Image title"
                      />
                    </div>
                    <div className="col-lg-5 pl-lg-3 py-2 py-lg-0">
                      <div>
                        <strong>Raven</strong>
                      </div>
                      <small className="text-muted">Electronics</small>
                    </div>
                    <div className="col-6 col-lg-2">
                      <div>
                        <small className="pre-label">Qty</small>
                      </div>
                      <span>2</span>
                    </div>
                    <div className="col-6 col-lg-3 text-right">
                      <div>
                        <small className="pre-label">Total</small>
                      </div>
                      <span>$502,00</span>
                    </div>
                  </div>
                </div>
                <div className="mb-3 mb-lg-4 bg-light shadow-sm px-4 py-3">
                  <div className="row align-items-center no-gutters p-md-2">
                    <div className="col-lg-2">
                      <img
                        src="assets/images/demo/product-4.png"
                        className="img-fluid br-sm shadow-sm"
                        alt="Image title"
                      />
                    </div>
                    <div className="col-lg-5 pl-lg-3 py-2 py-lg-0">
                      <div>
                        <strong>Mufi</strong>
                      </div>
                      <small className="text-muted">Electronics</small>
                    </div>
                    <div className="col-6 col-lg-2">
                      <div>
                        <small className="pre-label">Qty</small>
                      </div>
                      <span>2</span>
                    </div>
                    <div className="col-6 col-lg-3 text-right">
                      <div>
                        <small className="pre-label">Total</small>
                      </div>
                      <span>$584,00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card card-fill mb-3 shadow-sm rounded">
            <div
              className="card-header bg-white py-4 p-2 p-md-4 pointer"
              id="heading-4"
              role="button"
              data-toggle="collapse"
              data-target="#collapseOne4"
              aria-expanded="true"
              aria-controls="collapseOne4"
            >
              <div className="row">
                <div className="col-xl-4">
                  <i className="icon icon-tag mr-3" />
                  <span>905541940-0</span>
                </div>
                <div className="col-6 col-xl-3">
                  <i className="icon icon-clock mr-3" />
                  <span>13 Aug, 2020</span>
                </div>
                <div className="col-6 col-xl-3 text-right">
                  <span>$584,00</span>
                </div>
                <div className="col-xl-2 text-center pt-3 pt-xl-0">
                  <small className="p-1 bg-light-primary rounded-sm text-white btn-block text-uppercase">
                    pending
                  </small>
                </div>
              </div>
            </div>
            <div
              id="collapseOne4"
              className="collapse pt-0"
              aria-labelledby="heading-4"
              data-parent="#accordionOrdersExample"
            >
              <hr className="m-0" />
              <div className="card-body bg-white">
                <div className="mb-3 mb-lg-4 bg-light shadow-sm px-4 py-3">
                  <div className="row align-items-center no-gutters p-md-2">
                    <div className="col-lg-2">
                      <img
                        src="assets/images/demo/product-1.png"
                        className="img-fluid br-sm shadow-sm"
                        alt="Image title"
                      />
                    </div>
                    <div className="col-lg-5 pl-lg-3 py-2 py-lg-0">
                      <div>
                        <strong>Coretta</strong>
                      </div>
                      <small className="text-muted">Electronics</small>
                    </div>
                    <div className="col-6 col-lg-2">
                      <div>
                        <small className="pre-label">Qty</small>
                      </div>
                      <span>2</span>
                    </div>
                    <div className="col-6 col-lg-3 text-right">
                      <div>
                        <small className="pre-label">Total</small>
                      </div>
                      <span>$490,00</span>
                    </div>
                  </div>
                </div>
                <div className="mb-3 mb-lg-4 bg-light shadow-sm px-4 py-3">
                  <div className="row align-items-center no-gutters p-md-2">
                    <div className="col-lg-2">
                      <img
                        src="assets/images/demo/product-2.png"
                        className="img-fluid br-sm shadow-sm"
                        alt="Image title"
                      />
                    </div>
                    <div className="col-lg-5 pl-lg-3 py-2 py-lg-0">
                      <div>
                        <strong>Tonya</strong>
                      </div>
                      <small className="text-muted">Electronics</small>
                    </div>
                    <div className="col-6 col-lg-2">
                      <div>
                        <small className="pre-label">Qty</small>
                      </div>
                      <span>2</span>
                    </div>
                    <div className="col-6 col-lg-3 text-right">
                      <div>
                        <small className="pre-label">Total</small>
                      </div>
                      <span>$419,00</span>
                    </div>
                  </div>
                </div>
                <div className="mb-3 mb-lg-4 bg-light shadow-sm px-4 py-3">
                  <div className="row align-items-center no-gutters p-md-2">
                    <div className="col-lg-2">
                      <img
                        src="assets/images/demo/product-3.png"
                        className="img-fluid br-sm shadow-sm"
                        alt="Image title"
                      />
                    </div>
                    <div className="col-lg-5 pl-lg-3 py-2 py-lg-0">
                      <div>
                        <strong>Raven</strong>
                      </div>
                      <small className="text-muted">Electronics</small>
                    </div>
                    <div className="col-6 col-lg-2">
                      <div>
                        <small className="pre-label">Qty</small>
                      </div>
                      <span>2</span>
                    </div>
                    <div className="col-6 col-lg-3 text-right">
                      <div>
                        <small className="pre-label">Total</small>
                      </div>
                      <span>$502,00</span>
                    </div>
                  </div>
                </div>
                <div className="mb-3 mb-lg-4 bg-light shadow-sm px-4 py-3">
                  <div className="row align-items-center no-gutters p-md-2">
                    <div className="col-lg-2">
                      <img
                        src="assets/images/demo/product-4.png"
                        className="img-fluid br-sm shadow-sm"
                        alt="Image title"
                      />
                    </div>
                    <div className="col-lg-5 pl-lg-3 py-2 py-lg-0">
                      <div>
                        <strong>Mufi</strong>
                      </div>
                      <small className="text-muted">Electronics</small>
                    </div>
                    <div className="col-6 col-lg-2">
                      <div>
                        <small className="pre-label">Qty</small>
                      </div>
                      <span>2</span>
                    </div>
                    <div className="col-6 col-lg-3 text-right">
                      <div>
                        <small className="pre-label">Total</small>
                      </div>
                      <span>$584,00</span>
                    </div>
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

export default Orders;
