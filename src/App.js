import React, { Component } from 'react';
import './App.css';
import QuoteBox from "./components/QuoteBox/QuoteBox";
import {quotesList} from "./shared/quotesList";

class App extends Component {
    state = {
        quotes: {
          qId:  1,
          qText: "Better safe than Sorry",
          qAuthor: "Anonymous"
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

      <h1>Random Quote Machine </h1>
      <h2>a React App</h2>
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
