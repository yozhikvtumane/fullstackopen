import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


const Header = (props) => {
	return (
		<div className="header">
			<h4>Welcome to:</h4>
			<h1>{props.course}</h1>
		</div>
	)
}

const Part = (props) => {
	return (
		<div className="part">
			<h2 className="partTitle">{props.name}</h2>
			<h4 className="partSubtitle">{props.exercises} exercises</h4>
		</div>
	)
}

const Content = (props) => {
	
	const renderParts = props.parts.map( (part,i) => <Part name={part.name} exercises={part.exercises} key={'part' + i}/>)
	
	return (
		<div className="content">
			<h4>Contents of this course:</h4>
			{renderParts}
		</div>
	)
		
}

const Total = (props) => {
	
	const exercisesTotal = props.parts.reduce( (acc, curr) => { return acc + curr.exercises}, 0)
	
	return (
		<div className="total">Total: {props.parts.length} parts, {exercisesTotal} total exercises</div>
	)
}


const App = () => {
	
	const course = 'Half Stack Application Development'
	const parts = [
	  {
		name: 'Fundamentals of React',
		exercises: 10
	  },
	  {
		name: 'Using props to pass data',
		exercises: 7
	  },
	  {
		name: 'State of a component',
		exercises: 14
	  }
	]

  return (
    <div className="wrapper">
      <Header course={course}/>
	  <Content parts={parts}/>
	  <Total parts={parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))