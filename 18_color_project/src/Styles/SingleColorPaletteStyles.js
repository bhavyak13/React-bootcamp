import { makeStyles } from '@mui/styles';
import Sizes from './Sizes';
const useStyles = makeStyles({
    Palette: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    colors: {
        height: '90%',
    },
    goBackColorBox: {
        width: '20%',
        display: 'inline-block',
        margin: '0 auto',
        cursor: 'pointer',
        position: 'relative',
        marginBottom: '-5.5px',
        height: '50%',
        backgroundColor: 'black',
        [Sizes.down("lg")]: {
            width: "25%",
            height: "33.3333%"
        },
        [Sizes.down("md")]: {
            width: "50%",
            height: "20%"
        },
        [Sizes.down("xs")]: {
            width: "100%",
            height: "10%"
        }
    },
    goBackButton: {
        width: '100px',
        height: '30px',
        position: 'absolute',
        display: 'inline-block',
        top: '50%',
        left: '50%',
        marginTop: '-15px',
        marginLeft: '-50px',
        textAlign: 'center',
        outline: 'none',
        background: 'rgba(255, 255, 255, 0.3)',
        fontSize: '1rem',
        lineHeight: '30px',
        color: 'white',
        textTransform: 'uppercase',
        border: 'none',
    }
})
export default useStyles;