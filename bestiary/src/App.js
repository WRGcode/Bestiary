import React from "react";
import { Switch,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Page from "./Pages/Page";


function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/:index'>
        <Page />
      </Route>
      <Route path="*">
        <Error />
        </Route>
    </Switch>
  );
}

export default App;