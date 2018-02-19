import React, { Component } from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

import List from 'List'
import Add from 'Add';
import Search from 'Search';

class Main extends Component {
  render() {
    return (
      <div>
        <h1 className="page-title">Ulysses tasks board</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <Search/>
              <List/>
              <Add/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Main;
