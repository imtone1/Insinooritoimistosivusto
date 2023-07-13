import React from 'react'
import { Typography, Box , Rating } from '@mui/material'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import { COLORS } from '../values/colors'

const Palaute = ({ teksti, rating }) => {
  return (
    <Box sx={{ maxWidth:400, margin:'auto', marginTop:{ xs: 10, md:12 }, textAlign:'center', backgroundColor: COLORS.creamy, borderRadius:1 }}>
      <Box sx={{ textAlign:'left' }}>
        <FormatQuoteIcon/>
      </Box>
      <Typography  sx={{ padding:1  }}>
        {teksti}
      </Typography>
      <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
    </Box>
  )
}

export default Palaute