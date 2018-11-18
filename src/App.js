/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import users from './data';
import UserList from './UserList';

class App extends Component {
  render() {
    return (
      <UserList users={users}/>
    )
  }
}


export default App;