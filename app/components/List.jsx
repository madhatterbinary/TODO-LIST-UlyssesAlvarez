import React, { Component } from 'react';
import {connect} from 'react-redux';
import Todo from 'Todo';
import TodoAPI from 'TodoAPI';

class List extends Component {
  render() {
    let {todos, showFinished, searchText} = this.props.state;
    let renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="message">You have not task at the moment!</p>
        );
      }
      return TodoAPI.filterTodos(todos, showFinished, searchText).map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };
    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return { state }
}

export default connect(mapStateToProps)(List);
