import React, { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
	const [ persons, setPersons ] = useState([
		{ name: 'Arto Hellas', number: '040-123456' },
		{ name: 'Ada Lovelace', number: '39-44-5323523' },
		{ name: 'Dan Abramov', number: '12-43-234345' },
		{ name: 'Mary Poppendieck', number: '39-23-6423122' }
	]) 

	const [ newName, setNewName ] = useState('')
	const [ newNumber, setNewNumber ] = useState('')
	const [ filterValue, setFilterValue ] = useState('')
	const [ filterResult, setFilterResult ] = useState([])
	const [ filterBool, setFilterBool ] = useState(false)
	const [ personExists, setPersonExists ] = useState(false)
	
	const handleNameChange = (e) => {
		setPersonExists(false)
		setNewName(e.target.value)
	}

	const handleNumberChange = (e) => {
		setNewNumber(e.target.value)
	}

	const submitNewitem = (e) => {
		e.preventDefault()
		
		const validateName = persons.filter( person => person.name === newName)
		
		if (validateName.length > 0) {
			setPersonExists(true)
			
		} else {
			setPersons([...persons, {name: newName, number: newNumber}])
			setNewName('')
			setNewNumber('')
		}
	}
	
	const handleFilter = (e) => {
		let val = e.target.value
		setFilterValue(val)
		
		if (e.target.value === '') {
			return setFilterBool(false)
		}
		
		let filterRes = persons.filter( person => person.name.toLowerCase().includes(val.toLowerCase()) )
		
		setFilterResult(filterRes)
		setFilterBool(true)
	}
	
	return (
		<div>
			<h2>Phonebook</h2>
			<Filter onChange={handleFilter} filterValue={filterValue} />
			<h3>Add new number</h3>
			<PersonForm 
				onSubmit={submitNewitem}
				onNameChange={handleNameChange}
				onNumberChange={handleNumberChange}
				nameValue={newName}
				numberValue={newNumber}
				personExists={personExists}
			/>
			<Persons persons={filterBool ? filterResult : persons} />
		</div>
	)
}

export default App