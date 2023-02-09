import React,{useContext} from 'react'
import { Grid  } from '@mui/material'
import ImageLoad from "../hooks/useImageLoad"
import DogContext from "../context/DogContext"
import Image from "../index.jpg"

  

function DogList() {
  
  const {dogs} = useContext(DogContext)

  return (
    <>
      {dogs.map((info) => {
        return (<div key={info.id} data-testid='list-item'>
  <Grid container spacing={2}>
          <Grid item>
            <h2>{info.name}</h2>
        </Grid>
        </Grid>
      <Grid container spacing={2}>
        <Grid item>
          <ImageLoad src={`https://cdn2.thedogapi.com/images/${info.reference_image_id}.jpg`} placeholder={Image} />
        </Grid>
      </Grid>
      <Grid container rowSpacing={0} >
          <Grid item xs>weight</Grid>
          <Grid item xs>{info.weight && info.weight.imperial} lb</Grid>
          <Grid item xs>{info.weight && info.weight.metric} kg</Grid>
      </Grid>  
      <Grid container rowSpacing={3}>
          <Grid item xs>height</Grid>
          <Grid item xs>{info.height && info.height.imperial} cm</Grid>
          <Grid item xs>{info.height && info.height.metric} ft</Grid>
      </Grid>  
      <Grid container rowSpacing={2}>
          <Grid item xs>lifespan</Grid>
          <Grid item xs>{info.life_span}</Grid>
          <Grid item xs></Grid>
        </Grid> 
        <Grid container rowSpacing={2}>
          <Grid item xs>Bred For</Grid>
          <Grid item xs>{info.bred_for}</Grid>
          <Grid item xs></Grid>
        </Grid> 
        <Grid item xs>Temperament</Grid>
        <Grid container rowSpacing={2}>
          <Grid item>{info.temperament}</Grid>
        </Grid> 
        </div>)
      })}
    </>
    )
 
}

export default DogList