import styles from './CountryCard.module.css'
import cx from "classnames";

const CountryCard = ({name, flag, population, region, capital, darkMode}) => {
	return (
		<div className={cx(styles.container, darkMode ? 'dark-background' : 'light-background')}>
			<img src={flag} alt={`${name} flag`}/>
			<div className={styles.data}>
				<div className={cx(styles['font-weight-600'], darkMode ? 'dark-text' : 'light-text')}>{name}</div>
				<p><span
					className={cx(styles['font-weight-600'], darkMode ? 'dark-text' : 'light-text')}>Population:</span> <span
					className={darkMode ? 'dark-text' : 'light-text'}>{population}</span>
				</p>
				<p><span
					className={cx(styles['font-weight-600'], darkMode ? 'dark-text' : 'light-text')}>Region:</span> <span
					className={darkMode ? 'dark-text' : 'light-text'}>{region}</span></p>
				<p><span
					className={cx(styles['font-weight-600'], darkMode ? 'dark-text' : 'light-text')}>Capital:</span> <span
					className={darkMode ? 'dark-text' : 'light-text'}>{capital}</span></p>
			</div>
		</div>
	)
}

export default CountryCard
