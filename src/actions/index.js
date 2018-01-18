import * as api from '../../api/database';
/*
* actions types
*/

export const ADD_GOAL = 'ADD_GOAL';
export const SET_DONE = 'SET_DONE';
export const SHOW_GOALS = 'SHOW_GOALS';

/*
* action creators
*/

export const load = () => dispatch => {
  api.findAll().then((res) => {
    dispatch({type: SHOW_GOALS, goals: res});
  });
}

export const addGoal = (obj) => dispatch => {
  return api.save({...obj, completed: false}).then((res) => {
    const _id = res._id;
    return {type: ADD_GOAL, obj: {...obj, _id}};
  });
  // return {
  //   type: ADD_GOAL,
  //   obj
  // }
}

export const setDone = (obj) => {
  console.log(obj);
  api.update({...obj, completed: true});
  return {
    type: SET_DONE,
    index: obj._id
  }
}

// export const addGoal = text => dispatch => {
//
// }
