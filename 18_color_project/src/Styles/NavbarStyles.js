import { makeStyles } from "@mui/styles";
import Sizes from "./Sizes";

const useStyles = makeStyles({
    Navbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '6vh',
    },
    logo: {
        marginRight: '15px',
        padding: '0 13px',
        fontSize: '22px',
        backgroundColor: '#eceff1',
        fontFamily: 'Roboto',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        '& a': {
            color: 'black',
            textDecoration: 'none',
        },
        [Sizes.down("xs")]: {
            display: "none"
        },
    },
    slider: {
        width: '340px',
        margin: '0 auto',
        display: 'inline-block',
        marginLeft: '1rem',
        [Sizes.down("md")]: {
            width: "150px"
        }
    },
    sliderContainer: {
        display: 'flex',
    },
    selectContainer: {
        marginLeft: 'auto',
        marginRight: '1rem',
    }
})
export default useStyles;