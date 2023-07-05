import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Stack, Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material'
import { Modal, ModalDialog, ModalClose, ModalOverflow } from '@mui/joy'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import RoofingIcon from '@mui/icons-material/Roofing'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { COLORS } from '../values/colors'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import kaksiD from '../images/Dokumentaatio.jpg'
import kolmeD from '../images/Dokumentaatio3D.jpg'
import FullImage from './Fullimage'
import Paaotsikko from '../otsikot/Paaotsikko'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'


const Palvelutcard = () => {
  const [open, setopen] = useState(false)
  const [openProjekti, setOpenProjekti] = useState(false)
  const [openKVV, setOpenKVV] = useState(false)
  const handleClose = () => setopen(false)
  const handleCloseProjekti = () => setOpenProjekti(false)
  const handleOpenProjekti = () => setOpenProjekti(true)
  const handleOpenKVV = () => setOpenKVV(true)
  const handleCloseKVV = () => setOpenKVV(false)

  // Accordions
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

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
  })



  const StyledButton = styled(Box)`
    ${({ theme }) => `
    cursor: pointer;
    background-color: ${theme.palette.primary.main};
    transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  })};
    &:hover {
    
      transform: scale(1.03) translateX(20px);
    }
    `}
  `

  return (
    <Box  sx={{ backgroundColor:COLORS.grey, position:'relative', paddingBottom:4 }}>
      <Box sx={{ maxWidth: 1200 , margin:'auto' }}>
        <Paaotsikko otsikko={'Palveluitamme'} teksti={'Olemme asiakaslähtöinen ja ammattitaitoinen suunnittelutoimisto, jossa asiointi on sujuvaa ja nopeaa. Tarjoamme kattavat LVIA-suunnittelu- ja konsultointipalvelut. Palvelemme asiakkaita niin tavanomaisissa, kuin vaativissakin projekteissa.'} />
        <Stack sx={{ justifyContent:'center', alignItems:'center', display:'flex', gap:{ xs:0,md:9 }, backgroundColor:COLORS.grey }} direction={{ xs:'column', md:'row' }}>
          <div className='palvelutcontainer'>
            <div className='palvelutbox'>
              <div className='palvelutcontent'>


                {/* <div className='palveluticon'><GradeIcon /></div> */}
                <div className='palveluttext'>
                  <Typography variant='h4' sx={{ fontWeight:600, marginBottom:2, height:120 }}>LVIA-suunnittelu</Typography>
                  <Typography variant='body1' sx={{ textAlign:'left', height:200, paddingLeft:2 }}>Panostamme laadukkaaseen ja asiakaslähtöiseen LVI-suunnitteluun, joka optimoi kohteen energiankulutuksen, parantaa sen sisäilman laatua ja takaa kustannustehokkaan toiminnan.</Typography>
                  <button onClick={() => setopen(true)}  onKeyUp={() => setopen(true)} tabIndex='0'
                    className='palveluticon' type='button'>Lue lisää</button>
                </div>

              </div></div></div>
          <div className='palvelutcontainer'>
            <div className='palvelutbox'>
              <div className='palvelutcontent'>

                <div className='palveluttext'>
                  <Typography variant='h4' sx={{ fontWeight:600, marginBottom:2, height:120 }}>
                        Projektijohto- ja valvontatehtävät</Typography>
                  <Typography variant='body1' sx={{  textAlign:'left', height:200 , paddingLeft:2 }}>

                        Otamme vastaan projektinjohto- ja rakennuttamistehtäviä, jotka toteutamme hankkeen tarpeiden mukaisesti. Meidän tavoitteenamme on tehdä rakennuttamishanke sinulle mahdollisimman vaivattomaksi vahvalla ammattitaidollamme.</Typography>
                  <button className='palveluticon' onClick={handleOpenProjekti} onKeyUp={handleOpenProjekti}  type='button' tabIndex='0'>Lue lisää</button>
                </div></div></div></div>
          <div className='palvelutcontainer'>
            <div className='palvelutbox'>
              <div className='palvelutcontent'>
                {/* <div className='palveluticon'><GradeIcon /></div> */}
                <div className='palveluttext'>
                  <Typography variant='h4' sx={{ fontWeight:600, marginBottom:2 , height:120 }}>
                            KVV-/IV-työnjohtajan palvelut</Typography>
                  <Typography variant='body1' sx={{ textAlign:'left', height:200 , paddingLeft:2 }}>
                            Tilaamalla meiltä KVV-/IVtyönjohtajan palvelut saat ammattilaiset rinnallasi, jotka huolehtivat siitä, että kaikki sujuu suunnitelmien mukaisesti ja lopputulos on juuri sellainen kuin odotit. Ota yhteyttä ja säästä itsesi turhilta huolilta ja kustannuksilta.</Typography>
                  <button className='palveluticon' onClick={handleOpenKVV} onKeyUp={handleOpenKVV} type='button' tabIndex='0'>Lue lisää</button>
                </div></div></div></div></Stack>

        <Box >

          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ backgroundColor:COLORS.grey }} elevation={0}>

            <Box sx={{  width:'180px', alignItems:'center', display:'block', margin:'auto', marginTop:2 }}>

              <Box sx={{ boxShadow:'0 0 0 4px #0D0D0D, 0 0 0 6px #DCE2F2', borderRadius:1,  width:'180px', backgroundColor:COLORS.grey,  margin:'auto' }}>

                <AccordionSummary
                  expandIcon={<ExpandMoreIcon/>}
                  aria-controls="lisaapalveluita-content"
                  id="lisaapalveluita-header"

                >


                  <Typography sx={{ fontWeight:700 }} >
              Lisää palveluita
                  </Typography>
                </AccordionSummary>

              </Box>


            </Box>

            <AccordionDetails >
              <Stack direction={'column'} sx={{ alignItems:'center' }}>

                <List dense={true}>

                  <ListItem onClick={() => setopen(true)} role='button' sx={{ cursor:'pointer' }}>
                    <ListItemIcon>
                      <RoofingIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={'LVIA-suunnittelu'}

                    />
                    <ListItemIcon>
                      <ArrowForwardIosIcon />
                    </ListItemIcon>
                  </ListItem>

                  <ListItem  onClick={handleOpenKVV} role='button' sx={{ cursor:'pointer' }}>
                    <ListItemIcon>
                      <RoofingIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={'KVV-/IV- työnjohtajapalvelut'}
                      secondary={'tavanomaisista eritysvaativiin kohteisiin'}
                    />
                    <ListItemIcon>
                      <ArrowForwardIosIcon />
                    </ListItemIcon>

                  </ListItem>

                  <ListItem onClick={handleOpenProjekti} role='button' sx={{ cursor:'pointer' }}>
                    <ListItemIcon>
                      <RoofingIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={'Projektinjohto ja valvontatehtävät'}

                    />
                    <ListItemIcon>
                      <ArrowForwardIosIcon />
                    </ListItemIcon>
                  </ListItem>

                  <ListItem  >
                    <ListItemIcon>
                      <RoofingIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={'Maalämpösuunnittelu, valvonta ja rakennuttaminen'}

                    />
                    <ListItemIcon>

                    </ListItemIcon>
                  </ListItem>

                  <ListItem >
                    <ListItemIcon>
                      <RoofingIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={'Asiantuntijalausunnot'}

                    />

                  </ListItem>

                  <ListItem >
                    <ListItemIcon>
                      <RoofingIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={'Selvitykset ja tarkastukset'}

                    />

                  </ListItem>

                  <ListItem >
                    <ListItemIcon>
                      <RoofingIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={'Huoneistoremonttivalvonta'}

                    />

                  </ListItem>

                  <ListItem >
                    <ListItemIcon>
                      <RoofingIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={'Asiantuntijalausunnot'}

                    />

                  </ListItem>

                  <ListItem  >
                    <ListItemIcon>
                      <RoofingIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={'Konsultointipalvelut'}

                    />

                  </ListItem>

                </List>
                <ThemeProvider theme={customTheme}>
                  <StyledButton>
                    <Link to={'/palvelut'} onClick={() => {
                      window.scroll({
                        top: 120,
                        left: 0,
                        behavior: 'instant',
                      })
                    }} style={{ alignSelf:'center', textDecoration:'none', justifyContent:'space-between', padding:8, paddingTop:20 }}>
                      <Stack direction={'row'}>
                        <Typography sx={{ fontWeight:700, boxShadow:`5px 5px 5px rgba(0,0,0,0.1), 15px 15px 15px rgba(0,0,0,0.1),
   20px 10px 20px rgba(0,0,0,0.1),
   50px 50px 80px rgba(0,0,0,0.25),
   inset 3px 3px 2px #fff`, padding:2, paddingRight:5, borderRadius:4, backgroundColor: COLORS.liila }}>Palveluihin</Typography>
                        <ArrowForwardIosIcon style={{ transform:'translateX(-38px) translateY(17px)' }} /><ArrowForwardIosIcon style={{ transform:'translateX(-55px) translateY(17px)' }}/>
                      </Stack>
                    </Link>

                  </StyledButton>
                </ThemeProvider>
              </Stack>



            </AccordionDetails>
          </Accordion>

        </Box>





        <Modal
          open={open}

          onClose={handleClose}
          //     onClick={handleClose}
          //    onKeyUp={handleClose}
          aria-labelledby="modal-dialog-overflowLVI-suunnittelu"

          aria-describedby="modal-modal-descriptionLVI-suunnittelu"

        >
          <ModalOverflow>
            <ModalDialog

              layout="center"
              size="lg"
              variant="soft"
            >
              <ModalClose />

              <Box sx={{ maxWidth:900 }}>
                <Typography id="modal-modal-titleLVI-suunnittelu" variant="h5">
              LVI-suunnittelu
                </Typography>
                <Box id="modal-dialog-overflowLVI-suunnittelu" sx={{ mt: 2 }}>
                  <Stack sx={{ gap:2 }}>
                    <Typography>
                  LVI-suunnittelu on olennainen osa rakennuksen talotekniikkaa ja keskeinen tekijä sen elinkaaren aikaisen suorituskyvyn ja asumismukavuuden kannalta. Meidän insinööritoimistossamme panostamme laadukkaaseen ja asiakaslähtöiseen LVI-suunnitteluun, joka optimoi energiankulutuksen, parantaa sisäilman laatua ja takaa kustannustehokkaan toiminnan.
                    </Typography>
                    <Typography>
                  Talotekniikan suunnittelussa kiinnitämme erityistä huomiota energiakustannuksiin rakennuksen koko elinkaaren aikana, erityisesti lämmitysjärjestelmissä. Pyrimme suunnittelemaan yksinkertaisia ja toimintavarmoja järjestelmiä, mikä vähentää huollon tarvetta ja parantaa energiatehokkuutta.
                    </Typography>
                    <Typography>Suunnitelmiimme sisältyy mm.</Typography>
                  </Stack>
                  <Stack direction={{ xs:'column', md:'row' }} sx={{ gap:2 }}>
                    <List dense={true}>

                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleOutlineIcon/>
                        </ListItemIcon>
                        <ListItemText
                          primary="Asemapiirustus"

                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleOutlineIcon/>
                        </ListItemIcon>
                        <ListItemText
                          primary="Ilmanvaihto"

                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleOutlineIcon/>
                        </ListItemIcon>
                        <ListItemText
                          primary="Vesi- ja viemärijärjestelmät"

                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleOutlineIcon/>
                        </ListItemIcon>
                        <ListItemText
                          primary="Lämmitys"

                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleOutlineIcon/>
                        </ListItemIcon>
                        <ListItemText
                          primary="Jäähdytys"

                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleOutlineIcon/>
                        </ListItemIcon>
                        <ListItemText
                          primary="Lämpökaivojen ja lämpöpumppujen mitoitus"

                        />
                      </ListItem>
                    </List>
                    <Stack>
                      {/* <img src={kaksiD} alt="talo_piirustus" width={'300'} height={'auto'} /> */}
                      <FullImage imagePath={kaksiD} alt="2D suunnitelma" width={'300'} height={'auto'}  />
                      <Typography>2D suunnitelma</Typography>
                    </Stack>
                    <Stack>
                      {/* <img src={kolmeD} alt="talo_piirustus" width={'300'} height={'auto'} /> */}
                      <FullImage imagePath={kolmeD} alt="3D suunnitelma"   width={'300'} height={'auto'} />
                      <Typography>3D suunnitelma</Typography>
                    </Stack>
                  </Stack>
                  <Stack sx={{ gap:2 }}>
                    <Typography>
                  Suosittelemme aloittamaan LVI-suunnittelun jo ennen rakennusluvan hakemista, sillä useilla paikkakunnilla lupa-asiakirjojen liitteenä vaaditaan suunnitelma ulkopuolisesta LVI-tekniikasta. Tämän lisäksi on tärkeää huomioida tarvittavat tilavaraukset laitteille, teknisille tiloille ja pääreiteille jo rakennusprojektin alkuvaiheessa.
                    </Typography>
                    <Typography>
                   Olemme vastuullinen insinööritoimisto, joka huolehtii siitä, että LVI-suunnitelmat täyttävät rakennusvalvontaviranomaisten vaatimukset. Suunnitelmat toteutetaan aina asiakkaan tarpeiden ja toiveiden pohjalta, mutta tuomme myös omat näkemyksemme esiin, jotta lopputulos on toimiva ja energiatehokas.
                    </Typography>
                    <Typography>
                  Hyödynnämme asiakkaan toiveesta suunnittelussamme tietomallinnusta (BIM, Building Information Model), joka mahdollistaa rakennuskohteen kolmiulotteisen digitaalisen esittämisen. Tietomallinnus tehostaa LVI-suunnitteluprosessia ja parantaa suunnittelun kustannustehokkuutta. Se mahdollistaa myös jatkuvan päivityksen työmaalta saatujen tietojen perusteella, jolloin asiakkaalle voidaan luovuttaa ajantasainen ja täysin toteutusta vastaava tietomalli rakennuksen valmistuttua.
                    </Typography>
                  </Stack>
                </Box>
              </Box>



            </ModalDialog>
          </ModalOverflow>
        </Modal>


        <Modal
          open={openProjekti}

          onClose={handleCloseProjekti}
          // onClick={handleCloseProjekti}

          aria-labelledby="modal-dialog-Projektijohto21"

          aria-describedby="modal-modal-descriptionProjektijohto"

        >
          <ModalOverflow>
            <ModalDialog

              layout="center"
              size="lg"
              variant="soft"
            >
              <ModalClose />

              <Box sx={{ maxWidth:900 }}>
                <Typography id="modal-modal-titleProjektijohto" variant="h5">
              Projektijohto- ja valvontatehtävät
                </Typography>
                <Box id="modal-dialog-Projektijohto21" sx={{ mt: 2 }}>
                  <Typography>
                Tarjoamme projektinjohto- ja rakennuttamistehtäviä, jotka toteutamme hankkeen tarpeiden mukaisesti.
                  </Typography>
                  <Typography>Näihin tehtäviin kuuluvat mm.</Typography>
                  <List dense={true}>

                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon/>
                      </ListItemIcon>
                      <ListItemText
                        primary="Hankkeen selvitystyöt"

                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon/>
                      </ListItemIcon>
                      <ListItemText
                        primary="Aikatauluttaminen"

                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon/>
                      </ListItemIcon>
                      <ListItemText
                        primary="Suunnittelijoiden ja urakoitsijoiden kilpailuttaminen ja valinta"

                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon/>
                      </ListItemIcon>
                      <ListItemText
                        primary="Suunnittelun ohjaus ja valvonta"

                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon/>
                      </ListItemIcon>
                      <ListItemText
                        primary="Tarjouspyyntöasiakirjojen laadinta"

                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon/>
                      </ListItemIcon>
                      <ListItemText
                        primary="Kustaannusvertailu"

                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon/>
                      </ListItemIcon>
                      <ListItemText
                        primary="Sopimusen laadinta, valvonta sekä vastaanotto"

                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon/>
                      </ListItemIcon>
                      <ListItemText
                        primary="Käyttöönoton ohjaaminen"

                      />
                    </ListItem>
                  </List>
                  <Stack sx={{ gap:2 }}>
                    <Typography>
                  Yksi tällainen esimerkki voi olla maalämpöjärjestelmän hankinta. Tarjoamme konsulttipalvelua, jossa ammattilaisemme vetävät hanketta puolestasi. Me tiedämme, että maalämpöprojekti koostuu monista eri osista ja vaatii huolellista suunnittelua ja projektijohtoa. Siksi lähtökohtamme on nykyisen lämmitysjärjestelmäsi kartoitus ja tulevien remonttien huomioiminen, jotta maalämpöjärjestelmäsi toimii tehokkaasti myös tulevaisuudessa. Meidän tavoitteenamme on tehdä maalämpöjärjestelmän hankinta sinulle mahdollisimman vaivattomaksi. Hoidamme puolestasi urakka-asiakirjojen laadinnan ja kilpailutamme toimijat, jotta sinulle saadaan vertailukelpoisia tarjouksia.
                    </Typography>
                    <Typography>
                  Meillä on vahva osaaminen LVI-tekniikasta ja maalämpöjärjestelmistä. Olemme avuksesi koko rakennuttamisprosessin ajan, oli kyseessä sitten pieni tai suuri hanke. Rakennuttamisesta meillä on vankka kokemus, niin pienistä alle 30kW kohteista kuin isoista aina 270 kW saakka. Ota askel kohti kestävää ja tehokasta lämmitysratkaisua. Valitsemalla meidät kumppaniksesi saat ammattitaitoisen ja kokonaisvaltaisen palvelun maalämpöjärjestelmän hankkimiseen. Tarjoamme sinulle ratkaisun, joka tuo säästöjä ja mukavuutta elämääsi. Ota yhteyttä ja anna meidän auttaa sinua maalämpöjärjestelmän hankinnassa.
                    </Typography>
                  </Stack>
                </Box>
              </Box>



            </ModalDialog>
          </ModalOverflow>
        </Modal>



        <Modal
          open={openKVV}

          onClose={handleCloseKVV}
          // onClick={handleCloseKVV}

          aria-labelledby="modal-dialog-KVV1"

          aria-describedby="modal-modal-KVV2"

        >
          <ModalOverflow>
            <ModalDialog

              layout="center"
              size="lg"
              variant="soft"
            >
              <ModalClose />

              <Box sx={{ maxWidth:900 }}>
                <Typography id="modal-modal-title21" variant="h5" component="h2">
              KVV/IV Työnjohto
                </Typography>
                <Box id="modal-dialog-KVV1" sx={{ mt: 2 }}>
                  <Stack sx={{ gap:2 }}>
                    <Typography>
                  KVV- ja IV- työnjohtaja toimii rakennuttajan edunvalvojana varmistaen, että suunnitelmat ja määräykset toteutetaan työmaalla asianmukaisesti.

                    </Typography>
                    <Typography>
                  KVV- ja IV- työnjohtajamme pätevyys on erityisvaativa. Toimeksiannoissamme noudatamme konsulttialan yleisiä sopimusehtoja KSE 2013.
                    </Typography>

                    <Typography>KVV- ja IV- työnjohtajan tehtävä on:</Typography>
                  </Stack>
                  <List dense={true}>

                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon/>
                      </ListItemIcon>
                      <ListItemText
                        primary="Valvoa työvaiheiden sujumista"

                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon/>
                      </ListItemIcon>
                      <ListItemText
                        primary="Laadun varmistamista"

                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon/>
                      </ListItemIcon>
                      <ListItemText
                        primary="Työn suorittamista oikein"

                      />
                    </ListItem>

                  </List>
                  <Stack sx={{ gap:2 }}>
                    <Typography>
                  KVV- ja IV- vastaava työnjohtaja ottaa vastuun töistä ja pitää huolen siitä, että kaikki vesi-, viemäri- ja ilmanvaihtotyöt toteutetaan turvallisesti, terveellisesti ja viranomaismääräysten mukaisesti.
                    </Typography>
                    <Typography>
                  Hankkimalla työnjohtajan palvelut jo projektin alkuvaiheessa varmistat, että työmaasi etenee sujuvasti, suunnitelmat toteutuvat sovitusti ja kaikki viranomaismääräykset ovat täytetty. Työnjohtajamme pystyy tarjoamaan arvokkaita neuvoja ja ohjausta, jotka auttavat sinua tekemään oikeita päätöksiä ja välttämään mahdolliset sudenkuopat, joita rakennusprosessi saattaa sisältää. Se puolestaan auttaa sinua välttämään mahdolliset sudenkuopat ja ylimääräiset kustannukset myöhemmin.
                    </Typography>
                    <Typography>
                  Varmista, että sinulla on ammattilainen rinnallasi, joka huolehtii siitä, että kaikki sujuu suunnitelmien mukaisesti ja lopputulos on juuri sellainen kuin odotit. Ota yhteyttä ja säästä itsesi turhilta huolilta ja kustannuksilta.
                    </Typography>
                  </Stack>
                </Box>
              </Box>


            </ModalDialog>
          </ModalOverflow>
        </Modal>

      </Box>
    </Box>
  )
}

export default Palvelutcard