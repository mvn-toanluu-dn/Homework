import React, { Component } from "react";

class Banner extends Component {
  render() {
    const { src, Title, Price } = this.props;
    return (
      <div className="col-sm-6 col-12">
        <div className="banner-display mb-30">
          <a href="https://flone.reactdemo.hasthemes.com/home-book-store-two">
            <img src={src} alt="" />
          </a>
          <li className="banner-content">
            <h3 className="banner-heading">{Title}</h3>
            <h4 className="banner-heading">
              Starting at  <span>{Price}</span>
            </h4>
            <a
              href="https://flone.reactdemo.hasthemes.com/home-book-store-two"
              className="btn-banner"
            >
              <i className="fa fa-arrow-right" aria-hidden="true" />
            </a>
          </li>
        </div>
      </div>
    );
  }
}

export default Banner;
