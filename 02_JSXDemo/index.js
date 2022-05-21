class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Hello />
                <Hello />
                <Numpicker />
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));