import React from "react";
class App extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    add = () => {
        let id = this.state.items.length + 1;
        let name = this.nameRef.current.value;
        let price = this.priceRef.current.value;
        this.setState({
            items: [...this.state.items, { id, name, price }],
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
                <input type="text" ref={this.nameRef}></input>
                <br />
                <input type="text" ref={this.priceRef}></input>
                <br />
                <button onClick={this.add}>add item</button>
                <ul>
                    {this.state.items.map((i) => {
                        return (
                            <Item key={i.id} name={i.name} price={i.price} />
                        );
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
