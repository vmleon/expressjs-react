import React, { Component } from 'react';

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.users = [];
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    var config = {
      method: 'GET',
      headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }),
      mode: 'no-cors',
      cache: 'no-cache'
    };
    fetch('http://localhost:4000/user', config)
      .then(response => response.json())
      .then(data => this.users = data)
      .catch(error => console.error('Error fetching users', error));
  }

  render() {
    return (
      <div>
        { this.users.map((user, id) => <p key={id}>{user.username}</p>) }
      </div>
    );
  }
}
