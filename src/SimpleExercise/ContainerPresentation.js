import React, { useState, useEffect } from "react";

function UserList({ users }) {
  return (
    <ul>
      {users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </ul>
  );
}

const UserListContainer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("api/users")
      .then((res) => res.json())
      .then((val) => setUsers(val));
  }, []);

  return <UserList users={users} />;
};

export { UserList, UserListContainer };
