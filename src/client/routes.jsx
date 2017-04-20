import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { Top } from './components/top';
import Home from './components/home';
import Counter from './components/counter';

export const routes = (
  <Route path="/" component={Top}>
    <IndexRoute component={Home}/>
    <Route path="/home" component={Home}/>
    <Route path="/counter" component={Counter}/>
  </Route>
);
