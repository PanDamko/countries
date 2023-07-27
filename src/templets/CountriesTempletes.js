import React from 'react'
import styles from './CountreisTempletes.module.css'
const CountriesTempletes = ({ country }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={country.flags.png} alt="" />
      <div className={styles.divcard}>
      <div><h2 className={styles.txt2}>{country.name.common} </h2></div>
        <div><p className={styles.txt1}>Population: <strong className={styles.txt2}>{(country.population / 1000).toFixed(3)} tys.</strong></p></div>
        <div><p className={styles.txt1}>Region: <strong className={styles.txt2}>{country.region}</strong></p></div>
        <div><p className={styles.txt1}>Capital: <strong className={styles.txt2}>{country.capital}</strong></p></div>
      </div>
    </div>

  )
}

export default CountriesTempletes