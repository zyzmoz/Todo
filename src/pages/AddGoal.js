import React, { Component } from 'react';
import Foundation, {Button} from 'react-foundation';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ac from '../actions';

class AddGoal extends Component {
  construct(){
    state = {
      text: ''
    }
  }
  render(){
    return(
      <div className="grid-container">
        <div className="grid-x grid-padding-x">
          <div className="medium-6 cell">
            <label>Text</label>
            <input className="input" placeholder="Text" onChange={e => this.setState({text: e.target.value})}/>
          </div>
          <div className="medium-12 cell">
            <Link className="button" onClick={() => this.props.addGoal(this.state)} to="/">Save</Link>
          </div>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ac, dispatch);
}

export default connect(null, mapDispatchToProps)(AddGoal);
