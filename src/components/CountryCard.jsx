import styles from './CountryCard.module.css'

const CountryCard = ({name, flag, population, region, capital}) => {
	return (
		<div className={styles.container}>
			<img src={flag} alt={`${name} flag`}/>
			<div className={styles.data}>
				<div>{name}</div>
				<p>Population: {population}</p>
				<p>Region: {region}</p>
				<p>Capital: {capital}</p>
			</div>
		</div>
	)
}

export default CountryCard
