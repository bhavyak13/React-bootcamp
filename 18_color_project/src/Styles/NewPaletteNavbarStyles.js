import { makeStyles } from '@mui/styles';
import Sizes from "./Sizes";

const useStyles = makeStyles({
    root: {
        display: 'flex',
    },
    ToolBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '64px',
    },
    navBtns: {
        marginLeft: 'auto',
        [Sizes.down("xs")]: {
            marginRight: "0.5rem"
        }
    },
    buttn: {
        margin: '0 0.5rem',
        [Sizes.down("xs")]: {
            margin: "0 0.2rem",
            padding: "0.3rem"
        }
    }

})

export default useStyles;