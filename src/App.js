import React, { Component } from 'react';
import './App.css';
import QuoteBox from "./components/QuoteBox/QuoteBox";

class App extends Component {
    state = {
        quotes: {
          qId:  1,
          qText: "Better safe than Sorry",
          qAuthor: "Anonymous"
        }
     }

    componentDidMount(){
      const quotesList = [
          {qId:  1,
            qText: "Better safe than Sorry" ,
              qAuthor: "Anonymous"},
          {qId:  2,
            qText: "To be or Not to be. That is the question." ,
              qAuthor: "shakespeare"},
          {qId:  3,
            qText: "Be greedy when others are fearful; be fearful when others are greedy",
              qAuthor: "Warren Buffet"},
          {qId:  4,
            qText: "If you're going through hell, keep going",
              qAuthor: "Winston Churchill"}
        ];


       this.setState ({
         quotes: quotesList[3]
         /*
           quotes: {
             qId:  2,
             qText: "To be or Not to be. That is the question." ,
             qAuthor: "shakespeare"
          }
          */
       })

       //console.log(quotesList[3]);
       return this.state;
     }


//I shouldn't use, 1, 2, 3... I should use index instead so that
//if new quotes are added, I don't have to change anything.
//Although I would still have to set the qId / key to index
//I need a setState somewhere inside a handler for the button
//don't forget about the button eventually.
/* I need to figure out where/how to put list of quotes that I'll
eventually use to update the state
const quotesList = [
    {qId:  1, qText: "Better safe than Sorry"   ,  qAuthor: "Anonymous"},
    {qId:  2, qText: "To be or Not to be. That is the question." ,  qAuthor: "shakespeare"},
    {qId:  3, qText: "Be greedy when others are fearful; be fearful when others are greedy, qAuthor: "Warren Buffet"},
    {qId:  4, qText: "If you're going through hell, keep going", qAuthor: "Winston Churchill"}
  ];
*/

  render() {

    return (
      <div className="App">

      <h1>hello </h1>
      <QuoteBox
        quote={this.state.quotes.qText}
        author={this.state.quotes.qAuthor}
        />

      </div>
    );
  }
}

export default App;
