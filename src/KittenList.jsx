import React from 'react';

function KittenList({ kittens }) {
  return (
    <div>
      {kittens.map((kitten) => (
        <div key={kitten.id}>
          <h2>{kitten.name}</h2>
          <img src={kitten.image} alt={kitten.name} />
        </div>
      ))}
    </div>
  );
}

export default KittenList;
