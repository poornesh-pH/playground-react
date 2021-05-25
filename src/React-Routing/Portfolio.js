import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Contact(props) {
  console.log(props)
  return (
    <div>
      <h4>My Portfolio</h4><hr/>
      <NavLink to="/portfolio/one">One</NavLink>
      <NavLink to="/two">Two</NavLink>
      <NavLink to="/three">Three</NavLink>

    </div>
  );
}
