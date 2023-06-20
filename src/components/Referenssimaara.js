import React from 'react'
import CountUp from 'react-countup';
import { PROJECTS } from '../values/referenssi';
import { Box, Stack} from '@mui/material'
import {COLORS} from '../values/colors'

const Referenssimaara = () => {

    // Laske "Vaativa" arvojen määrä
let count = 0;
for (let i = 0; i < PROJECTS.length; i++) {
  const project = PROJECTS[i];
  const vaativuusluokka = project.Vaativuusluokka;

  // Tarkista, että vaativuusluokka on "Vaativa"
  if (vaativuusluokka === "Vaativa") {
    count++;
  }
}
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
    <Box sx={{backgroundColor:COLORS.harmaa}}>
     
<Stack direction={{xs:'column',md:'row'}} sx={{textAlign:'center', alignItems:'center', justifyContent: 'space-evenly', padding:5, gap:3}}id="counter">
    
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
    
    <Stack sx={{gap:3}} >
   
    <CountUp className='referenssiotsikko'
        end={count}
        duration="3"
        scrollSpyOnce={true}
        enableScrollSpy={true}
        aria-describedby="Vaativia projekteja"
       
      />
        
        <p id='Vaativia projekteja' >
          Vaativia projekteja
            </p>
            
   
    </Stack>
    <Stack sx={{gap:3}}>
   
    <CountUp className='referenssiotsikko'
        end={300}
        duration="3"
        scrollSpyOnce={true}
        enableScrollSpy={true}
        aria-describedby="Tehtyjä projekteja"
      />
   
      
        <Stack>
        <p id='Tehtyjä projekteja'>
          Tehtyjä projekteja
            </p>
        
    </Stack>
    </Stack>
</Stack>
</Box>
  )
}

export default Referenssimaara