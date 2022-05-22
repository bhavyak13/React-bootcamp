import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

/*
    Use Link to let the user change the URL
    or
    useNavigate to do it yourself (like after form submissions):
*/
/*
    Link will just take us to some url after its hit 

    but useNavigate will allow to do some more stuff after submit button is clicked!(gotcha?)
    its like if we wnna do more stuff instead of just taking user to somewhere we should use useNavigate hook
    for this!
 */

/*
    <button onClick={() => navigate(-2)}>Go 2 pages back</button>
    <button onClick={() => navigate(-1)}>Go back</button>
    <button onClick={() => navigate(1)}>Go forward</button>
    <button onClick={() => navigate(2)}>Go 2 pages forward</button>
*/


const FoodSearch = () => {
    const [foodItem, setFoodItem] = useState('');
    const [drinkItem, setDrinkItem] = useState('');
    const changeFoodHandler = (e) => {
        setFoodItem(e.target.value);
    }
    const changeDrinkHandler = (e) => {
        setDrinkItem(e.target.value);
    }
    let navigate = useNavigate();
    return (
        <div>
            <form onSubmit={() => { navigate(`foods/${foodItem}/drinks/${drinkItem}`) }}>
                <input type='text' placeholder='food Item' value={foodItem} name='foodItem' onChange={changeFoodHandler} />
                <input type='text' placeholder='drink Item' value={drinkItem} name='drinkItem' onChange={changeDrinkHandler} />
                {/* <button type='submit' onSubmit={() => { props.submitHandler(foodItem, drinkItem) }}>Submit</button> */}
                <Link to={`foods/${foodItem}/drinks/${drinkItem}`}>Submit</Link>
                <button >Submit</button>
            </form>
        </div>
    )
}
export default FoodSearch;