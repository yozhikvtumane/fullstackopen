import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// function Test(params) {
// 	const [isLoading, setIsloading] = useState(false)
// 	const [persons, setPersons] = useState([])
	
// 	useEffect(()=> {
// 		setIsloading(true)
// 		fetch('http://localhost:3001/persons')
// 		.then( res => res.json())
// 		.then( data => {
// 			console.log('data :', data);
// 			setPersons(data)
// 			setIsloading(false)
// 		})
// 		.catch( err => console.log('err :', err))
		
// 	}, [])
	
// 	const personsRender = persons.map(person => (<h5 key={person.name}>{person.name} - {person.number}</h5>))

// 	return(
// 		<div>
// 			<h1>Phonebook</h1>
// 			{isLoading ? <span>Loading...</span> : personsRender }
// 		</div>
// 	)
// }

ReactDOM.render(<App />, document.getElementById('root'));
