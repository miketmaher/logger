import React, { Fragment, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Searchbar from './components/layout/Searchbar';
import AddButton from './components/layout/AddButton';
import LogList from './components/logs/LogList';
import { AddLogDialog, EditLogDialog } from './components/logs/dialogs';
import { AddTechDialog, TechListDialog } from './components/techs/dialogs';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <Searchbar />
        <div className="container">
          <AddButton />
          <LogList />
        </div>
        <AddLogDialog />
        <EditLogDialog />
        <AddTechDialog />
        <TechListDialog />
      </Fragment>
    </Provider>
  );
};

export default App;
