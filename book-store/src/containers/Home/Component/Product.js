const Product = (props) =>{
    return(
        <div className="col-6 col-xl-4">
                    <div className="card card-fill mb-2 mb-lg-4">
                      <div className="card-image">
                        <img
                        
                          src={props.product.hinhAnh}
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="card-body p-2 p-lg-3 text-center">
                        <h4 className="card-title mb-0">
                          <a href="product-flat.html">{props.product.ten}</a>
                        </h4>
                        <small className="pre-label text-muted">
                          <span>{props.product.gia} VND</span>
                         
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
    );
}

export default Product;