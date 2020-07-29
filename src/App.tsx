import React from 'react';
import './App.css';
import Home from './Pages/Login';
import Main from './Pages/ShowCase';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
       <Router>
            <Switch>
                <Route component={Home} path="/" exact/>
                <Route component={Main} path="/mainscreen" exact/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
