import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useContext } from 'react';
import dateContext from '../context/DateContext';
// import { setDate } from 'date-fns';
export default function MuiPicker() {
//   const [value, setValue] = React.useState(null);
    const a = useContext(dateContext);
    console.log(a.date);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Select Move-in Date"
        value={a.date}
        onChange={(newValue) => {
          a.setdate(newValue);
        }}
        
        renderInput={(params) => <TextField style={{width:"170px", height:"50px", fontWeight: 'bold' }} variant='standard'  {...params} />}
      />
    </LocalizationProvider>
  );
}
