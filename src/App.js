import React from "react";
class App extends React.Component {
    state = {
        items: [
            { id: 1, name: "Apple", price: 0.99 },
            { id: 2, name: "mango", price: 0.89 },
        ],
    };
    render() {
        return (
            <div>
                <h1>hello react</h1>
                <ul>
                    {this.state.items.map((i) => {
                        return <Item name={i.name} price={i.price} />;
                    })}
                </ul>
            </div>
        );
    }
}
class Item extends React.Component {
    render() {
        return (
            <li>
                {this.props.name} is ${this.props.price}
            </li>
        );
    }
}
export default App;
