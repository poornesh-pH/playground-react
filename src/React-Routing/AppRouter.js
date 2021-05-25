import React from 'react';
import { BrouserRouter, Route, Switch } from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import Portfolio from './Portfolio';
export default function AppRouter() {
  <BrouserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </BrouserRouter>;
}
