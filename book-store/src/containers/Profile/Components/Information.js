import React from "react";

function Information() {
  return (
    <div className="col-lg-9 pt-lg-4">
      <h2 className="pre-label font-size-base">Avatar settings</h2>
      <div className="bg-white p-4 p-lg-5 br-sm shadow-sm mb-3 mb-lg-5">
        <div>
          <div className="media d-block d-sm-flex align-items-center">
            <img
              src="assets/images//demo/user-5.jpg"
              className="d-block rounded-circle mx-auto mb-3 mb-sm-0"
              width={110}
              alt="John Doe"
            />
            <div className="media-body pl-sm-3 text-center text-sm-left">
              <button
                className="btn btn-rounded btn-outline-primary btn-sm px-3 mb-2"
                type="button"
              >
                <i className="icon icon-sync" /> Change avatar
              </button>
              <div>
                <small className="text-muted">
                  Upload JPG, GIF or PNG image. 100 x 100 required.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="pre-label font-size-base">Profile settings</h2>
      <div className="bg-white p-4 p-lg-5 br-sm shadow-sm mb-3 mb-lg-5">
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label className="pre-label pre-label-sm" htmlFor="account-fn">
                First Name
              </label>
              <input
                className="form-control form-control-simple"
                type="text"
                id="account-fn"
                defaultValue="John"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="pre-label pre-label-sm" htmlFor="account-ln">
                Last Name
              </label>
              <input
                className="form-control form-control-simple"
                type="text"
                id="account-ln"
                defaultValue="Dow"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="pre-label pre-label-sm" htmlFor="account-email">
                Email address
              </label>
              <input
                className="form-control form-control-simple"
                type="text"
                id="account-email"
                defaultValue="j.doe@example.com"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label
                className="pre-label pre-label-sm"
                htmlFor="account-username"
              >
                Username
              </label>
              <div className="input-group">
                <input
                  className="form-control form-control-simple"
                  type="text"
                  id="account-username"
                  defaultValue="john_doe"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="form-group">
              <label
                className="pre-label pre-label-sm"
                htmlFor="account-address"
              >
                Address
              </label>
              <div className="input-group">
                <input
                  className="form-control form-control-simple"
                  type="text"
                  id="account-address"
                  defaultValue="124 duong so 1A"
                />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <div className="custom-control custom-checkbox d-block">
                <input
                  className="custom-control-input"
                  type="checkbox"
                  id="show-email"
                  defaultChecked
                />
                <label className="custom-control-label" htmlFor="show-email">
                  Show my email to registered users
                </label>
              </div>
              <button
                className="btn btn-rounded btn-outline-primary btn-sm px-3 mt-3 mt-sm-0"
                type="button"
              >
                <i className="fa fa-save mr-2" />
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
