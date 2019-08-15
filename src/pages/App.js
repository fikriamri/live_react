import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "unistore/react";
import { store } from "../store/store";
import logo from "../images/logo.svg";
import "../styles/App.css";
import TestPage1 from "./TestPage1";
import TestPage2 from "./TestPage2";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {/* harus pakai exact path biar tidak ikut terender saat halaman lain dipanggil */}
          <Route exact path="/" component={TestPage1} />
          <Route exact path="/2" component={TestPage2} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
