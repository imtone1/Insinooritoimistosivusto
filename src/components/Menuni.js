import React from 'react'
import MenuBasic from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'
import { Box, IconButton } from '@mui/material'
import { COLORS } from '../values/colors'
import { Link } from 'react-router-dom'

export default function Menuni() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{ display:{ md:'none', xs:'flex' }, color:COLORS.brown }}>
      <IconButton
        id="MenuButton"
        type='button'
        aria-controls={open ? 'navigaatio menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}

        aria-label="navigation menu"

        size="medium"
      >
        <MenuIcon/>
      </IconButton>
      <MenuBasic
        id="navigaatio menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'Navigation button',
          role:'menu'
        }}

      >
        <div style={{ backgroundColor: COLORS.beige }}>
          <Link reloadDocument role='menuitem' to={'/palvelut'} onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: 'instant',
            })
          }}><MenuItem onClick={handleClose} >Palvelut</MenuItem></Link>
          <Link reloadDocument role='menuitem' to={'/yhteystiedot'} onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: 'instant',
            })
          }}><MenuItem onClick={handleClose}>Yhteystiedot</MenuItem></Link>
          <Link reloadDocument role='menuitem' to={'/meista'} onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: 'instant',
            })
          }}> <MenuItem onClick={handleClose}>Meistä</MenuItem></Link>
          {/* <MenuItem onClick={handleClose}>Ammattilaisille</MenuItem>
        <MenuItem onClick={handleClose}>Referenssit</MenuItem> */}
        </div>
      </MenuBasic>
    </Box>
  )
}
