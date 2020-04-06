import React, { useState} from 'react';
import ReactDOM from 'react-dom';

function App() {
	
	const [good, setGood] = useState(0) 
	const [neutral, setNeutral] = useState(0) 
	const [bad, setBad] = useState(0)
	const [voted, setVoted] = useState(false)
	
	return (
		<div className="feedback">
			<h3>Give feedback</h3>
			<Ratebutton name="Good" action={() => {setGood(good + 1);  setVoted(true)}} key="good"/>
			<Ratebutton name="Neutral" action={() => {setNeutral(neutral + 1); setVoted(true)}} key="neutral"/>
			<Ratebutton name="Bad" action={() => {setBad(bad + 1); setVoted(true)}} key="bad"/>
			{voted ? <Statistics stats={{good,bad,neutral}} /> : null}
		</div>
	)
}

function Ratebutton(props) {
	return(
		<button onClick={props.action}>{props.name}</button>
	)
}

function Statistics(props) {
	const {bad, good, neutral} = props.stats
	
	const total = bad + good + neutral
	const avg = (good * 1 + neutral * 0 + bad * -1) / total
	const positive = Math.floor((good / total) * 100)
	
	return(
		<div>
			<h3>Statistics:</h3>
			<table>
				<tbody>
					<tr>
						<td>Good</td>
						<td>{good}</td>
					</tr>
					<tr>
						<td>Neutral</td>
						<td>{neutral}</td>
					</tr>
					<tr>
						<td>Bad</td>
						<td>{bad}</td>
					</tr>
					<tr>
						<td>All</td>
						<td>{total}</td>
					</tr>
					<tr>
						<td>Average</td>
						<td>{avg}</td>
					</tr>
					<tr>
						<td>Positive</td>
						<td>{positive}%</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));
