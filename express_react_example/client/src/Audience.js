import React, { Component } from 'react'


export default class Audience extends Component {
    render() {
        return (
            <div className="Audience">
                <h1>Audience:{this.props.title}</h1>
            </div>
        )
    }
}