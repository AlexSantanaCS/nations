import React from 'react';
import styles from './CountryPicker.module.css';

const CountryPicker = ({ onSearch, onEnter }) => {
    return(
        <div className={styles.container}>
            <form class="pa4 black-80">
                <div class="measure">
                 <label for="name" class="f6 b db mb2">Search</label>
                    <input onChange={ onSearch } id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                </div>
            </form>

        </div>
    )
}

export default CountryPicker;