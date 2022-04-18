import React, { Component } from "react";

class BannerTop extends Component {
  render() {
    const { src } = this.props;
    return (
      <div className="col-sm-6 col-12">
        <div className="banner-display">
          <a href="https://flone.reactdemo.hasthemes.com/home-book-store-two">
            <img src={src} alt="" />
          </a>
        </div>
      </div>
    );
  }
}

export default BannerTop;
