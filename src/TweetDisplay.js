import { useState } from 'react';
import TweetDisplaycss from './TweetDisplay.css'
import TweetChart from './TweetChart.js'

function TweetDisplay() {

const [tweets, setTweets] = useState(["1230961091733282819", 
      "1230961097571741696",
      "1230961101812256774",
      "1230961105192787973",
      "1230961107264823300",
      "1230961107235463170", 
      "1230961109579988997", 
      "1230961111593340929", 
      "1230961112411099137", 
      "1230961114219008000"])      

return(
<div className = "BorderPosition">

      <TweetChart title="POSITIVE" tweets= {tweets} />
      <TweetChart title="NEGATIVE" tweets= {tweets} /> 

      </div>

)
}

export default TweetDisplay;