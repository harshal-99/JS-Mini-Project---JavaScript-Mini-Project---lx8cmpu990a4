import styles from './Grid.module.css'
import CountryCard from "./CountryCard";

const Grid = ({countries}) => {
	return (
		<div className={styles["main-grid"]}>
			{countries.map(country =>
				<CountryCard region={country.region} population={country.population}
				             name={country.name.common} capital={country.capital[0]}
				             flag={country.flags.png} key={country.name.common}/>)}
		</div>
	)
}

export default Grid
