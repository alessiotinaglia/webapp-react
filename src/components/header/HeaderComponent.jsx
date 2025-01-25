import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className="container-fluid d-flex align-items-center">
                    <img className={styles.img} src="./image.jpg" alt="img mondadori" />
                    <NavLink className={styles.title} to="/">CINEMA FILM</NavLink>
                    <NavLink className={styles.navLink} to="/">Home</NavLink>
                    <NavLink className={styles.navLink} to="/Recensioni">Recensioni Film</NavLink>
                    <NavLink className={styles.navLink} to="/Contatti">Contatti</NavLink>
                </div>
                <form className={styles.searchForm} role="search">
                    <input className={styles.searchInput} type="search" placeholder="Search" aria-label="Search" />
                    <button className={styles.searchButton} type="submit">Search</button>
                </form>
            </nav>
        </header>

    );
}

export default Header;
