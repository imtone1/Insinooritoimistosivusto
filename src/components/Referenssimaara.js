import React from 'react'
import { PROJECTS } from '../values/referenssi';
import { Box, Stack, Typography } from '@mui/material'
import {COLORS} from '../values/colors'

const Referenssimaara = () => {
var a = 0;
window.addEventListener('scroll', function() {
  var counter = document.getElementById('counter');
  var oTop = counter.offsetTop - window.innerHeight;
  
  if (a === 0 && window.scrollY > oTop) {
    var counterValues = document.querySelectorAll('.counter-value');
    counterValues.forEach(function(element) {
      var countTo = element.getAttribute('data-count');
      var countNum = parseInt(element.textContent);
      
      var animation = setInterval(function() {
        countNum++;
        element.textContent = Math.floor(countNum);
        
        if (countNum === parseInt(countTo)) {
          clearInterval(animation);
        }
      }, 70);
    });
    
    a = 1;
  }
});   
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
      
      <div className='referenssiotsikko counter-value' data-count={sum}>
          166790
            </div>
            <Stack>
          <h3 >
          Kokonaislaajuus
            </h3>
          
      </Stack>
    </Stack>
    <Stack sx={{gap:3}} >
   
        <div className='referenssiotsikko counter-value' data-count={count}>
      0
        </div>
        <Stack>
        <h3 >
          Vaativia projekteja
            </h3>
            
    </Stack>
    </Stack>
    <Stack sx={{gap:3}}>
   
    <div className='referenssiotsikko counter-value' data-count={projectCount}>
      0
        </div>
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