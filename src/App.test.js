import { render, screen,waitFor  } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import DogContext from "./context/DogContext"
import DogList from './components/DogList';
import SearchBar from './components/SearchBar';
import userEvent from '@testing-library/user-event';
import useDebounce from "./hooks/useDebounce";




test('test rendering value', async () => { 


  const dogs = [{  "id": 201, "name": "Pug" }]
  
  render(<DogContext.Provider value={{dogs}}>
    <DogList />
  </DogContext.Provider>);
  const listItems = screen.getAllByRole('heading')
  expect(listItems).toHaveLength(1)


})

test('test input value', () => {

  const setUrl = () => {}

  render(<DogContext.Provider value={{setUrl}}>
    <SearchBar />
    </DogContext.Provider>);

  const inputEl = screen.getByTestId("dog-search");
  expect(inputEl).toBeInTheDocument();  
  expect(inputEl.value).toBe("");
  userEvent.type(inputEl, "hus");
  expect(screen.getByTestId("dog-search")).toHaveValue("hus");
  
 
});


test('test debounced value', async() => {

  const setUrl = () => {}

  render(<DogContext.Provider value={{setUrl}}>
    <SearchBar />
  </DogContext.Provider>);
  

  const mockHook = jest.fn();
  const inputEl = screen.getByTestId("dog-search");
  expect(inputEl).toBeInTheDocument();  
  expect(inputEl.value).toBe("");
  userEvent.type(inputEl, "hus");
  expect(mockHook).not.toHaveBeenCalledWith('hus'); // It won't be called immediately
  expect(screen.getByTestId("dog-search")).toHaveValue("hus");
  
 
});
