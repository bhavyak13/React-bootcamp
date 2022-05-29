import React from 'react'
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import useStyles from './Styles/PaletteListStyles';


function PaletteList(props) {
    //intials
    let { colors } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.container}>

                <nav className={classes.nav}>
                    <h1 className={classes.heading}>React Colors</h1>
                    <Link to='palette/new'>Create Palette</Link>
                </nav>

                <div className={classes.palettes}>
                    {colors.map(plt => (
                        <div key={plt.id} >
                            <MiniPalette {...plt} deletePalette={props.deletePalette} />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
export default PaletteList;