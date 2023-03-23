import React, { useState, useEffect } from 'react';
import KittenList from './KittenList';
function App() {
  const [kittens, setKittens] = useState([]);

  useEffect(() => {
    fetch('https://kittens3.sfo3.cdn.digitaloceanspaces.com/db.json')
      .then((response) => response.json())
      .then((data) => setKittens(data.kittens))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Kittens</h1>
      <KittenList kittens={kittens} />
    </div>
  );
}

export default App;
