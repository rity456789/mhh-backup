import React from "react";

function Notifications() {
  return (
    <div className="col-lg-9 pt-lg-4">
      <h2 className="pre-label font-size-base">Notifications settings</h2>
      <div className="bg-white p-4 p-lg-5 br-sm shadow-sm mb-3 mb-lg-5">
        <div id="notification-settings">
          <div className="mb-5">
            <p className="pre-label pre-label-sm">General alerts</p>
            <div className="border-bottom py-3">
              <div className="custom-control custom-switch">
                <input
                  className="custom-control-input"
                  type="checkbox"
                  id="daily-summary"
                  defaultChecked
                />
                <label
                  className="custom-control-label text-heading"
                  htmlFor="daily-summary"
                >
                  Daily summary emails
                </label>
              </div>
              <small className="form-text">
                Send me a daily summary of all products sold, commented or
                reviewed
              </small>
            </div>
            <div className="border-bottom py-3">
              <div className="custom-control custom-switch">
                <input
                  className="custom-control-input"
                  type="checkbox"
                  id="activity"
                />
                <label
                  className="custom-control-label text-heading"
                  htmlFor="activity"
                >
                  Reminders
                </label>
              </div>
              <small className="form-text">
                Send me a daily summary of all products sold, commented or
                reviewed
              </small>
            </div>
            <div className="border-bottom py-3">
              <div className="custom-control custom-switch">
                <input
                  className="custom-control-input"
                  type="checkbox"
                  id="review-commen"
                />
                <label
                  className="custom-control-label text-heading"
                  htmlFor="review-commen"
                >
                  Review notification
                </label>
              </div>
              <small className="form-text">
                Send an email when someone review on one of my products
              </small>
            </div>
          </div>
          <div className="mb-5">
            <p className="pre-label pre-label-sm">Product alerts</p>
            <div className="border-bottom py-3">
              <div className="custom-control custom-switch">
                <input
                  className="custom-control-input"
                  type="checkbox"
                  id="prod-notification"
                  defaultChecked
                />
                <label
                  className="custom-control-label text-heading"
                  htmlFor="prod-notification"
                >
                  Product sold notifications
                </label>
              </div>
              <small className="form-text">
                Send an email when someone purchased one of my products
              </small>
            </div>
            <div className="border-bottom py-3">
              <div className="custom-control custom-switch">
                <input
                  className="custom-control-input"
                  type="checkbox"
                  id="prod-update"
                  defaultChecked
                />
                <label
                  className="custom-control-label text-heading"
                  htmlFor="prod-update"
                >
                  Product update notifications
                </label>
              </div>
              <small className="form-text">
                Send an email when a product I've purchased is updated
              </small>
            </div>
            <div className="border-bottom py-3">
              <div className="custom-control custom-switch">
                <input
                  className="custom-control-input"
                  type="checkbox"
                  id="prod-comments"
                />
                <label
                  className="custom-control-label text-heading"
                  htmlFor="prod-comments"
                >
                  Product comment notifications
                </label>
              </div>
              <small className="form-text">
                Send an email when someone comments on one of my products
              </small>
            </div>
            <div className="border-bottom py-3">
              <div className="custom-control custom-switch">
                <input
                  className="custom-control-input"
                  type="checkbox"
                  id="product-review"
                  defaultChecked
                />
                <label
                  className="custom-control-label text-heading"
                  htmlFor="product-review"
                >
                  Product review notification
                </label>
              </div>
              <small className="form-text">
                Send an email when someone leaves a review with their rating
              </small>
            </div>
          </div>
          <div className="text-center text-sm-right mt-4 pt-2">
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
  );
}

export default Notifications;
