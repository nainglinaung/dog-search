import React from 'react';
import { Grid,Box,Container,CssBaseline,Button } from '@mui/material';

import SearchBar from "./SearchBar"




export default function Input({setUrl}) {
  
  return (<>
   <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            alignItems: 'center',
          }}
        >
      
          <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid item xs={12}>
          <SearchBar setUrl={setUrl} />
              </Grid>   
          </Box>
        </Box>
  </>
       
  );
}