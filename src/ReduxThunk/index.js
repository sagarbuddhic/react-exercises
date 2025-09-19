import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./usersSlice";

function App() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.users);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Async Redux Example (Users)</h2>

      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p style={{ color: "red" }}>Error: {error}</p>}
      {status === "succeeded" && (
        <ul>
          {data.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
