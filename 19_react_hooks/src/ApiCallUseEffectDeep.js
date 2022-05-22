import React, { useState, useEffect } from 'react';
import axios from 'axios'
function Movie() {
    const [number, setNumber] = useState(1);
    const [imageSrc, setImageSrc] = useState('');
    useEffect(() => {
        async function getData() {
            // let url = `https://swapi.co/api/films/${number}/`;
            let url = 'https://api.thecatapi.com/v1/images/search'
            const response = await axios.get(url);
            setImageSrc(response.data[0].url);
            console.log(response.data[0].url)
        }
        getData();
    }, [number])
    return (
        <div>
            <h1>Moviess less go!</h1>
            <div>
                <select value={number} onChange={e => { setNumber(e.target.value) }}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                </select>
            </div>

            <img src={imageSrc} />
        </div >
    )
}
export default Movie;