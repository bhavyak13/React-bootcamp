import React from 'react'
import useStyles from './Styles/PaletteFooter';

function PaletteFooter(props) {
    let classes = useStyles();
    return (
        <footer className={classes.footer}>
            <section>
                {props.name}
                <span className={classes.emoji}>
                    {props.emoji}
                </span>
            </section>
        </footer>
    )
}
export default PaletteFooter