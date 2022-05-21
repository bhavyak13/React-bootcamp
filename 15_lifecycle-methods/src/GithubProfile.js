import React, { Component } from 'react'
import './GithubProfile.css';
import axios from 'axios';

class GithubProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar_url: '',
            name: '',
        }
    }
    async componentDidMount() {
        const url = `https://api.github.com/users/${this.props.username}`;
        const response = await axios.get(url);
        const data = response.data;
        // console.log(data);
        this.setState({
            avatar_url: data.avatar_url,
            name: data.name,
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <img src={this.state.avatar_url} />
            </div>
        )
    }
}
export default GithubProfile;