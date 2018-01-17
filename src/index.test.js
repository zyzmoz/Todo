import {
  addGoal,
  setDone
} from './actions';

import store from './reducers';

test('Redux Test', () => {
  // Log the initial state
  // console.log(store.getState());

  // Every time the state changes, log it
  // Note that subscribe() returns a function for unregistering the listener
  const unsubscribe = store.subscribe(() => {
    // console.log(store.getState());
  });

  // Dispatch some actions
  store.dispatch(addGoal({text:'Learn about actions'}));
  store.dispatch(addGoal({text:'Learn about reducers'}));
  store.dispatch(addGoal({text:'Learn about store'}));
  store.dispatch(setDone(0));
  store.dispatch(setDone(1));
  // Stop listening to state updates
  const { goal } = store.getState();
  unsubscribe();
  expect(goal.length).toBe(3);
  expect(goal[0].completed).toBe(true);
  expect(goal[1].completed).toBe(true);
  expect(goal[2].completed).toBe(false);
});
