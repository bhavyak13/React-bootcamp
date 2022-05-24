import React from 'react'
import './PaletteFooter.css'
function PaletteFooter(props) {
    return (
        <footer className='footer'>
            <section>
                {props.name}
                <span className='emoji'>
                    {props.emoji}
                </span>
            </section>
        </footer>
    )
}
export default PaletteFooter