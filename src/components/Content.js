import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from './Home';
import Link1 from './Link1';
import Link2 from './Link2';
class Content extends Component {

    render() {
        return (

            <div className="content">
                <Route exact path="/" component={Home} />
                <Route path="/Link1" component={Link1} />
                <Route path="/Link2" component={Link2} />

            </div>

        );
    }

}

export default Content;