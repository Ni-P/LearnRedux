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

var store = redux.createStore(
  reducer,
  redux.compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
);

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is ', state.name);
  document.getElementById('app').innerHTML = state.name;
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState ', currentState);

var action = {
  type: 'CHANGE_NAME',
  name: 'Niko'
};

store.dispatch(action);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Kristian'
});

// console.log('Name should be Niko', store.getState());
