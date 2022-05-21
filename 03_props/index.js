class App extends React.Component {
    render() {
        return (
            <div>
                <Numpicker
                    p1='1' p2='1' p3='1'
                />
                <Hello
                    to="babe"
                    from="bro"
                    bangs={4}
                    img="https://userpic.codeforces.org/2047504/title/5411b3bee23be3ed.jpg"
                />
                <Greet arr={[1, 2, 3, 4]} />
                <Hello to="bhavya" />
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));