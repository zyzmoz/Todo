import { SET_DONE, ADD_GOAL } from '../actions';
import * as api from '../../api/database';
api.save({text:"oi"});
console.log(api.findAll());
const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_GOAL:
      // api.insertOne({...action.obj, completed: false});
      return [...state, {...action.obj, completed: false}]
    case SET_DONE:
      return state.map((goal, index) =>{
        if (index === action.index){
          // api.update({...goal, completed: true});
          return {...goal, completed: true}
        }
        return goal;
      })
    default:
      return state;

  }
}
