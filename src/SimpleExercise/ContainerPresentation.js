import React, { useState, useEffect } from "react";

const UsersList = React.memo((props) => {
  const { users } = props;

  return (
    <ul>
      {users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </ul>
  );
});

const Container = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function data() {
      try {
        let output = await fetch("https://jsonplaceholder.typicode.com/users");
        let users = await output.json();
        setUsers(users);
      } catch (err) {
        console.log("error", err);
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    data();
  }, []);

  return (
    <>
      {loading && <span>...loading</span>}
      {error && <span>...error</span>}
      {!loading && !error && <UsersList users={users} />}
    </>
  );
};

export default Container;
