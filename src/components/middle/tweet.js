import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./tweet.css";

function Tweet() {
  const [tweetMessage, setTweetMessage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    console.log("tweet :- " + tweetMessage);
    setTweetMessage("");
  };

  return (
    <div className="tweet">
      <form>
        <div className="tweet__input">
          <Avatar src="https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <Button onClick={sendTweet} type="submit" className="tweet__button">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default Tweet;
