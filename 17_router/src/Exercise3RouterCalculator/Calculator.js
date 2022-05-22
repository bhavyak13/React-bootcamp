import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Calculator(props) {
    let navigate=useNavigate();
    let { num1, num2 } = props;
    num1=parseInt(num1);
    num2=parseInt(num2);
    let ans='';
    useEffect(()=>{
        if(ans===''){
            navigate('/');
        }
    })
    switch (props.operation) {
        case 'add':
            ans = num1 + num2
            break;

        case 'subtract':
            ans = num1 - num2
            break;

        case 'divide':
            ans = num1 / num2
            break;

        case 'multiply':
            ans = num1 * num2
            break;

        default:
            break;
    }
    return (
        <div>
            <h1>{props.operation} of {num1} and {num2} is {ans}</h1>
        </div>
    )
}
export default Calculator;