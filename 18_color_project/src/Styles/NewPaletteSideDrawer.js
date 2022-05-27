import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    root: {
        width: "90%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    buttons: {
        width: "100%"
    },
    button: {
        width: "50%"
    },
    addColor: {
        width: "100%",
        padding: "1rem",
        marginTop: "1rem",
        fontSize: "2rem"
    },
    colorNameInput: {
        width: "100%",
        height: "70px"
    },
    picker: {
        width: "100%",
    },
});
export default useStyle;