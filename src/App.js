import React, { Component } from 'react';
import './App.css';
import QuoteBox from "./components/QuoteBox/QuoteBox";
import {quotesList} from "./shared/quotesList";

class App extends Component {
    state = {
        quotes: {
          qId:  1,
          qText: "",
          qAuthor: ""
        }
     }

    componentDidMount(){
      this.randomQuoteHandler();
     }

     randomQuoteHandler = () => {
       this.setState ({
          quotes: quotesList[Math.floor((Math.random() * (quotesList.length)))]
        })
     }


  render() {

    return (
      <div className="App">
        <div>
          <h1>Random Quote Machine </h1>
          <h3>a Reactive Responsive App</h3>
          <p className="appAuthor">by <a href="https://github.com/DiegoGorgazzi">me</a></p>
        </div>
      <QuoteBox
        quote={this.state.quotes.qText}
        author={this.state.quotes.qAuthor}
      />

      <button
      id="new-quote"
      onClick={this.randomQuoteHandler}
      >
        New Quote
      </button>

      </div>
    );
  }
}

export default App;
