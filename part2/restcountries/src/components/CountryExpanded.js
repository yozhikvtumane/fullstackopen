import React from 'react'

const CountryExpanded = (props) => {
	const { name, capital, population, languages, flag } = props
	
	return (
		<>
			<h3>{name}</h3>
			<span style={{display: 'block'}}>Capital: {capital}</span>
			<span style={{display: 'block'}}>Population: {population}</span>
			<h3>Languages:</h3>
			<ul>
				{languages.map(lang => <li>{lang.name}</li>)}
			</ul>
			<h3>Flag:</h3>
			<img src={flag} alt="Flag" style={{width: "200px"}}/>
		</>	
	)
}

export default CountryExpanded