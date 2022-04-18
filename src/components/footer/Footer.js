import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="page-footer">
          <div className="container">
            <div className="row footer-content">
              <div className="footer-left col-4">
                <a href="https://flone.reactdemo.hasthemes.com/home-book-store-two">
                  <img
                    src="https://flone.reactdemo.hasthemes.com/assets/img/logo/logo.png"
                    alt="Logo"
                  />
                </a>
                <p>© 2022 Flone.</p>
                <h4>All Rights Reserved</h4>
              </div>
              <div className="footer-right-col col-4">
                <h3 className="footer-tab-title">ABOUT US</h3>
                <ul className="list-link">
                  <li>
                    <a href="https://flone.reactdemo.hasthemes.com/home-book-store-two">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="https://flone.reactdemo.hasthemes.com/home-book-store-two">
                      Store location
                    </a>
                  </li>
                  <li>
                    <a href="https://flone.reactdemo.hasthemes.com/home-book-store-two">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="https://flone.reactdemo.hasthemes.com/home-book-store-two">
                      Orders tracking
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-right-col col-4">
                <h3 className="footer-tab-title">USEFUL LINKS</h3>
                <ul className="list-link">
                  <li>
                    <a href="https://flone.reactdemo.hasthemes.com/home-book-store-two">
                      Returns
                    </a>
                  </li>
                  <li>
                    <a href="https://flone.reactdemo.hasthemes.com/home-book-store-two">
                      Support Policy
                    </a>
                  </li>
                  <li>
                    <a href="https://flone.reactdemo.hasthemes.com/home-book-store-two">
                      Size guide
                    </a>
                  </li>
                  <li>
                    <a href="https://flone.reactdemo.hasthemes.com/home-book-store-two">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-right-col col-4">
                <h3 className="footer-tab-title">USEFUL LINKS</h3>
                <ul className="list-link">
                  <li>
                    <a href="https://flone.reactdemo.hasthemes.com/home-book-store-two">
                      Returns
                    </a>
                  </li>
                  <li>
                    <a href="https://flone.reactdemo.hasthemes.com/home-book-store-two">
                      Support Policy
                    </a>
                  </li>
                  <li>
                    <a href="https://flone.reactdemo.hasthemes.com/home-book-store-two">
                      Size guide
                    </a>
                  </li>
                  <li>
                    <a href="https://flone.reactdemo.hasthemes.com/home-book-store-two">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-right-col col-4">
                <h3 className="footer-tab-title">SUBSCRIBE</h3>
                <ul className="list-link">
                  <li>
                    <p href="https://flone.reactdemo.hasthemes.com/home-book-store-two">
                      Get E-mail updates about our latest shop <br /> and
                      special offers.
                    </p>
                  </li>
                  <li>
                    <form
                      action="https://flone.reactdemo.hasthemes.com/home-book-store-two"
                      className="form-subscribe-footer"
                    >
                      <input
                        type="email"
                        placeholder="Enter your email address"
                      />{" "}
                      <br />
                      <button type="submit">
                        <li>SUBSCRIBE</li>
                        <hr />
                      </button>
                    </form>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
