import React from 'react'
import { useNavigate } from 'react-router-dom';
function DogList(props) {
    let navigate = useNavigate();
    return (
        <div>
            <ul>
                {props.dogs.map(dog => (
                    <li key={dog.name} onClick={() => {
                        navigate(`${dog.name}`)
                    }}>{dog.name}</li>
                ))}
            </ul>
        </div>
    )
}
export default DogList;