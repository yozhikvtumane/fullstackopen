import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '99-111-222-111' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [personExits, setPersonExists] = useState(false)
  const personsRender = persons.map(person => <h5>{person.name}</h5>)
  
  const handleInputChange = (e) => {
	  setPersonExists(false)
	  setNewName(e.target.value)
	}
  
  const submitNewitem = (e) => {
	  e.preventDefault()
	//   if (newName === '') return
	  
	  const validateName = persons.filter( person => {
		  if (person.name === newName) {
			  return person
		  }
	  })
	  
	  if (validateName.length > 0) {
		setPersonExists(true)
		return
	  } else {
		setPersons([...persons, {name: newName}])
		setNewName('')
	  }

  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={submitNewitem}>
        <div>
          name: <input required onChange={handleInputChange} value={newName}/>
		  number: <input required/>
        </div>
        <div>
          <button type="submit">add</button><br />
		  {personExits ? <span style={{color: 'red'}}>{newName} already exists in phonebook</span> : null}
        </div>
      </form>
      <h2>Numbers</h2>
      {personsRender}
    </div>
  )
}

export default App