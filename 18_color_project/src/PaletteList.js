import { makeStyles } from '@mui/styles';
import React, { useEffect } from 'react'
import MiniPalette from './MiniPalette';


const useStyles = makeStyles({
    root: {
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap"
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white"
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%",
    },
})

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