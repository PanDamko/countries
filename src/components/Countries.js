import React, { useEffect, useState } from 'react'
import CountriesTempletes from '../templets/CountriesTempletes'
import styles from './Counstris.module.css'



const Countries = ({ countries }) => {

  const[filterRegion,setFilterRegion]=useState([]);
  useEffect(()=>{filterCountries("firstrun");},[countries]);


  const filterCountries = (filter)=>{
  if(filter === "firstrun"){
    setFilterRegion(countries); 
  }else{   
    filter.target.value === "All" ? setFilterRegion(countries) : setFilterRegion(countries.filter((x)=> x.region === filter.target.value))
  }
  
  }

  
  return (
    <div className={styles.divqw}>
      <div className={styles.head}><h3 className={styles.txt}>Liczba krajów: {filterRegion.length}</h3></div>
      <div className={styles.head}>
        <div>szukanie</div>
        <div>
          <select>
            <option onClick={filterCountries} value="All">All regions</option>
            <option onClick={filterCountries} value="Africa">Africa</option>
            <option onClick={filterCountries} value="Americas">Americas</option>
            <option onClick={filterCountries} value="Asia">Asia</option>
            <option onClick={filterCountries} value="Europe">Europe</option>
            <option onClick={filterCountries} value="Oceania">Oceania</option>
          </select>

        </div>
      </div>
      <div className={styles.wrapper}>{filterRegion.map((xc) => <CountriesTempletes key={xc.cca3} country={xc} />)}</div>
    </div>
  )
}

export default Countries