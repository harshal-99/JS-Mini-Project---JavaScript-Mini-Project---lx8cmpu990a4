import styles from './NavBar.module.css'

const NavBar = () => {
	return (
		<nav>
			<div className={styles.padding}>Where in the World</div>
			<div className={styles.padding}>Dark Mode</div>
		</nav>
	)
}

export default NavBar
