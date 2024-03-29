import React,{useContext} from 'react';
import {TextField,Select,MenuItem, Grid,Box,CssBaseline} from '@mui/material';
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


  const SortByName = (a,b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }

    return 0;
  }

  const __formatHeight = (a) => {
    let val = a.height ? a.height.imperial : 0;
    val = val.split("-");
    val = (val.length > 0 ) ? parseFloat(val[0]) : 0;
    val = val || 0;
    return val; 
  }

  const __formatLifeSpan = (a) => {
    let val = a.life_span || 0;
    val = val.split("-");
    val = (val.length > 0 ) ? parseFloat(val[0]) : 0;
    val = val || 0;
    return val; 
  }

  const SortByHeight = (a, b) => {
    return __formatHeight(a) - __formatHeight(b);
  }

  const SortByLifeSpan = (a, b) => {
    return __formatLifeSpan(a) - __formatLifeSpan(b);
  }
 
  const handleSelectChange = (e) => {

    const value = e.target.value; 

    if (value === "name") {
      setDogs([...dogs.sort(SortByName)])
    }

    if (value === "height") {
     setDogs([...dogs.sort(SortByHeight)])
    }

    if (value === "lifespan") { 
      setDogs([...dogs.sort(SortByLifeSpan)])
    }
    
  }
  

  return (
    <>
        <CssBaseline />
       <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid item xs={12}>
       
          <TextField onChange={handleChange} value={text}   inputProps={{ "data-testid": "dog-search" }} />
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
        </Grid>
        </Box>
      {loading}
 
    </>
  );
}
