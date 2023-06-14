import React from 'react'
import { Box, Stack } from '@mui/material'
import {COLORS} from '../values/colors'
import Paaotsikko from '../otsikot/Paaotsikko'


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


import RoofingIcon from '@mui/icons-material/Roofing';


const Palvelut = () => {

       const [dense, setDense] = React.useState(false);
        const [secondary, setSecondary] = React.useState(false);
        const palvelumme = [
            "LVIA-suunnittelu",
            "Konsultointipalvelut",
            "Projektinjohto ja valvontatehtävät",
            "Maalämpösuunnittelu, valvonta ja rakennuttaminen",
            "Kuntoarviot",
            "Selvitykset ja tarkastukset",
            "Huoneistoremonttivalvontaa",
            "Asiantuntijalausunnot",
            "IV / KVV vastaavan työnjohtajapalvelut"
          ];

       
  return (
    <Box className="boxit" sx={{backgroundColor:COLORS.grey  }}>
    <Paaotsikko otsikko={'Palvelut'} teksti={'Tarjoamamme  palvelut:'}/>
    <Stack direction={'column'} sx={{alignItems:'center'}}>

              <List dense={dense}>
          {palvelumme.map((value) =>
          <ListItem key={value}>
            <ListItemIcon>
              <RoofingIcon />
            </ListItemIcon>
            <ListItemText
              primary={value}
              secondary={secondary ? 'Secondary text' : null}
            />
          </ListItem>
           
          )}
        </List>
    </Stack>
        
  
  </Box>
  )
}

export default Palvelut