import React from 'react'
import { Box,Stack} from '@mui/material'
import { Link } from 'react-router-dom'
import {COLORS} from '../values/colors'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import talo from '../images/poyta.jpg'


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
   
    transform: scale(1.06);
  }
  `}
`;

const Styledheader = styled(Box)`
  ${({ theme }) => `

 
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  })}
 
  `}
`;


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

  <section role='banner' aria-label='header' className="layers" style={{backgroundColor:COLORS.grey}}><div className="layers__item" role='img' aria-labelledby='LVI-suunnittelu' style={{backgroundImage: `url(${talo})`}}></div>
  <div className="layers__container" style={{height:'50vh', minHeight:'70vh'}}>
    
    
    <div className="layers__item layer-2">
      <div className="hero-content" >
      <ThemeProvider theme={customTheme}>
        <Styledheader>
        <h1 className='paddingi' id='LVI-suunnittelu'>LVI - SUUNNITTELU</h1>
        </Styledheader>
        </ThemeProvider>
        <h2 className="hero-content__p paddingi">Selkeä valinta, kun etsit LVIA-ammattilaista</h2>
        <ThemeProvider theme={customTheme}>
    <StyledButton>
        <Link to={'/yhteystiedot'} style={{textDecoration:'none'}} onClick={() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }}>
    <Stack direction={'row'} sx={{alignContent:'center', justifyContent:'center'}}>
  <div className='button-start'>Ota yhteyttä</div>
  
</Stack>
 
  
  </Link>
    </StyledButton>
    </ThemeProvider>
      </div>
    </div>
   
    
  </div>
</section>
  )
}

export default Header