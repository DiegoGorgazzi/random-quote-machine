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
      this.setState ({
         quotes: quotesList[Math.floor((Math.random() * (quotesList.length)))]

       })

       return this.state;
     }

     randomQuoteHandler = () => {
       this.setState ({
          quotes: quotesList[Math.floor((Math.random() * (quotesList.length)))]
        })
     }

//I still have to set the qId / key to index
//I need a setState somewhere inside a handler for the button
//don't forget about the button eventually.

  render() {

    return (
      <div className="App">

      <h1>hello </h1>
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
