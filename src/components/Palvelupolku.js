import React from 'react'
import { Stack, Typography, Box } from '@mui/material'
import {COLORS} from '../values/colors'

import meeting from '../images/communication_employee_conference_conversation_meeting_discussion_icon.png'
import doc from '../images/editdocument.png'
import geardoc from '../images/doc.png'
import building from '../images/building.png'
import gearapp from '../images/mobile-development.png'
import finish from '../images/finishflag.png'

import Polkuitem from './Polkuitem'
import Polkuitemoik from './Polkuitemoik'

const Palvelupolku = () => {
  return (
    <Box sx={{backgroundColor:COLORS.grey}}>
    <Stack direction={'column'} justifyContent="center" alignItems={'center'} sx={{width:'80%', margin:'auto', gap:3}}className='boxit'>

    <Polkuitem meeting={meeting}/>
    <Polkuitemoik kuva={doc}/>
    <Polkuitem meeting={geardoc}/>
    <Polkuitemoik kuva={building}/>
    <Polkuitem meeting={gearapp}/>
    <Polkuitemoik kuva={finish}/>

  </Stack>
  </Box>
  
  )
}

export default Palvelupolku