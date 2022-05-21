// class Welcome extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>hello there from JS!! </h1>
//                 <h1>hello there from JS!! </h1>
//                 <h1>hello there from JS!! </h1>
//             </div>
//         )
//     }
// }

const Welcome = () => {
    return (
        <div>
            <h1>hello there from JS!! </h1>
            <h1>hello there from JS!! </h1>
            <h1>hello there from JS!! </h1>
        </div>
    )
}


ReactDOM.render(<Welcome />, document.getElementById('root'));