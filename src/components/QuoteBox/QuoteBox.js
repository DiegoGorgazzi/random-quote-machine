import React from "react";
import "./QuoteBox.css";

const quoteBox = (props) => {
    return (
      <div id="quote-box">

        <div id="text">
          <p>{props.quote}</p>
        </div>

        <div id="author">
            <p>{props.author}</p>
        </div>

        <div id="tweet-quote">
            <a href="https://twitter.com/intent/tweet">Tweeter</a>
        </div>




      </div>

    )
};

export default quoteBox;
