import React from 'react'
import { Typography, Container, Box, Button } from '@mui/material'
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';

const TypoButtons = () => {
  return (
    <div>
    <Container maxWidth="md">
    <Typography variant="h3" color="error" align="center" sx={{background:"#eee", mt:4, border:"1px solid green"}}>
        Typograpy, Buttons, Container, Box
    </Typography>

    <Typography variant="body1" color="primary.dark" align="justify">  

    {/* body1= p etiketi gibi algilar    button= yazdigimizda span gibi algilar + büyük harf */}


        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium est iusto accusamus suscipit ut officiis incidunt culpa ipsa id ullam!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, eos, non mollitia at magni reiciendis aliquam vitae quod atque, hic animi 
        voluptatibus nam labore rem incidunt expedita aspernatur beatae voluptatem.
    </Typography>

    <Typography variant="button" color="success.light" align="justify">  

    {/* body1= p etiketi gibi algilar    button=  span gibi algilar + büyük harf */}


        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium est iusto accusamus suscipit ut officiis incidunt culpa ipsa id ullam!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, eos, non mollitia at magni reiciendis aliquam vitae quod atque, hic animi 
        voluptatibus nam labore rem incidunt expedita aspernatur beatae voluptatem.
    </Typography>
    </Container>

    <Container maxWidth="md">
    <Box sx={{display:"flex", flexDirection:"column", gap:2, marginTop:4}}>


      <Button variant='contained' color="error" startIcon={<AssistantDirectionIcon/>}>
        SEND
      </Button>



      <Button variant='outlined' color='success' endIcon={<AirplanemodeActiveIcon/>}>
        DELETE
      </Button>


    </Box>
      


    </Container>


    </div>
  )
}

export default TypoButtons