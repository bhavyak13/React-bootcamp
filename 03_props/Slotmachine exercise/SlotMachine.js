// class SlotMachine extends React.Component {
//     render() {
//         const props = this.props;
//         let msg = "NO"
//         if (props.p1 === props.p2 && props.p1 === props.p3) { msg = "OKAY HAI JI!"; }
//         return (
//             <div>
//                 <h1>Slot Machine</h1>
//                 <ol>
//                     <li>{props.p1}</li>
//                     <li>{props.p2}</li>
//                     <li>{props.p3}</li>
//                 </ol>
//                 <p>{msg}</p>
//             </div>
//         )
//     }
// }
class SlotMachine extends React.Component {
    render() {
        const props = this.props;
        let { p1, p2, p3 } = props;
        let win = (props.p1 === props.p2) && (props.p1 === props.p3)
        return (
            <div>
                <h1>Slot Machine</h1>
                <ol>
                    <li>{p1}</li>
                    <li>{p2}</li>
                    <li>{p3}</li>
                </ol>
                <p>{win ? 'WIN WIN WIN' : "ahh u lose"}</p>
            </div>
        )
    }
}