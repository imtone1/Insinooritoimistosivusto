import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import RecyclingIcon from '@mui/icons-material/Recycling'
import { Box, Stack } from '@mui/material'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'
import { COLORS } from '../values/colors'
export default function Accordions() {
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Box  sx={{ maxwidth:900, margin:'auto', pb:10 }}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ backgroundColor:COLORS.grey  }} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="vastuullisuus-content"
          id="vastuullisuus-header"
        >
          <Stack direction={{ xs:'column', sm:'row' }} sx={{ alignItems:'center' }}>
            <RecyclingIcon sx={{ justifySelf:'center', alignSelf:'center', fontSize:'190%' }}/>
            <Typography sx={{  p:2, fontSize:'190%' }}>
              Vastuullisuus
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Panostamme hiilineutraalisuuteen liiketoiminnassamme suosien uusiutuvaa energiaa ja pyrkien vähentämään energiankulutusta.</Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails >

          <Stack sx={{ gap:5 }}>

            <Typography>

              Suunnittelemme rakennusten LVI-järjestelmiä ja ilmastointia siten, että ne ovat energiatehokkaita ja hyödyntävät uusiutuvia energialähteitä, kuten aurinko- ja maalämpöä.
            </Typography>


            <Typography>

              Suunnittelussa otamme huomioon energiatehokkuus pitkällä tähtäimellä rakennuksen elinkaaren mukaisesti. Esitämme asiakkaalle konkreettisia vaihtoehtoja energiatehokkuuden parantamiseksi.

            </Typography>

            <Typography>
            Pyrimme myös vähentämään materiaalihukkaa ja edistämään kestävää rakentamista. Suunnitteluvaiheessa otamme huomioon materiaalien ominaisuudet ja pyrimme käyttämään ympäristöystävällisiä, kierrätettäviä ja kestäviä materiaaleja. Suosimme energiatehokkaita ja ympäristöystävällisiä ratkaisuja, kuten veden ja energian säästöön tähtääviä järjestelmiä.
            </Typography>
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}  sx={{ backgroundColor:COLORS.grey  }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="Terveys-content"
          id="Terveys-header"

        >
          <Stack direction={{ xs:'column', sm:'row' }} sx={{ alignItems:'center' }}>
            <HealthAndSafetyIcon sx={{ justifySelf:'center', alignSelf:'center', fontSize:'190%' }}/>
            <Typography sx={{   p:2 , fontSize:'190%' }}>Terveys</Typography>
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
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}  sx={{ backgroundColor:COLORS.grey  }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="valittaminen-content"
          id="valittaminen-header"
        >
          <Stack direction={{ xs:'column', sm:'row' }} sx={{ alignItems:'center' }}>
            <VolunteerActivismIcon sx={{ justifySelf:'center', alignSelf:'center',  fontSize:'190%' }}/>
            <Typography sx={{  flexShrink: 0 , p:2, fontSize:'190%' }}>
          Välittäminen
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
          Liiketoimistamme lahjoitamme osan lasten ja nuorten sekä kehitysvammaisten hyväksi.
            </Typography></Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
          Kaikilla meillä ei ole samoja mahdollisuuksia liikkua ja elää vapaasti. Haluamme tukea heikompia elämässä eteenpäin ja siksi liiketoiminnastamme lahjoitamme osan lasten, nuorten sekä kehitysvammaisten hyväksi.
Näitä ovat esim. Aivovammaliitto, CP-liitto, Kummit Ry, Sydänlapset ja -aikuiset ry, Sylva Ry sekä muut.
Osallistumme myös hyväntekeväisyystapahtumiin mahdollisuuksiemme mukaan.

          </Typography>
        </AccordionDetails>
      </Accordion>

    </Box>
  )
}