import React from "react";
import "./QuoteBox.css";

const quoteBox = (props) => {
    return (
      <div id="quote-box">
          <div className="text-author" >
            <div id="text">
              <p>{props.quote}</p>
            </div>

            <div id="author">
                <p>{props.author}</p>
            </div>
          </div>

          <div id="tweeter">
              <a id="tweet-quote" href="https://twitter.com/intent/tweet">Tweeter</a>
          </div>




      </div>

    )
};

export default quoteBox;
