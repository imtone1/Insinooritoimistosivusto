import * as React from 'react';
import {Box, Stack, Stepper, Step, StepLabel, Button, StepContent, Typography, Paper} from '@mui/material';

import finish from '../images/finishflag.png'
import Polkuitem from './Polkuitem';
import meeting from '../images/communication_employee_conference_conversation_meeting_discussion_icon.png'
import doc from '../images/editdocument.png'
import geardoc from '../images/doc.png'
import building from '../images/building.png'
import gearapp from '../images/mobile-development.png'
import { styled } from '@mui/material/styles';
import { lightGreen } from '@mui/material/colors';
import Paaotsikko from '../otsikot/Paaotsikko';
import {COLORS} from '../values/colors'

export default function Palvelupolkusteps() {

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(lightGreen[300]),
    backgroundColor: lightGreen[300],
    '&:hover': {
      backgroundColor: lightGreen[500],
    },
  }));
  
  const ColorButtonBack = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(lightGreen[500]),
    
    '&:hover': {
      backgroundColor: lightGreen[50],
    },
  }));

  return (
    <Box className="boxit" sx={{backgroundColor:COLORS.grey}}  >
        <Box sx={{ maxWidth: 800 , margin:'auto'}}>
          <Paaotsikko otsikko={'Palvelupolku'} teksti={'Palvelupolkumme on suunniteltu niin, että asiakkaan tavoite pysyy aina kaikille kirkkaana mielessä.'}/>
          <Stepper activeStep={activeStep} orientation="vertical" completed={true.toString()} sx={{paddingLeft:2}}>
        
              <Step>
                <StepLabel
               >
                  Projektipalaveri
                </StepLabel>
                <StepContent>
                  <Polkuitem kuva={meeting} numero={'1.'} otsikko1={'Projekti'} otsikko2={'palaveri'} teksti={'Aloitamme aina projektipalaverilla. Istumme alas asiakkaan kanssa ja kuuntelemme tarkasti heidän ajatuksiaan käyttötarkoituksesta rakennukselle. Haluamme ymmärtää, millaisia tavoitteita heillä on ja mitä he haluavat saavuttaa.'}/>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <ColorButton
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                         Jatka
                      </ColorButton>
                      <ColorButtonBack
                        disabled={true}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Takaisin
                      </ColorButtonBack>
                    </div>
                  </Box>
                </StepContent>
              </Step>
              <Step>
                <StepLabel
               >
                  Luonnossuunnitelma
                </StepLabel>
                <StepContent>
                <Polkuitem kuva={doc} numero={'2.'} otsikko1={'Luonnos'} otsikko2={'suunnitelma'} teksti={'Projektipalaverin pohjalta laadimme luonnossuunnitelmia, jotka esittelemme asiakkaalle. Tämä vaihe on erittäin tärkeä, koska haluamme varmistaa, että suunnitelmat vastaavat asiakkaan toiveita ja tarpeita. Keräämme palautetta ja kuuntelemme huolellisesti, jos heillä on muutostoiveita.'}/>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <ColorButton
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                         Jatka
                      </ColorButton>
                      <ColorButtonBack
                        disabled={false}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Takaisin
                      </ColorButtonBack>
                    </div>
                  </Box>
                </StepContent>
              </Step>
              <Step>
                <StepLabel
               >
                  Totetutussuunnitelma
                </StepLabel>
                <StepContent>
                <Polkuitem kuva={geardoc} numero={'3.'} otsikko1={'Toteutus'}  otsikko2={'suunnitelma'} teksti={'Kun rakennusvalvonta on laittanut leimat suunnitelmiin, voidaan aloittaa työt. On muistettava, että ennen töiden aloitusta, kun kyseessä on rakennuslupa, LVI-töille on oltava KVV/IV-työnjohtaja. Tarjoamme tämänkin palvelun.'}/>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <ColorButton
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                         Jatka
                      </ColorButton>
                      <ColorButtonBack
                        disabled={false}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                       Takaisin
                      </ColorButtonBack>
                    </div>
                  </Box>
                </StepContent>
              </Step>
              <Step>
                <StepLabel
                >
                  Rakennusvalvonta
                </StepLabel>
                <StepContent>
                <Polkuitem kuva={building} numero={'4.'} otsikko1={'Rakennus'} otsikko2={'valvonta'}
          teksti={'Kun rakennusvalvonta on laittanut leimat suunnitelmiin, voidaan aloittaa työt. On muistettava, että ennen töiden aloitusta, kun kyseessä on rakennuslupa, LVI-töille on oltava KVV/IV-työnjohtaja. Tarjoamme tämänkin palvelun.'}/>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <ColorButton
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                         Jatka
                      </ColorButton>
                      <ColorButtonBack
                        disabled={false}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Takaisin
                      </ColorButtonBack>
                    </div>
                  </Box>
                </StepContent>
              </Step>
              <Step>
                <StepLabel
                >
                  Työ etenee
                </StepLabel>
                <StepContent>
                <Polkuitem kuva={gearapp} numero={'5.'} otsikko1={'Työ etenee'} otsikko2={""} teksti={'Työn sujuvoimisesta raportoidaan asiakkaan toiveen mukaisesti sähköpostitse ja/tai ohjelmiston kautta. Ohjelmiston hyvänä puolena on, että kaikki dokumentaatio säilyy yhdessä paikassa eikä ole huolta, että jokin tärkeä dokumentti häviää sähköpostitulvaan.  '}/>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <ColorButton
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                         Jatka
                      </ColorButton>
                      <ColorButtonBack
                        disabled={false}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                       Takaisin
                      </ColorButtonBack>
                    </div>
                  </Box>
                </StepContent>
              </Step>
          </Stepper>
          {activeStep === 5 && (
            <Paper square elevation={0} sx={{ p: 3 ,backgroundColor:COLORS.grey}}>
                 <Stack component={'div'} direction={{xs:'column-reverse', md:'row'}} sx={{width:'80%', gap:3 , padding:3, justifyContent:'center', alignItems:'center'}} >
        
            <Box sx={{width:{xs:'80%',sm:'50%',md:'140%'}, marginRight:2}}>
        <img src={finish} alt="finish" width={'100%'} height={'auto'} />
        </Box>
        
        <Stack direction={'column'} >
        
        <Typography variant='h5' sx={{ fontWeight:'600' , pb:'20px' }}>
        Työ valmis
        </Typography>
        <Typography>
        Suunnitelmat toimitetaan 2D/3D suunnitelmina modernilla mallinnussuunnitelluohjelmalla tehtynä. 3D:n etuna on tarkempi suunnitelma, jossa esimerkiksi törmäilyt on helpompi minimoida ja materiaalilaskenta on tarkka. Kun suunnitelmat on tehty 3D:na asennukset on helppo tehdä jopa rakentajan itse, josta tulee säästöjä.
        </Typography>
        </Stack>
           
        </Stack>
              <ColorButtonBack onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Palaa alkuun
              </ColorButtonBack>
            </Paper>
          )}
        </Box>
    </Box>
  );
}