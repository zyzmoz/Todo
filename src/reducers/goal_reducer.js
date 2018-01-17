import { SET_DONE, ADD_GOAL } from '../actions';

const initialState = {
  goals: []
};

export default (state = [], action) => {
  switch (action.type) {
    case ADD_GOAL:
      return [...state, {...action.obj, completed: false}]
    case SET_DONE:
      return state.map((goal, index) =>{
        if (index === action.index){          
          return {...goal, completed: true}
        }
        return goal;
      })
    default:
      return state;

  }
}
