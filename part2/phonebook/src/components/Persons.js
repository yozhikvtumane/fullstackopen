import React from 'react'

const Persons = (props) => {

	const personsRender = props.persons.map(person => {
		return <h5 key={person.name}>{person.name} - {person.number}</h5>	
	})
	// const filterRender = filterResult.map(res => <h5 key={res.name}>{res.name} - {res.number}</h5>)

	return (
		<div>
			<h2>Numbers</h2>
			{personsRender}
		</div>
	)
}

export default Persons