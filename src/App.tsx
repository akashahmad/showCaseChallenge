import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import Main from './Pages/MainScreen/mainscreen';
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
