import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { SortableElement } from "react-sortable-hoc";
import useStyles from './Styles/DragableColorBoxStyles';

const DragableColorBox = SortableElement(props => {
    const { name } = props;
    let classes = useStyles(props);
    const clickHandler = () => {
        props.deleteColor(name);
        // console.log('ok')
    }
    return (
        <div className={classes.root}>
            <div className={classes.boxContent}>
                <span>{name}</span>
                <DeleteIcon className={classes.deleteIcon} onClick={clickHandler}/>
                {/* <DeleteIcon className={classes.deleteIcon} onClick={()=>{console.log('clickedf')}}/> */}
            </div>
        </div>
    )
})

export default DragableColorBox;