import styled from '@emotion/styled';
import { Box, Button, Modal, Typography } from '@mui/material'
import React , {useState} from 'react'

export default function Login() {
const [open, setOpen] = useState(false);

const CustomModal = styled(Modal)({
display:'flex',
justifyContent:'center',
alignItems:'center'
})


  return (
<>
<Button onClick={e=>setOpen(true)}>Login</Button>
<CustomModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={300} sx={{backgroundColor:'black',color:'white',padding:'20px',borderRadius:'10px'}}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box>
</CustomModal>
</>
  )
}
