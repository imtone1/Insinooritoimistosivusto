import React from 'react'
import { Box } from '@mui/material'
import coffee from '../images/coffee.png'




const Sivuotsikko = ({ otsikko, alaotsikko, alaotsikko2 }) => {
  return (
    <section className="layers" >  <div className="layers__item" style={{ backgroundImage: `url(${coffee})`, transform: 'translateZ(95px) scale(0.90)' }}></div>
      <Box className="layers__container2" sx={{ height:'20vh', minHeight:200 }} >


        <div className="layers__item layer-3" style={{ transform: 'translateZ(180px) scale(.8)' }}>

          <div className="otsikko2-content">
            <h2>{otsikko}</h2>
            <div className="otsikko2-content__p">{alaotsikko}</div>
            <div className="otsikko2-content__p">{alaotsikko2}</div>

          </div>

        </div>


      </Box>
    </section>
  )
}

export default Sivuotsikko