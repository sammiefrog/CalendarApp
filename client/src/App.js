import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CalendarPage from "./pages/Calendar";
import About from "./pages/About"
import Login from "./pages/Login"
import Register from "./pages/Register"
import {
  UserContext,
  UserContextProvider,
} from "./context/UserContext";



function App() {
  return (
    <UserContextProvider>
      {/* <UserContext.Consumer> */}
        <Router>
          <Switch>
            <Route exact path="/calendar" component={CalendarPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path={["/", "/about"]} component={About} />
          </Switch>
        </Router>
      {/* </UserContext.Consumer> */}
    </UserContextProvider>
  );
  
}

export default App;
