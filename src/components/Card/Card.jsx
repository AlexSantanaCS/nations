import React, { useEffect, useState } from 'react';
import { fetchData } from '../../api';
import styles from './Card.module.css';
// import { Card, CardContent, Typography, Grid } from '@material-ui/core';


const Card = ({ openPopUp, getCountryName, country }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    //This fetches the data from the API to use in this component
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchData())
        }

        fetchAPI();
    }, [setFetchedCountries]);




    // console.log(fetchedCountries);
    

    
    return(
        <div className={styles.test}>
            {country.map(({name,capital,flag, i} ) => <article key={i} id={styles.effect} className="mw5 center br3 pa3 pa4-ns mv3 ba b--black-10" onClick={() => openPopUp(name)}>
                <div className="tc" >
                    <img src={flag} class="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you" />
                    <h1 className="f3 mb2">{name}</h1>
                    <h2 className="f5 fw4 gray mt0">{capital}</h2>
                </div>
                </article>)}
        </div>
    )












}

export default Card;