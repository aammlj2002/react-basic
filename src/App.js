import React from "react";
class App extends React.Component {
    add = () => {
        let id = this.state.items.length + 1;
        this.setState({
            items: [
                ...this.state.items,
                { id, name: `Item ${id}`, price: 0.01 * id },
            ],
        });
    };
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
                <button onClick={this.add}>add item</button>
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
