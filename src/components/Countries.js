import React, { useEffect, useState } from 'react'
import CountriesTempletes from '../templets/CountriesTempletes'
import styles from './Counstris.module.css'



const Countries = ({ countries }) => {
  const[filterRegion,setFilterRegion]=useState([]);
  const[value, setValue]=useState("All regions");
  const[searchName, setSearchName] = useState("")
  

  useEffect(()=>{filterCountries();},[value,countries]);
  useEffect(()=>{filterCountriesName();},[searchName]);
  
  const filterCountries = ()=>{
    setSearchName("");
    value === "All regions" ? setFilterRegion(countries) : setFilterRegion(countries.filter((x)=> x.region === value))
    
  }

  const filterCountriesName = ()=>{
    
    let tab=[];
    value !== "All regions" ? tab = countries.filter((x)=> x.region === value) : tab = countries;
    
    
    searchName === "" ? setFilterRegion(tab) : setFilterRegion(tab.filter((x) => x.name.common.includes(searchName)))
    
  }

 
  
  
  return (
    <div className={styles.divqw}>
      <div className={styles.head}>
        <h3 className={styles.txt}>
        {value === "All" ? "Number of countries in the world : " : `Number of countries in ${value} : `  } {filterRegion.length}
          </h3>
        </div>
      <div className={styles.head}>
        <div >
          <input onChange={(e)=>setSearchName(e.target.value)} className={styles.search} value={searchName} type="text" name="country" id="input" placeholder="Search country by name" /></div>
         
        <div>
          <select className={styles.select} defaultValue="All regions">
            <option selected onClick={(e)=>setValue(e.target.label)} value="All regions" label="All regions" ></option>
            <option onClick={(e)=>setValue(e.target.label)} value="Africa" label="Africa"></option>
            <option onClick={(e)=>setValue(e.target.label)} value="Americas" label="Americas"></option>
            <option onClick={(e)=>setValue(e.target.label)} value="Asia" label="Asia"></option>
            <option onClick={(e)=>setValue(e.target.label)} value="Europe" label="Europe"></option>
            <option onClick={(e)=>setValue(e.target.label)} value="Oceania" label="Oceania"></option>
          </select>
        </div>
        
      </div>
      <div className={styles.wrapper}>{filterRegion.map((xc) => <CountriesTempletes key={xc.cca3} country={xc} />)}</div>
    </div>
  )
}

export default Countries