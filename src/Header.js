import React from "react";
class Header extends React.Component {
    render() {
        return <div style={{ background: "cyan" }}>{this.props.children}</div>;
    }
}
export default Header;
