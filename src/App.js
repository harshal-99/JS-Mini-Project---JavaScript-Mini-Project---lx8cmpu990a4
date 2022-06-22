import styles from './App.module.css';
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import {useEffect, useState} from "react";
import axios from "axios";
import Grid from "./components/Grid";

function App() {
	const url = 'https://restcountries.com/v3.1/all'
	const [countries, setCountries] = useState([])
	const [searchInput, setSearchInput] = useState('')
	const [region, setRegion] = useState('none')

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(url)
			const newCountries = response.data
			newCountries.forEach(country => {
				if (!country.capital) {
					country.capital = ['Not available']
				}
			})
			setCountries(newCountries)
		}
		fetchData()
	}, [])

	let countriesToRender = []

	if (countries.length > 0) {
		if (region === 'none') {
			if (searchInput !== '') {
				countriesToRender = countries.filter(country => {
					return country.name.common.toLowerCase().includes(searchInput.toLowerCase())
				})
			} else {
				countriesToRender = countries.slice(0, 8)
			}
		} else {
			if (searchInput !== '') {
				countriesToRender = countries.filter(country =>
					country.name.common.toLowerCase().includes(searchInput.toLowerCase())
					&& country.region === region)
			} else {
				countriesToRender = countries.filter(country => country.region === region)
			}
		}

	}


	return (
		<div className={styles.app}>
			<NavBar/>
			<main>
				<div className={styles.container}>
					<SearchBar searchText={searchInput}
					           updateSearchText={setSearchInput}/>
					<Filter setRegion={setRegion}/>
				</div>
				<div className={styles.gridContainer}>
					{countriesToRender.length > 0 &&
						<Grid countries={countriesToRender}/>
					}
				</div>
			</main>
		</div>
	);
}

export default App;
