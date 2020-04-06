import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
	
	const rand = () => Math.floor(Math.random() * (6 - 0) + 0);
	const [selected, setSelected] = useState(rand())
	const [votes, setVote] = useState({0:0, 1:0, 2:0, 3:0, 4:0, 5:0})
	const [voted, setVoted] = useState(false)
	
	const topRated = () => {
		let maxVal = 0;
		let maxEl;
		for (let i in votes) {
			if (votes[i] > maxVal) {
				maxVal = votes[i]
				maxEl = i	
			}
		}
		return maxEl
	}
	
	return (
		<div>
			<div className="anecdote">
				<p>{props.content[selected]}</p>
				<p>{voted ? votes[selected] + ' votes' : null}</p>
			</div>
			<button onClick={() => setSelected(rand())}>Next</button>
			<button onClick={() => {
				let newVotes = {...votes}
				newVotes[selected] += 1
				setVote({...newVotes})
				setVoted(true)
			}}>Vote</button>
			<h2>Top rated anecdote</h2>
			<p>
				{voted ? props.content[topRated()] : null}
			</p>
		</div>
	)
}

const anecdotes = [
	'If it hurts, do it more often',
	'Adding manpower to a late software project makes it later!',
	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render( <App content={anecdotes}/>, document.getElementById('root'));
