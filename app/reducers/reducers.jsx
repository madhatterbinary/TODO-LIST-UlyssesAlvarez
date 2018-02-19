import uuid from 'node-uuid';
import moment from 'moment';
import * as actionTypes from '../actions/actionTypes';

export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_TEXT:
      return action.searchText;
    default:
      return state;
  };
};

export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_SHOW_FINISHED:
      return !state;
    default:
      return state;
  }
};

export var todosReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          finsihed: false,
          startedAt: moment().unix(),
          finishedAt: undefined
        }
      ];
    case actionTypes.TOGGLE_TASK:
      return state.map((todo) => {
        if (todo.id === action.id) {
          var nextFinished = !todo.finished;

          return {
            ...todo,
            finished: nextFinished,
            finishedAt: nextFinished ? moment().unix() : undefined
          };
        } else {
          return todo;
        }
      });
    case actionTypes.ADD_TASKS:
      return [
        ...state,
        ...action.todos
      ];
    default:
      return state;
  }
};
