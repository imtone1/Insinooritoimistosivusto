import React, {useState} from 'react'
import { Box, Stack, Typography} from '@mui/material'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

import { COLORS } from '../values/colors'
import BasicModal from './BasicModal';
import Talokuva from './Talokuva';

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

const StyledAvatar = styled(Box)`
  ${({ theme }) => `
  cursor: pointer;
  background-color: ${theme.palette.primary.main};
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    background-color: ${theme.palette.secondary.main};
    transform: scale(1.03);
  }
  `}
`;

const StyledButton = styled(Box)`
  ${({ theme }) => `
  cursor: pointer;
  background-color: ${theme.palette.primary.main};
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    background-color: ${theme.palette.white.main};
    transform: scale(1.03);
  }
  `}
`;

const Palveluitamme = () => {
   const [open, setOpen] = useState(false);
   const [openProjekti, setOpenProjekti] = useState(false);
   const [openKVV, setOpenKVV] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpenProjekti = () => setOpenProjekti(true);
  const handleOpenKVV = () => setOpenKVV(true);
  return (
    <Box className="boxit" sx={{backgroundColor:COLORS.grey, zindex:100, position:'relative'}}>
        <Stack direction={'column'} alignItems={'center'} p={{md:2, xs:1}}>
          
        <Typography variant='h3' sx={{textShadow: '1px 1px rgb(99, 99, 99)', textTransform:'uppercase', fontWeight:'600' , fontSize:'200%', pb:'20px'}}>Palveluitamme</Typography>
        
        <Typography p={{md:3, xs:2}} marginLeft={'2%'} marginRight={'2%'} >
        Rakennuksen käyttö- ja elinkaarikustannukset riippuvat täysin LVI-suunnittelun onnistumisesta.
        </Typography>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="139" height="6" style={{transform:'translateY(40px)'}}>
  <line x1="2" y1="0.5" x2="139" y2="0.5" stroke="black" strokeWidth="6" />
</svg> */}


      
        </Stack>
       <Box sx={{ textAlign:'right',transform:'translateX(-80px) translateY(10px)', }}>
     <svg xmlns="http://www.w3.org/2000/svg" width="240" height="6">
  <line x1="2" y1="0.5" x2="240" y2="0.5" stroke="black" strokeWidth="6"  />
</svg>
</Box> 
      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent={'center'} p={{md:3, xs:2}} marginLeft={'2%'} marginRight={'2%'} >

        {/* <svg width="20%" height="40%" viewBox="0 0 113 336" fill="none" xmlns="http://www.w3.org/2000/svg" >
<path d="M4.604 1.00008L4.00018 332L112 332.197" stroke="black" strokeWidth="6"/>
</svg> */}
<Box sx={{display:{xs:'none', md:'flex',transform:'translateX(-2px)'}}}>
<svg xmlns="http://www.w3.org/2000/svg" width="6" height="350" >
  <line x1="3" y1="0" x2="3" y2="350" stroke="black" strokeWidth="6" />
</svg>
</Box>
<ThemeProvider theme={customTheme}>
<StyledAvatar>

            <Stack direction={'column'}  gap={{xs:2, sm:10}} p={5} minWidth={'27%'} onClick={handleOpen}>
                <Typography variant='h4' fontWeight={600}  >
                    LVIA-suunnittelu
                </Typography>
                <Typography  >
                Rakennuksen käyttö- ja elinkaarikustannukset riippuvat täysin LVI-suunnittelun onnistumisesta.
                </Typography>
            </Stack>
</StyledAvatar>
</ThemeProvider>

<ThemeProvider theme={customTheme}>
<StyledAvatar>

            <Stack direction={'column'} gap={{xs:2, sm:10}} p={5} minWidth={'27%'} onClick={handleOpenProjekti}>
                <Typography variant='h4'  fontWeight={600} >
                Projektijohto- ja valvonta tehtävät
                </Typography>
                <Typography >
                Rakennuksen käyttö- ja elinkaarikustannukset riippuvat täysin LVI-suunnittelun onnistumisesta.
                </Typography>
            </Stack>
            </StyledAvatar>
</ThemeProvider>

<ThemeProvider theme={customTheme}>
<StyledAvatar>
            <Stack direction={'column'} gap={{xs:2, sm:10}} p={5} minWidth={'27%'} onClick={handleOpenKVV}>
                <Typography variant='h4'fontWeight={600} >
                KVV/IV vastaavan työnjohtajan palvelut
                </Typography>
                <Typography >
                Rakennuksen käyttö- ja elinkaarikustannukset riippuvat täysin LVI-suunnittelun onnistumisesta.
                </Typography>
            </Stack>

            </StyledAvatar>
</ThemeProvider>
<Box sx={{display:{xs:'none', md:'flex',transform:'translateX(-20px) translateY(-10px)'}}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="350" >
  <line x1="3" y1="0" x2="3" y2="350" stroke="black" strokeWidth="6"  />
</svg>
        
      </Box>

        </Stack>
        <Box sx={{display:{xs:'none', md:'flex',transform:'translateX(40px) translateY(-20px)'}}}>
           <svg xmlns="http://www.w3.org/2000/svg" width="245" height="6" >
  <line x1="30" y1="0.5" x2="245" y2="0.5" stroke="black" strokeWidth="6"  />
</svg>
</Box>

<Box sx={{border:'solid 4px', p:2, width:'101px', alignItems:'center', display:'block', margin:'auto' ,transform: {sm:'translateY(-50px)'}}}>
<ThemeProvider theme={customTheme}>
<StyledButton>

<Box sx={{border:'solid 4px', p:2, width:'101px',   margin:'auto'}}>
<Typography variant='body2' >Lue lisää</Typography>
</Box>

</StyledButton>
</ThemeProvider>
</Box>
<Talokuva/>
    <BasicModal open={open} setOpen={setOpen} otsikko={"LVI-suunnittelu"} text={"TODO: LVIA-suunnittelusta (mitä on eri työt, mitä sisältyy, miksi valita)  || Lainaus toisesta sivustosta inspiraatioksi:  LVI-suunnittelu on tärkeä osa putkiremonttia ja vaatii talotekniikan erityisosaamista. Huolellinen suunnittelu takaa järjestelmien hyvän toimivuuden, turvallisuuden ja viihtyisyyden. LVI-suunnittelu sisältää yleisesti vesi- ja viemärijärjestelmien suunnittelun. Tämän lisäksi LVI-suunnittelu voi pitää sisällään myös ilmanvaihto- ja lämpöjärjestelmien erikoissuunnittelua.Perinteisten LVI-suunnittelun lisäksi meillä on erikoisosaamista viemäreiden saneeraamisesta sisäpuolisilla menetelmillä, kuten pinnoittamalla tai sukittamalla. Uusien menetelmien suunnittelusta, rakennuttamisesta ja valvonnasta meille on kertynyt usean vuoden kokemus ja referenssikohteita on jo useita kymmeniä."}/>

    <BasicModal open={openProjekti} setOpen={setOpenProjekti} otsikko={"Projektijohto- ja valvontatehtävät"} text={`TODO: (mitä on eri työt, mitä sisältyy, miksi valita). || Lainaus toisesta sivustosta inspiraatioksi: "Hankkeissa toimimme asiakkaittemme edustajana ja asiantuntijana. Hankkeen alkuvaiheesta lähtien projektinjohtaja ohjaa hanketta ammattimaisesti ja johdonmukaisesti. Näin voimme varmistaa, että asiakkaamme saavat parhaat mahdolliset ratkaisut sekä toiminnallisesti, että taloudellisesti.

Projektinjohto- ja rakennuttamistehtävät toteutamme aina hankkeen vaatimassa laajuudessa. Näitä tehtäviä ovat esimerkiksi:

Hankkeen selvitystyöt
Projektin aikatauluttaminen
Suunnittelijoiden ja urakoitsijoiden kilpailuttaminen ja valinta
Suunnittelun ohjaus ja valvonta
Tarjouspyyntöasiakirjojen laadinta
Kustannusvertailu
Sopimusten laadinta
Valvonta
Vastaanotto ja käyttöönoton ohjaaminen"`}/>


<BasicModal open={openKVV} setOpen={setOpenKVV} otsikko={"KVV/IV Työnjohto"} text={`TODO: Sivustollasi (Tässä esim. Turun rakennusvalvonnan pätevyys vaatimukset: KVV- JA IV-TYÖNJOHTAJAN KELPOISUUSVAATIMUKSET    > ensinnäkin ei ehkä kannata lähettää ihmisiä pois sivustosta, he eivät välttämättä sieltä palaa takaisin. Siellä on pitkä lista erilaista, mikä on sinua koskeva, mitä asiakkaan täytyy ymmärtää siitä, voisiko sen suomentaa/lyhentää/kertoa mikä hyöty on minulle asiakkaana) || 
 Tekstiä sivustoltasi:
Rakennuslupa haettaessa tarvitaan KVV ja /tai IV työnjohtaja, riippuen hankkeesta. Uutta rakentaessa tarvitaan molempia.

Työnjohtajan rooli on valvoa, että LVI-työt suoritetaan määräysten mukaisesti sekä teknisesti oikein ohjeita noudattaen.

IV/KVV vastaava työnjohtaja valvoo asiakkaansa etuja sekä ohjeistaa projektin onnistumisessa. 

 

Tässä esim. Turun rakennusvalvonnan pätevyys vaatimukset: KVV- JA IV-TYÖNJOHTAJAN KELPOISUUSVAATIMUKSET 

 

Toimeksiannoissamme noudatamme konsulttialan yleisiä sopimusehtoja KSE 2013. `}/>
    </Box>
  )
}

export default Palveluitamme