import React, { Component } from 'react';
import WorkSample from './WorkSample';

class Work extends Component {

    // Props, like title="", are passed into each instance of the WorkSample component
    render() {
        return <div className="columns">
            <WorkSample title="Some project A" screenshot="/img/screenshot1.jpg" />
            <WorkSample title="Some project B" screenshot="/img/screenshot2.jpg" />
            <WorkSample title="Some project C" screenshot="/img/screenshot3.jpg" />
        </div>;
    }
}

export default Work;
