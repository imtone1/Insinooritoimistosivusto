import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Stack, Typography, Collapse, IconButton } from '@mui/material'
import logo_SA1 from '../images/logo_SA1.png'
import jasenyritys from '../images/jasenyritys_2022.png'
import LK_valkoinen from '../images/LK_valkoinen.png'
import tietosuoja from '../documents/Tietosuojaseloste.pdf'
import {ReactComponent as Asiakastietologo}  from '../images/LOGO_SILVER_STANDING_BLACK_FI_433955.svg'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailIcon from '@mui/icons-material/Mail';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {COLORS} from '../values/colors'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Footer = () => {
  const [expanded, setExpanded] = React.useState(false);
    

    const handleExpandClick = () => {
        setExpanded(!expanded);

      };
  return (
    <Box className='boxit' sx={{backgroundColor: COLORS.beige1, overflow:'hidden', margin:'auto'}}>

        <Stack direction={{xs:'column', md:'row'}} gap={{xs: 5,md:10,lg:20}} alignItems={'center'} justifyContent={'center'}>
        <Link to={'/'} onClick={() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }}><Box sx={{padding:{xs:2, lg:10}}}>
            <img src={logo_SA1} alt="logo" style={{width:'200px'}}/>
        </Box></Link>
        <Stack direction={{xs:'column',sm:'row', md:'column'}} gap={5} >
        <Link to={'/meista'} onClick={() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }}>
            <Typography>
                Meistä
            </Typography>
        </Link>

        <Link to={'/meista'} onClick={() => {
    window.scroll({
      top: 120,
      left: 0,
      behavior: "instant",
    });
  }}>
        <Typography>
            Referenssit
        </Typography>
        </Link>
        <Link to={'/yhteystiedot'} onClick={() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }}>
            <Typography>
                Yhteystiedot
            </Typography>
        </Link>
        </Stack>
        <Stack direction={{xs:'column',sm:'row', md:'column'}} gap={5}>
        <Link to={'/palvelut'} onClick={() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }}>
            <Typography  sx={{width:{xs:89, sm:'inherit'}}}>
                Palvelut
            </Typography>
        </Link>
      
        <Link to={'yhteystiedot'} onClick={() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }}>
            <Typography >
                Laskutus
            </Typography>
        </Link>
        </Stack>
        <Stack direction={{xs:'column',sm:'row', md:'column'}} gap={5}>
          <Box sx={{width:'150px'}}>
            <img src={jasenyritys} alt="jasenyritys" style={{width:'100%', height:'auto'}}/>
           </Box>
           <Box sx={{width:'150px'}}>
           <img src={LK_valkoinen} alt="LK_valkoinen" style={{width:'100%', height:'auto'}} />
          </Box>  <Asiakastietologo style={{width:'150px'}}/>
            </Stack>

            
     
        </Stack>
     
          <Stack direction={{xs:'column', sm:'row'}} sx={{alignItems:'center', justifyContent:'center', gap:2, p:2}}>
              <Stack direction={'row'} gap={1}>
                <PhoneInTalkIcon/>
                <Typography >
                040 677 24 00
                </Typography>
                </Stack>
                <Stack direction={'row'} gap={1} >
                <MailIcon/>
                <Typography >
                info@sapair.fi
                </Typography>
                </Stack>
            </Stack>
            <a href={tietosuoja} target="_blank"
                    rel="noreferrer">
                     <Typography sx={{textAlign:'center', paddingTop:2}} >
                Tietosuojaseloste
            </Typography>
                </a>
                <Stack direction={{ xs: 'column', sm: 'row' }} gap={2} sx={{textAlign:'center', paddingTop:2, alignItems:'center', justifyContent:'center'}} >
            <Stack direction={'row' } >
              
            <Typography sx={{ margin:'auto'}}>
            Tietoa sivustosta
          </Typography>

          <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          
        >
          <ExpandMoreIcon sx={{color:COLORS.white}}/>
        </ExpandMore>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Stack direction='column' p={1} pt={3} gap={2} sx={{ alignItems:'flex-start',justifyContent:'flex-start'}}>
            <Stack direction={{xs:'column', md:'row'}}>
              <Typography sx={{pr:1}}>
                  Sivuston suunnitellut ja luonut 
              </Typography>
              <Stack direction={'row'} sx={{justifyContent:'center'}}>
                <Typography variant='h6' sx={{pr:1}}>
                    Irina Tatti
                </Typography>
                <LinkedInIcon onClick={event =>  window.location.href='https://www.linkedin.com/in/irina-tatti/'}/>
              </Stack>
            </Stack>
            <Typography fontSize={'small'}>
                Kuvat: Adobe Stock
            </Typography>            
        </Stack>
        </Collapse>
</Stack>
</Stack>
<Typography sx={{textAlign:'center', paddingTop:5}}>
    SapAir Oy | Y-tunnus: 3245203-6 | Helmikuja 3, 21310 Vahto
    </Typography>
    </Box>
  )
}

export default Footer