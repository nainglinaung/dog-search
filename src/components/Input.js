import React from 'react';
import { Grid,Box,Container,CssBaseline,Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchBar from "./SearchBar"


const theme = createTheme();

export default function Input({setDog}) {
  
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
      
          <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid item xs={12}>
               <SearchBar setDog={setDog} />
              </Grid>   
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}