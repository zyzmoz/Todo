import React, { Component } from 'react';
import Goal from './Goal';
import Foundation,{ Row } from 'react-foundation';

class GoalList extends Component {
  render(){
    return(
      <div className="wrapper ">
        {
          this.props.data.map((goal, index) => {
            const data = {...goal, index};
            return(
              <Goal data={data} key={index} />
            )
          })
        }
      </div>
    )
  }
}

export default GoalList;
