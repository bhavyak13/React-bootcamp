import { makeStyles } from '@mui/styles';
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { SortableElement } from "react-sortable-hoc";

const useStyles = makeStyles({
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-6px",
        backgroundColor: (props) => props.background,
        '&:hover svg': {
            color: 'white',
            transform: 'scale(1.5)',
        }
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display: 'flex',
        justifyContent: "space-between",

    },
    deleteIcon: {
        color: 'rgba(0,0,0,0.5)',
        transition: 'all 0.3s ease-in-out'
    }
})


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