import {Link} from "react-router-dom";
import cx from "classnames";

import styles from './Grid.module.css'
import CountryCard from "./CountryCard";

const Grid = ({countries, darkMode}) => {

	return (
		<div className={cx(styles["main-grid"], darkMode ? 'dark-background': 'light-background')}>
			{countries.map(country =>
				<Link to={`/${country.name.common}`} key={country.name.common}>
					<CountryCard region={country.region} population={country.population}
					             name={country.name.common} capital={country.capital[0]}
					             flag={country.flags.png} key={country.name.common} darkMode={darkMode}/>
				</Link>
			)}
		</div>
	)
}

export default Grid

/*

				</Link>

 */
