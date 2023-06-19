import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '900px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

export default function BasicModal({open, setOpen, text, otsikko}) {

  const handleClose = () => setOpen(false);

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby={`modal-modal-${otsikko}`}
        aria-describedby={`modal-modal-${otsikko}1`}
      >
        <Box sx={style}>
          <Typography id={`modal-modal-${otsikko}`} variant="h5" component="h2">
            {otsikko}
          </Typography>
          <Typography id={`modal-modal-${otsikko}1`} sx={{ mt: 2 }}>
            {text}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}