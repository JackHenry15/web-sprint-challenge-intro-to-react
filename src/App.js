import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character'
import Details from './components/Details'

export default function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [chars, setChars] = useState([])
const [currentCharId, setCurrentCharId] = useState(null)


const openDetails = id => {
  setCurrentCharId(id);
}
const closeDetails = () => {
  setCurrentCharId(null);
}
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
    .get(`https://swapi.dev/api/people`)
    .then(res => {
      setChars(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        chars.map(ch => {
          return <Character key={ch.id} info={ch} action={openDetails}/>
        })
      }
      {
        currentCharId && <Details charId={currentCharId} close={closeDetails}/>
      }
    </div>
  );
}

// export default App;
