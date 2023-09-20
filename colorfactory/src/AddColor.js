import React from 'react';

class AddColorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newColor: '', // To store the new color input
    };
  }

  // Function to handle input changes
  handleInputChange = (event) => {
    this.setState({ newColor: event.target.value });
  }

  // Function to handle form submission
  handleSubmit = (event) => {
    event.preventDefault();
    
    // Call the addColor function to add the new color
    this.props.addColor(this.state.newColor);

    // Clear the input field after adding the color
    this.setState({ newColor: '' });
  }

  render() {
    return (
      <div>
        <h2>Add a New Color</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            New Color: 
            <input
              type="text"
              value={this.state.newColor}
              onChange={this.handleInputChange}
              required
            />
          </label>
          <button type="submit">Add Color</button>
        </form>
      </div>
    );
  }
}

export default AddColorForm;
