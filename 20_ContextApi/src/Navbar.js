import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase, GreenSwitch } from './NavbarHelper';
import FlagIcon from '@mui/icons-material/Flag';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { makeStyles } from '@mui/styles'
import { ThemeContext } from './contexts/ThemeContext';
import words from './LanguageHelper'
import { LanguageContext } from './contexts/LanguageContext';


const useStyles = makeStyles({
    switchButton: {
        marginLeft: '1rem',
    },
})

function Navbar(props) {
    const classes = useStyles(props);
    const context = useContext(ThemeContext);
    const { isLightTheme, toggleTheme } = context;
    const { language } = useContext(LanguageContext);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color={(isLightTheme) ? 'primary' : 'default'}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        {/* <FlagIcon /> */}
                        {words[language].flag}
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <div className={classes.switchButton}>
                            <FormGroup sx={{ width: '50px' }}>
                                <FormControlLabel
                                    label={'dark'}
                                    control={
                                        <GreenSwitch
                                            checked={!isLightTheme}
                                            onChange={toggleTheme}
                                            aria-label="login switch"
                                        />
                                    }
                                />
                            </FormGroup>
                        </div>
                    </Typography>
                    <Search className={classes.searchInput}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder={`${words[language].search}…`}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default Navbar;