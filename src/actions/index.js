/*
* actions types
*/

export const ADD_GOAL = 'ADD_GOAL';
export const SET_DONE = 'SET_DONE';


/*
* action creators
*/

export const addGoal = (obj) => {
  return {
    type: ADD_GOAL,
    obj
  }
}

export const setDone = (index) => {  
  return {
    type: SET_DONE,
    index
  }
}

// export const addGoal = text => dispatch => {
//
// }
