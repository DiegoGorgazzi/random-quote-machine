import React, { Component } from 'react';
import './App.css';
import QuoteBox from "./components/QuoteBox/QuoteBox";

class App extends Component {
  render() {
    return (
      <div className="App">

      <h1>hello </h1>
      <QuoteBox
        quote="Better safe than sorry"
        author="Anonymous"
        />

      </div>
    );
  }
}

export default App;
