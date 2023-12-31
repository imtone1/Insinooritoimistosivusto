import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Stack, Typography, Collapse, IconButton } from '@mui/material'
import { ReactComponent as SAlogo } from '../kuvat/logo_SA1.svg'

import { ReactComponent as Asiakastietologo }  from '../images/LOGO_SILVER_STANDING_BLACK_FI_433955.svg'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import MailIcon from '@mui/icons-material/Mail'
import { styled } from '@mui/material/styles'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { ReactComponent as Yrittajalogo } from '../images/jasenyritys_23.svg'
import { ReactComponent as LKlogo } from '../images/LK_valkoinen_rgb_1.svg'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { COLORS } from '../values/colors'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

const Footer = () => {
  const [expanded, setExpanded] = React.useState(false)


  const handleExpandClick = () => {
    setExpanded(!expanded)

  }
  return (
    <Box className='boxit' sx={{ overflow:'hidden', margin:'auto' }} role='navigation' aria-label='footer'>

      <Stack direction={{ xs:'column', md:'row' }} gap={{ xs: 5,md:10,lg:20 }} alignItems={'center'} justifyContent={'center'}>
        <Link reloadDocument to={'/'} aria-label='Linkki SapAir Oy etusivulle'  onClick={() => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'instant',
          })
        }}><Box sx={{ padding:{ xs:2, lg:10 } }} >

            <SAlogo style={{ width:'200px' }}/>
          </Box></Link>
        <Stack direction={{ xs:'column',sm:'row', md:'column' }} gap={5} >
          <Link reloadDocument to={'/meista'} style={{ textDecoration:'none' }} aria-describedby='Meista' onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: 'instant',
            })
          }}>
            <Typography id='Meista'>
                Meistä
            </Typography>
          </Link>

          <Link reloadDocument to={'/meista'} style={{ textDecoration:'none' }} aria-describedby='Referenssit' onClick={() => {
            window.scroll({
              top: 120,
              left: 0,
              behavior: 'instant',
            })
          }}>
            <Typography id='Referenssit'>
            Referenssit
            </Typography>
          </Link>
          <Link reloadDocument to={'/yhteystiedot'} style={{ textDecoration:'none' }} aria-describedby='Yhteystiedot' onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: 'instant',
            })
          }}>
            <Typography id='Yhteystiedot'>
                Yhteystiedot
            </Typography>
          </Link>
        </Stack>
        <Stack direction={{ xs:'column',sm:'row', md:'column' }} gap={5}>
          <Link reloadDocument to={'/palvelut'} style={{ textDecoration:'none' }} aria-describedby='Palvelut' onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: 'instant',
            })
          }}>
            <Typography  sx={{ width:{ xs:89, sm:'inherit' } }} id='Palvelut'>
                Palvelut
            </Typography>
          </Link>

          <Link reloadDocument to={'yhteystiedot'} style={{ textDecoration:'none' }} aria-describedby='Laskutus' onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: 'instant',
            })
          }}>
            <Typography id='Laskutus' >
                Laskutus
            </Typography>
          </Link>
        </Stack>
        <Stack direction={{ xs:'column',sm:'row', md:'column' }} gap={5}>
          <Box sx={{ width:'150px' }}>
            <Yrittajalogo style={{ width:'100%', height:'auto' }}/>
          </Box>
          <Box sx={{ width:'150px' }}>

            <LKlogo alt="Luotettava kumppani-logo" style={{ width:'100%', height:'auto' }}/>
          </Box>  <Asiakastietologo style={{ width:'150px' }}/>
        </Stack>



      </Stack>


      <Stack direction={{ xs:'column', sm:'row' }} sx={{ alignItems:'center', justifyContent:'center', gap:2, p:2 }} aria-hidden="false">
        <a href="tel:0406772400" > <Stack direction={'row'} gap={1}>
          <PhoneInTalkIcon/><Typography >
                040 677 24 00
          </Typography>
        </Stack></a>
        <a href="mailto:info@sapair.fi &subject=Tarjouspyyntö SapAir Oy"> <Stack direction={'row'} gap={1} >
          <MailIcon/>
          <Typography >
                info@sapair.fi
          </Typography>
        </Stack></a>
      </Stack>

      <Box  sx={{ textAlign:'center', paddingTop:2, cursor:'pointer' }} >
        <a href='https://www.linkedin.com/company/insin%C3%B6%C3%B6ritoimisto-sapair-oy/' tabIndex="0" aria-describedby="new-window-Linkedin" aria-label="Linkedin" target="_blank" rel="noreferrer"><LinkedInIcon fontSize='large'  />
        </a>
      </Box>

      <Stack direction={{ xs: 'column', sm: 'row' }} gap={2} sx={{ textAlign:'center', paddingTop:2, alignItems:'center', justifyContent:'center' }} >
        <Stack direction={'row' } >

          <Typography sx={{ margin:'auto' }}>
            Tietoa sivustosta
          </Typography>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"

          >
            <ExpandMoreIcon sx={{ color:COLORS.white }}/>
          </ExpandMore>

          <Collapse in={expanded} timeout="auto" unmountOnExit aria-hidden="false">
            <Stack direction='column' p={1} pt={3} gap={2} sx={{ alignItems:'flex-start',justifyContent:'flex-start' }}>
              <Typography sx={{ pr:1 }}>
            Sivustolla ei käytetä evästeitä eikä kerätä tietoja käyttäjistä.
              </Typography>
              <Stack direction={{ xs:'column', md:'row' }}>
                <Typography sx={{ pr:1 }}>
                  Sivuston suunnitellut ja luonut
                </Typography>
                <Stack direction={'row'} sx={{ justifyContent:'center' }}>
                  <Typography variant='h6' sx={{ pr:1 }}>
                    Irina Tatti
                  </Typography>
                  <a href='https://www.linkedin.com/in/irina-tatti/' aria-describedby="new-window-Linkedin" aria-label="Linkedin" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
                </Stack>
              </Stack>
              <Typography fontSize={'small'}>
                Kuvat: Adobe Stock
              </Typography>
            </Stack>
          </Collapse>
        </Stack>
      </Stack>
      <Typography sx={{ textAlign:'center', paddingTop:5 }}>
    SapAir Oy | Y-tunnus: 3245203-6 | Helmikuja 3, 21310 Vahto
      </Typography>
    </Box>
  )
}

export default Footer