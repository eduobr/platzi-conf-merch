import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import {
  Home,
  CheckOut,
  Information,
  Payment,
  Success,
  NotFound,
} from '../containers/Index';
//o también import * as Page from '../pages'

import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/checkout" component={CheckOut} />
            <Route exact path="/checkout/information" component={Information} />
            <Route exact path="/checkout/payment" component={Payment} />
            <Route exact path="/checkout/success" component={Success} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
