const redux = require('redux');

console.log('redux example');

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML =
      '<a target="_blank" href="' + state.map.url + '">View your location</a>';
  }
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState ', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Niko'));

store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.addHobby('Walking'));
store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Kristian'));

store.dispatch(actions.addMovie('Boring Cinema', 'Boredom'));
store.dispatch(actions.addMovie('PG-18', 'Family'));
store.dispatch(actions.addMovie('Kill many things', 'Action'));

store.dispatch(actions.removeMovie(1));

// console.log('Name should be Niko', store.getState());
