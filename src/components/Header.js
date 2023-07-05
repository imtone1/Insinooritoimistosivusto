import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import talo from '../images/poyta2.jpg'

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
      <Box role='img' className="layers__item" aria-label='LVIA-suunnittelu' sx={{ backgroundImage: `url(${talo})`, backgroundPosition: { xs:'bottom', md:'left top', xl:'center' } ,height:{ xs:'50vh',md:'1000px', xl:'155vh' } }}></Box>
      <section aria-label='header' className="layers">
        <Box className="layers__container" sx={{ height:{ xs:'40vh',md:'50vh' }, minHeight:{ xs:'50vh',md:'70vh' } }}>


          <div className="layers__item layer-2">
            <div className="hero-content" >

              <h1>LVIA - SUUNNITTELU</h1>

              <h2 className="hero-content__p" >Ammattilaitoisesti, selkeästi ja kustannustehokkaasti</h2>

              <Link to={'/yhteystiedot'} style={{ textDecoration:'none' }} onClick={() => {
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
    </>
  )
}

export default Header