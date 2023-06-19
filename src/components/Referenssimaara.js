import React from 'react'
import CountUp, { useCountUp } from 'react-countup';
import { PROJECTS } from '../values/referenssi';
import { Box, Stack, Typography } from '@mui/material'
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
const projectCount = PROJECTS.length;

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
      
      <CountUp className='referenssiotsikko'
          end={sum}
          duration="3"
          enableScrollSpy={true}
        />
        m2</Stack>
              <Stack>
            <h3 >
            Kokonaislaajuus
              </h3>
      
        </Stack>
    </Stack>
    
    <Stack sx={{gap:3}} >
   
    <CountUp className='referenssiotsikko'
        end={count}
        duration="3"
        enableScrollSpy={true}
      />
        <Stack>
        <h3 >
          Vaativia projekteja
            </h3>
            
    </Stack>
    </Stack>
    <Stack sx={{gap:3}}>
   
    <CountUp className='referenssiotsikko'
        end={300}
        duration="3"
        enableScrollSpy={true}
      />
   
      
        <Stack>
        <h3 >
          Tehtyjä projekteja
            </h3>
        
    </Stack>
    </Stack>
</Stack>
</Box>
  )
}

export default Referenssimaara