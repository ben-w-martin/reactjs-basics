import React from "react";
import {render} from "react-dom";

import {Header} from "./components/Header";
import {Home} from "./components/Home";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            homeLink: "Home"
        }

    }

    onGreet() {
        alert("Hello!");
    }
    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 offset-1">
                        <Home name={"Ben"}
                              initialAge={28}
                              changeLink={this.onChangeLinkName.bind(this)}
                              greet={this.onGreet}/>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));