import React from 'react';
import AddColorForm from './AddColor';

class ColorsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        'Red',
        'Blue',
        'Green',
      ],
    };
  }

  // Function to add a new color to the list
  addColor = (newColor) => {
    this.setState((prevState) => ({
      colors: [...prevState.colors, newColor],
    }));
  }

  render() {
    const { colors } = this.state;

    return (
      <div>
        <h1>Colors</h1>
        <ul>
          {colors.map((color, index) => (
            <li key={index}>
              <a href={`/colors/${color}`}>{color}</a>
            </li>
          ))}
        </ul>
        {/* Render the form to add new colors */}
        <AddColorForm addColor={this.addColor} />
      </div>
    );
  }
}

export default ColorsList;
