import React,{useContext} from 'react';
import {TextField,Select,MenuItem} from '@mui/material';
// import Autocomplete from '@mui/material/Autocomplete';
import DogContext from "../context/DogContext"
import useDebounce from '../hooks/useDebounce';



export default function SearchBar() {

  const [text, setText] = React.useState("");
  const debouncedValue = useDebounce(text,1000);
  const {setUrl,loading,setDogs,dogs} = useContext(DogContext)
   
  React.useEffect(() => {
    setUrl(`https://api.thedogapi.com/v1/breeds/search?limit=10&page=0&q=${debouncedValue}`);
  
  }, [debouncedValue])
  
  const handleChange =(e) => {
    setText(e.target.value); 
  }

  const handleSelectChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <>
      <div>
        <TextField onChange={handleChange} />
        <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value="default"
    label="Sorting"
    onChange={handleSelectChange}
  >
    <MenuItem value="name">Sort By Name</MenuItem>
    <MenuItem value="height">Sort By Height</MenuItem>
    <MenuItem value="lifespan">Sort By lifespan</MenuItem>
    <MenuItem value="default">Sorting</MenuItem>
          
  </Select>
      </div>
      {loading}
    </>
  );
}
