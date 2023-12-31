import * as React from 'react'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { Box, Stack, Typography, Accordion, AccordionDetails, AccordionSummary, List, ListItem, ListItemText, ListItemIcon } from '@mui/material'

import HistoryEduIcon from '@mui/icons-material/HistoryEdu'
import { COLORS } from '../values/colors'
import SchoolIcon from '@mui/icons-material/School'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'


export default function Koulutusaccordion() {
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    < >
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ backgroundColor:COLORS.grey , maxWidth:'92%', marginBottom:1 }} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Stack direction={{ xs:'column', sm:'row' }} sx={{ margin:'auto' }}>
            <SchoolIcon sx={{ justifySelf:'center', alignSelf:'center' }}/>
            <Typography sx={{  p:2, justifySelf:'center', alignSelf:'center' , fontSize:'120%' }}>
            Koulutus
            </Typography>

          </Stack>
        </AccordionSummary>
        <AccordionDetails >




          <Typography>
  Kone- ja tuotantotekniikan insinööri (AMK), suuntautuminen LVI-tekniikkaan, Turun AMK, 2013-2016
          </Typography>


          <Typography >
  Työteknikko, RastorCollege, 2011-2013
          </Typography>



        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}  sx={{ backgroundColor:COLORS.grey, maxWidth:'92%' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"

        >
          <Stack direction={{ xs:'column', sm:'row' }} sx={{ margin:'auto' }}>
            <HistoryEduIcon sx={{ justifySelf:'center', alignSelf:'center' }}/>
            <Typography sx={{ p:2 , justifySelf:'center', alignSelf:'center' , fontSize:'120%' }}> Jatkokoulutus/ Pätevyydet/ Erikoisosaaminen</Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails >

          <Box sx={{ paddingLeft:2 }}>

            <List dense={true}>

              <ListItem>
                <ListItemIcon>
                  <AutoAwesomeIcon sx={{ fontSize:'small' }}/>
                </ListItemIcon>

                <ListItemText
                  primary="Älykkäät ja kestävät kiinteistöjen energiaratkaisut (5 op) YAMK, Metropolia, 2021"

                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AutoAwesomeIcon sx={{ fontSize:'small' }}/>
                </ListItemIcon>

                <ListItemText
                  primary="Kiertotalous (5 op) YAMK, Turun AMK, 2021"

                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AutoAwesomeIcon sx={{ fontSize:'small' }}/>
                </ListItemIcon>

                <ListItemText
                  primary="Poikkeuksellisen vaativat kohteet ja erikoisjärjestelmät (5op) YAMK, Metropolia, 2020"

                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AutoAwesomeIcon sx={{ fontSize:'small' }}/>
                </ListItemIcon>
                <ListItemText
                  primary="Renewable Energy Project Development (5 op) YAMK, Turun AMK, 2020"

                />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <AutoAwesomeIcon sx={{ fontSize:'small' }}/>
                </ListItemIcon>
                <ListItemText
                  primary="Maalämpöratkaisut laitekoulutukset, 2018"

                />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <AutoAwesomeIcon sx={{ fontSize:'small' }}/>
                </ListItemIcon>
                <ListItemText
                  primary="KVV- ja IV työnjohtajakoulutus, TuLVI, 2018"

                />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <AutoAwesomeIcon sx={{ fontSize:'small' }}/>
                </ListItemIcon>
                <ListItemText
                  primary="Sisäilmaopinnot IV-suunnittelijoille ja -asiantuntijoille (3 op) AMK, Metropolia, 2017"

                />
              </ListItem>

            </List>

          </Box>

        </AccordionDetails>
      </Accordion>


    </>
  )
}