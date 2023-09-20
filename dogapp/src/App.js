import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Nav from './Nav';
import DogList from './DogList';
import DogDetails from './DogDetails'; 

class App extends React.Component {

  render() {
    const { dogs } = this.props;

    return (
      <Router>
        <Nav dogs={dogs.map(dog => dog.name)} />

        <Switch>
          <Route exact path="/dogs">
            <DogList dogs={dogs} />
          </Route>

          {/* Route to display a specific dog */}
          <Route
  path="/dogs/:name"
  render={(props) => {
    const dogName = props.match.params.name;
    const currentDog = dogs.find((dog) => dog.name === dogName);

    if (currentDog) {
      // Pass only the current dog data to DogDetails component
      return <DogDetails dog={currentDog} />;
    } else {
      // If the dog is not found, you can handle it accordingly (e.g., display a 404 message).
      return <Redirect to="/dogs" />;
    }
  }}
/>

          {/* Redirect to /dogs for any other route */}
          <Redirect to="/dogs" />
        </Switch>
      </Router>
    );
  }
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
};


export default App;
