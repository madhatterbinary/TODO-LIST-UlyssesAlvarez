import React, { Component } from 'react';
import {connect} from 'react-redux';
import Todo from 'Todo';
import TodoAPI from 'TodoAPI';

class List extends Component {
  render() {
    let {tasks, showFinished, searchText} = this.props.state;
    var filteredTasks = TodoAPI.filterTasks(tasks, showFinished, searchText);
    let renderTasks = () => {
      if (filteredTasks.length === 0) {
        return (
          <p className="message">You have not task at the moment!</p>
        );
      }
      return filteredTasks.map((task) => {
        return (
          <Todo key={task.id} {...task}/>
        );
      });
    };
    return (
      <div>
        {renderTasks()}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return { state }
}

export default connect(mapStateToProps)(List);
