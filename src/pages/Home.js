import React, { Component } from 'react';
import Foundation,{ Colors, Button } from 'react-foundation';
import { connect } from 'react-redux';
import GoalList from '../components/GoalList';

class HomePage extends Component {
  constructor(){
    super();
    this.state = {
      click: 0
    }
  }
  render(){

    return(
      <div className="list">
        <GoalList data={this.props.goal} />
      </div>

    );
  }
};

const mapStateToProps = (state) =>{
  const { goal } = state;
  return { goal };
}

export default connect(mapStateToProps, {})(HomePage);
