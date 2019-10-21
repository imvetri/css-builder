// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <div className={style.showBackground}>

                </div>
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById("index"));