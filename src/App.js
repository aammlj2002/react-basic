import React from "react";
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>hello react</h1>
                <ul>
                    <Item />
                    <Item />
                </ul>
            </div>
        );
    }
}
class Item extends React.Component {
    render() {
        return <li>item</li>;
    }
}
export default App;
