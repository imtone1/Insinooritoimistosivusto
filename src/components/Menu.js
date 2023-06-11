import * as React from 'react';
import MenuBasic from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton } from '@mui/material';

export default function Menu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{display:{md:'none', xs:'flex'}}}>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       <MenuIcon/>
      </IconButton>
      <MenuBasic
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Palvelut</MenuItem>
        <MenuItem onClick={handleClose}>Yhteystiedot</MenuItem>
        <MenuItem onClick={handleClose}>Meistä</MenuItem>
        <MenuItem onClick={handleClose}>Pyydä tarjous</MenuItem>
        <MenuItem onClick={handleClose}>Ammattilaisille</MenuItem>
        <MenuItem onClick={handleClose}>Referenssit</MenuItem>
        
      </MenuBasic>
    </Box>
  );
}
