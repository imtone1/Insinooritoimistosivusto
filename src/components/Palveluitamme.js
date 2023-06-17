import React, {useState} from 'react'
import { Box, Stack, Typography} from '@mui/material'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

import { COLORS } from '../values/colors'
import BasicModal from './BasicModal';
import Talokuva from './Talokuva';
import Paaotsikko from '../otsikot/Paaotsikko';
import { Link } from 'react-router-dom';

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

      <Paaotsikko otsikko={'Palveluitamme'} teksti={'Olemme pieni ja ketterä suunnittelutoimisto, jossa asiointi on sujuvaa ja nopeaa. Palvelemme asiakkaita niin tavanomaisissa, kuin vaativissakin projekteissa.'} />
  
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
                Meidän insinööritoimistossamme panostamme laadukkaaseen ja asiakaslähtöiseen LVI-suunnitteluun, joka optimoi energiankulutuksen, parantaa sisäilman laatua ja takaa kustannustehokkaan toiminnan.
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
                Tarjoamme projektinjohto- ja rakennuttamistehtäviä, jotka toteutamme hankkeen tarpeiden mukaisesti. Meidän tavoitteenamme on tehdä rakennuttamishanke sinulle mahdollisimman vaivattomaksi vahvalla ammattitaidollamme.
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
                Tilaamalla meidän KVV/IV vastaavan työnjohtajan palvelut saat ammattilaiset rinnallasi, joka huolehtii siitä, että kaikki sujuu suunnitelmien mukaisesti ja lopputulos on juuri sellainen kuin odotit. Ota yhteyttä ja säästä itsesi turhilta huolilta ja kustannuksilta.
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

<Box sx={{border:'solid 4px',  p:2, width:'109px', alignItems:'center', display:'block', margin:'auto' ,transform: {sm:'translateY(-50px)'}}}>
<ThemeProvider theme={customTheme}>
<StyledButton>

<Box sx={{border:'solid 4px', p:2, width:'109px', backgroundColor: COLORS.vihrea,  margin:'auto'}}>
<Link to={'/palvelut'} onClick={() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }}>
<Typography variant='body2'sx={{backgroundColor: COLORS.vihrea}} >Lisää palveluita</Typography>
</Link>
</Box>

