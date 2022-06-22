const Filter = ({setRegion}) => {
	const selectHandler = (event) => {
		setRegion(event.target.value)
	}
	return (
		<div>
			<label htmlFor="filter"></label>
			<select id="filter" placeholder="Filter by region" onChange={selectHandler}>
				<option value="none">Filter by region</option>
				<option value="Africa">Africa</option>
				<option value="Americas">Americas</option>
				<option value="Asia">Asia</option>
				<option value="Europe">Europe</option>
				<option value="Oceania">Oceania</option>
				<option value="Antarctic">Antarctic</option>
			</select>
		</div>
	)
}

export default Filter
