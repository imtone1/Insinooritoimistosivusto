import React from 'react'
import { Stack, Typography } from '@mui/material'

const Paaotsikko = ({otsikko, teksti}) => {
  return (
    <Stack component='div' direction={'column'} alignItems={'center'} p={{md:2, xs:2}} >
          
          <Typography variant='h3' sx={{textShadow: '1px 1px rgb(99, 99, 99)', textTransform:'uppercase', fontWeight:'600' , fontSize:'200%', pb:'20px'}}>{otsikko}</Typography>
          
          <Typography p={{md:3, xs:2}} maxWidth={800} textAlign={'center'} >
          {teksti}
          </Typography>
          </Stack>

  )
}

export default Paaotsikko