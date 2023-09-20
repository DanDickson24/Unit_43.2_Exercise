import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ColorList from './ColorList';
import ColorDetail from './ColorDetail';
import AddColor from './AddColor';

const App = () => {
  const [colors, setColors] = useState([]);

  const addColor = (newColor) => {
    setColors([newColor, ...colors]);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/colors">
          <ColorList colors={colors} />
        </Route>
        <Route path="/colors/:color" component={ColorDetail} />
        <Route path="/colors/new">
          <AddColor addColor={addColor} />
        </Route>
        <Redirect exact from="/" to="/colors" />
        <Redirect from="/colors/*" to="/colors" />
        <Redirect to="/colors" />
      </Switch>
    </Router>
  );
};

export default App;
