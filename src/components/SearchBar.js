import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import useDebounce from './useDebounce';
import useFetch from './useFetch';


export default function SearchBar({setDog}) {
  const [open, setOpen] = React.useState(false);
  const [text, setText] = React.useState("");
  const debouncedValue = useDebounce(text,1000);
  const [data,error,loading,setUrl] = useFetch()
   
  React.useEffect(() => {
    setUrl(`https://api.thedogapi.com/v1/breeds/search?limit=10&page=0&q=${debouncedValue}`);
    console.log({data,error,loading})
  }, [debouncedValue])
  

  const handleInputChange = (e,value) => {

    if (e.type == "change") {
      setText(value);   
    } else {
      setUrl(`https://api.thedogapi.com/v1/breeds/search?limit=10&page=0&q=${value}`);
    }
  }

  const handleChange =(e,value) => {
    console.log(value);
    setDog(value)
  }

  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      // isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={(option) => option.name}
      options={data}
      loading={loading}
      onInputChange={handleInputChange}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth
          label="Asynchronous"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment} 
              </>
            ),
          }}
        />
      )}
    />
  );
}
