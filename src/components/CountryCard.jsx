import styles from './CountryCard.module.css'

const CountryCard = ({name, flag, population, region, capital}) => {
	return (
		<div className={styles.container}>
			<img src={flag} alt={`${name} flag`}/>
			<div className={styles.data}>
				<h3>{name}</h3>
				<p><span className={styles.bold}>Population:</span> {population}</p>
				<p><span className={styles.bold}>Region:</span> {region}</p>
				<p><span className={styles.bold}>Capital:</span> {capital}</p>
			</div>
		</div>
	)
}

export default CountryCard
