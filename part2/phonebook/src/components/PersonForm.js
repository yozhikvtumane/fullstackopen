import React from 'react'


const PersonForm = (props) => {
	const {
		onSubmit,
		onNameChange,
		onNumberChange,
		nameValue,
		numberValue,
		personExists
	} = props
	
	return(
		<form onSubmit={onSubmit}>
		<div>
			name: <input required onChange={onNameChange} value={nameValue}/>
			number: <input required onChange={onNumberChange} value={numberValue}/>
		</div>
		<div>
			<button type="submit">add</button><br />
			{personExists ? <span style={{color: 'red'}}>{nameValue} already exists in phonebook</span> : null}
		</div>
	</form>
	)
}

export default PersonForm