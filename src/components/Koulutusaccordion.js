import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Box, Stack } from '@mui/material';

import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { COLORS } from '../values/colors';
import SchoolIcon from '@mui/icons-material/School';


export default function Koulutusaccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box  >
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{backgroundColor:COLORS.grey  }} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Stack direction={{xs:'column', sm:'row'}}>
            <SchoolIcon sx={{ justifySelf:'center', alignSelf:'center'}}/>
            <Typography sx={{  p:2, justifySelf:'center', alignSelf:'center'}}>
            Koulutus
            </Typography>
            
          </Stack>
        </AccordionSummary>
        <AccordionDetails >

          <Stack sx={{gap:5}}>
           
          <Stack>
  <Typography>
  Kone- ja tuotantotekniikan koulutusohjelma, insinööri (AMK), suuntautuminen LVI-tekniikkaan, Turun AMK
  </Typography>
  <Typography>
  2013-2016
  </Typography>
  </Stack>

  <Stack>
  <Typography>
  Työteknikko, RastorCollege
  </Typography>
  <Typography>
  2011-2013
  </Typography>
  </Stack>
          </Stack> 
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}  sx={{backgroundColor:COLORS.grey  }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          
        >
          <Stack direction={{xs:'column', sm:'row'}}>
          <HealthAndSafetyIcon sx={{ justifySelf:'center', alignSelf:'center'}}/>
          <Typography sx={{ p:2 , justifySelf:'center', alignSelf:'center'}}> Jatkokoulutus/ Pätevyydet/ Erikoisosaaminen</Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails >
          
<Box sx={{paddingLeft:2}}>

  <ul> 
  <li>Jatkuvat maalämpöjärjestelmien valmistajien laitekoulutukset</li>
  <li>Älykkäät ja kestävät kiinteistöjen energiaratkaisut (5op) YAMK, Metropolia, 2021</li>
  <li>Poikkeuksellisen vaativat kohteet ja erikoisjärjestelmät (5op) YAMK, Metropolia, 2020</li>
  <li>KVV- ja IV työnjohtajakoulutus, TuLVI, 2018</li>
  <li>Sisäilmaopinnot IV-suunnittelijoille ja -asiantuntijoille (3op) AMK, Metropolia, 2017</li>
</ul>  
</Box>
  
        </AccordionDetails>
      </Accordion>
     
     
    </Box>
  );
}