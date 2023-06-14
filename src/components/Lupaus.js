import React from 'react'
import { Stack, Typography } from '@mui/material'
import Rivitys from '../otsikot/Rivitys'

const Lupaus = ({teksti, otsikko1, otsikko2}) => {
  return (

    <Stack component={'div'} direction={'column'} p={{md:2, xs:2}} className='lupaukset'>
        <Stack direction={{xs:'column', sm:'row'}}>
            <Rivitys osa1={otsikko1} osa2={otsikko2} varianti={'h4'}/>

    </Stack>
    <Typography sx={{width:{xs:'100%', md:'80%'}}}>
   
   {teksti}
    </Typography>
    </Stack>

  )
}

export default Lupaus