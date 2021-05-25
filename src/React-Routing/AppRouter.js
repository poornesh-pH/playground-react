import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import Portfolio from './Portfolio';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}
