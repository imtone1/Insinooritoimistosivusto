import React from 'react'

import { Box} from "@mui/material"
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
  //   <Box className="banner" sx={{ flexGrow: 1}}>
  
  //       <img src={talo} alt="talo" className='banner_img'/>
  //       <Box className="banner-text-holder">
  //   <h1 className="banner-text">
  //       LVI-suunnitelu
  //   </h1>
  //   </Box>
  //   <Box className="banner-text-holder2">
  //   <h3 className="banner-text2">
  //       Ammattitaitoisesti, selkeästi ja luotettavasti
  //   </h3>
  //   </Box>
  //   <Link to={'/yhteystiedot'} onClick={() => {
  //   window.scroll({
  //     top: 0,
  //     left: 0,
  //     behavior: "instant",
  //   });
  // }}>
  //   <Box className="banner-button-holder" >
  //   <h3 className="banner-button" style={{boxShadow:'3px 5px 8px #888888'}}>
  //       Ota yhteyttä
  //   </h3>
  //   </Box>
  //   </Link>
  //   </Box>


  <section className="layers">
  <div className="layers__container">
    <div className="layers__item layer-1" style={{backgroundImage: `url(${talo})`}}></div>
    
    <div className="layers__item layer-3">
      <div className="hero-content">
        <h1>LVI - SUUNNITELU</h1>
        <div className="hero-content__p">AMMATTITAITOISESTI, SELKEÄSTI, LUOTETTAVASTI</div>
        <Link to={'/yhteystiedot'} onClick={() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }}> <button className="button-start">Ota yhteyttä</button> </Link>
      </div>
    </div>
    {/* <div className="layers__item layer-4">
      <canvas className="rain"></canvas>
    </div> */}
    
  </div>
</section>
  )
}

export default Header