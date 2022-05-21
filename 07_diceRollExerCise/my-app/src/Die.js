import React, { Component } from 'react'
import './Die.css'

class Die extends Component {
    render() {
        let classNames = this.props.class;
        if (this.props.rolling) {
            classNames = `${this.props.class} shaking`
        }
        return (
            <div className='Die'>
                <i className={classNames}></i>
            </div>
        )
    }
}
export default Die;
