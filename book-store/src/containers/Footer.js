import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container">
        <div className="row justify-content-between align-items-end text-center text-md-left">
          <div className="col-md-4 mb-4 mb-md-0">
            <a
              href="../documentation/index.html"
              className="link link-underline link-light mr-3"
            >
              <i className="icon icon-book" /> Documentation
            </a>
            <a
              href="http://helpdesk.elathemes.com/"
              className="link link-underline link-light mr-3"
            >
              <i className="icon icon-heart-pulse" /> Help
            </a>
          </div>
        </div>
        <div className="pt-5 text-muted text-center">
          <div className="mb-3">
            <img src="assets/svg/reveal-logo.svg" alt="" />
          </div>
          <div>
            <small className="text-muted pre-label">
              A bold visual experience
            </small>
          </div>
          <small>All rights reserved 2020 © Reveal</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
