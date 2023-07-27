import React, { useEffect, useState } from 'react'
import CountriesTempletes from '../templets/CountriesTempletes'
import styles from './Counstris.module.css'



const Countries = ({ countries }) => {

  const[filterRegion,setFilterRegion]=useState([]);
  const[value, setValue]=useState("All");
  
  useEffect(()=>{filterCountries();},[value,countries]);


  const filterCountries = ()=>{
    value === "All" ? setFilterRegion(countries) : setFilterRegion(countries.filter((x)=> x.region === value))
  }
  const show = (e)=>{
    setValue(e.target.value)
  }
  

  
  return (
    <div className={styles.divqw}>
      <div className={styles.head}>
        <h3 className={styles.txt}>
        {value === "All" ? "Number of countries in the world : " : `Number of countries in ${value} : `  } {filterRegion.length}
          </h3>
        </div>
      <div className={styles.head}>
        <div>szukanie</div>
        <div>
          <select>
            <option onClick={show} value="All">All regions</option>
            <option onClick={show} value="Africa">Africa</option>
            <option onClick={show} value="Americas">Americas</option>
            <option onClick={show} value="Asia">Asia</option>
            <option onClick={show} value="Europe">Europe</option>
            <option onClick={show} value="Oceania">Oceania</option>
          </select>

        </div>
      </div>
      <div className={styles.wrapper}>{filterRegion.map((xc) => <CountriesTempletes key={xc.cca3} country={xc} />)}</div>
    </div>
  )
}

export default Countries