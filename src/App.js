import React from "react";
const MyContext = React.createContext("hello react");
const App = (props) => {
    return <Header />;
};
const Header = (props) => {
    return <Title />;
};
const Title = (props) => {
    const name = React.useContext(MyContext);
    return <h1>{name}</h1>;
};
export default App;
