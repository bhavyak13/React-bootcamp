class Numpicker extends React.Component {
    render() {
        let num = randomNumber();
        let msg = randomNumber();
        return (
            <div>
                Your number is {msg}
                <br />
                <p className={msg === 7 ? 'win' : 'lose'} >
                    {msg === 7 ? 'Heyyy u win!' : 'Ahh u lose!'}
                </p>
            </div>
        )
    }
}
// ReactDOM.render(<Numpicker />, document.getElementById('num'));


// arrow funcitons not acceptef in JSX?
// const randomNumbe = () => (Math.floor(Math.random() * 10) + 1)
function randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}