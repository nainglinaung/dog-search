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
function App() {

 
  const [data, error, loading, setUrl] = useFetch()
  const [dogs, setDogs] = useState(data);
  useEffect(() => {
    setDogs(data);
  }, [loading])
  

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <SearchBar loading={loading} setUrl={setUrl} setDogs={setDogs} />
      {loading ? <CircularProgress /> : <DogList dogs={dogs} />}
    </Container>
    </ThemeProvider>
  );
}

export default App;
