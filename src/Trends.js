import { useState } from "react";
import "./Trends.css";

function Trends() {
  const [date, setDate] = useState("2020-02-22 14:26:22");
  const [trends, setTrends] = useState([
    "#cumartesi",
    "#koronawirus",
    "#BugünGünlerdenTrabzonspor",
    "#BeşiktaşınMaçıVar",
    "#YüzdeYüzŞampiyon",
    "Bursaspor",
    "afgan",
    "Fatma Çetinkaya",
    "Hakan Şükür",
    "Şekibe Çelenk",
  ]);

  return (
    <div>
      <h1>Trend Topics</h1>
      <h4>retrieval: {date}</h4>
      <div className="TrendBorder">
        {trends.map((element, index) => {
          return (
            <div>
              <h3>
                {index + 1} {element}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Trends;
