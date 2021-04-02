import { useState } from "react";
import "./Tweets.css";
import TweetEmbed from "react-tweet-embed";
import Tweet from "./Tweet.js";
function Tweets(props) {
  const [tweet, setTweet] = useState({
    id: "1230961105192787973",
    date: "2020-02-22",
    time: "00:02:57",
    username: "@LeylinLeylus",
    text: "Yaaa,tanitim mi varmiş 🙈🙈🙈 #BirTekSeniSevdim",
  });

  return (
    <div>
      <h1>{props.title} </h1>
      <Tweet data={tweet} />

      <div className="Tweets">
        {props.tweets.map((element) => {
          return (
            <div
              style={{
                minWidth: 550,
              }}
            >
              <TweetEmbed
                id={element}
                options={{ cards: "hidden", theme: "dark" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tweets;
