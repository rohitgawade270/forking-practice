import React from 'react'
import { AppBar, Button, IconButton, Stack, TextField, Toolbar, Typography } from '@mui/material'
import { Menu } from '@mui/icons-material'

export default function Navbar() {
  return (
  <AppBar position='sticky' sx={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
    <Toolbar>
        <Typography variant='h6'>Navbar</Typography>
    </Toolbar>
   <Stack justifyContent='center' alignItems='center' direction='row'>
   {/* <Button variant="text" sx={{color:'white'}}>Login</Button> */}
   <TextField size='small' sx={{backgroundColor:'inherit'}} />
    <IconButton size='large' color='inherit'>
      <Menu />
    </IconButton>
   </Stack>
  </AppBar>
  )
}
