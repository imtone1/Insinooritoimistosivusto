import React from 'react'
import { Helmet } from 'react-helmet-async'
import mainos from '../videos/mainosvideoHD.mp4'
import { Box } from '@mui/material'

import thumbnail from '../images/thumbnail.jpg'

const Videoesittely = () => {

  const schema=
{
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  'name': 'LVIA-suunnittelija',
  'description': 'LVIA-suunnittelupalveluiden esittely',
  'caption': 'Selkeä valinta, kun etsit LVI-suunnittelun ammattilaista. Valtimme on laatu, nopeaus, kustannustehokkuus, läpinäkyvyys, asiakaslähtöisyys. Asiakkaidemme luottamus on arvokkain voimavaramme. Meillä on monipuolinen palvelutarjonta. LVIA-suunnittelu, KVV- /IV-työnjohto, projektinjohto- ja valvontatehtävät, konsultointipalvelut, Maalämpö, selvitykset ja tarkastukset. Meillä on vakuuttava referenssilista. Otamme vastaan projektit tavallisista erityisvaativiin. Käytämme nykyaikaisia ohjelmistoja taataksemme parhaan laadun. Kaikki dokumentaatio yhdessä paikassa. Näet sen ansiosta projektisi etenemisen kätevästi ja reaaliaikaisesti. Säästä itseäsi turhilta huolilta ja kustannuksiltä. Ota yhteyttä jo tänään.',
  'keywords': ['video', 'LVI', 'KVV työnjohto', 'IV-työnjohto', 'LVIA-suunnittelija', 'LVIA-suunnittelu', 'LVI-suunnittelu', 'LVI-suunnittelija',  'LVI-suunnittelu'],
  'thumbnail': { thumbnail },
  'uploadDate': '2023-07-08T08:00:00+03:00',
  'contentUrl': mainos,
  'duration': 'PT0M43S',
  'hasPart':[ {
    '@type': 'Clip',
    'name': 'Insinööritoimiston valtit',
    'startOffset': 5,
    'url': `${mainos}?t=5`
  },
  {
    '@type': 'Clip',
    'name': 'LVI-suunnittelupalvelut',
    'startOffset': 12,
    'url': `${mainos}?t=12`
  },
  {
    '@type': 'Clip',
    'name': 'Referenssit',
    'startOffset': 19,
    'url': `${mainos}?t=19`
  },
  {
    '@type': 'Clip',
    'name': 'Nykyaikaiset ohjelmistot',
    'startOffset': 25,
    'url': `${mainos}?t=25`
  },
  {
    '@type': 'Clip',
    'name': 'Dokumentaatio kätevästi ja reaaliaikaisesti',
    'startOffset': 30,
    'url': `${mainos}?t=30`
  },
  {
    '@type': 'Clip',
    'name': 'Ota yhteyttä jo tänään',
    'startOffset': 35,
    'url': `${mainos}?t=35`
  }]
}

  const JSONschema = JSON.stringify(schema)

  return (
    <Box sx={{ maxWidth:800, margin:'auto' }}>
      <Helmet>
        <script type="application/ld+json">{JSONschema}</script>
      </Helmet>
      <video controls width="100%" className="videoPlayer" src={mainos} type="video/mp4"></video>

    </Box>

  )
}

export default Videoesittely