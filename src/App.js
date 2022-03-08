import { createContext, lazy, Suspense, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
// import Home from "./components/Home/Home/Home";
// import Login from "./components/Login/Login/Login";
// import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
// import NotFound from "./components/NotFound/NotFound";
export const UserContext = createContext();

const Home = lazy(() => import("./components/Home/Home/Home"));
const Dashboard = lazy(() =>
  import("./components/Dashboard/Dashboard/Dashboard")
);
const Login = lazy(() => import("./components/Login/Login/Login"));
const PrivateRoute = lazy(() =>
  import("./components/Login/PrivateRoute/PrivateRoute")
);
const NotFound = lazy(() => import("./components/NotFound/NotFound"));

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const queryClient = new QueryClient();

  useEffect(() => {
    const signedInUser = JSON.parse(localStorage.getItem("userInfo"));
    setLoggedInUser(signedInUser);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Suspense
          fallback={
            <div className="d-flex justify-content-center">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
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

              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </Router>
        </Suspense>
      </UserContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
