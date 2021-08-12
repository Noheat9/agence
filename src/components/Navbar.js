import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import classes from './Navbar.module.css';
import DarkMode from './DarkMode';

class Navbar extends Component {
  render () {
    return(
    <header className={classes.header}>
      <nav>
        <li><Link to="/" exact>Home</Link></li>
        <li><Link to="/about" >About</Link></li>
        <li><Link to="/works" >Works</Link></li>
        <DarkMode/>
      </nav>
      </header>
    )
  }
};

export default Navbar;
