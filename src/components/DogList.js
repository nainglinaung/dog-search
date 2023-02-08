import React from 'react'
import Dog from "./Dog"
function DogList({dogs}) {
  return (
      <>
          {dogs.map((value) => {
             return <Dog info={value} key={value.id} />
        })}
      </>
  )
}

export default DogList