import React, { Component } from 'react'
import './Zen.css';
import axios from 'axios'
class Zen extends Component {
    constructor(props) {
        super(props);
        this.state = { quote: '', isloaded: false, }
    }
    async componentDidMount() {
        const response = await axios.get('https://api.github.com/zen');
        setTimeout(() => {
            this.setState({
                quote: response.data,
                isloaded: true,
            })
        }, 3000)
    }
    render() {
        return (
            <div>
                {!this.state.isloaded
                    ? (
                        <div className='loading-1'>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                        </div>
                    )
                    : (<h1>{this.state.quote}</h1>)
                }
            </div>
        )
    }
}
export default Zen