import React from 'react'
import { Link } from 'react-router-dom'
import notfound from '../images/notfound.jpg'

const NotFound = () => {
  return (
    <div style={{ textAlign:'center' , backgroundImage: `url(${notfound})` , maxWidth:806, height:786, margin:'auto', position:'relative'  }}>
      {/* <img src={notfound} style={{ maxWidth:806, maxHeight:786, borderRadius:4 }} alt='3d-kuva saarikaupungista'/> */}

      <div style={{ backgroundColor:'#e0e0e0' , position:'absolute' }}>
        <h1 style={{ marginTop:20, paddingBottom:15, paddingLeft:20 }}>Sivua ei löytynyt</h1>
        <Link to='/'>Takaisin etusivulle</Link>
      </div>
    </div>
  )
}

export default NotFound