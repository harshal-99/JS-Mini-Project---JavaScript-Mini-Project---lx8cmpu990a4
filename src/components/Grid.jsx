import styles from './Grid.module.css'
import CountryCard from "./CountryCard";
import {Link} from "react-router-dom";

const Grid = ({countries}) => {
	return (
		<div className={styles["main-grid"]}>
			{countries.map(country =>
				<Link to={`/${country.name.common}`} key={country.name.common}>
					<CountryCard region={country.region} population={country.population}
					             name={country.name.common} capital={country.capital[0]}
					             flag={country.flags.png} key={country.name.common}/>
				</Link>
			)}
		</div>
	)
}

export default Grid

/*

				</Link>

 */
