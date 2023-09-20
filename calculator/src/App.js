import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // Import BrowserRouter and Route
import Calculator from './Calculator';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/add/:num1/:num2" component={Calculator} />
          <Route path="/subtract/:num1/:num2" component={Calculator} />
          <Route path="/multiply/:num1/:num2" component={Calculator} />
          <Route path="/divide/:num1/:num2" component={Calculator} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
