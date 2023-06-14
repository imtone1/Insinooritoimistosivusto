import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RecyclingIcon from '@mui/icons-material/Recycling';
import { Box, Stack } from '@mui/material';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { COLORS } from '../values/colors';
export default function Accordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box  sx={{maxwidth:900, margin:'auto'}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{backgroundColor:COLORS.grey  }} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Stack direction={{xs:'column', sm:'row'}} sx={{alignItems:'center'}}>
            <RecyclingIcon sx={{ justifySelf:'center', alignSelf:'center'}}/>
            <Typography sx={{ width: '33%', p:2}}>
              Vastuullisuus
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Panostamme hiilineutraalisuuteen liiketoiminnassamme suosien uusiutuvaa energiaa ja pyrkien vähentämään energiankulutusta.</Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails >

          <Stack sx={{gap:5}}>
           
            <Typography>
              
              Suunnittelemme rakennusten LVI-järjestelmiä ja ilmastointia siten, että ne ovat energiateh okkaita ja hyödyntävät uusiutuvia energialähteitä, kuten aurinko- ja maalämpöä.
            </Typography>
            
             
            <Typography>
              
              Suunnittelussa otamme huomioon energiatehokkuus (pitkällä tähtäimellä) rakennuksen elinkaaren mukaisesti. Esitämme asiakkaalle konkreettisia vaihtoehtoja energiatehokkuuden parantamiseksi.
              
            </Typography>

            <Typography>
            Pyrimme myös vähentämään materiaalihukkaa ja edistämään kestävää rakentamista. Suunnitteluvaiheessa otamme huomioon materiaalien ominaisuudet (valinnan) ja pyrimme käyttämään ympäristöystävällisiä, kierrätettäviä ja kestäviä materiaaleja. Suosimme energiatehokkaita ja ympäristöystävällisiä ratkaisuja, kuten veden ja energian säästöön tähtääviä järjestelmiä.
            </Typography>
          </Stack> 
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}  sx={{backgroundColor:COLORS.grey  }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          
        >
          <Stack direction={{xs:'column', sm:'row'}} sx={{alignItems:'center'}}>
          <HealthAndSafetyIcon sx={{ justifySelf:'center', alignSelf:'center'}}/>
          <Typography sx={{ width: '33%',  p:2 }}>Terveys</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          Meille on tärkeää myös rakennusten käyttäjien hyvinvointi ja terveys. 
          </Typography></Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Suunnittelemme ilmanvaihtojärjestelmiä ja sisäilmaratkaisuja, jotka takaavat hyvän ilmanlaadun ja viihtyisän sisäympäristön. Pyrimme minimoimaan haitallisten aineiden päästöt rakennuksista ja luomaan terveellisen ja turvallisen asuinympäristön.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}  sx={{backgroundColor:COLORS.grey  }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Stack direction={{xs:'column', sm:'row'}} sx={{alignItems:'center'}}>
          <VolunteerActivismIcon sx={{ justifySelf:'center', alignSelf:'center'}}/>
          <Typography sx={{ width: '33%', flexShrink: 0 , p:2}}>
          Välittäminen
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          Liiketoimistamme lahjoitamme osan lasten ja nuorten sekä kehitysvammaisten hyväksi.
          </Typography></Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={'red'}>
           KENELLE LAHJOITAMME? Jotain tekstiä siitä kenelle lahjoitamme ja miksi.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </Box>
  );
}