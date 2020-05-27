import React, { Component } from 'react'

export default class Image extends Component {

    state = {
        liked: false,
    }

    componentDidMount(){
        
    }
    // if false, allow for a callback, if true do not allow for callback to update like

    render() {
        return (
            <div>
                render image and allow add likes
            </div>
        )
    }
}
