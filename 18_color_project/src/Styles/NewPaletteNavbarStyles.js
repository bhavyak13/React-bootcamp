import { makeStyles } from '@mui/styles';

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
        marginLeft: 'auto'
    },
    buttn: {
        margin: '0 0.5rem',
    }

})

export default useStyles;