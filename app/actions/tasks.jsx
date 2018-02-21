import * as actionTypes from './actionTypes';
import firebase, { firebaseRef } from 'app/firebase/';
import moment from 'moment';

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

export const addTask = (task) => {
  return {
    type: actionTypes.ADD_TASK,
    task
  };
};

export const addTasks = (tasks) => {
  return {
    type: actionTypes.ADD_TASKS,
    tasks
  };
};

export var startAddTasks = () => {
  return (dispatch, getState) => {
    var tasksRef = firebaseRef.child('tasks');
    return tasksRef.once('value').then((snapshot) => {
      var tasks = snapshot.val() || {};
      var parsedTasks = [];

      Object.keys(tasks).forEach((taskId) => {
        parsedTasks.push({
          id: taskId,
          ...tasks[taskId]
        });
      });

      dispatch(addTasks(parsedTasks));
    });
  };
};
export var startAddTask = (text) => {
  return (dispatch, getState) => {
    var task =  {
      text,
      finished: false,
      startedAt: moment().unix(),
      finishedAt: null
    };
    var taskRef = firebaseRef.child('tasks').push(task);

    return taskRef.then(() => {
        dispatch(addTask({
          ...task,
          id: taskRef.key
        }));
    })
  };
};

export const updateTask = (id, updates) => {
  return {
    type: actionTypes.UPDATE_TASK,
    id: id,
    updates: updates
  };
};

export const startToggleTask = (id, finished) => {
  return (dispatch, getState) => {
    var taskRef = firebaseRef.child(`tasks/${id}`);
    var updates ={
       finished,
       finishedAt: finished ? moment().unix() : null
    }
    return taskRef.update(updates).then(() => {
      dispatch(updateTask(id, updates));
    })
  }
};
