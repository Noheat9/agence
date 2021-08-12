import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

class WorksNav extends Component {
  render () {
    return(
      <nav className="">
        <li><Link to="/works/platon">Platon</Link></li>
        <li><Link to="/works/sedal" >Sedal</Link></li>
        <li><Link to="/works/solane" >Solane</Link></li>
      </nav>
    )
  }
};

export default WorksNav;
