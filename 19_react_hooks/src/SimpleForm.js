import React, { useState } from 'react'
function SimpleForm() {
    const [email, setEmail] = useState('');
    return (
        <div>
            <p>You entered: {email}</p>
            <input
                type={'email'}
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
            />
            <button
                onClick={() => { setEmail('') }}
            >Submit!</button>
        </div>
    )
}
export default SimpleForm;