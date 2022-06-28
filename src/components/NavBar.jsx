import styles from './NavBar.module.css'
import '../index.css'
import {useContext} from "react";
import {ThemeContext} from "../ThemeContext";
import cx from "classnames"


const NavBar = () => {
	const theme = useContext(ThemeContext)
	const darkMode = theme.state.darkMode
	const changeTheme = () => {
		if (darkMode) {
			theme.dispatch({type: 'LIGHT_MODE'})
		} else {
			theme.dispatch({type: 'DARK_MODE'})
		}
	}
	return (
		<nav className={darkMode ? 'dark-elements' : 'light-elements'}>
			<div className={cx(styles.padding, styles['font-weight-600'], darkMode ? 'dark-text' : 'light-text')}>
				Where in the World
			</div>
			<button className={cx(styles.padding, darkMode ? 'dark-text' : 'light-text')} onClick={changeTheme}>
				{darkMode ? 'Light Mode' : 'Dark Mode'}
			</button>
		</nav>
	)
}

export default NavBar
