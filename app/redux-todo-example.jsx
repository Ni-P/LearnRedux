const redux = require('redux');

console.log('redux todo example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};

var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };

    default:
      return state;
  }
};

var store = redux.createStore(reducer);

console.log('currentState ', store.getState());

var action = {
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'new searchText'
};

store.dispatch(action);

console.log('Should have new searchText', store.getState());
