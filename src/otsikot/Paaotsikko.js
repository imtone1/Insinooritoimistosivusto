import React from 'react'
import { Typography } from '@mui/material'

const Paaotsikko = ({otsikko, teksti}) => {
  return (
    // <Stack component='div' direction={'column'} sx={{
    //   backgroundColor:{xs:'#ececee', md:'transparent'}, alignItems:'center' ,p:2, width:300, margin:'auto',mb:{xs:2, md:0}}} >
          
          <div className='boxicontainer'>
            <div className='boxi'>
              <div className='coverboxi'></div>
              <div className='shadow'></div>
              <div className='sisalto'>
                <div className='tekstiboxi'>
                  <Typography variant='h3' sx={{textShadow: '1px 1px rgb(99, 99, 99)', textTransform:'uppercase', fontWeight:'600' , fontSize:'200%', pb:'20px'}}>{otsikko}</Typography>
                  <Typography p={{md:3, xs:2}} maxWidth={800}  >
                  {teksti}
                  </Typography>
                </div>
              </div>
            </div>
          </div>


          // </Stack> 

  )
}

export default Paaotsikko