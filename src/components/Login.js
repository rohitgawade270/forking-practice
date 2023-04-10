import styled from '@emotion/styled';
import { Box, Button, Modal, Typography } from '@mui/material'
import React , {useState} from 'react'

export default function Login() {
const [open, setOpen] = useState(false);

const ModalBody = styled(Box)({
backgroundColor:'black',
color:'white',
position: 'absolute',
top: '50%',
left: '50%',
transform: 'translate(-50%, -50%)',
padding:'10px',
borderRadius:'10px'
})


  return (
<>
<Button onClick={e=>setOpen(true)}>Open modal</Button>
<Modal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <ModalBody>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </ModalBody>
</Modal>
</>
  )
}
