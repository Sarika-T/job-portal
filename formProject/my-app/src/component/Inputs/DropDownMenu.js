import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import data from '../../CountryData.json';

export default function DropDownMenu(props) {
  const {label, country, setCountry} = props;
  const countryData = data.data

  const handleChange = (event) => {
    console.log(event,"count")
    setCountry(event.target.value);
  };

  console.log(country,"cot")
  return (
    <Box>
      <FormControl sx={{minWidth:'35ch'}}>
        <InputLabel required id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          label={label}
          onChange={handleChange}
        >
           {countryData.map((countryName, index) => (
            <MenuItem key={index} value={countryName}>
              {countryName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
