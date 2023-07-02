import React from 'react'
import CountUp from 'react-countup';
import { PROJECTS } from '../values/referenssi';
import { Box,Stack, Typography} from '@mui/material'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import {COLORS} from '../values/colors'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom'

const customTheme = createTheme({
  palette: {
    primary: {
      main: COLORS.grey,
    },
    secondary: {
      main: COLORS.light_gray,
    },
    white: {
      main: COLORS.white,
    },
  },
});



const StyledButton = styled(Box)`
  ${({ theme }) => `
  cursor: pointer;
 
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
   
    transform: scale(1.03) translateX(20px);
  }
  `}
`;


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
   <Stack sx={{ backgroundColor:COLORS.harmaa, py:5,boxShadow:`5px 5px 5px rgba(0,0,0,0.1), 15px 15px 15px rgba(0,0,0,0.1),
   20px 10px 20px rgba(0,0,0,0.1),
   50px 50px 80px rgba(0,0,0,0.25),
   inset 3px 3px 2px #fff`,}}>
<Typography sx={{textShadow: '1px 1px rgb(99, 99, 99)', textTransform:'uppercase', fontWeight:'600' , fontSize:'200%', pb:'20px', textAlign:'center'}}>Lukuja projekteistamme</Typography>
<Stack component={'div'} direction={{xs:'column',md:'row'}} sx={{textAlign:'center', alignItems:'center', justifyContent: 'space-around', padding:5, gap:3}}id="counter">
    
    <div className='blobcontainerbig'>
      <div className='blob '>
      
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
      
      </div>
    </div>
    
    <div className='blobcontainer'>
      <div className='blob'>
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
            
            </div>
    </div>
            <div className='blobcontainer'>
      <div className='blob'>
     
   
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
        
     </div>
    </div>
    
</Stack>

    
<Link to={'/meista'} onClick={() => {
    window.scroll({
      top: 120,
      left: 0,
      behavior: "instant",
    });
  }} style={{ alignSelf:'center', textDecoration:'none', justifyContent:'space-between', padding:10, paddingTop:20}}>
 <ThemeProvider theme={customTheme}>
    <StyledButton>
      <Stack direction={'row'}>
  <Typography sx={{fontWeight:900, boxShadow:`5px 5px 5px rgba(0,0,0,0.1), 15px 15px 15px rgba(0,0,0,0.1),
   20px 10px 20px rgba(0,0,0,0.1),
   50px 50px 80px rgba(0,0,0,0.25),
   inset 3px 3px 2px #fff`, padding:2, paddingRight:5, borderRadius:4, backgroundColor: COLORS.vihrea}}>Referenssit</Typography>
  <ArrowForwardIosIcon style={{transform:'translateX(-38px) translateY(17px)'}} /><ArrowForwardIosIcon style={{transform:'translateX(-55px) translateY(17px)'}}/>
</Stack>
</StyledButton>
    </ThemeProvider>
</Link>
  

</Stack> 
  )
}

export default Referenssimaara