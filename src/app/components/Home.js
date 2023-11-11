import React from "react";


export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.homeLink
        };
        setTimeout(() => {
            this.setState({
                status: 1
            })
        },3000);
        console.log("Constructor");
    }

    componentWillMount() {
        console.log("Comp will mount");
    }
    componentDidMount() {
        console.log("comp did mount");
    }
    componentWillReceiveProps(nextProps, nextContext) {
        console.log("comp will receive propts, " + nextProps);
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("should comp update, " + nextProps, nextState);
        return true;
    }
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("comp will update, " + nextProps, nextState);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("comp did update, " + prevProps, prevState);
    }
    componentWillUnmount() {
        console.log("component will unmount");
    }

    onMakeOlder = () => {
        this.setState({
            age: this.state.age + 3
        });
    }
    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }
    onHandleChange(e) {
        this.setState({
            homeLink: e.target.value
        })
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
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <hr/>
                <input type="text"
                       value={this.state.homeLink}
                       onChange={(e) => this.onHandleChange(e)}/>
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
            </div>
        )
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    initialAge: React.PropTypes.number,
    greet: React.PropTypes.func,
    initialLinkName: React.PropTypes.string
};