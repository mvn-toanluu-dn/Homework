import React, { Component } from "react";
import Banner from "./Banner";
import BannerTop from "./BannerTop";
import CountDown from "./CountDown";
import Products from "./Products";

class MainPages extends Component {
  render() {
    return (
      <div>
        <main className="page-main">
          <section className="section-slide">
            <ul className="slide-list">
              <li className="slide-item">
                <img
                  src="https://t4.ftcdn.net/jpg/04/12/37/21/360_F_412372117_BTxTKE80IR87WRLyAjPZfCA7v52ZfuGg.jpg"
                  alt="Slide"
                />
              </li>
              <div className="slide-action">
                <button className="btn btn-pre">
                  <i className="fa fa-angle-left" aria-hidden="true" />
                </button>
                <button className="btn btn-next">
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </button>
              </div>
              <div className="container">
                <div className="slide-content">
                  <h3 className="slide-title">2020 Latest Collection</h3>
                  <h1 className="slide-discount">
                    -40% Offer All <br /> New Book.
                  </h1>
                  <a
                    href="https://flone.reactdemo.hasthemes.com/home-book-store-two"
                    className="btn btn-shopnow"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </ul>
          </section>
          <section className="section-banner">
            <div className="banner pt-60">
              <div className="container">
                <div className="row">
                  <BannerTop src="https://flone.reactdemo.hasthemes.com/assets/img/banner/banner34.jpg" />
                  <BannerTop src="https://flone.reactdemo.hasthemes.com/assets/img/banner/banner35.jpg" />
                </div>
              </div>
            </div>
          </section>
        </main>
        <section className="section-products">
          <div className="container">
            <ul className="product-list">
              <li>
                <a href="https://flone.reactdemo.hasthemes.com/home-book-store-two">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="https://flone.reactdemo.hasthemes.com/home-book-store-two">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="https://flone.reactdemo.hasthemes.com/home-book-store-two">
                  Sale Items
                </a>
              </li>
            </ul>
            <ul className="product-list-deal row">
              <Products
                src="https://flone.reactdemo.hasthemes.com/assets/img/product/books/4.jpg"
                pName="Sách hay"
              />
              <Products
                src="https://flone.reactdemo.hasthemes.com/assets/img/product/books/6.jpg"
                pName="Sách hay 2"
              />
              <Products
                src="https://flone.reactdemo.hasthemes.com/assets/img/product/books/8.jpg"
                pName="Sách hay 2"
              />
              <Products
                src="https://flone.reactdemo.hasthemes.com/assets/img/product/books/5.jpg"
                pName="Sách hay 2"
              />
            </ul>
          </div>
        </section>
        <section className="section-banner">
          <div className="banner pt-100">
            <div className="container">
              <div className="row">
                <Banner
                  src="https://flone.reactdemo.hasthemes.com/assets/img/banner/banner-38.png"
                  Title="Historical"
                  Price="$99.00"
                />
                <Banner
                  src="https://flone.reactdemo.hasthemes.com/assets/img/banner/banner-39.png"
                  Title="Magazine"
                  Price="$79.00"
                />
                <Banner
                  src="https://flone.reactdemo.hasthemes.com/assets/img/banner/banner-36.jpg"
                  Title="Bestseller"
                  Price="$29.00"
                />
              </div>
            </div>
          </div>
        </section>
        <CountDown />
      </div>
    );
  }
}

export default MainPages;
