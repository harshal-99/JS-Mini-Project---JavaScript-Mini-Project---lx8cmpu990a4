import {useContext, useEffect, useState} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import styles from './App.module.css';
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import axios from "axios";
import Grid from "./components/Grid";
import Country from "./routes/Country";
import {ThemeContext} from "./ThemeContext";


function App() {
	const url = 'https://restcountries.com/v3.1/all'
	const [countries, setCountries] = useState([])
	const [searchInput, setSearchInput] = useState('')
	const [region, setRegion] = useState('none')
	const theme = useContext(ThemeContext)
	const darkMode = theme.state.darkMode

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
		<div className={darkMode ? 'dark-background': 'light-background'}>
			<NavBar/>
			<BrowserRouter>
				<Switch>
					<Route exact path='/'>
						<main className={darkMode ? 'dark-background': 'light-background'}>
							<div className={styles.container}>
								<SearchBar searchText={searchInput}
								           updateSearchText={setSearchInput}/>
								<Filter setRegion={setRegion}/>
							</div>
							<div className={styles.gridContainer}>
								{(countriesToRender.length > 0)
									? <Grid countries={countriesToRender} darkMode={darkMode}/>
									: <div>Loading...</div>}
							</div>
						</main>
					</Route>
					<Route path="/:name"
					       children={(countries.length > 0)
						       ? <Country countries={countries} darkMode={darkMode}/>
						       : <div>Loading...</div>}/>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
