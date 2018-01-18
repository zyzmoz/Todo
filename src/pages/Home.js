import React, { Component } from 'react';
import Foundation,{ Colors, Button } from 'react-foundation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ac from '../actions';
import GoalList from '../components/GoalList';

class HomePage extends Component {
  constructor(){
    super();
    this.state = {
      click: 0
    }
  }

  componentDidMount(){
    this.props.load();
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ac, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
