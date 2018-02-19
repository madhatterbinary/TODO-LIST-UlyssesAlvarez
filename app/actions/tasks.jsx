import * as actionTypes from './actionTypes';

export const setSearchText = (searchText) => {
  return {
    type: actionTypes.SET_SEARCH_TEXT,
    searchText
  };
};

export const toggleShowFinished = () => {
  return {
    type: actionTypes.TOGGLE_SHOW_FINISHED
  };
};

export const addTask = (text) => {
  return {
    type: actionTypes.ADD_TASK,
    text
  };
};

export const addTasks = (todos) => {
  return {
    type: actionTypes.ADD_TASKS,
    todos
  };
};

export const toggleTask = (id) => {
  return {
    type: actionTypes.TOGGLE_TASK,
    id
  };
};
