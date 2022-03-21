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

    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.first_name}</li>
                ))}
            </ul>
        </div>
    );
};
export default App;
