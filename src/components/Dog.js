import React,{useEffect} from 'react'
import { Grid,Paper  } from '@mui/material'
import styled from '@emotion/styled';
import ImageLoad from "../hooks/useImageLoad"
import Image from "../index.jpg"
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
  

  


function Dog({ info }) {
  return (
    <>
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
    </>
    )
 
}

export default Dog