import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import talo from '../images/poyta3.jpg'
import talomobile from '../images/LVIsuunnittelupoytamobile.jpg'
import talo1200 from '../images/LVIsuunnittelupoyta1200.jpg'

const Header = () => {
  document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
      style: `
      --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
      --move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
      `
    })
  })
  return (
    <>
      {/* <Box role='img' className="layers__item" aria-label='LVIA-suunnittelu' sx={{ backgroundImage: `url(${talo})`, backgroundPosition: { xs:'bottom', sm:'top', md:'left bottom', xl:'center' } ,height:{ xs:'50vh', sm:'800px',md:'1000px', xl:'155vh' } }}></Box> */}
      {/* <Box  sx={{ height:{ xs:'50vh', sm:'800px',md:'1000px', xl:'155vh', position:'relative' } }} >
        <picture>
          <source className="layers__item" media="(max-width: 480px)" srcSet={talomobile} />
          <source className="layers__item" media="(min-width: 800px)" srcSet={talo} />
          <img className="layers__item" style={{ width:'100%', height:'auto', top:0 }} src={talo} alt='LVIA-suunnittelu työpöytä' />
        </picture>
      </Box> */}
      <section aria-label='header' className="layers" style={{ position:'relative' }}>
        <Box className="layers__container" sx={{ height:{ xs:'40vh',md:'50vh' }, minHeight:{ xs:'50vh',md:'70vh' }, maxHeigh:'2000px' }}>


          <div className="layers__item layer-2">
            <div className="hero-content" >

              <h1>LVIA - SUUNNITTELU</h1>

              <p className="hero-content__p" >Ammattilaitoisesti, selkeästi ja kustannustehokkaasti</p>

              <Link reloadDocument to={'/yhteystiedot'} style={{ textDecoration:'none' }} onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: 'instant',
                })
              }}>
                <div className='button-start'>Ota yhteyttä</div>

              </Link>

            </div>
          </div>


        </Box>
      </section>
      <Box className="layers__item" sx={{ height:{ xs:'50vh', sm:'800px',md:'1000px', xl:'155vh', position:'absolute', top:0 } }} >
        <picture>
          <source className="layers__item" media="(max-width: 480px)" srcSet={talomobile} />
          <source className="layers__item" media="(max-width: 800px)" srcSet={talo1200} />
          <source className="layers__item" media="(min-width: 900px)" srcSet={talo} />
          <img className="layers__item" style={{ width:'100%'  }} src={talo} alt='LVIA-suunnittelu työpöytä' />
        </picture>
      </Box>
    </>
  )
}

export default Header