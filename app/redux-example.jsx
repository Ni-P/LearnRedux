const redux = require('redux');

console.log('redux example');

var reducer = (state = { name: 'no name' }, action) => {
  // console.log('New action', action);

  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState ', currentState);

var action = {
  type: 'CHANGE_NAME',
  name: 'Niko'
};

store.dispatch(action);

console.log('Name should be Niko', store.getState());
