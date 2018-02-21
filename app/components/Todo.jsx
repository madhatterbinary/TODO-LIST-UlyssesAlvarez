import React, { Component } from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import * as actions from '../actions/tasks';
var store = require('configureStore').configure();

class Todo extends Component {
  render() {
    var {id, text, finished, startedAt, finishedAt, onToggleTask, dispatch} = this.props;
    var todoClassName = finished ? 'todo todo-finished' : 'todo';
    //console.log('finished 00000000. ',finished)
    var renderDate = () => {
      var message = 'Started ';
      var timestamp = startedAt;
      if (finished) {
        message = 'Finished ';
        timestamp = finishedAt;
      }
      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };
    return (
      <div className={todoClassName} onClick={() => {
        onToggleTask(id, !finished);
        }}>
        <div>
          <input type="checkbox" checked={finished} />
        </div>
        <div>
          <p>{text}</p>
          <p className="subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state)=> {
    return {
      state
    }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onToggleTask: (id, finished) => dispatch(actions.startToggleTask(id, finished))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
