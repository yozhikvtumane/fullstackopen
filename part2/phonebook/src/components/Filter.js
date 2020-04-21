import React from 'react'

const Filter = (props) => {
	const { onChange, filterValue } = props
	return (
		<div>
			filter <input onChange={onChange} value={filterValue}/>
		</div>
	)
}

export default Filter