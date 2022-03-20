import React from "react";
import Header from "./Header";
const App = () => {
    let [items, setItems] = React.useState([
        { id: 1, name: "Apple", price: 0.88 },
        { id: 2, name: "orange", price: 0.99 },
    ]);
    let add = () => {
        setItems([...items, { id: 3, name: "Banana", price: 0.75 }]);
    };
    return (
        <div>
            <Header name="react"></Header>
            <ul>
                {items.map((i) => (
                    <Item name={i.name} price={i.price}></Item>
                ))}
            </ul>
            <button onClick={add}>add</button>
        </div>
    );
};

const Item = ({ name, price }) => (
    <li>
        {name} is ${price}
    </li>
);

export default App;
