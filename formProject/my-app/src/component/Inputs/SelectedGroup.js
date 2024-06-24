import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { Button,FormLabel } from '@material-ui/core';
import React, { useState } from 'react';


export default function  SelectedGroup(props) {
    const {label,selectGender,SetSelectGender} = props



    const handleGenderChange = (event) => {
        console.log(event.target.value, "event")
        SetSelectGender(event.target.value);
    }

    return(
        <div className="dropdown">
            <FormControl sx={{gap:"20px"}}>
                <FormLabel  className='dropdown-label'>{label}</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        value={selectGender}
                        onChange={handleGenderChange}
                        name="radio-buttons-group"
                        style={{flexWrap: "nowrap",gap: "8px",}}
                    >
                        <FormControlLabel
                            value={"Male"}
                            control={<Radio />}
                            label="Male"
                        />
                        <FormControlLabel
                            value="Female"
                            control={<Radio />}
                            label="Female"
                        />
                        <FormControlLabel
                            value="Others"
                            control={<Radio />}
                            label="Others"
                        />
                    </RadioGroup>
            </FormControl>
        </div>
    )
}


