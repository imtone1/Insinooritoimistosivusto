import React from 'react'
import { Stack, Typography } from '@mui/material'

const Paaotsikko = ({otsikko, teksti}) => {
  return (
    <Stack component='div' direction={'column'} sx={{
      backgroundColor:{xs:'#ececee', md:'transparent'}, boxShadow:{xs:'3px 5px 8px #888888',md:'none'},borderRadius:4, alignItems:'center' ,p:2, mb:{xs:2, md:0}}}>
          
          <Typography variant='h3' sx={{textShadow: '1px 1px rgb(99, 99, 99)', textTransform:'uppercase', fontWeight:'600' , fontSize:'200%', pb:'20px'}}>{otsikko}</Typography>
          
          <Typography p={{md:3, xs:2}} maxWidth={800} textAlign={'center'} >
          {teksti}
          </Typography>
          </Stack>

  )
}

export default Paaotsikko