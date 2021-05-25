import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <NavLink exact activeClassName="is-active" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="is-active" to="/portfolio">
        Portfolio
      </NavLink>
      <NavLink activeClassName="is-active" to="/contact">
        Contact
      </NavLink>
    </div>
  );
}
