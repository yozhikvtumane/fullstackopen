import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
	const [ isLoading, setIsloading ] = useState(false)
	const [ loadingError, setError ] = useState({
		error: false, errorString: null
	})
	const [ persons, setPersons ] = useState([]) 
	const [ newName, setNewName ] = useState('')
	const [ newNumber, setNewNumber ] = useState('')
	const [ filterValue, setFilterValue ] = useState('')
	const [ filterResult, setFilterResult ] = useState([])
	const [ filterBool, setFilterBool ] = useState(false)
	const [ personExists, setPersonExists ] = useState(false)
	
	useEffect(()=> {
		
		setIsloading(true)
		
		fetch('http://localhost:3001/persons')
			.then( res => res.json())
			.then( data => {
				setPersons(data)
				setIsloading(false)
			})
			.catch( err => {
				setError({
					error: true, errorString: err.toString()
				})
				setIsloading(false)
			})
		
	}, [])
	
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
	
	if (isLoading) {
		return (
			<div>
				<h2>Phonebook</h2>
				<p>Loading ...</p>
			</div>
		)
	} else if (loadingError.error) {
		return (
			<div>
				<h2>Phonebook</h2>
				<p>Failed to load phonebook data. {loadingError.errorString}</p>
			</div>
		)
	} else {
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

}

export default App