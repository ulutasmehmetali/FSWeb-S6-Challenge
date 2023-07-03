import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        setCharacters(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      {characters.map((character, index) => (
        <Character key={index} name={character.name} />
      ))}
    </div>
  );
};

export default App;
