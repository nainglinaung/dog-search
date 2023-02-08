import logo from './logo.svg';
import './App.css';
import SearchBar from './components/Input';
import DogList from './components/DogList';
import {useState,useEffect} from "react"
import { Grid,Box,Container,CssBaseline,Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import useFetch from './hooks/useFetch';
import LoadingComponent from "./components/LoadingComponent"
import DogConext from "./context/DogContext"
function App() {

 
  const [data, error, loading, setUrl] = useFetch()
  const [dogs, setDogs] = useState(data);
  useEffect(() => {
    setDogs(data);
  }, [loading])
  

  const theme = createTheme();

  return (
    <DogConext.Provider value={{setUrl,setDogs,loading,dogs}}>

    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <SearchBar />
      {loading ? <CircularProgress /> : <DogList  />}
    </Container>
      </ThemeProvider>
      </DogConext.Provider>
    
  );
}

export default App;
