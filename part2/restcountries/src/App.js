import React, { useState, useEffect } from 'react';
import CountriesView from './components/CountriesView'

function App() {
	const [ searchValue, setSearchValue ] = useState('')
	const [ isLoading, setIsLoading ] = useState(false)
	const [ expandValue, setExpandvalue ] = useState(null)
	const [ searchData, setSearchData ] = useState({
		error: false,
		emptyResult: false,
		tooManyResults: false,
		errorString: null,
		data: []
	})
	
	useEffect( () => {
		if (searchValue === '') {
			return setSearchData({
				error: false,
				emptyResult: false,
				tooManyResults: false,
				errorString: null,
				data: []
			})
		}
		
		setIsLoading(true)
		fetch(`https://restcountries.eu/rest/v2/name/` + searchValue)
			.then(res => res.json())
			.then(data => {
				if (data.status) {
					setIsLoading(false)
					return setSearchData({
						emptyResult: true,
						tooManyResults: false,
						error: false,
						errorString: null,
						data: []
					})
				}
				
				if (data.length > 10) {
					setIsLoading(false)
					return setSearchData({
						emptyResult: true,
						tooManyResults: true,
						error: false,
						errorString: null,
						data: []
					})
				}
				
				setSearchData({
					emptyResult: false,
					tooManyResults: false,
					error: false,
					errorString: null,
					data
				})
				setIsLoading(false)
			})
			.catch(err => {
				setSearchData({
					emptyResult: false,
					tooManyResults: false,
					error: true,
					errorString: err.toString()
				})
				setIsLoading(false)
			})
		
	}, [searchValue])
	
	const handleInputChange = (e) => {
		setSearchValue(e.target.value)
		setExpandvalue(null)
	}
	
	const handleExpand = (e) => {
		setExpandvalue(+e.target.id)
	}
	
	if (searchData.error) {
		return (
			<div className="app">
				Search countries <input onChange={handleInputChange} type="text" value={searchValue}/>
				<p>Error fetching data. {searchData.errorString}</p>
			</div>
		)
		
	} else if (searchData.tooManyResults) {
		return (
			<div className="app">
				Search countries <input onChange={handleInputChange} type="text" value={searchValue}/>
				<p>Search returned too many results. Please narrow your query down.</p>
			</div>
		)
		
	} else if (searchData.emptyResult) {
		return (
			<div className="app">
				Search countries <input onChange={handleInputChange} type="text" value={searchValue}/>
				<p>Nothing found. Please try again</p>
			</div>
		)
	} else {
		return (
			<div className="app">
				Search countries <input onChange={handleInputChange} type="text" value={searchValue}/>
				{searchData.data.length === 0 ? null : <CountriesView data={searchData.data} expandHandler={handleExpand} expandValue={expandValue}/>}
			</div>
		);
	}
}

export default App;
