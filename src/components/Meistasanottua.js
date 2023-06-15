import React from 'react'
import Paaotsikko from '../otsikot/Paaotsikko'
import { Stack, Box } from '@mui/material'
import {COLORS} from '../values/colors'
import Palaute from './Palaute'



const Meistasanottua = () => {
  return (
   <Box className="boxit"  sx={{backgroundColor:COLORS.grey, alignItems:'center', justifyContent:'center'}}>
    <Box sx={{margin:'auto', width:'80%'}}> 
    <Paaotsikko otsikko={'Meistä sanottua'} teksti={'Asiakastyytyväisyys on meille kunnia-asia.'} />

<Stack direction={{xs:'column', md:'row'}} sx={{alignItems:'center', justifyContent:"space-between", pb:{xs:2,md:8}}}>

        <Palaute teksti={'SapAir Oy ja Konsta olivat todella hyvä yhteistyökumppani meidän kohteessa. Vaikka rakennusvalvonta asetti mitä ihmeellisimpiä ehtoja ja vaatimuksia, jaksoi Konsta neuvotella, suunnitella ja opastaa. Maallikkona oli ilo työskennellä hänen kanssaan, kun ymmärsin mitä puhutaan.Yhteistyö jatkuu tulevissa projekteissa!'}/>

        <Palaute teksti={'Ammattitaitoista, tehokasta ja joustavaa sekä hyvin ystävällistä toimintaa kaikenkaikkiaan. Myös asiakkaan toiveita ja ajatuksia kuunnellen. Suosittelen lämpimästi!'}/>

        <Palaute teksti={'Asiantuntevaa, tehokasta ja nopeaa toimintaa. Kysymyksiin vastataan ja toimeksianto maaliin uskomattoman nopeasti. Apua myös toimeksiannon/työn jälkeen. Vahva suositus.'}/>
</Stack>
<Stack direction={{xs:'column', md:'row'}} sx={{alignItems:'center', justifyContent:"space-evenly"}}>
        <Palaute teksti={'Käynti työmaalle järjestyi nopealla aikataululla ja paikalle saavuttiin sovitusti. Todella ammattitaitoinen ja asiantunteva palvelu. En voi kun lämpimästi suositella yritystä.'}/>

        <Palaute teksti={'Suosittelemme ehdottomasti yhteistyötä Konstan kanssa. Yhteydenpito on ollut koko ajan sujuvaa ja vastaukset tulevat hetkessä. Asiantuntemus ja vinkit ovat myös olleet erittäin hyödyllisiä.'}/>
       </Stack>
       </Box>
        
   </Box>
  )
}

export default Meistasanottua