import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


const Header = (props) => {
	return (
		<div className="header">
			<h2>{props.course}</h2>
		</div>
	)
}

const Part = (props) => {
	const {name, exercises, id} = props
	
	return (
		<div className="part">
			<h3 className="partTitle">{name}</h3>
			<h4 className="partSubtitle">{exercises} exercises</h4>
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
		<div className="total"><h4>
			Total: {props.parts.length} parts, {exercisesTotal} total exercises
		</h4></div>
	)
}

const Course = (props) => {
	const {name, parts} = props
	
	return (
		<div className="course">
			<Header course={name} />
			<Content parts={parts} />
			<Total parts={parts} />
		</div>
	)
}


const App = (props) => {
	
	const coursesRender = props.courses.map( (course, i) => {
		const {name, parts} = course
		
		return <Course name={name} parts={parts} key={i}/>
	})
	
	return (
		<div className="wrapper">
			<h1>Web Development curriculum</h1>
			{coursesRender}
		</div>
	);
}




const courses = [
	{
		name: 'Half Stack application development',
		id: 1,
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10,
				id: 1
			},
			{
				name: 'Using props to pass data',
				exercises: 7,
				id: 2
			},
        {
			name: 'State of a component',
			exercises: 14,
          id: 3
        },
        {
			name: 'Redux',
			exercises: 11,
			id: 4
        }
	]
}, 
{
	name: 'Node.js',
	id: 2,
	parts: [
		{
			name: 'Routing',
			exercises: 3,
			id: 1
        },
        {
			name: 'Middlewares',
			exercises: 7,
			id: 2
        }
	]
}
]

ReactDOM.render(<App courses={courses}/>, document.getElementById('root'))