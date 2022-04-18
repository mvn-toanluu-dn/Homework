import React, { Component } from "react";

class CountDown extends Component {
  render() {
    return (
      <div>
        <section className="banner-countdown ">
          <img
            src="https://flone.reactdemo.hasthemes.com/assets/img/banner/deal-8.png"
            alt="banner-countdown"
          />
          <div className="deal-countdown">
            <h2 className="title-replay countdown-title">Deal of the day</h2>
            <ul className="time-countdown">
              <li>0</li>
              <li>0</li>
              <li>0</li>
              <li>0</li>
            </ul>
            <ul className="calendar-countdown">
              <li>Days</li>
              <li>Hours</li>
              <li>Minutes</li>
              <li>Seconds</li>
            </ul>
            <a
              href="https://flone.reactdemo.hasthemes.com/home-book-store-two"
              className="btn-replay btn-banner-countdown"
            >
              SHOP NOW
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default CountDown;
