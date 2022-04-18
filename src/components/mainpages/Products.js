import React, { Component } from "react";

class Products extends Component {
  render() {
    const { src, pName } = this.props;
    return (
      <li className="product col-3">
        <div className="product-img">
          <a href="https://flone.reactdemo.hasthemes.com/home-book-store-two">
            <img src={src} alt="product-1" />
          </a>
          <div className="product-badge">
            <span className="pink">-30%</span>
            <span className="purple">New</span>
          </div>
          <div className="product-action">
            <button className="add-wishlist">
              <i className="fa fa-heart" aria-hidden="true" />
            </button>
            <button className="add-cart">
              <i className="fa fa-shopping-bag" aria-hidden="true" />
            </button>
            <button className="add-compare">
              <i className="fa fa-retweet" aria-hidden="true" />
            </button>
            <button className="quick-view">
              <i className="fa fa-eye" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="product-info">
          <h3>
            <a href="https://flone.reactdemo.hasthemes.com/home-book-store-two">
              {pName}
            </a>
          </h3>
          <div className="price">
            <p className="deal-price">€4.55 - &nbsp; </p>
            <span className="old-price"> €6.5</span>
          </div>
        </div>
      </li>
    );
  }
}

export default Products;
