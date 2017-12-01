import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1 className="header-name">Fitnics</h1>
    <div className="nav-bar">
      <NavLink to="/" activeClassName="is-active" exact={true} style={{ textDecoration: 'none' }} className="nav-link" >Home</NavLink>
      {/* <NavLink to="/profile" activeClassName="is-active">Profile</NavLink> */}
      <NavLink to="/exercises" activeClassName="is-active" exact={true} style={{ textDecoration: 'none' }} className="nav-link" >Exercises</NavLink>
      <NavLink to="/workouts" activeClassName="is-active" style={{ textDecoration: 'none' }} className="nav-link" >Workouts</NavLink>
      <NavLink to="/benefits" activeClassName="is-active" style={{ textDecoration: 'none' }} className="nav-link" >Benefits</NavLink>
    </div>

  </header>
);

export default Header;