import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from './Contact';
import Header from './Header';
import Home from './Home';
import Portfolio from './Portfolio';

export default function AppRouter() {
  return (
    <BrowserRouter>
    <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}
