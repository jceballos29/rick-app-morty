import React, { useState, useEffect } from 'react'


import './App.css';

import SearchBox from './components/SearchBox';
import LocationContainer from './components/LocationContainer';

import {randomNumber} from './services/randomLocation';
import {getDataApi} from './services/getDataApi' 

function App() {

  const [number, setNumber] = useState(null)
  const [url, setUrl] = useState(null)
  const [location, setLocation] = useState(null)
  const [nameLocation, setNameLocation] = useState(null)
  
  
  const getLocation = (searchLocation) => {
    setNameLocation(searchLocation)
  }


  useEffect(() => {
    setNumber(randomNumber())
  }, [])
  
  useEffect(() => {
    if (number) setUrl(`https://rickandmortyapi.com/api/location/${number}`)
  }, [number])

  useEffect(() => {
    if(nameLocation) {
      const getLocationNumber = async() => {
        const data = await fetch(`https://rickandmortyapi.com/api/location/?name=${nameLocation}`).then(response => response.json())
        const results =data.results
        setNumber(results[0].id);
      } 
      getLocationNumber();
    }
    
  }, [nameLocation])

  useEffect(() => {
    if(url) {
      const locationApi = async () => {
        setLocation(await getDataApi(url))
      }
      locationApi()
    }
  }, [url])

  return (
    <div className="App">
      <SearchBox getLocation={getLocation}/>
      <LocationContainer location={location}/>
    </div>
  );
}

export default App;
