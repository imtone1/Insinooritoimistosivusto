import React from 'react'
import { Helmet } from 'react-helmet-async'
import suurilogo from '../kuvat/suurilogo.jpg'
import twitterlogo from '../kuvat/twitter img.jpg'

const SEO =({ title, description }) => {
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

      {/* <meta property="og:image" content="URL"/>*/}
      <meta property="og:url" content="https://sapair.fi"/>
      {/* A tag that denotes the name of the Web site in which the shared page resides: */}
      <meta property="og:site_name" content="Insinööritoimisto SapAir Oy"/>
      <meta property="og:image" content={suurilogo}/>
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
      <meta name="twitter:card" content="summary" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twitterlogo} />
      <meta name="twitter:image:alt" content="Insinööritoimisto SapAir Oy"/>
      { /* End Twitter tags */ }
    </Helmet>
  )
}

export default SEO