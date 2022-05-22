import React from 'react'
import useToggle from './Hooks/UseToggle'
function HeartBroken() {
    const [isHeartBroken, toggleIsHeartBroken] = useToggle(false);
    let clickHandler = () => {
        toggleIsHeartBroken();
    }
    return (
        <div>
            <h1>Building own Hook Demo!</h1>
            <p onClick={clickHandler}>
                {isHeartBroken ? '💔' : '❤️'}
            </p>
        </div>
    )
}
export default HeartBroken; 