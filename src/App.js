import logo from './logo.svg';
import './App.css';
import SearchBar from './components/Input';
import DogList from './components/DogList';
import {useState} from "react"
import { Grid,Box,Container,CssBaseline,Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useFetch from './components/useFetch';
import LoadingComponent from "./components/LoadingComponent"
function App() {


  const [data,error,loading,setUrl] = useFetch()
  const theme = createTheme();
  console.log({data,loading})
  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
 
        <SearchBar loading={loading} setUrl={setUrl} />
        
        {loading ? <LoadingComponent type="spin" color="black"/> : <DogList dogs={data} />}
    </Container>
    </ThemeProvider>
  );
}

export default App;
