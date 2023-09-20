import React from 'react';
import { Link } from 'react-router-dom';

function Nav({ dogs }) {
  const dogLinks = dogs.map(dogName => (
    <li key={dogName}>
      <Link to={`/dogs/${dogName}`}>{dogName}</Link>
    </li>
  ));

  return (
    <nav>
      <ul>{dogLinks}</ul>
    </nav>
  );
}

export default Nav;
