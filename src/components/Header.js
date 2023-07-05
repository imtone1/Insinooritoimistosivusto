import React from 'react'
import { Link } from 'react-router-dom'
import { COLORS } from '../values/colors'

import talo from '../images/poyta.jpg'

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

    <section aria-label='header' className="layers" style={{ backgroundColor:COLORS.grey }}><div role='img' className="layers__item" aria-label='LVIA-suunnittelu' style={{ backgroundImage: `url(${talo})` }}></div>
      <div className="layers__container" style={{ height:'50vh', minHeight:'70vh' }}>


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


      </div>
    </section>
  )
}

export default Header