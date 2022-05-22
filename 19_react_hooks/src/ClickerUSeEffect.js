import React, { useState, useEffect } from 'react'
function Clicker() {
    //Use Effect Demo!
    const [click, setClick] = useState(0);
    useEffect(()=>{
        document.title=`You clicked me : ${click} times`
    })
    return (
        <div>
            <button onClick={() => { setClick(click + 1) }}>Click ME! {click}</button>
        </div>
    )
}
export default Clicker