import React from 'react';

function DogDetails({ dog }) {
  return (
    <div>
      <h2>{dog.name}</h2>
      <p>Age: {dog.age} years</p>
      <ul>
        {dog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;
