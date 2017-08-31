const redux = require('redux');

console.log('redux example');

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};

// Name reducer and action generators
// ------------------------------------------------------------
var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
};

var changeName = name => {
  return {
    type: 'CHANGE_NAME',
    name
  };
};

// Hobbies reducer and action generators
// ------------------------------------------------------------
var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];
    case 'REMOVE_HOBBY':
      return state.filter(hobby => hobby.id !== action.id);
    default:
      return state;
  }
};

var addHobby = hobby => {
  return {
    type: 'ADD_HOBBY',
    hobby
  };
};

var removeHobby = id => {
  return {
    type: 'REMOVE_HOBBY',
    id
  };
};

// Movies reducer and action generators
// ------------------------------------------------------------
var nextMovieId = 1;
var moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMovieId++,
          title: action.title,
          genre: action.genre
        }
      ];
    case 'REMOVE_MOVIE':
      return state.filter(movie => movie.id !== action.id);

    default:
      return state;
  }
};

var addMovie = (title, genre) => {
  return {
    type: 'ADD_MOVIE',
    title,
    genre
  };
};

var removeMovie = id => {
  return {
    type: 'REMOVE_MOVIE',
    id
  };
};
// End of reducers
// ------------------------------------------------------------

// Combine all reducers
var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});

// Create our store
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

store.dispatch(changeName('Niko'));

// store.dispatch({
//   type: 'CHANGE_NAME',
//   name: 'Niko'
// });

// store.dispatch({
//   type: 'ADD_HOBBY',
//   hobby: 'Running'
// });
// store.dispatch({
//   type: 'ADD_HOBBY',
//   hobby: 'Walking'
// });
// store.dispatch({
//   type: 'REMOVE_HOBBY',
//   id: 2
// });

store.dispatch(addHobby('Running'));
store.dispatch(addHobby('Walking'));
store.dispatch(removeHobby(2));

store.dispatch(changeName('Kristian'));

// store.dispatch({
//   type: 'CHANGE_NAME',
//   name: 'Kristian'
// });

// store.dispatch({
//   type: 'ADD_MOVIE',
//   title: 'Boring Cinema',
//   genre: 'Boredom'
// });
// store.dispatch({
//   type: 'ADD_MOVIE',
//   title: 'PG-18',
//   genre: 'Family'
// });
// store.dispatch({
//   type: 'ADD_MOVIE',
//   title: 'Kill many things',
//   genre: 'Action'
// });

store.dispatch(addMovie('Boring Cinema', 'Boredom'));
store.dispatch(addMovie('PG-18', 'Family'));
store.dispatch(addMovie('Kill many things', 'Action'));

// store.dispatch({
//   type: 'REMOVE_MOVIE',
//   id: 1
// });

store.dispatch(removeMovie(1));

// console.log('Name should be Niko', store.getState());
