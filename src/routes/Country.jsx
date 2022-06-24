import {Link, useParams} from "react-router-dom";
import styles from "./Country.module.css"

const Country = ({countries}) => {
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
		<div>
			<Link to="/" style={{margin: "2rem"}}>Back</Link>
			<div className={styles.container}>
				<img src={country.flags.png} alt={`${country.flags.png} flag`}/>
				<div className={styles.info}>
					<h2>{country.name.common}</h2>
					<div className={styles["more-info"]}>
						<div>
							<div className={styles["info-detail"]}>
								<div><span className={styles.bolder}>Native Name:</span> {nativeName.join(', ')}</div>
							</div>
							<div className={styles["info-detail"]}>
								<div><span className={styles.bolder}>Population:</span> {country.population}</div>
							</div>
							<div className={styles["info-detail"]}>
								<div><span className={styles.bolder}>Region:</span> {country.region}</div>
							</div>
							<div className={styles["info-detail"]}>
								<div><span className={styles.bolder}>Sub Region:</span> {country.subregion}</div>
							</div>
							<div className={styles["info-detail"]}>
								<div><span className={styles.bolder}>Capital:</span> {country.capital.join(', ')}</div>
							</div>
						</div>
						<div>
							<div className={styles["info-detail"]}>
								<div><span className={styles.bolder}>Top Level Domain:</span> {country.tld[0]}</div>
							</div>
							<div className={styles["info-detail"]}>
								<div><span className={styles.bolder}>Currencies:</span> {currencies.join(', ')}</div>
							</div>
							<div className={styles["info-detail"]}>
								<div><span className={styles.bolder}>Languages:</span> {languages.join(', ')}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Country
