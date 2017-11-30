import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Fitnics</h1>
    <NavLink to="/" activeClassName="is-active" exact={true} >Home</NavLink>
    {/* <NavLink to="/profile" activeClassName="is-active">Profile</NavLink> */}
    <NavLink to="/exercises" activeClassName="is-active" exact={true} >Exercises</NavLink>
    <NavLink to="/workouts" activeClassName="is-active">Workouts</NavLink>
    <NavLink to="/benefits" activeClassName="is-active">Benefits</NavLink>
  </header>
);

export default Header;