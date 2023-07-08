import React from 'react'
import SEO from '../components/SEO'
import { Helmet } from 'react-helmet-async'
import { Box, Stack, Typography } from '@mui/material'
import Konsta from '../kuvat/Konsta-Sappinen.png'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import MailIcon from '@mui/icons-material/Mail'
import ReceiptIcon from '@mui/icons-material/Receipt'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import Sivuotsikko from '../otsikot/Sivuotsikko'

const Yhteystiedot = () => {

  const schema=
{
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': 'Vahto',
    'streetAddress': 'Helmikuja 3'
  },
  'description': 'LVI-suunnittelu, KVV- /IV-työnjohto, projektinjohto- ja valvontatehtävät.',
  'name': 'SapAir Oy - LVIA-suunnittelu',
  'telephone': '+358406772400',
  'slogan': 'Selkeä valinta, kun etsit LVIA-ammattilaista.',
  'email': 'info@sapair.fi',
}

  const JSONschema = JSON.stringify(schema)

  return (
    <>
      <SEO title={'Insinööritoimisto SapAir Oy - Yhteystiedot'} description={'SapAir Oy:n yhteystiedot. Säästä itseäsi turhilta huolilta ja kustannuksilta, ota yhteyttä jo tänään.'}/>

      <Helmet>
        <script type="application/ld+json">{JSONschema}</script>
      </Helmet>
      <Sivuotsikko otsikko={'Yhteystiedot'} alaotsikko={'Voit ottaa yhteyttä sinulle sopivammalla tavalla'} alaotsikko2={'Vastaamme päivästä riippumatta'}/>


      <Stack role='article' direction={{ xs:'column-reverse', sm:'row' }} justifyContent={'center'} alignItems={'center'}>
        <Stack direction={'column'} sx={{ gap:3, p:2 }}>
          <Stack direction={'row'} alignItems='center'>
            <Typography variant='h2' sx={{ fontSize:'200%' }}>
          Konsta Sappinen
            </Typography>
            <a href='https://www.linkedin.com/in/konsta-sappinen-364ba575/' tabIndex="0" aria-describedby="new-window-Linkedin" aria-label="Linkedin" target="_blank" rel="noreferrer"></a><LinkedInIcon fontSize='large' >
            </LinkedInIcon>
          </Stack>
          <Typography variant='h2' sx={{ fontSize:'200%' }}>
        Vastaava LVIA-suunnittelija
          </Typography>
          <Typography variant='h2' sx={{ fontSize:'200%' }}>
        Toimitusjohtaja
          </Typography>
          <Stack direction={'column'} gap={2}>
            <a href="tel:0440190987"><Stack direction={'row'} gap={1}>
              <PhoneInTalkIcon/>
              <Typography >
              044 019 09 87
              </Typography>
            </Stack></a>
            <a href="mailto:konsta.sappinen@sapair.fi"><Stack direction={'row'} gap={1} >
              <MailIcon/>
              <Typography >
              konsta.sappinen@sapair.fi
              </Typography>
            </Stack></a>

          </Stack>

        </Stack>
        <Box  className='konstakuva' sx={{ maxWidth:200, alignSelf:'center', justifySelf:'center' , marginX:{ lg: 5 } }}>
          <img src={Konsta} alt="Konsta-Sappinen vastaava LVIA-suunnittelija" width={'100%'} height={'auto'} loading='lazy'/>
        </Box>
        <Stack direction={'column'} sx={{ gap:3, p:2 }}>
          <Typography variant='h2' sx={{ fontSize:'200%' }}>
          Toimisto
          </Typography>
          <Typography>Helmikuja 3, 21310 Vahto</Typography>
          <a href="tel:0406772400"><Stack direction={'row'} gap={1}>
            <PhoneInTalkIcon/>
            <Typography >
              040 677 24 00
            </Typography>
          </Stack></a>
          <a href="mailto:info@sapair.fi">  <Stack direction={'row'} gap={1} >
            <MailIcon/>
            <Typography >
              info@sapair.fi
            </Typography>
          </Stack></a>
          <Stack>
            <Stack direction={'row'} gap={1} >
              <ReceiptIcon/>
              <Typography sx={{ fontWeight:600 }}>
              Verkkolaskutusosoite
              </Typography>
            </Stack>
            <Typography >
              (OVT -tunnus): 003732452036
            </Typography>
            <Typography >
              Operaattori: Apix Messaging Oy
            </Typography>
            <Typography >
              Operaattoritunnus: 003723327487
            </Typography>
            <Typography sx={{ maxWidth:300, pt:5 }} >
              Emme vastaanota paperilaskuja. Mikäli verkkolaskun toimitus ei ole mahdollista, voi laskun toimittaa sovitusti myös sähköisesti osoitteeseen info@sapair.fi
            </Typography>
          </Stack>
        </Stack>
      </Stack>


    </>

  )
}

export default Yhteystiedot