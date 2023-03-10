import { Link } from "react-router-dom";
import styles from "../css/Navbar.module.css";
import LoginSection from "./LoginSection";

function Navbar(props) {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>myShop</h1>
			<nav className={styles.navigation}>
				<Link to="/" className={styles.navButton}>
					Home
				</Link>
				<Link to="/shop" className={styles.navButton}>
					Shop
				</Link>
				<Link to="/onsale" className={styles.navButton}>
					On Sale!
				</Link>
			</nav>
			<LoginSection
				displayName={props.displayName}
				photoURL={props.photoURL}
				signIn={props.signIn}
				signOut={props.signOut}
				logState={props.logState}
			/>
			<Link to="/cart" className={styles.checkoutSection}>
				<div className={styles.checkoutButton}>
					<i className="fa fa-shopping-cart"></i>
				</div>
				<div className={styles.itemsCounter}>{props.cartCounter}</div>
			</Link>
		</header>
	);
}

//falta en lugar del ultimo link renderear una seccion que alterne entre el link actual y el boton para sing up

export default Navbar;
