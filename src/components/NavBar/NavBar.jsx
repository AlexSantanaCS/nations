import React from 'react';
import styles from './NavBar.module.css';

const NavBar = ({ about, home, closeButton }) => {
    return(
        <nav id={styles.container} class="dt w-100 border-box pa1 ph5-ns">
            <a onClick={closeButton} class="dtc v-mid mid-gray link dim w-25" href="#" title="Home">
                <p id={styles.logo} class="dib br-100" alt="Site Name" >Stat Nation</p>
            </a>
            <div class="dtc v-mid w-75 tr">
                <a id={styles.about} onClick={about} class="link dim dark-gray f6 f5-ns dib" href="#" title="Contact">About</a>
            </div>
        </nav>
    )
    
}



export default NavBar;