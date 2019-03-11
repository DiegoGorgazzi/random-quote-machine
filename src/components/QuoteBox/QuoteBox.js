import React from "react";
import "./QuoteBox.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

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

          <div id="twitter">
            <a id="tweet-quote" href="https://twitter.com/intent/twee"><FontAwesomeIcon className="twitterFav "icon={faTwitterSquare} size="3x" /></a>
          </div>




      </div>

    )
};

export default quoteBox;
