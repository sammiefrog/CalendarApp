import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Calendar from './components/Calendar';

function App() {
  return (
    <Router>    
      <Calendar />
    </Router>
  );
}

export default App;
