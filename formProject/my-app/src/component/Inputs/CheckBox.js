import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';

export default function CheckBox(props) {
    const {label, checkedItems, setCheckedItems} = props

    const handleCheckboxChange = (event) => {
        setCheckedItems({
          ...checkedItems,
          [event.target.name]: event.target.checked,
        });
    };

    return(
        <div className="signup-content-form-checkbox">
            <InputLabel  id="demo-simple-select-label">Area of Interest</InputLabel>
                <FormGroup sx={{padding:'20px 0px',display: 'grid',gridTemplateColumns: '1fr 1fr'}}>
                    <FormControlLabel 
                    control={<Checkbox 
                            checked={checkedItems.marketingSales}
                            onClick={handleCheckboxChange} />} 
                            label="Marketting Sales"
                            name='Marketting Sales' 
                    />
                    <FormControlLabel
                     control={<Checkbox 
                            checked={checkedItems.marketingSales}
                            onClick={handleCheckboxChange}/>} 
                            label="IT/Engineering" 
                            name='IT/Engineering'
                     />
                    <FormControlLabel
                     control={<Checkbox
                            checked={checkedItems.marketingSales}
                            onClick={handleCheckboxChange} />} 
                            label="Accountant"
                            name='Accountant' 
                     />
                    <FormControlLabel
                     control={<Checkbox 
                            checked={checkedItems.marketingSales}
                            onClick={handleCheckboxChange} />}
                            label="HR" 
                            name='HR'
                      />
                    <FormControlLabel
                     control={<Checkbox 
                            checked={checkedItems.marketingSales}
                            onClick={handleCheckboxChange}/>}
                            label="Network Security"
                            name='Network Security'
                      />
                    <FormControlLabel
                     control={<Checkbox 
                     checked={checkedItems.marketingSales}
                     onClick={handleCheckboxChange} />} 
                     label="Administration"
                     name='Administration'
                     />
                </FormGroup>
        </div>
    )
}