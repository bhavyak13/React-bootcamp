class App extends React.Component {
    render() {
        return (
            <div>
                <SlotMachine
                    p1="h"
                    p2="h"
                    p3="g"
                />
                <SlotMachine
                    p1="h"
                    p2="h"
                    p3="h"
                />
                <SlotMachine
                    p1="h"
                    p2="h"
                    p3="hi"
                />
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));