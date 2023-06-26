import React from 'react'

import { Link } from 'react-router-dom'
import {COLORS} from '../values/colors'

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

  <section role='banner' aria-label='header' className="layers" style={{backgroundColor:COLORS.grey}}><div className="layers__item" role='img' aria-labelledby='LVI-suunnittelu' style={{backgroundImage: `url(${talo})`}}></div>
  <div className="layers__container" style={{height:'50vh', minHeight:'70vh'}}>
    
    
    <div className="layers__item layer-2">
      <div className="hero-content" >
        <h1 className='paddingi' id='LVI-suunnittelu'>LVI - SUUNNITELU</h1>
        <h2 className="hero-content__p paddingi">Selkeä valinta, kun etsit LVIA-ammattilaista</h2>
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