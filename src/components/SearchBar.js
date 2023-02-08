import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import useDebounce from './useDebounce';



export default function SearchBar({setUrl,loading}) {
  const [open, setOpen] = React.useState(false);
  const [text, setText] = React.useState("");
  const debouncedValue = useDebounce(text,1000);

   
  React.useEffect(() => {
    setUrl(`https://api.thedogapi.com/v1/breeds/search?limit=10&page=0&q=${debouncedValue}`);
  
  }, [debouncedValue])
  
  const handleChange =(e) => {
    setText(e.target.value); 
  }

  return (
    <>
      <div>
        <TextField onChange={handleChange} />
        
      </div>
      {loading}
    </>
  );
}
