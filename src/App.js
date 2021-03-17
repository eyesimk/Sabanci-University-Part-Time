import logo from "./su_logo.png";
import "./App.css";
import { useState } from "react";
import Tweets from "./Tweets.js";
import Trends from "./Trends.js";

function App() {
  const [tweets, setTweets] = useState([
    "1230961091733282819",
    "1230961097571741696",
    "1230961101812256774",
    "1230961105192787973",
    "1230961107264823300",
    "1230961107235463170",
    "1230961109579988997",
    "1230961111593340929",
    "1230961112411099137",
    "1230961114219008000",
  ]);

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} />

        <h2> TWITTER TRENDS</h2>
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ flex: 1 }}>
          <Trends />
        </div>
        <div style={{ flex: 2 }}>
          <Tweets title="Positive" tweets={tweets} />
        </div>
        <div style={{ flex: 2 }}>
          <Tweets title="Negative" tweets={tweets} />
        </div>
      </div>
    </div>
  );
}

export default App;
