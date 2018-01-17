import React, { Component } from 'react';
import Foundation,{ Row, Column, Button } from 'react-foundation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ac from '../actions';

class Goal extends Component {

  renderControls(){
    if (!this.props.data.completed){
      return (
        <div className="col-20">
          <Button onClick={() => this.props.setDone(this.props.data.index)}>Done</Button>
        </div>
      );
    }
    return (<br />);
  }

  render(){

    return(
      <div className="list-item  clearfix">
        <div className="col-80">
          {this.props.data.text}
        </div>
        {
          this.renderControls()
        }

      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ac, dispatch);
}

export default connect(null, mapDispatchToProps)(Goal);
