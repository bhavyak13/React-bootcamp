import React, { useEffect } from 'react'
import MiniPalette from './MiniPalette';
import useStyles from './Styles/PaletteListStyles';


function PaletteList(props) {
    let { colors } = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.container}>

                <nav className={classes.nav}>
                    <h1>React Colors</h1>
                    {/* Link */}
                </nav>

                <div className={classes.palettes}>
                    {colors.map(palette => (
                        <MiniPalette key={palette.id} {...palette} />
                    ))}
                </div>

            </div>
        </div>
    )
}
export default PaletteList;