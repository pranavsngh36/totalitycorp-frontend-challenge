import { Search } from "@material-ui/icons";
import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import "./widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1307046632517664771"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Pranav Singh"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://pranavsngh36@gmail.com"}
          options={{ text: "React Developer" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
