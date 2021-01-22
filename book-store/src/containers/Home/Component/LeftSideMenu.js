const LeftSideMenu = (props) =>{
    return(
        <div
                className="col-lg-3 sidebar sidebar-mobile pr-lg-5"
                id="open-mobile-filters"
              >
                <div className="sidebar-content pt-lg-5">
                  {/* Sidebar header */}
                  <div className="sidebar-header clearfix d-lg-none">
                    <button
                      type="button"
                      className="close toggle-show p-3"
                      data-show="open-mobile-filters"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  {/* Search */}
                  <div className="mb-4">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon2"
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-primary btn-sm"
                          type="button"
                          id="button-addon2"
                        >
                          Go!
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Slider range */}
                  {/* <div className="mb-4">
                    <div className="pt-4">
                      <div className="d-flex justify-content-between">
                        <span>Price</span>
                        <span>
                          $ <b className="price-value" />
                        </span>
                      </div>
                      <input
                        type="range"
                        className="custom-range price-range"
                        id="customRange1"
                        min={0}
                        max={500}
                        step={5}
                      />
                      <div className="d-flex justify-content-between">
                        <small>$ 0</small>
                        <small>$ 500</small>
                      </div>
                    </div>
                  </div> */}
                  {/* Categories group */}
                  <div className="mb-4">
                    <a
                      className="btn btn-sm btn-clean px-0 py-1"
                      data-toggle="collapse"
                      href="#collapseExampleCheckbox"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExampleCheckbox"
                    >
                      <span>Categories</span>
                    </a>
                    <div className="collapse show" id="collapseExampleCheckbox">
                      <ul className="list-group list-group-clean pt-2">
                      {props.categories.map(function(category, index){
                                return (
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <button className="btn-primary btn category-button" 
                                                onClick={() =>{props.onClickCategory(category.id)}}>
                                                    {category.ten}
                                        </button>
                                    </li>)
                                
                            })}
                        
                        
                        {/* <li className="list-group-item d-flex justify-content-between align-items-center">
                          <span className="custom-control custom-control-sm custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheckCategory5"
                            />
                            <label
                              className="custom-control-label text-muted"
                              htmlFor="customCheckCategory5"
                            >
                              Collection
                            </label>
                          </span>
                          <span className="badge badge-light badge-pill">
                            50
                          </span>
                        </li>
                       */}
                      </ul>
                    </div>
                  </div>
                  
                </div>
              </div>

    )
}

export default LeftSideMenu;