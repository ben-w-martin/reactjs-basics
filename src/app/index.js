import React from "react";
import {render} from "react-dom";

import {Header} from "./components/Header";
import {Home} from "./components/Home";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            homeLink: "Home",
            homeMounted: true
        }

    }

    onChangeHomeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted
        })
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
        let homeCmp = "";
        if (this.state.homeMounted) {
            homeCmp = (<Home name={"Ben"}
                             initialAge={28}
                             changeLink={this.onChangeLinkName.bind(this)}
                             greet={this.onGreet}
                             initialLinkName={this.state.homeLink}
                />
            );
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 offset-1">
                        {homeCmp}
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 offset-1">
                        <button className="btn btn-primary" onClick={this.onChangeHomeMounted.bind(this)}>(Un)Mount Home Component</button>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));