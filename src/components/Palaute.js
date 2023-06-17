import React from 'react'
import {Typography, Box , Rating} from '@mui/material'
import { lightGreen } from '@mui/material/colors';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';


const Palaute = ({teksti, rating}) => {
  return (
    <Box sx={{maxwidth:600, textAlign:'center'}}>
    <Box sx={{textAlign:'left'}}>
      <FormatQuoteIcon/>
</Box>
<Typography  sx={{ padding:1}}>
{teksti}
</Typography>
<Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
</Box>
  )
}

export default Palaute