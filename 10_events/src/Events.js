import React, { Component } from 'react'
import './Events.css'
class Events extends Component {
    constructor(props) {
        super(props);
        this.keyUpHandle = this.keyUpHandle.bind(this);
    }
    clickHandle = () => {
        alert("CLiCKED!")
    }
    keyUpHandle(e) {
        // console.log(e);
        alert(e.key)
    }
    mouseEnterHandle = () => {
        alert("dont enter your mouse in red box!")
    }
    copyHandle=()=>{
        alert("DOnt try to cheat!")
    }
    render() {
        return (
            <div className='container'>
                <button onClick={this.clickHandle}>click Me!</button>
                <hr />
                <div>
                    <textarea onKeyUp={this.keyUpHandle} />
                </div>
                <div className='bla' onMouseEnter={this.mouseEnterHandle}>
                    ok
                </div>
                <p onCopy={this.copyHandle}>
                    lorem ipsauhaisudjudf hvadj hvdsjuavjyvazj gasdvjavdjy a vajvdsjy a
                    askjdbaskf
                    kjdasldfla
                    sf asflmajpsodj aposjdpaosjd paosjdpaojdpaosjdpoasjdpoasjadspojas
                </p>
            </div>
        )
    }
}
export default Events;