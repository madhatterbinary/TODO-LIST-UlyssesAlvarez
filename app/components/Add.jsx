import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/tasks';

class Add extends Component {

  submitHandler = (e) => {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.onTaskAdded(todoText);
    } else {
      this.refs.todoText.focus();
    }
  }
  render() {
    return (
      <div className="footer">
        <form onSubmit={this.submitHandler}>
          <input type="text" ref="todoText" placeholder="Add yout next task!"/>
          <button className="button expanded">Add a Task</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTaskAdded: (todoText) => dispatch(actions.addTask(todoText))
  }
}

export default connect(null, mapDispatchToProps)(Add);
