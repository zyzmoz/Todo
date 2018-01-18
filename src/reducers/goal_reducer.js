import { SET_DONE, ADD_GOAL, SHOW_GOALS } from '../actions';

var initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_GOAL:
      return [...state, {...action.obj, completed: false}]
    case SET_DONE:
      return state.map((goal, index) =>{
        if (goal._id === action.index){
          return {...goal, completed: true}
        }
        return goal;
      })
    case SHOW_GOALS:
      state = [];
      return [...state, ...action.goals];
    default:
      return state;

  }
}
