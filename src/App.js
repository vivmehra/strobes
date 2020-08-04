import React from "react";
// import logo from "./logo.svg";
import "./App.scss";
// import { Button } from "carbon-components-react";

import { Route, Switch } from "react-router-dom";
import LandingPage from "./content/LandingPage";
import RepoPage from "./content/RepoPage";

function App() {
  return (
    <>
      {/* <StrobesHeader /> */}
      {/* <Content> */}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/repos" component={RepoPage} />
      </Switch>
      {/* <Button>Button</Button> */}
      {/* </Content> */}
    </>
  );
}

export default App;
