import logo from './logo.svg';
import './App.css';
import SearchBar from './components/Input';
import DogList from './components/Dog';
import {useState} from "react"

function App() {

  const [dog,setDog] = useState({});

  return (
    <div className="App">
        <SearchBar setDog={setDog} />
        <DogList dog={dog} />
    </div>
  );
}

export default App;
