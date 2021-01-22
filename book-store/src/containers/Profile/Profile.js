import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Information from "./Components/Information";
import Notifications from "./Components/Notifications";
import Orders from "./Components/Orders";
import ResetPassword from "./Components/ResetPassword";
import Whishlist from "./Components/Whishlist";
import { changeTab } from "./actions";

function Profile() {
  const tab = useSelector((state) => state.profileReducer.tab);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="row">
        {/* Menu sidebar */}
        <div className="col-lg-3">
          <div className="br-sm pr-lg-4">
            {/* Profile menu header */}
            <div className="py-3 py-lg-4">
              <div className="row align-items-center justify-content-center no-gutters text-lg-center">
                <div className="col-9 col-lg-12">
                  <div className="d-flex flex-lg-column align-items-center">
                    <div>
                      <div className="h5 m-0">John Doe</div>
                      <div className="text-muted">john.doe@email.com</div>
                    </div>
                  </div>
                </div>
                <div className="col-3 d-lg-none text-right">
                  <button
                    className="btn btn-icon btn-primary btn-sm toggle-show"
                    data-show="open-profile-sidebar"
                  >
                    <i className="icon icon-text-align-center" />
                  </button>
                </div>
              </div>
            </div>

            {/* Profile sidebar */}
            <div className="sidebar sidebar-mobile" id="open-profile-sidebar">
              <div className="sidebar-content">
                {/* Profile account links */}
                <div className="mb-4 px-4 p-lg-0">
                  <ul className="list-group list-group-clean">
                    <li className="list-group-item text-muted d-flex justify-content-between align-items-center">
                      <label className="pre-label">Account</label>
                    </li>
                    <li
                      className={`list-group-item ${tab === 1 ? "active" : ""}`}
                    >
                      <span onClick={() => dispatch(changeTab(1))}>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="icon icon-user mr-2" />
                            <span>Profile account</span>
                          </span>
                        </div>
                      </span>
                    </li>

                    <li
                      className={`list-group-item ${tab === 2 ? "active" : ""}`}
                    >
                      <span onClick={() => dispatch(changeTab(2))}>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="icon icon-alarm mr-2" />
                            <span>Notifications</span>
                          </span>
                        </div>
                      </span>
                    </li>
                  </ul>
                </div>
                {/* Profile dashboard links */}
                <div className="mb-4 px-4 p-lg-0">
                  <ul className="list-group list-group-clean">
                    <li className="list-group-item text-muted d-flex justify-content-between align-items-center">
                      <label className="pre-label">Dashboard</label>
                    </li>
                    <li
                      className={`list-group-item ${tab === 3 ? "active" : ""}`}
                    >
                      <span onClick={() => dispatch(changeTab(3))}>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="icon icon-cart mr-2" />
                            <span>Orders</span>
                          </span>
                        </div>
                      </span>
                    </li>
                    <li
                      className={`list-group-item ${tab === 4 ? "active" : ""}`}
                    >
                      <span onClick={() => dispatch(changeTab(4))}>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="icon icon-heart mr-2" />
                            <span>Whishlist</span>
                          </span>
                        </div>
                      </span>
                    </li>
                  </ul>
                </div>
                {/* Profile reset */}
                <div className="mb-4 px-4 p-lg-0">
                  <ul className="list-group list-group-clean">
                    <li className="list-group-item text-muted d-flex justify-content-between align-items-center">
                      <label className="pre-label">Access</label>
                    </li>
                    <li
                      className={`list-group-item ${tab === 5 ? "active" : ""}`}
                    >
                      <span onClick={() => dispatch(changeTab(5))}>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="icon icon-lock mr-2" />
                            <span>Reset password</span>
                          </span>
                        </div>
                      </span>
                    </li>
                    <li className="list-group-item">
                      <span>
                        <div
                          className="d-flex justify-content-between align-items-center"
                          onClick={() => {
                            localStorage.clear();
                            window.location.href = "/login";
                          }}
                        >
                          <span>
                            <i className="icon icon-enter-down mr-2" />
                            <span>Sign out</span>
                          </span>
                        </div>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Dashboard details */}
        {tab === 1 && <Information></Information>}
        {tab === 2 && <Notifications></Notifications>}
        {tab === 3 && <Orders></Orders>}
        {tab === 4 && <Whishlist></Whishlist>}
        {tab === 5 && <ResetPassword></ResetPassword>}
      </div>
    </div>
  );
}

export default Profile;
