import React, { Component } from "react";
import "./scss/styles.scss";
import Header from "./components/headers/Header";
import MainPages from "./components/mainpages/MainPages";
import Footer from "./components/footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainPages />
        <Footer />
      </div>
    );
  }
}

export default App;
