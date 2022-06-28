import {Link, useParams} from "react-router-dom";
import cx from "classnames";

import styles from "./Country.module.css"

const Country = ({countries, darkMode}) => {
	const {name} = useParams()
	const country = countries.find(country => country.name.common === name)

	if (!country) {
		return <div>No Country Found</div>
	}

	let nativeName = []
	for (let nativeNameKey in country.name.nativeName) {
		nativeName.push(country.name.nativeName[nativeNameKey].common)
	}
	let currencies = []
	for (let currency in country.currencies) {
		currencies.push(country.currencies[currency].name)
	}

	let languages = []
	for (let language in country.languages) {
		languages.push(country.languages[language])
	}
	return (
		<div style={{width: '100vw', height: '100vh'}}>
			<Link to="/" style={{margin: "2rem"}} className={darkMode ? 'dark-text' : 'light-text'}>Back</Link>
			<div className={cx(styles.container, darkMode ? 'dark-background' : 'light-background')}>
				<img src={country.flags.png} alt={`${country.flags.png} flag`}/>
				<div className={cx(styles.info, darkMode ? 'dark-background' : 'light-background')}>
					<h2 className={darkMode ? 'dark-text' : 'light-text'}>{country.name.common}</h2>
					<div className={styles["more-info"]}>
						<div>
							<div className={cx(styles["info-detail"], darkMode ? 'dark-background' : 'light-background')}>
								<div><span className={cx(styles.bolder, darkMode ? 'dark-text' : 'light-text')}>Native Name:</span>
									<span className={darkMode ? 'dark-text' : 'light-text'}> {nativeName.join(', ')}</span></div>
							</div>
							<div className={styles["info-detail"]}>
								<div><span className={cx(styles.bolder, darkMode ? 'dark-text' : 'light-text')}>Population:</span><span
									className={darkMode ? 'dark-text' : 'light-text'}> {country.population}</span></div>
							</div>
							<div className={styles["info-detail"]}>
								<div><span className={cx(styles.bolder, darkMode ? 'dark-text' : 'light-text')}>Region:</span>
									<span className={darkMode ? 'dark-text' : 'light-text'}> {country.region}</span></div>
							</div>
							<div className={styles["info-detail"]}>
								<div><span
									className={cx(styles.bolder, darkMode ? 'dark-text' : 'light-text')}>Sub Region:</span>
									<span className={darkMode ? 'dark-text' : 'light-text'}> {country.subregion}</span>
								</div>
							</div>
							<div className={styles["info-detail"]}>
								<div><span className={cx(styles.bolder, darkMode ? 'dark-text' : 'light-text')}>Capital:</span>
									<span className={darkMode ? 'dark-text' : 'light-text'}> {country.capital.join(', ')}</span></div>
							</div>
						</div>
						<div>
							<div className={styles["info-detail"]}>
								<div><span className={cx(styles.bolder, darkMode ? 'dark-text' : 'light-text')}>Top Level Domain:</span>
									<span className={darkMode ? 'dark-text' : 'light-text'}> {country.tld[0]}</span></div>
							</div>
							<div className={styles["info-detail"]}>
								<div><span className={cx(styles.bolder, darkMode ? 'dark-text' : 'light-text')}>Currencies:</span>
									<span className={darkMode ? 'dark-text' : 'light-text'}> {currencies.join(', ')}</span></div>
							</div>
							<div className={styles["info-detail"]}>
								<div><span className={cx(styles.bolder, darkMode ? 'dark-text' : 'light-text')}>Languages:</span>
									<span className={darkMode ? 'dark-text' : 'light-text'}> {languages.join(', ')}</span></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Country
