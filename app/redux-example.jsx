const redux = require('redux');

console.log('redux example');

var stateDefault = {
  name: 'no name',
  hobbies: [],
  movies: []
};
var nextHobbyId = 1;
var nextMovieId = 1;

var reducer = (state = stateDefault, action) => {
  // console.log('New action', action);

  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      };
    case 'REMOVE_HOBBY':
      return {
        ...state,
        hobbies: state.hobbies.filter(hobby => hobby.id !== action.id)
      };
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: nextMovieId++,
            title: action.title,
            genre: action.genre
          }
        ]
      };
    case 'REMOVE_MOVIE':
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.id)
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

  document.getElementById('app').innerHTML = state.name;
  console.log('state is ', store.getState());
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState ', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Niko'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Running'
});
store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Walking'
});
store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Kristian'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Boring Cinema',
  genre: 'Boredom'
});
store.dispatch({
  type: 'ADD_MOVIE',
  title: 'PG-18',
  genre: 'Family'
});
store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Kill many things',
  genre: 'Action'
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
});

// console.log('Name should be Niko', store.getState());
