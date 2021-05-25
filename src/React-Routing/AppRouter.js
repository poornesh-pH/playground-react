import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from './Contact';
import Header from './Header';
import Home from './Home';
import Portfolio from './Portfolio';
import Display from './Display';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/portfolio/:id" component={Display} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}
