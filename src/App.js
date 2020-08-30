import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Signin from './components/Auth/Signin';

const App = () => {
  return (
      <HashRouter>
        <Route exact path="/" component={Signin} />
      </HashRouter>
  );
}

export default App;
