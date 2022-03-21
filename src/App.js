import React, { useEffect, useState } from "react";
const App = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://reqres.in/api/users")
            .then((res) => res.json())
            .then((json) => {
                setUsers(json.data);
            });
    }, []);
    const add = () => {
        fetch("https://reqres.in/api/users", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ first_name: "Tom" }),
        })
            .then((res) => {
                return res.json();
            })
            .then((tom) => {
                setUsers([...users, tom]);
            });
    };
    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.first_name}</li>
                ))}
            </ul>
            <button onClick={add}>new user</button>
        </div>
    );
};
export default App;
