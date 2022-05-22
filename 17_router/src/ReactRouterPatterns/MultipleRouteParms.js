import React from 'react'
import { useNavigate } from 'react-router-dom';

function Drinks(props) {
    let navigate = useNavigate();
    return (
        <div>
            <h1>
                foodItem : {props.foodItem}
                <br />
                drinkItem : {props.drinkItem}
            </h1>
            <button
                    //go back
                    onClick={() => {
                        navigate(-1);
                    }}
                >Go Back!</button>
        </div>
    )
}
export default Drinks;