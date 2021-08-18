import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./components/pages/Home";
import { AuthProvider } from "./components/contexts/Auth";

const App: FC = () => {
  return (
    <div className="App container">
      <AuthProvider>
        <div className="jumbotron">
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route component={HomePage} />
            </Switch>
          </Router>
        </div>
      </AuthProvider>
    </div>
  );
};

export default App;
