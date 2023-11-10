import React from "react";


export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0
        };

    }
    onMakeOlder = () => {
        this.setState({
            age: this.state.age + 3
        });
    }

    render() {
        let text = "Something!"
        return (
            <div>
                <p>In a new Component</p>
                <p>{text}</p>
                <p>Your name is {this.props.name}. Your age is {this.state.age}.</p>
                <p>Status: {this.state.status}</p>
                <className/>
                <button onClick={this.onMakeOlder} className="btn btn-primary">Make me older</button>
            </div>
        )
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    initialAge: React.PropTypes.number,
};