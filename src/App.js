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
              qAuthor: "Winston Churchill"},
          {qId:  5,
              qText: "These things I have spoken to you that in Me you may have apeace. In the world you have baffliction, but take courage; I have covercome the world.",
                qAuthor: "John 16:33 (The Bible, Recovery Version)"},
          {qId:  6,
              qText: "Our greatest glory is not in never falling, but in rising every time we fall.",
                qAuthor: "Confucius"},
          {qId:  7,
              qText: "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear",
                qAuthor: "Nelson Mandela"},
          {qId:  8,
              qText: "When the whole world is silent, even one voice becomes powerful.",
                qAuthor: "Malala Yousafzai"},
          {qId:  9,
                qText: "“If you don’t like the road you’re walking, start paving another one.",
                qAuthor: "Dolly Parton"}
        ];

      this.setState ({
         quotes: quotesList[Math.floor((Math.random() * (quotesList.length)))]

       })

       //console.log(quotesList[3]);
       return this.state;
     }

     randomQuoteHandler = () => {
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
               qAuthor: "Winston Churchill"},
           {qId:  5,
               qText: "These things I have spoken to you that in Me you may have apeace. In the world you have baffliction, but take courage; I have covercome the world.",
                 qAuthor: "John 16:33 (The Bible, Recovery Version)"},
           {qId:  6,
               qText: "Our greatest glory is not in never falling, but in rising every time we fall.",
                 qAuthor: "Confucius"},
           {qId:  7,
               qText: "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear",
                 qAuthor: "Nelson Mandela"},
           {qId:  8,
               qText: "When the whole world is silent, even one voice becomes powerful.",
                 qAuthor: "Malala Yousafzai"},
           {qId:  9,
                 qText: "“If you don’t like the road you’re walking, start paving another one.",
                 qAuthor: "Dolly Parton"}
         ];

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
