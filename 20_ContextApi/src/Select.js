import React, { useContext } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { LanguageContext } from './contexts/LanguageContext';


const SelectLanguage = () => {
    const context = useContext(LanguageContext);
    const { language, setLanguage } = context;

    const handleChange = (e) => {
        setLanguage(e.target.value);
    }

    return (
        <FormControl sx={{ width: '50%' }}>
            <InputLabel id="q">language</InputLabel>
            <Select
                labelId="q"
                label="language"
                value={language}
                onChange={handleChange}
            >
                <MenuItem value='english'>english</MenuItem>
                <MenuItem value='spanish'>spanish</MenuItem>
                <MenuItem value='french'>french</MenuItem>
            </Select>
        </FormControl>
    )
}
export default SelectLanguage;