import React from 'react'
import { Helmet } from 'react-helmet-async'
import suurilogo from '../kuvat/suurilogo.jpg'
import twitterlogo from '../kuvat/twitterimg.jpg'

const SEO =({ title, description } ) => {
  return (
    <Helmet>
      { /* Standard metadata tags */ }
      <title>{title}</title>
      <meta name='description' content={description} />
      { /* End standard metadata tags */ }
      { /* Facebook tags */ }
      <meta property="og:type" content='website' />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://esimerkkisaitti.netlify.app/" />
      {/* <meta property="og:title" content="Instinööritoimisto SapAir Oy - LVI -suunnittelu" />
      <meta property="og:description" content="LVI-suunnittelu, KVV /IV-työnjohto, projektijohto- ja valvonta tehtävät. Selkeä valinta, kun tarvitset LVIA-suunnittelijaa." />
      */}
      <meta property="og:image" content={suurilogo} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://esimerkkisaitti.netlify.app/" />
      <meta property="twitter:title" content="Instinööritoimisto SapAir Oy - LVI -suunnittelu" />
      <meta property="twitter:description" content="LVI-suunnittelu, KVV /IV-työnjohto, projektijohto- ja valvonta tehtävät. Selkeä valinta, kun tarvitset LVIA-suunnittelijaa." />
      <meta property="twitter:image" content={twitterlogo}/>

      {/* <meta property="og:image" content="URL"/>*/}
      {/* <meta property="og:url" content="https://sapair.fi"/> */}
      {/* A tag that denotes the name of the Web site in which the shared page resides: */}
      <meta property="og:site_name" content="Insinööritoimisto SapAir Oy - LVI-suunnittelu"/>
      {/* <meta property="og:image" content={process.env.PUBLIC_URL + suurilogo}/> */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      { /* End Facebook tags */ }
      { /* Twitter tags */ }
      {/* @username of content creator
<meta name="twitter:creator" content={name} />*/}

      {/* Summary Card: Title, description, and thumbnail.
Summary Card with Large Image: Similar to the Summary Card, but with a prominently-featured image.
App Card: A Card with a direct download to a mobile app.
Player Card: A Card that can display video/audio/media. */}
      {/* <meta name="twitter:card" content="summary" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} /> */}
      {/* <meta name="twitter:image" content={process.env.PUBLIC_URL + twitterlogo} /> */}
      <meta name="twitter:image:alt" content="Insinööritoimisto SapAir Oy - LVI-suunnittelu"/>
      { /* End Twitter tags */ }
    </Helmet>
  )
}

export default SEO