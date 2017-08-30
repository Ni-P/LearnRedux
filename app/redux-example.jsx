const redux = require('redux');

console.log('redux example');

var reducer = (state = { name: 'no name' }, action) => {
  return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState ', currentState);
