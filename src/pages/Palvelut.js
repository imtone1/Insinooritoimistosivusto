import React, { useState } from 'react'
import SEO from '../components/SEO'
import { Helmet } from 'react-helmet-async'
import { Modal, ModalDialog, ModalClose, ModalOverflow } from '@mui/joy'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import { Box, Stack, Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material'
import kaksiD from '../images/Dokumentaatio.jpg'
import kolmeD from '../images/Dokumentaatio3D.jpg'
import FullImage from '../components/Fullimage'
import RoofingIcon from '@mui/icons-material/Roofing'

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import Otayhteyttanappulassa from '../components/Otayhteyttanappulassa'
import Sivuotsikko from '../otsikot/Sivuotsikko'


const Palvelut = () => {
  const [open, setopen] = useState(false)
  const [openProjekti, setOpenProjekti] = useState(false)
  const [openKVV, setOpenKVV] = useState(false)
  const handleClose = () => setopen(false)
  const handleCloseProjekti = () => setOpenProjekti(false)
  const handleOpenProjekti = () => setOpenProjekti(true)
  const handleOpenKVV = () => setOpenKVV(true)
  const handleCloseKVV = () => setOpenKVV(false)

  const schema=
{
  '@context': 'https://schema.org/',
  '@type': 'Service',
  'serviceType': 'Weekly home cleaning',
  'provider': {
    '@type': 'LocalBusiness',
    'name': 'Insinööritoimisto SapAir Oy -LVI-suunnittelu',
  },
  'areaServed': {
    '@type': 'State',
    'name': 'Koko Suomi'
  },
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'LVIA-palvelut',
    'itemListElement': [
      {
        '@type': 'OfferCatalog',
        'name': 'LVIA-suunnittelupalvelut',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'LVIA-suunnittelu'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'KVV- /IV- työnjohtajapalvelut'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Maalämpösuunnittelu, valvonta ja rakennuttaminen'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Asiantuntijalausunnot'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Selvitykset ja tarkastukset'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Huoineistoremonttivalvonta'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Asianuntijalausunnot'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Konsultointipalvelut'
            }
          }
        ]
      },
    ]
  }
}

  const JSONschema = JSON.stringify(schema)

  return (
    <>
      <SEO title={'SapAir Oy - LVI-palvelut'} description={'Tarjoamme laajat LVIA-palvelut. Katso palvelumme ja ota yhteyttä.'}/>
      <Helmet>
        <script type="application/ld+json">{JSONschema}</script>
      </Helmet>
      <Sivuotsikko otsikko={'Palvelut'} alaotsikko={'Tarjoamme laajat LVIA-palvelut'} alaotsikko2={'Ota yhteyttä ja kysy lisää'}/>


      <Stack direction={'column'} sx={{ alignItems:'center' }}>

        <List dense={true}>

          <ListItem onClick={() => setopen(true)} sx={{ cursor:'pointer' }}>
            <ListItemIcon>
              <RoofingIcon />
            </ListItemIcon>
            <ListItemText
              primary={ <Typography variant="h2" sx={{ fontSize:'100%' }}>LVIA-suunnittelu</Typography> }

            />
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
          </ListItem>

          <ListItem  onClick={handleOpenKVV}  sx={{ cursor:'pointer' }}>
            <ListItemIcon>
              <RoofingIcon />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="h2" sx={{ fontSize:'100%' }}>KVV- /IV- työnjohtajapalvelut</Typography> }
              secondary={'tavanomaisista eritysvaativiin kohteisiin'}
            />
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>

          </ListItem>

          <ListItem onClick={handleOpenProjekti} sx={{ cursor:'pointer' }}>
            <ListItemIcon>
              <RoofingIcon />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="h2" sx={{ fontSize:'100%' }}>Projektinjohto- ja valvontatehtävät</Typography>}
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
              primary={ <Typography variant="h2" sx={{ fontSize:'100%' }}>Maalämpösuunnittelu, valvonta ja rakennuttaminen</Typography>}

            />
            <ListItemIcon>
              {/* <ArrowForwardIosIcon /> */}
            </ListItemIcon>
          </ListItem>

          <ListItem >
            <ListItemIcon>
              <RoofingIcon />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="h2" sx={{ fontSize:'100%' }}>Asiantuntijalausunnot</Typography> }

            />

          </ListItem>

          <ListItem >
            <ListItemIcon>
              <RoofingIcon />
            </ListItemIcon>
            <ListItemText
              primary={ <Typography variant="h2" sx={{ fontSize:'100%' }}>Selvitykset ja tarkastukset</Typography>}

            />

          </ListItem>

          <ListItem >
            <ListItemIcon>
              <RoofingIcon />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="h2" sx={{ fontSize:'100%' }}>Huoneistoremonttivalvonta</Typography>}

            />

          </ListItem>

          <ListItem >
            <ListItemIcon>
              <RoofingIcon />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="h2" sx={{ fontSize:'100%' }}>Asiantuntijalausunnot</Typography>}

            />

          </ListItem>

          <ListItem  >
            <ListItemIcon>
              <RoofingIcon />
            </ListItemIcon>
            <ListItemText
              primary={ <Typography variant="h2" sx={{ fontSize:'100%' }}>Konsultointipalvelut</Typography>}

            />

          </ListItem>

        </List>
      </Stack>

      <Otayhteyttanappulassa/>
      <Modal
        open={open}

        onClose={handleClose}


        aria-labelledby="modal-dialog-LVI-suunnittelu"

        aria-describedby="modal-modal-LVI-suunnittelu"
        id='LVI-suunnittelu modal'
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
        id='Projektijohto modal'
        onClose={handleCloseProjekti}


        aria-labelledby="modal-dialog-Projektijohto"

        aria-describedby="modal-modal-Projektijohto"

      >
        <ModalOverflow>
          <ModalDialog

            layout="center"
            size="lg"
            variant="soft"
          >
            <ModalClose />
            <Box sx={{ maxWidth:900 }}>
              <Typography id="modal-modal-title2" variant="h5" component="h2">
          Projektijohto- ja valvontatehtävät
              </Typography>
              <Box id="modal-dialog-Projektijohto" sx={{ mt: 2 }}>
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
                      primary="Aikaatauluttaminen"

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
                      primary="käyttöönoton ohjaaminen"

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
        id='KVV/IV modal'
        onClose={handleCloseKVV}


        aria-labelledby="modal-dialog-KVV"

        aria-describedby="modal-modal-KVV"

      >
        <ModalOverflow>
          <ModalDialog

            layout="center"
            size="lg"
            variant="soft"
          >
            <ModalClose />
            <Box sx={{ maxWidth:900 }}>
              <Typography id="modal-modal-title3" variant="h5" component="h2">
          KVV/IV Työnjohto
              </Typography>
              <Box id="modal-dialog-KVV" sx={{ mt: 2 }}>
                <Typography>
            KVV- ja IV- vastaava työnjohtaja toimii rakennuttajan edunvalvojana varmistaen, että suunnitelmat ja määräykset toteutetaan työmaalla asianmukaisesti.

                </Typography>
                <Typography>

            KVV- ja IV- vastaava työnjohtajamme pätevyys on erityisvaativa. Toimeksiannoissamme noudatamme konsulttialan yleisiä sopimusehtoja KSE 2013.
                </Typography>
                <Typography>KVV- ja IV- vastaava työnjohtajan tehtävä on:</Typography>


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


    </>
  )
}

export default Palvelut