import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Navbar from './container/Navbar';
import Home from './container/Home';
import Chapters from './container/Chapters';
import Chapter from './container/Chapter';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/chapters" component={Chapters} exact />
          <Route path="/chapter/:flag" component={Chapter} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
