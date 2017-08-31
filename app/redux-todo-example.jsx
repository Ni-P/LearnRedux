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

var store = redux.createStore(
  reducer,
  redux.compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
);

var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('searchText is ', state.searchText);
  document.getElementById('app').innerHTML = state.searchText;
});

// console.log('currentState ', store.getState());

var action = {
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'new searchText'
};

store.dispatch(action);

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'second dispatch'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'third dispatch'
});

// console.log('Should have new searchText', store.getState());
