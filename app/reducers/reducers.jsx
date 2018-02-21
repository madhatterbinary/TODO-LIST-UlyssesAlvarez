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
        action.task
      ];
    case actionTypes.UPDATE_TASK:
      return state.map((task) => {
        if (task.id === action.id) {
          return {
            ...task,
            ...action.updates
          };
        } else {
          return task;
        }
      });
    case actionTypes.ADD_TASKS:
      return [
        ...state,
        ...action.tasks
      ];
    default:
      return state;
  }
};
