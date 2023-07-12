import React from 'react'
import { Link } from 'react-router-dom'
import notfound from '../images/notfound.jpg'
import notfoundmobile from '../images/notfoundmobile.jpg'

const NotFound = () => {
  return (
    <div style={{ textAlign:'center' , maxWidth:806, height:786, margin:'auto', position:'relative'  }}>
      {/* <img src={notfound} style={{ maxWidth:806, maxHeight:786, borderRadius:4 }} alt='3d-kuva saarikaupungista'/> */}
      <picture>
        <source media="(max-width: 480px)" srcSet={notfoundmobile} alt='3d-kuva saarikaupungista' />
        <source media="(min-width: 800px)" srcSet={notfound} />
        <img src={notfound} alt='3d-kuva saarikaupungista' style={{ borderRadius:4, position:'absolute', top:0, left:0, width:'100%' }} />
      </picture>


      <div style={{ backgroundColor:'#e0e0e0' , position:'absolute', textAlign:'center' }}>
        <h1 style={{ marginTop:20, paddingBottom:15, paddingLeft:20 }}>Sivua ei löytynyt</h1>
        <Link to='/'>Takaisin etusivulle</Link>
      </div>
    </div>
  )
}

export default NotFound