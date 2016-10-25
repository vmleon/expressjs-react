import React, { Component } from 'react';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.user = this.props.user;
    this.logUser = this.logUser.bind(this);
  }

  logUser() {
    console.log(this.user);
  }

  render() {
    const fullName = [this.user.name.title, this.user.name.first, this.user.name.last];
    return (
      <div className="user" onClick={this.logUser}>
        <div>{fullName.join(' ')}</div>
        <div>{this.user.username}</div>
        <div>{this.user.email}</div>
        <div>{this.user.gender}</div>
      </div>
    );
  }
}
