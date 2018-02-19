import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/';

class Search extends Component {
  render() {
    var {dispatch, showFinished, searchText, onToggleShowFinished, onSetSearchText } = this.props;
    return (
      <div className="header">
        <div>
          <input type="search" ref="searchText" placeholder="Search for tasks" value={searchText} onChange={() => {
              var searchText = this.refs.searchText.value;
              onSetSearchText(searchText);
            }}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showFinished" checked={showFinished} onChange={() => {
                onToggleShowFinished();
              }}/>
            Show finished tasks
          </label>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    showFinishted: state.showFinishted,
    searchText: state.searchText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSetSearchText: (searchText) => dispatch(actions.setSearchText(searchText)),
    onToggleShowFinished: () => dispatch(actions.toggleShowFinished())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Search);
