import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function MuiPicker() {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Select Move-in Date"
        value={value}
        
        
        onChange={(newValue) => {
          setValue(newValue);
        }}
        // InputProps={{
        //     disableUnderline: true
        //   }}
        renderInput={(params) => <TextField style={{width:"170px", height:"50px", fontWeight: 'bold' }} variant='standard' {...params} />}
      />
    </LocalizationProvider>
  );
}
