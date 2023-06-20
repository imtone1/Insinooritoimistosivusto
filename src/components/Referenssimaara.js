import React from 'react'
import CountUp from 'react-countup';
import { PROJECTS } from '../values/referenssi';
import { Stack, Typography} from '@mui/material'
import {COLORS} from '../values/colors'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom'

const Referenssimaara = () => {

    // Laske "Vaativa" arvojen määrä
// let count = 0;
// for (let i = 0; i < PROJECTS.length; i++) {
//   const project = PROJECTS[i];
//   const vaativuusluokka = project.Vaativuusluokka;

//   // Tarkista, että vaativuusluokka on "Vaativa"
//   if (vaativuusluokka === "Vaativa") {
//     count++;
//   }
// }
// Laske projektien määrä
// const projectCount = PROJECTS.length;

// Laske laajuusarvojen summa
let sum = 0;
for (let i = 0; i < PROJECTS.length; i++) {
  const project = PROJECTS[i];
  const laajuus = project.Laajuus;

  // Tarkista, että laajuusarvo on olemassa ja se voidaan muuttaa numeroksi
  if (laajuus && !isNaN(Number(laajuus))) {
    sum += Number(laajuus);
  }
}

  return (
   <Stack sx={{ backgroundColor:COLORS.harmaa, py:5}}>
<Typography sx={{textShadow: '1px 1px rgb(99, 99, 99)', textTransform:'uppercase', fontWeight:'600' , fontSize:'200%', pb:'20px', textAlign:'center'}}>Lukuja projekteistamme</Typography>
<Stack component={'div'} direction={{xs:'column',md:'row'}} sx={{textAlign:'center', alignItems:'center', justifyContent: 'space-evenly', padding:5, gap:3}}id="counter">
    
    <Stack sx={{gap:3}}>
      <Stack  direction={'row'}>
      
      <CountUp className='referenssiotsikko' aria-describedby="Kokonaislaajuus"
          end={sum}
          duration="3"
          scrollSpyOnce={true}
        enableScrollSpy={true}
        />
        m2</Stack>
              
            <p id='Kokonaislaajuus'>
            Kokonaislaajuus
              </p>
      
       
    </Stack>
    
    <Stack sx={{gap:3, width:250}} >
   
    <CountUp className='referenssiotsikko'
        end={215}
        duration="3"
        scrollSpyOnce={true}
        enableScrollSpy={true}
        aria-describedby="Omakotitaloja"
       
      />
        
        <p id='Omakotitaloja' >
          Omakotitaloja
            </p>
            
   
    </Stack>
    <Stack sx={{gap:3, width:250}}>
   
    <CountUp className='referenssiotsikko'
        end={370}
        duration="3"
        scrollSpyOnce={true}
        enableScrollSpy={true}
        aria-describedby="Tehtyjä projekteja"
      />
        <p id='Tehtyjä projekteja'>
          Tehtyjä projekteja
            </p>
        
    
    </Stack>  
</Stack>
<Link to={'/meista'} onClick={() => {
    window.scroll({
      top: 120,
      left: 0,
      behavior: "instant",
    });
  }} style={{ alignSelf:'center', textDecoration:'none', justifyContent:'space-between', padding:10, paddingTop:20}}>
 <Stack direction={'row'}>
  <Typography sx={{fontWeight:900}}>Referenssit</Typography>
  <ArrowForwardIosIcon /><ArrowForwardIosIcon style={{transform:'translateX(-15px)'}}/>
</Stack>
</Link>
</Stack> 
  )
}

export default Referenssimaara