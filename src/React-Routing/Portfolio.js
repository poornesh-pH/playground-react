import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Contact() {
  return (
    <div>
      <h5>My Portfolio</h5>
      <NavLink to="/portfolio/1">One</NavLink>
      <NavLink to="/portfolio/2">Two</NavLink>
      <NavLink to="/portfolio/3">Three</NavLink>
    </div>
  );
}
