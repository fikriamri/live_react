import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "unistore/react";
import { store } from "../store/store";
import logo from "../images/logo.svg";
import "../styles/App.css";
import Home from "./Home";
import MovieByCategory from "./MovieByCategory";
import Login from "./Login";
import Profile from "./Profile";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {/* harus pakai exact path biar tidak ikut terender saat halaman lain dipanggil */}
          <Route exact path="/" component={Home} />
          <Route exact path="/:category" component={MovieByCategory} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
