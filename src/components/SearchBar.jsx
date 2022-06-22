const SearchBar = ({updateSearchText, searchText}) => {
	// const [inputText, setInputText] = useState('')
	const inputHandler = (event) => {
		updateSearchText(event.target.value.toString())
	}
	return (
		<div>
			<label htmlFor="search"></label>
			<input id="search"
			       type="text" placeholder="Search for a country"
			       onChange={inputHandler}
			       value={searchText}/>
		</div>
	)
}

export default SearchBar
