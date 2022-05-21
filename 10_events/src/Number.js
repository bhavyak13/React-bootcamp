import React, { Component } from 'react';
class Number extends Component {
    clickHandle=()=>{
        // console.log("INSIDE CLICK HANDLE")
        this.props.remove(this.props.num);
        // console.log("CLICK HANDLE EXIT")
    }
    render(){
        return(
            <div>
                {this.props.num}
                <button onClick={this.clickHandle}>X</button>
            </div>
        )
    }
}
export default Number;