</StyledButton>
</ThemeProvider>
</Box>
<Talokuva/>
    <BasicModal open={open} setOpen={setOpen} otsikko={"LVI-suunnittelu"} text={`LVI-suunnittelu on olennainen osa rakennuksen talotekniikkaa ja keskeinen tekijä sen elinkaaren aikaisen suorituskyvyn ja asumismukavuuden kannalta. Meidän insinööritoimistossamme panostamme laadukkaaseen ja asiakaslähtöiseen LVI-suunnitteluun, joka optimoi energiankulutuksen, parantaa sisäilman laatua ja takaa kustannustehokkaan toiminnan.

Talotekniikan suunnittelussa kiinnitämme erityistä huomiota energiakustannuksiin rakennuksen koko elinkaaren aikana, erityisesti lämmitysjärjestelmissä. Pyrimme suunnittelemaan yksinkertaisia ja toimintavarmoja järjestelmiä, mikä vähentää huollon tarvetta ja parantaa energiatehokkuutta. Suunnitelmiimme sisältyy muun muassa asemapiirustus, ilmanvaihto, vesi- ja viemärijärjestelmät, lämmitys, jäähdytys sekä lämpökaivojen ja lämpöpumppujen mitoitus.

Suosittelemme aloittamaan LVI-suunnittelun jo ennen rakennusluvan hakemista, sillä useilla paikkakunnilla lupa-asiakirjojen liitteenä vaaditaan suunnitelma ulkopuolisesta LVI-tekniikasta. Tämän lisäksi on tärkeää huomioida tarvittavat tilavaraukset laitteille, teknisille tiloille ja pääreiteille jo rakennusprojektin alkuvaiheessa.

Olemme vastuullinen insinööritoimisto, joka huolehtii siitä, että LVI-suunnitelmat täyttävät rakennusvalvontaviranomaisten vaatimukset. Suunnitelmat toteutetaan aina asiakkaan tarpeiden ja toiveiden pohjalta, mutta tuomme myös omat näkemyksemme esiin, jotta lopputulos on toimiva ja energiatehokas.

Hyödynnämme suunnittelussamme tietomallinnusta (BIM, Building Information Model), joka mahdollistaa rakennuskohteen kolmiulotteisen digitaalisen esittämisen. Tietomallinnus tehostaa LVI-suunnitteluprosessia ja parantaa suunnittelun kustannustehokkuutta. Se mahdollistaa myös jatkuvan päivityksen työmaalta saatujen tietojen perusteella, jolloin asiakkaalle voidaan luovuttaa ajantasainen ja täysin toteutusta vastaava tietomalli rakennuksen valmistuttua.

Sisältyy:

• Vesi- ja viemäri-, ilmanvaihto- ja lämmitys/jäähdytys suunnitelmat



• Rakennusautomaatiosuunnittelu



• 2D- ja 3D-suunnittelu

• 3D-suunnittelu ja tietomallinnus YTV2012



• Lattialämmityssuunnittelu



• Digitaalinen projektikansio 

• Tuotetiedot- ja käyttöohjeet

• CE-merkinnät ja hyväksynnät

.`}/>

    <BasicModal open={openProjekti} setOpen={setOpenProjekti} otsikko={"Projektijohto- ja valvontatehtävät, esim. maalämpö"} text={`Tarjoamme projektinjohto- ja rakennuttamistehtäviä, jotka toteutamme hankkeen tarpeiden mukaisesti. Näihin tehtäviin kuuluvat muun muassa hankkeen selvitystyöt, aikatauluttaminen, suunnittelijoiden ja urakoitsijoiden kilpailuttaminen ja valinta, suunnittelun ohjaus ja valvonta, tarjouspyyntöasiakirjojen laadinta, kustannusvertailu, sopimusten laadinta, valvonta sekä vastaanotto ja käyttöönoton ohjaaminen. Yksi tällainen esimerkki voi olla maalämpöjärjestelmän suunnittelu. Maalämpöjärjestelmä on ratkaisu, joka tarjoaa pitkäaikaista hyötyä ja säästöjä. Maalämpö tulee ajan myötä huomattavasti edullisemmaksi kuin esimerkiksi öljylämmitys, sähkölämmitys tai kaukolämpö. Kun aiempi lämmitysmuoto vaihdetaan maalämpöön, ovat vuosittaiset säästöt lämmityskuluissa noin 50-70 %.

Tarjoamme konsulttipalvelua, jossa ammattilaisemme vetävät hanketta puolestasi. Me tiedämme, että maalämpöprojekti koostuu monista eri osista ja vaatii huolellista suunnittelua. Siksi lähtökohtamme on nykyisen lämmitysjärjestelmäsi kartoitus ja tulevien remonttien huomioiminen, jotta maalämpöjärjestelmäsi toimii tehokkaasti myös tulevaisuudessa.

Meidän tavoitteenamme on tehdä maalämpöjärjestelmän hankinta sinulle mahdollisimman vaivattomaksi. Hoidamme puolestasi urakka-asiakirjojen laadinnan ja kilpailutamme toimijat, jotta sinulle saadaan vertailukelpoisia tarjouksia. Meillä on vahva osaaminen LVI-tekniikasta ja maalämpöjärjestelmistä. Olemme avuksesi koko rakennuttamisprosessin ajan, oli kyseessä sitten pieni tai suuri hanke. Rakennuttamisesta meillä on vankka kokemus, niin pienistä alle 30kW kohteista kuin isoista aina 270 kW saakka.

Ota askel kohti kestävää ja tehokasta lämmitysratkaisua. Valitsemalla meidät kumppaniksesi saat ammattitaitoisen ja kokonaisvaltaisen palvelun maalämpöjärjestelmän hankkimiseen. Tarjoamme sinulle ratkaisun, joka tuo säästöjä ja mukavuutta elämääsi. Ota yhteyttä ja anna meidän auttaa sinua maalämpöjärjestelmän hankinnassa.

`}/>


<BasicModal open={openKVV} setOpen={setOpenKVV} otsikko={"KVV/IV Työnjohto"} text={`KVV- ja IV- vastaava työnjohtaja toimii rakennuttajan edunvalvojana varmistaen, että suunnitelmat ja määräykset toteutetaan työmaalla asianmukaisesti. Hänen tehtävänsä on valvoa työvaiheiden sujumista, laadun varmistamista ja työn suorittamista oikein. KVV- ja IV- vastaava työnjohtaja ottaa vastuun töistä ja pitää huolen siitä, että kaikki vesi-, viemäri- ja ilmanvaihtotyöt toteutetaan turvallisesti, terveellisesti ja viranomaismääräysten mukaisesti.
Hankkimalla työnjohtajan palvelut jo projektin alkuvaiheessa varmistat, että työmaasi etenee sujuvasti, suunnitelmat toteutuvat täydellisesti ja kaikki viranomaismääräykset ovat täytetty. Työnjohtajamme pystyy tarjoamaan arvokkaita neuvoja ja ohjausta, jotka auttavat sinua tekemään oikeita päätöksiä ja välttämään mahdolliset sudenkuopat, joita rakennusprosessi saattaa sisältää. Se puolestaan auttaa sinua välttämään mahdolliset sudenkuopat ja ylimääräiset kustannukset myöhemmin.
Varmista, että sinulla on ammattilainen rinnallasi, joka huolehtii siitä, että kaikki sujuu suunnitelmien mukaisesti ja lopputulos on juuri sellainen kuin odotit. Ota yhteyttä ja säästä itsesi turhilta huolilta ja kustannuksilta.
KVV- ja IV- vastaava työnjohtajamme pätevyys on erityisvaativa.
Toimeksiannoissamme noudatamme konsulttialan yleisiä sopimusehtoja KSE 2013. `}/>
    </Box>
  )
}

export default Palveluitamme