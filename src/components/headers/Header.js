import logo from "../../assets/logo.png";
import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <header className="page-header">
          <div className="header-top">
            <div className="container">
              <p className="header-right">
                Free delivery on order over <span>€200.00</span>
              </p>
              <ul className="header-left">
                <li>English</li>
                <li>EUR</li>
                <li>Call Us 3965410</li>
              </ul>
            </div>
          </div>
          <hr />
          <nav className="header-nav">
            <div className="container">
              <a
                className="logo"
                href="https://flone.reactdemo.hasthemes.com/home-book-store-two"
              >
                <img src={logo} alt="Logo" />
              </a>
              <ul className="menu-list">
                <li>
                  <a href="https://flone.reactdemo.hasthemes.com/home-book-store-two">
                    Home
                  </a>
                </li>
                <li>
                  <a href="https://flone.reactdemo.hasthemes.com/home-book-store-two">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="https://flone.reactdemo.hasthemes.com/home-book-store-two">
                    Collection
                  </a>
                </li>
                <li>
                  <a href="https://flone.reactdemo.hasthemes.com/home-book-store-two">
                    Pages
                  </a>
                </li>
                <li>
                  <a href="https://flone.reactdemo.hasthemes.com/home-book-store-two">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="https://flone.reactdemo.hasthemes.com/home-book-store-two">
                    Contact Us
                  </a>
                </li>
              </ul>
              <ul className="icon-list">
                <li>
                  <a href="https://flone.reactdemo.hasthemes.com/home-book-store-two">
                    <i className="fa fa-search" />
                  </a>
                </li>
                <li>
                  <a href="https://flone.reactdemo.hasthemes.com/home-book-store-two">
                    <i className="fa-solid fa-user" />
                  </a>
                </li>
                <li>
                  <a href="https://flone.reactdemo.hasthemes.com/home-book-store-two">
                    <i className="fa-solid fa-shuffle" />
                  </a>
                </li>
                <li>
                  <a href="https://flone.reactdemo.hasthemes.com/home-book-store-two">
                    <i className="fa-solid fa-heart" />
                  </a>
                </li>
                <li>
                  <a href="https://flone.reactdemo.hasthemes.com/home-book-store-two">
                    <i className="fa fa-shopping-bag" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
