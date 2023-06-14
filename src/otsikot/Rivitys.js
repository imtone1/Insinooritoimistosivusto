import React from 'react'
import {Stack, Typography } from '@mui/material'

const Rivitys = ({osa1, osa2, varianti}) => {
 
  return (
    <Stack direction={{xs:'column', sm:'row'}}>
            <Stack direction={'row'}>
    <Typography variant = {varianti} sx={{ fontWeight:'600' }}>{osa1}</Typography>
    {varianti.length> 2 && <Typography variant = {varianti} sx={{ fontWeight:'600', display:{xs:'flex', sm:'none'}}} >-</Typography>}
    </Stack>
    <Typography variant = {varianti} sx={{ fontWeight:'600' , pb:'20px'}}>{osa2}</Typography>
    </Stack>
  )
}

export default Rivitys