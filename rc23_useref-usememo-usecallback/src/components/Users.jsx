import React, { memo } from 'react';
import UserItem from './UserItem';

const Users = ({ users}) => {
  console.log('USERS COMPONENT RENDERED');

  return (
    <div className="users">
      <button id="add-button" >
        Add User
      </button>
      {users?.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default memo(Users);
