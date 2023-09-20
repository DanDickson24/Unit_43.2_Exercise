import React from 'react';
import { Link } from 'react-router-dom';

function DogList({ dogs }) {
  const dogItems = dogs.map(dog => (
    <div key={dog.name}>
      <Link to={`/dogs/${dog.name}`}>
        <h3>{dog.name}</h3>
      </Link>
    </div>
  ));

  return <div>{dogItems}</div>;
}

export default DogList;
