import React from 'react'
import {Stack, Typography } from '@mui/material'

const Rivitys = ({osa1, osa2}) => {
  return (
    <Stack direction={{xs:'column', sm:'row'}}>
            <Stack direction={'row'}>
    <Typography variant = 'h4' sx={{ fontWeight:'600' }}>{osa1}</Typography>
    <Typography variant = 'h4' sx={{ fontWeight:'600', display:{xs:'flex', sm:'none'}}} >-</Typography></Stack>
    <Typography variant = 'h4' sx={{ fontWeight:'600' , pb:'20px'}}>{osa2}</Typography>
    </Stack>
  )
}

export default Rivitys