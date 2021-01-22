import React from "react";
import background from "../../assets/images/banner-1.jpg";
import { NavLink } from "react-router-dom";

function MyShop() {
  return (
    <>
      <div>
        <section
          className="box box-image bg-light text-white"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="container">
            <header className="wow fadeInUp" data-wow-delay=".1s">
              <div className="row justify-content-center pt-5 text-center">
                <div className="col-lg-8">
                  <h1 className="mb-0">Everything you want to sell</h1>
                  <p>
                    Upload your book, which are wonderful and have reasonable
                    price
                  </p>
                </div>
              </div>
            </header>
          </div>
        </section>
        {/* Products grid */}
        <section className="bg-white p-0 sider sider-left">
          <div className="container">
            <div className="row">
              {/* Products content */}
              <div className="col-lg-12 bg-white pl-lg-5">
                {/* Products header */}
                <div className="pt-3 pt-lg-5 mb-3 mb-lg-4">
                  <div className="d-flex justify-content-end">
                    {/* Right */}
                    <NavLink
                      to="add-book"
                      className="btn btn-sm btn-primary btn-rounded ml-lg-4 px-3"
                    >
                      <i className="icon icon-file-add" /> Add book
                    </NavLink>
                  </div>
                </div>
                {/* Products collection */}
                <div className="row gutters-mobile">
                  <div className="col-6 col-xl-4">
                    <div className="card card-fill mb-2 mb-lg-4">
                      <div className="card-image">
                        <img
                          src="assets/images//demo/product-1.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="card-body p-2 p-lg-3 text-center">
                        <h4 className="card-title mb-0">
                          <a href="product-flat.html">Coretta</a>
                        </h4>
                        <small className="pre-label text-muted">
                          <span>$490</span>
                          <s>$877</s>
                        </small>
                      </div>
                      <div className="px-3 pb-3">
                        <div className="d-flex justify-content-between">
                          <a
                            href="#"
                            className="px-1"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Whishlist"
                          >
                            <i className="icon icon-heart font-size-lg text-muted" />
                          </a>
                          <a
                            href="#"
                            className="px-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to cart"
                          >
                            <i className="icon icon-cart font-size-lg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-xl-4">
                    <div className="card card-fill mb-2 mb-lg-4">
                      <div className="card-image">
                        <img
                          src="assets/images//demo/product-2.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <span className="card-badge badge badge-danger">
                          50%
                        </span>
                      </div>
                      <div className="card-body p-2 p-lg-3 text-center">
                        <h4 className="card-title mb-0">
                          <a href="product-flat.html">Tonya</a>
                        </h4>
                        <small className="pre-label text-muted">
                          <span>$419</span>
                          <s>$958</s>
                        </small>
                      </div>
                      <div className="px-3 pb-3">
                        <div className="d-flex justify-content-between">
                          <a
                            href="#"
                            className="px-1"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Whishlist"
                          >
                            <i className="icon icon-heart font-size-lg text-muted" />
                          </a>
                          <a
                            href="#"
                            className="px-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to cart"
                          >
                            <i className="icon icon-cart font-size-lg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-xl-4">
                    <div className="card card-fill mb-2 mb-lg-4">
                      <div className="card-image">
                        <img
                          src="assets/images//demo/product-3.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="card-body p-2 p-lg-3 text-center">
                        <h4 className="card-title mb-0">
                          <a href="product-flat.html">Raven</a>
                        </h4>
                        <small className="pre-label text-muted">
                          <span>$502</span>
                          <s>$857</s>
                        </small>
                      </div>
                      <div className="px-3 pb-3">
                        <div className="d-flex justify-content-between">
                          <a
                            href="#"
                            className="px-1"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Whishlist"
                          >
                            <i className="icon icon-heart font-size-lg text-muted" />
                          </a>
                          <a
                            href="#"
                            className="px-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to cart"
                          >
                            <i className="icon icon-cart font-size-lg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-xl-4">
                    <div className="card card-fill mb-2 mb-lg-4">
                      <div className="card-image">
                        <img
                          src="assets/images//demo/product-4.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <span className="card-badge badge badge-dark">
                          Last offer
                        </span>
                      </div>
                      <div className="card-body p-2 p-lg-3 text-center">
                        <h4 className="card-title mb-0">
                          <a href="product-flat.html">Mufi</a>
                        </h4>
                        <small className="pre-label text-muted">
                          <span>$584</span>
                          <s>$838</s>
                        </small>
                      </div>
                      <div className="px-3 pb-3">
                        <div className="d-flex justify-content-between">
                          <a
                            href="#"
                            className="px-1"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Whishlist"
                          >
                            <i className="icon icon-heart font-size-lg text-muted" />
                          </a>
                          <a
                            href="#"
                            className="px-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to cart"
                          >
                            <i className="icon icon-cart font-size-lg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-xl-4">
                    <div className="card card-fill mb-2 mb-lg-4">
                      <div className="card-image">
                        <img
                          src="assets/images//demo/product-5.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="card-body p-2 p-lg-3 text-center">
                        <h4 className="card-title mb-0">
                          <a href="product-flat.html">Audrie</a>
                        </h4>
                        <small className="pre-label text-muted">
                          <span>$470</span>
                          <s>$937</s>
                        </small>
                      </div>
                      <div className="px-3 pb-3">
                        <div className="d-flex justify-content-between">
                          <a
                            href="#"
                            className="px-1"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Whishlist"
                          >
                            <i className="icon icon-heart font-size-lg text-muted" />
                          </a>
                          <a
                            href="#"
                            className="px-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to cart"
                          >
                            <i className="icon icon-cart font-size-lg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-xl-4">
                    <div className="card card-fill mb-2 mb-lg-4">
                      <div className="card-image">
                        <img
                          src="assets/images//demo/product-6.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="card-body p-2 p-lg-3 text-center">
                        <h4 className="card-title mb-0">
                          <a href="product-flat.html">Kira</a>
                        </h4>
                        <small className="pre-label text-muted">
                          <span>$579</span>
                          <s>$915</s>
                        </small>
                      </div>
                      <div className="px-3 pb-3">
                        <div className="d-flex justify-content-between">
                          <a
                            href="#"
                            className="px-1"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Whishlist"
                          >
                            <i className="icon icon-heart font-size-lg text-muted" />
                          </a>
                          <a
                            href="#"
                            className="px-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to cart"
                          >
                            <i className="icon icon-cart font-size-lg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-xl-4">
                    <div className="card card-fill mb-2 mb-lg-4">
                      <div className="card-image">
                        <img
                          src="assets/images//demo/product-7.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="card-body p-2 p-lg-3 text-center">
                        <h4 className="card-title mb-0">
                          <a href="product-flat.html">Dianne</a>
                        </h4>
                        <small className="pre-label text-muted">
                          <span>$526</span>
                          <s>$1111</s>
                        </small>
                      </div>
                      <div className="px-3 pb-3">
                        <div className="d-flex justify-content-between">
                          <a
                            href="#"
                            className="px-1"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Whishlist"
                          >
                            <i className="icon icon-heart font-size-lg text-muted" />
                          </a>
                          <a
                            href="#"
                            className="px-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to cart"
                          >
                            <i className="icon icon-cart font-size-lg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-xl-4">
                    <div className="card card-fill mb-2 mb-lg-4">
                      <div className="card-image">
                        <img
                          src="assets/images//demo/product-8.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <span className="card-badge badge badge-success">
                          New
                        </span>
                      </div>
                      <div className="card-body p-2 p-lg-3 text-center">
                        <h4 className="card-title mb-0">
                          <a href="product-flat.html">Chery</a>
                        </h4>
                        <small className="pre-label text-muted">
                          <span>$424</span>
                          <s>$901</s>
                        </small>
                      </div>
                      <div className="px-3 pb-3">
                        <div className="d-flex justify-content-between">
                          <a
                            href="#"
                            className="px-1"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Whishlist"
                          >
                            <i className="icon icon-heart font-size-lg text-muted" />
                          </a>
                          <a
                            href="#"
                            className="px-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to cart"
                          >
                            <i className="icon icon-cart font-size-lg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-xl-4">
                    <div className="card card-fill mb-2 mb-lg-4">
                      <div className="card-image">
                        <img
                          src="assets/images//demo/product-9.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="card-body p-2 p-lg-3 text-center">
                        <h4 className="card-title mb-0">
                          <a href="product-flat.html">Willi</a>
                        </h4>
                        <small className="pre-label text-muted">
                          <span>$494</span>
                          <s>$1088</s>
                        </small>
                      </div>
                      <div className="px-3 pb-3">
                        <div className="d-flex justify-content-between">
                          <a
                            href="#"
                            className="px-1"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Whishlist"
                          >
                            <i className="icon icon-heart font-size-lg text-muted" />
                          </a>
                          <a
                            href="#"
                            className="px-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to cart"
                          >
                            <i className="icon icon-cart font-size-lg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-xl-4">
                    <div className="card card-fill mb-2 mb-lg-4">
                      <div className="card-image">
                        <img
                          src="assets/images//demo/product-10.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="card-body p-2 p-lg-3 text-center">
                        <h4 className="card-title mb-0">
                          <a href="product-flat.html">Ofelia</a>
                        </h4>
                        <small className="pre-label text-muted">
                          <span>$625</span>
                          <s>$876</s>
                        </small>
                      </div>
                      <div className="px-3 pb-3">
                        <div className="d-flex justify-content-between">
                          <a
                            href="#"
                            className="px-1"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Whishlist"
                          >
                            <i className="icon icon-heart font-size-lg text-muted" />
                          </a>
                          <a
                            href="#"
                            className="px-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to cart"
                          >
                            <i className="icon icon-cart font-size-lg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-xl-4">
                    <div className="card card-fill mb-2 mb-lg-4">
                      <div className="card-image">
                        <img
                          src="assets/images//demo/product-11.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="card-body p-2 p-lg-3 text-center">
                        <h4 className="card-title mb-0">
                          <a href="product-flat.html">Janeta</a>
                        </h4>
                        <small className="pre-label text-muted">
                          <span>$626</span>
                          <s>$1140</s>
                        </small>
                      </div>
                      <div className="px-3 pb-3">
                        <div className="d-flex justify-content-between">
                          <a
                            href="#"
                            className="px-1"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Whishlist"
                          >
                            <i className="icon icon-heart font-size-lg text-muted" />
                          </a>
                          <a
                            href="#"
                            className="px-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to cart"
                          >
                            <i className="icon icon-cart font-size-lg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-xl-4">
                    <div className="card card-fill mb-2 mb-lg-4">
                      <div className="card-image">
                        <img
                          src="assets/images//demo/product-12.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="card-body p-2 p-lg-3 text-center">
                        <h4 className="card-title mb-0">
                          <a href="product-flat.html">Hannie</a>
                        </h4>
                        <small className="pre-label text-muted">
                          <span>$518</span>
                          <s>$803</s>
                        </small>
                      </div>
                      <div className="px-3 pb-3">
                        <div className="d-flex justify-content-between">
                          <a
                            href="#"
                            className="px-1"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Whishlist"
                          >
                            <i className="icon icon-heart font-size-lg text-muted" />
                          </a>
                          <a
                            href="#"
                            className="px-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to cart"
                          >
                            <i className="icon icon-cart font-size-lg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pb-3 pb-lg-5">
                  {/* Pagination */}
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center py-3 py-lg-4">
                      <li className="page-item disabled"></li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          4
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default MyShop;
