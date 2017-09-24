import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        browserHistory.push('/home');
    }
    render() {
        return (
            <div>
                { this.props.children }
            </div>
        );
    }
}

export default App;
