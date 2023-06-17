import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Paaotsikko from '../otsikot/Paaotsikko'
import { Stack, Box } from '@mui/material'
import {COLORS} from '../values/colors'
import Palaute from './Palaute'
import tablelasit from '../images/tablelasit.jpg'




const Meistasanottua = () => {
  return (
//    <Box className="boxit"  sx={{backgroundImage: `url(${tablelasit})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover' ,alignItems:'center', justifyContent:'center'}}>
//     <Box sx={{margin:'auto', width:'80%'}}> 
//     <Paaotsikko otsikko={'Meistä sanottua'} teksti={'Asiakastyytyväisyys on meille kunnia-asia.'} />

// <Stack direction={{xs:'column', md:'row'}} sx={{alignItems:'center', justifyContent:"space-between", pb:{xs:2,md:8}}}>

//         <Palaute teksti={'SapAir Oy ja Konsta olivat todella hyvä yhteistyökumppani meidän kohteessa. Vaikka rakennusvalvonta asetti mitä ihmeellisimpiä ehtoja ja vaatimuksia, jaksoi Konsta neuvotella, suunnitella ja opastaa. Maallikkona oli ilo työskennellä hänen kanssaan, kun ymmärsin mitä puhutaan.Yhteistyö jatkuu tulevissa projekteissa!'}/>

//         <Palaute teksti={'Ammattitaitoista, tehokasta ja joustavaa sekä hyvin ystävällistä toimintaa kaikenkaikkiaan. Myös asiakkaan toiveita ja ajatuksia kuunnellen. Suosittelen lämpimästi!'}/>

//         <Palaute teksti={'Asiantuntevaa, tehokasta ja nopeaa toimintaa. Kysymyksiin vastataan ja toimeksianto maaliin uskomattoman nopeasti. Apua myös toimeksiannon/työn jälkeen. Vahva suositus.'}/>
// </Stack>
// <Stack direction={{xs:'column', md:'row'}} sx={{alignItems:'center', justifyContent:"space-evenly"}}>
//         <Palaute teksti={'Käynti työmaalle järjestyi nopealla aikataululla ja paikalle saavuttiin sovitusti. Todella ammattitaitoinen ja asiantunteva palvelu. En voi kun lämpimästi suositella yritystä.'}/>

//         <Palaute teksti={'Suosittelemme ehdottomasti yhteistyötä Konstan kanssa. Yhteydenpito on ollut koko ajan sujuvaa ja vastaukset tulevat hetkessä. Asiantuntemus ja vinkit ovat myös olleet erittäin hyödyllisiä.'}/>
//        </Stack>
//        </Box>
        
//    </Box>
<Box className="boxit"  sx={{backgroundImage: `url(${tablelasit})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover' ,alignItems:'center', justifyContent:'center'}}>
<Box sx={{margin:{xs:'auto', sm:5, lg:'auto'}, width:{xs:'80%', md:500}, maxwidth:600}} className='palautebox'> 
 <Paaotsikko otsikko={'Meistä sanottua'} teksti={'Asiakastyytyväisyys on meille kunnia-asia.'} />
<Carousel autoPlay stopOnHover infiniteLoop centerMode showStatus={false} interval={5000}  showThumbs={false} centerSlidePercentage={100}>
<Palaute teksti={'SapAir Oy ja Konsta olivat todella hyvä yhteistyökumppani meidän kohteessa. Vaikka rakennusvalvonta asetti mitä ihmeellisimpiä ehtoja ja vaatimuksia, jaksoi Konsta neuvotella, suunnitella ja opastaa. Maallikkona oli ilo työskennellä hänen kanssaan, kun ymmärsin mitä puhutaan.Yhteistyö jatkuu tulevissa projekteissa!'} rating={5}/>

<Palaute teksti={'Ammattitaitoista, tehokasta ja joustavaa sekä hyvin ystävällistä toimintaa kaikenkaikkiaan. Myös asiakkaan toiveita ja ajatuksia kuunnellen. Suosittelen lämpimästi!'} rating={5} />

<Palaute teksti={'Asiantuntevaa, tehokasta ja nopeaa toimintaa. Kysymyksiin vastataan ja toimeksianto maaliin uskomattoman nopeasti. Apua myös toimeksiannon/työn jälkeen. Vahva suositus.'} rating={5}/>

<Palaute teksti={'Käynti työmaalle järjestyi nopealla aikataululla ja paikalle saavuttiin sovitusti. Todella ammattitaitoinen ja asiantunteva palvelu. En voi kun lämpimästi suositella yritystä.'} rating={5}/>

<Palaute teksti={'Suosittelemme ehdottomasti yhteistyötä Konstan kanssa. Yhteydenpito on ollut koko ajan sujuvaa ja vastaukset tulevat hetkessä. Asiantuntemus ja vinkit ovat myös olleet erittäin hyödyllisiä.' } rating={5}/>
<Palaute teksti={'Kiitos Konsta, LVi-suunnittelu ja työn valvonta ei olisi paremmin voinneet mennä.'} rating={4}/>
<Palaute teksti={'Oikein hyvää ja asiantuntevaa palvelua. Iso suositus.'} rating={5}/>

<Palaute teksti={'Nopeaa ja asiantuntevaa osaamista, suosittelen! 👍'} rating={5}/>
<Palaute teksti={'Asiallinen toimija, suosittelen lämpimästi!'} rating={5}/>
</Carousel>

</Box>
        
</Box>

  )
}

export default Meistasanottua