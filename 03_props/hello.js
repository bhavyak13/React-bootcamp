class Hello extends React.Component {
    //Default props!!
    static defaultProps = {
        from: 'anonymous',
        bangs: 3
    }

    render() {
        // console.log(this.props);
        return (
            <div className="Hello">
                <h1>hello {this.props.to} from {this.props.from} </h1>
                <h3>{'!'.repeat(this.props.bangs)}</h3>
                <img src={this.props.img} />
                <div></div>
                <img src="https://userpic.codeforces.org/2047504/title/5411b3bee23be3ed.jpg"></img>
            </div>
        )
    }
}
// ReactDOM.render(<Hello/>,document.getElementById('root'));