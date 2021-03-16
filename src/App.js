import logo from './logo.svg';
import icon from './icon.svg';
import './App.css';
import { useState } from 'react';
import TweetDisplay from './TweetDisplay.js'
import TrendChart from './TrendChart.js'


function App() {
  
  const [newicon,setNewIcon] = useState(icon)

const ButtonHandler = (logo) => {
  console.log("Hello iz clicked")
  // setName(newname)
  setNewIcon(logo)

}
  return (
    <div className="App">
      <h2> TWITTER TRENDS</h2>
      <img src={newicon} className="App-logo" alt="logo" /> 
      <TrendChart></TrendChart>     

      <h1 className="App-header">
      <TweetDisplay></TweetDisplay>
        <button onClick =  { () => ButtonHandler(logo)}>Click to see </button>
         <p>
          DO NOT edit <code>src/App.js</code> and save to reload.
        </p>
   
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome
        </a>
      </h1> 
    </div>
  );
}

export default App;
