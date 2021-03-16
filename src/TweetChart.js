import { useState } from 'react';
import TweetChartcss from './TweetChart.css'
import TweetEmbed from 'react-tweet-embed'

function TweetChart(props) {
return(
<div className = "TweetBorder">
        
    <h1>{props.title} </h1>


   {props.tweets.map(element => {
        return <TweetEmbed id = {element} options={{cards: 'hidden',theme: 'dark'}} />
    })}

    
{/*

    <TweetEmbed id = {props.tweets} options={{cards: 'hidden',theme: 'dark',width: 250}}/>
    <TweetEmbed id = {props.tweets} options={{cards: 'hidden',theme: 'dark'}} />
    <TweetEmbed id = {props.tweets} options={{cards: 'hidden' }}/>
    <TweetEmbed id = {props.tweets} options={{cards: 'hidden' }}/>
    <TweetEmbed id = {props.tweets} options={{cards: 'hidden' }}/>
    <TweetEmbed id = {props.tweets} options={{cards: 'hidden' }}/>
    <TweetEmbed id = {props.tweets} options={{cards: 'hidden' }}/>
    <TweetEmbed id = {props.tweets} options={{cards: 'hidden' }}/>
    <TweetEmbed id = {props.tweets} options={{cards: 'hidden' }}/>
    <TweetEmbed id = {props.tweets} options={{cards: 'hidden' }}/>
    
*/}


</div>

)
}

export default TweetChart;