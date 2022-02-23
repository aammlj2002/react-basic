import React from "react";
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>hello react</h1>
                <ul>
                    <Item name="apple" price="0.99" />
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
