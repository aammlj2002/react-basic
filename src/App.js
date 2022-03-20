import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
                        <Route path="/male" element={<Male />} />
                        <Route path="/female" element={<Female />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
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
