import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Contact() {
  return (
    <div>
      <h4>My Portfolio</h4>
      <hr />
      <NavLink to="/portfolio/1">One</NavLink>
      <NavLink to="/portfolio/2">Two</NavLink>
      <NavLink to="/portfolio/3">Three</NavLink>
    </div>
  );
}
