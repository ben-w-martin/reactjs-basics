import React from "react";

export class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default bg-light">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="#">Home</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}