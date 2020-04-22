import React from 'react'
import CountryExpanded from './CountryExpanded'

const CountriesView = (props) => {
	const { data, expandHandler, expandValue } = props

	if (data.length === 1) {
		
		const countriesRender = data.map( country => {
			return (
				<CountryExpanded 
					name={country.name}
					capital={country.capital}
					population={country.population}
					languages={country.languages}
					flag={country.flag}
				/>
			)
		})
			
		return (
			<div>
				{countriesRender}
			</div>
		)
	} else {
		const countriesRender = data.map( (country, i) => {
			if (expandValue === i) {
				return (
					<CountryExpanded 
						name={country.name}
						capital={country.capital}
						population={country.population}
						languages={country.languages}
						flag={country.flag}
					/>	
				)
			} else {
				return (
					<span key={country.name} style={{display: 'block'}}>
						{country.name}
						<button onClick={expandHandler} id={i}>show</button>
					</span>
				)	
			}
			
		})
			
		return (
			<div>
				{countriesRender}
			</div>
		)
	}
}

export default CountriesView