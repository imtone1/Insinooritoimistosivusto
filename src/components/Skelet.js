import React from 'react'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'

export default function Skelet() {
  return (
    <Box sx={{ width: 300,  margin:'auto' }}>
      <Skeleton variant="rounded" width={300} height={60}/>
    </Box>
  )
}