import React from 'react';

const ColorDetail = ({ match }) => {
  const color = match.params.color;

  return (
    <div>
      <h1>{color} Color</h1>
      <div
        style={{
          backgroundColor: color,
          width: '200px',
          height: '200px',
        }}
      ></div>
    </div>
  );
};

export default ColorDetail;
