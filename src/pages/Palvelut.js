import React from 'react'
import { Box, Stack } from '@mui/material'
import {COLORS} from '../values/colors'
import Paaotsikko from '../otsikot/Paaotsikko'


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import coffee from '../images/coffee.png'

import RoofingIcon from '@mui/icons-material/Roofing';
import Otayhteytta from '../components/Otayhteytta';


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
            "IV / KVV vastaavan työnjohtajapalvelut (tavanomaisista eritysvaativiin kohteisiin)"
          ];

       
  return (
    <Box  sx={{backgroundColor:COLORS.grey  }}>
      <section className="layers" >
  <div className="layers__container" style={{height:'30vh', minHeight:200}} >
    <div className="layers__item layer-1" style={{backgroundImage: `url(${coffee})`, transform: 'translateZ(95px) scale(0.90)'}}></div>
    
    <div className="layers__item layer-3" style={{transform: 'translateZ(180px) scale(.8)'}}>
      <div className="otsikko2-content">
        <h1>Palvelut</h1>
        <div className="otsikko2-content__p">Palvelemme asiakkaita niin tavanomaisissa, kuin vaativissakin projekteissa. </div>
        
        
      </div>
    </div>
    {/* <div className="layers__item layer-4">
      <canvas className="rain"></canvas>
    </div> */}
    
  </div>
</section>
   
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
        
  <Otayhteytta/>
  </Box>
  )
}

export default Palvelut