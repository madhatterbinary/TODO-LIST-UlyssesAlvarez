import React, { Component } from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import * as actions from '../actions/tasks';

class Todo extends Component {
  render() {
    var {id, text, finished, startedAt, finishedAt, onToggleTask} = this.props;
    var todoClassName = finished ? 'todo todo-finished' : 'todo';
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
        onToggleTask(id);
        }}>
        <div>
          <input type="checkbox" checked={finished}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (dispatch) => {
  return {
    onToggleTask: (id) => dispatch(actions.toggleTask(id))
  }
}
export default connect(null, mapStateToProps)(Todo);
