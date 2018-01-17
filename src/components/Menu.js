import React, { Component } from 'react';
import { Button } from 'react-foundation';
import { Link, isActive } from 'react-router-dom';

class Menu extends Component {
  render() {
    return(
      <div className="menu">
        <Link to="/"><Button>Goals</Button></Link>
        <Link to="/add"><Button>New Goal</Button></Link>

      </div>
    );
  }
}

export default Menu;
