export default function ProductHeader(){
    return(
        <>
            {/* Products header */}
            <div className="pt-3 pt-lg-5 mb-3 mb-lg-4">
                  <div className="d-flex justify-content-between">
                    {/* Left */}
                    <div>
                      {/* <div className="form-inline">
                        
                        <div className="form-group mb-0">
                          <select
                            className="form-control form-control-sm"
                            id="exampleFormControlSelect1"
                          >
                            <option>20</option>
                            <option>50</option>
                            <option>100</option>
                            <option>All</option>
                          </select>
                          <label
                            htmlFor="exampleFormControlSelect1"
                            className="ml-3 d-none d-lg-block"
                          >
                            <small>Showing all 24 of 128 products</small>
                          </label>
                        </div>
                      </div> */}
                    </div>
                    {/* Right */}
                    <div>
                      <div className="form-inline">
                        <div className="mr-2">
                          <a
                            href="products-grid-flat.html"
                            className="btn btn-sm  text-primary"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Grid view"
                          >
                            <i className="fa fa-th-large" />
                          </a>
                          <a
                            href="products-list-flat.html"
                            className="btn btn-sm "
                            data-toggle="tooltip"
                            data-placement="top"
                            title="List view"
                          >
                            <i className="fa fa-list-ul" />
                          </a>
                        </div>
                        <div className="form-group mb-0">
                          <label
                            htmlFor="exampleFormControlSelect2"
                            className="mr-3 d-none d-lg-block"
                          >
                            <small>Sort by</small>
                          </label>
                          <select
                            className="form-control form-control-sm"
                            id="exampleFormControlSelect2"
                          >
                            <option>Name</option>
                            <option>Price</option>
                          </select>
                        </div>
                        <div className="d-lg-none ml-2">
                          <button
                            className="btn btn-primary btn-sm toggle-show"
                            data-show="open-mobile-filters"
                          >
                            <strong>
                              <i className="icon icon-text-align-center" />
                              <span className="d-none d-sm-inline-block">
                                Filters
                              </span>
                            </strong>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
        </>
    )
}