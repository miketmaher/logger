import React, { Fragment, useEffect } from 'react';
import Searchbar from './components/layout/Searchbar';
import LogList from './components/logs/LogList';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Fragment>
      <Searchbar />
      <div className="container">
        <LogList />
      </div>
    </Fragment>
  );
};

export default App;
