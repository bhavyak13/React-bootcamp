import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        "&:hover svg": {
            opacity: 1
        }
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0 auto",
        color: "black",
        // paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative"
    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    },
    deleteIcon: {
        width: "25px",
        height: "20px",
        color: "white",
        backgroundColor: "#eb3d30",
        position: "absolute",
        right: "0px",
        top: "0px",
        // padding: "10px",
        zIndex: 10,
        opacity: '0',
    }
})

export default useStyles;
