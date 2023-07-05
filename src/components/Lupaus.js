import React from 'react'
import { Stack, Typography } from '@mui/material'
import Rivitys from '../otsikot/Rivitys'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline'


const Lupaus = ({ teksti, otsikko1, otsikko2 }) => {
  return (
    <>
      <Stack direction={'row'} sx={{}}>
        <DoneOutlineIcon sx={{ alignSelf:'center' ,color:'success' }}/>
        <Stack component={'div'} direction={'column'} p={{ md:2, xs:2 }}>


          <Stack direction={{ xs:'column', sm:'row' }}>

            {/* <Typography variant={'h5'} sx={{fontWeight:'bold', fontSize:'200%', alignSelf:'center'}}>
              {otsikko1}{otsikko2}
              </Typography> */}
            <Rivitys osa1={otsikko1} osa2={otsikko2} varianti={'h5'}/>

          </Stack>
          <Typography sx={{ pt:1 }}>

            {teksti}
          </Typography>
        </Stack>
      </Stack>
    </>
  )
}

export default Lupaus