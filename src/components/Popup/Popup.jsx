import React from 'react'
import CountUp from 'react-countup';
import styles from './Popup.module.css';

function Popup({ selected, closeButton }) {

	const APIKEY = 'AIzaSyDjANCJbAlYfZ5rzY4SXAYhJEMEX_Gd2hU'


    console.log("test");
    console.log({selected})
	return (
		<section id={styles.container} className="popup center">
			<div id={styles.content} className="content">
			<article id={styles.info} class="fl w-100 w-third-ns pa2 br3 blue ba b--black-10 mv2">
				<h1 class="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Basic Facts</h1>
					<div id={styles.test} class="pa3 bt b--black-10">
						<dl class="lh-title pa4 mt0">
							<dt class="f6 b">Name</dt>
							<dd class="ml0">{selected.name}</dd>
							<dt class="f6 b mt2">Capital</dt>
							<dd class="ml0">{selected.capital}</dd>
							<dt class="f6 b mt2">Region</dt>
							<dd class="ml0">{selected.region}</dd>
							<dt class="f6 b mt2">Subregion</dt>
							<dd class="ml0">{selected.subregion}</dd>
							<dt class="f6 b mt2">Population</dt>
							<dd class="ml0"><h2>
								<CountUp
										start={0}
										end={selected.population}
										duration={2.5}
										separator=","
											/>
							</h2></dd>
							<dt class="f6 b mt2">Demonym</dt>
							<dd class="ml0">{selected.demonym}</dd>
							<dt class="f6 b mt2">Timezones</dt>
							<dd class="ml0">{selected.timezones}</dd>
						</dl>
					</div>
			</article>
			<div className="fl w-100 w-third-ns pa2 mv2">
			<img className={styles.img} src={selected.flag} alt='' />
			<iframe className={styles.map}
				  src={`https://www.google.com/maps/embed/v1/place?key=${APIKEY}
				  &q=${selected.name}
				  &center=${selected.latlng}
				  &zoom=4
				  &maptype=satellite`}>
				</iframe>
			</div>
			<article id={styles.info2} class="fl w-100 w-third-ns pa2 br3 blue ba b--black-10 mv2">
				<h1 class="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Technical Facts</h1>
					<div id={styles.test} class="pa3 bt b--black-10">
						<dl class="lh-title pa4 mt0">
							<dt class="f6 b">Top Level Domain</dt>
							<dd class="ml0">{selected.topLevelDomain}</dd>
							<dt class="f6 b mt2">Alpha2Code</dt>
							<dd class="ml0">{selected.alpha2Code}</dd>
							<dt class="f6 b mt2">Alpha3Code</dt>
							<dd class="ml0">{selected.alpha3Code}</dd>
							<dt class="f6 b mt2">Calling Codes</dt>
							<dd class="ml0">{selected.callingCodes}</dd>
							<dt class="f6 b mt2">Area</dt>
							<dd class="ml0"><h2>
								<CountUp
										start={0}
										end={selected.area}
										duration={2.5}
										separator=","
											/>
							</h2></dd>
							<dt class="f6 b mt2">Numeric Code</dt>
							<dd class="ml0">{selected.numericCode}</dd>
							<dt class="f6 b mt2">Alternative Spelling</dt>
							<dd class="ml0">{selected.altSpellings[0]}</dd>
						</dl>
					</div>
			</article>
			
				<button className="f6 link dim ba ph3 pv2 mb2 dib black w-100" onClick={closeButton}>Close</button>
			</div>
		</section>
	)
}

export default Popup