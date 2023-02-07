import React,{useEffect} from 'react';

import { Autocomplete,Grid,Box,Container,TextField,CssBaseline,Button } from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchBar from "./SearchBar"


const theme = createTheme();

export default function Input() {

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://api.thedogapi.com/v1/breeds/search?limit=10&page=0&q=Hus", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }, [])
  


  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            alignItems: 'center',
          }}
        >
        
        
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid item xs={12}>
               <SearchBar />

                {/* <TextField
                  required
                  fullWidth
                  name="dogfinder"
                  label="Search Dog Breed"
                  type="text"
                  id="dogfinder"
                /> */}
              </Grid>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Search
            </Button>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}