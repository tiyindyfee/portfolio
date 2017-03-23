import React, { Component } from 'react';

class WorkSample extends Component {
    // You only need constructor
    constructor(props) {
        super(props);

        // Internal values that can change over time with this.setState({}) calls
        this.state = {
            style: ''
        }
    }

    // You can read incoming props, like title="", using this.props.title ...wrapping that in {} will output it to the screen
    render() {
        return <div className="column is-one-third" onMouseOver={() => this.setState({style: 'notification is-primary'})} onMouseOut={() => this.setState({style: ''})}>
            <div className="section">
                {this.props.title}<br/>
                {this.props.screenshot}
                <p className={this.state.style}>
                    Hover Over This
                </p>
            </div>
        </div>
    }
}

export default WorkSample;