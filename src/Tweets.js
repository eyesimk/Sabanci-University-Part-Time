import "./Tweets.css";
import TweetEmbed from "react-tweet-embed";

function Tweets(props) {
  return (
    <div>
      <h1>{props.title} </h1>
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
