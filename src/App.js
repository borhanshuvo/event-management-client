import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import { createContext, useState } from 'react';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute'
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
