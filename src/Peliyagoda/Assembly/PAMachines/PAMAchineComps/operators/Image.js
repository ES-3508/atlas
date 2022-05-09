/*
const arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
};


import React, { Component } from 'react';
class Image extends Component {
    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };
    constructor(props) {
        super(props);
        this.state = {
            img: ''
        };
    };
    componentDidMount() {
        fetch('http://localhost:5000/users/')
        .then((res) => res.json())
        .then((data) => {
            // console.log(img)
            var base64Flag = 'data:image/jpeg;base64,';
            var imageStr = this.arrayBufferToBase64(data.img.data.data);
            this.setState({
                img: base64Flag + imageStr
            )};
        });
    }

    render() {
        const {img} = this.state;
        return (
            <img
                src={img}
                alt='Helpful alt text'/>
         )
    }
}
export default Image;
*/

import React, { Component } from 'react'
import axios from 'axios'

export default class Main extends Component {
    state = {
        data : []
    }
    componentDidMount(){

        fetch('http://localhost:5000/users1/').then(res => res.json())
        .then(data=> this.setState({data}))

    }
    render() {

        console.log(this.state.data)

        return (
            <div>
                
                {this.state.data ? this.state.data.map(img => 
                (<div key={img._id}>{img ? <img src={require(`${img.photo}`)} 
                alt={img.img.name}/>:<span>deleted</span>}</div>)): 
                <h3>loading</h3>}
            </div>
        )
    }
}

