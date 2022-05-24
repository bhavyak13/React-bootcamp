import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectColorType(props) {
    let { colorType, setColorType } = props;
    const handleChange = (e) => {
        setColorType(e.target.value);
        props.setOpen(true);
    };
    return (
        <div className='SelectColorType'>
            <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
                <Select
                    value={colorType}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value='hex'><em>hex</em></MenuItem>
                    <MenuItem value='rgb'>rgb</MenuItem>
                    <MenuItem value='rgba'>rgba</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
