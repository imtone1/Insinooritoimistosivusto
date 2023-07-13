import React from 'react'
import { Box } from '@mui/material'
import coffee from '../images/coffee2.png'




const Sivuotsikko = ({ otsikko, alaotsikko, alaotsikko2 }) => {
  return (
    <section style={{ position:'relative', maxWidth:1200, margin:'auto' }} >
      {/* <div className="layers__item" style={{ backgroundImage: `url(${coffee})`, transform: 'translateZ(95px) scale(0.90)' }}></div> */}

      <img  src={coffee} alt='vihko ja kynä' style={{ position:'absolute', height:'20vh', minHeight:200, left: 0 }}  loading='lazy' />

      <Box className="layers__container2" sx={{ height:'20vh', minHeight:200 }} >
        <div className="layers__item layer-3" style={{ transform: 'translateZ(180px) scale(.8)' }}>

          <div className="otsikko2-content">
            <h1>{otsikko}</h1>
            <p className="otsikko2-content__p">{alaotsikko}</p>
            <p className="otsikko2-content__p">{alaotsikko2}</p>

          </div>

        </div>


      </Box>
    </section>
  )
}

export default Sivuotsikko