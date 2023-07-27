
import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries';

function App() {
  const [countries,setCountries]=useState([]);
  
  useEffect(() => { logCountries(); console.log("ładuje"); }, []);

    const logCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all")
    const data = await response.json()
    setCountries(data);
  }

  
  return (
    <div className="App">
      
      <Countries countries={countries}/>
    </div>
  );
}

export default App;
