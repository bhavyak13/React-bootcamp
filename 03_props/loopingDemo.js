class Greet extends React.Component {
    render() {
        const { arr } = this.props;
        return (
            <div>
                <ul>
                    {arr.map(e => <li>{e}</li>)}
                </ul>
            </div>
        )
    }
}
// ReactDOM.render(<Greet/>,document.getElementById())