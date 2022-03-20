import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams,
} from "react-router-dom";
const users = [
    { id: 1, name: "Alice", gender: "f" },
    { id: 2, name: "Bob", gender: "m" },
    { id: 3, name: "Tom", gender: "m" },
    { id: 4, name: "Mary", gender: "f" },
];

const App = (props) => {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/male">Male</Link>
                    </li>
                    <li>
                        <Link to="/female">Female</Link>
                    </li>
                </ul>
                <div style={{ background: "cyan", padding: 20 }}>
                    <Routes>
                        <Route path="/user/:name" element={<User />} />
                        <Route path="/male" element={<Male />} />
                        <Route path="/female" element={<Female />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};
const User = (props) => {
    const { name } = useParams();
    return <h1>Profile-{name}</h1>;
};
const Male = (props) => {
    return (
        <ul>
            {users
                .filter((u) => u.gender === "m")
                .map((u) => (
                    <li key={u.id}>{u.name}</li>
                ))}
        </ul>
    );
};
const Female = (props) => {
    return (
        <ul>
            {users
                .filter((u) => u.gender === "f")
                .map((u) => (
                    <li key={u.id}>{u.name}</li>
                ))}
        </ul>
    );
};
export default App;
