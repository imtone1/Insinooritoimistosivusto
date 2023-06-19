import React from 'react'
import { Modal, ModalDialog, ModalClose, Typography } from '@mui/joy'

const ModalFull = () => {
const [layout, setLayout] = React.useState(undefined);

  const [scroll, setScroll] = React.useState(true);
  return (
   
    <Modal>
  <ModalDialog
  aria-labelledby="modal-dialog-overflow"
    layout="fullscreen"
    size="lg"
    variant="soft"
  >
    <ModalClose />
    <Typography id="modal-dialog-overflow" >Modal title</Typography>
  </ModalDialog>
</Modal>
  )
}

export default ModalFull