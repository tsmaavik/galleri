import React, { Component } from 'react';
import { render } from 'react-dom';

export class Image extends Component {
    constructor() {
        super();
        this.state = {
            url : ""            
        };
    }

    render(){
        <div class="App-image">
            <img src={this.state.url} />
        </div>
    }
}
