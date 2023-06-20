import React from 'react'

import { Link } from 'react-router-dom'

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

  <section role='banner' aria-label='header' className="layers">
  <div className="layers__container">
    <div className="layers__item layer-1" role='img' aria-labelledby='LVI-suunnittelu' style={{backgroundImage: `url(${talo})`}}></div>
    
    <div className="layers__item layer-3">
      <div className="hero-content" id='LVI-suunnittelu'>
        <h1>LVI - SUUNNITELU</h1>
        <h2 className="hero-content__p">AMMATTITAITOISESTI, SELKEÄSTI, LUOTETTAVASTI</h2>
        <Link to={'/yhteystiedot'} onClick={() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }}> <button className="button-start" type="button">Ota yhteyttä</button> </Link>
      </div>
    </div>
   
    
  </div>
</section>
  )
}

export default Header