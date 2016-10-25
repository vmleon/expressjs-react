import React from 'react';

export default function User({user}) {
  const fullName = [user.name.title, user.name.first, user.name.last];
  return (
    <div className="user">
      <div>{fullName.join(' ')}</div>
      <div>{user.username}</div>
      <div>{user.email}</div>
      <div>{user.gender}</div>
    </div>
  );
}
