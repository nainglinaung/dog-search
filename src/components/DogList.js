import React,{useContext} from 'react'
import Dog from "./Dog"
import DogContext from "../context/DogContext"
function DogList() {

  const {dogs} = useContext(DogContext)
  return (
      <>
        {dogs.map( value =>  <Dog info={value} key={value.id} />)}
      </>
  )   
}

export default DogList