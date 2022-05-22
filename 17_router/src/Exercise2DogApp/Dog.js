import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function Dog(props) {
    let navigate = useNavigate();
    useEffect(() => {
        if (props.dog.length === 0) {
            navigate('/dogs');
        }
    })
    return (
        <div>
            {props.dog.length !== 0
                ? (<div>
                    <h1>{props.dog[0].name}</h1>
                    <p>{props.dog[0].facts}</p>
                    <button onClick={()=>{navigate('/dogs')}}>Go back!</button>
                </div>)
                : (<div>
                    404 not found
                </div>)
            }
        </div>
    )
}
export default Dog;