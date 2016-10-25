import React, { Component } from 'react';
import User from './User';

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
    this.getUsers();
  }

  getUsers() {
    var config = {
      method: 'GET',
      headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }),
      mode: 'cors',
      cache: 'no-cache'
    };
    fetch('http://localhost:4000/user', config)
      .then(response => response.json())
      .then(data => this.setState({users: data}))
      .catch(error => console.error('Error fetching users', error));
  }

  render() {
    return (
      <div>
        { this.state.users
            .map((user, id) =>
              <User key={id} user={user}></User>
            ) }
      </div>
    );
  }
}
