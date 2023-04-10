import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

export default function Navbar() {
  return (
  <AppBar position='sticky'>
    <Toolbar>
        <Typography variant='h6'>Navbar</Typography>
    </Toolbar>
  </AppBar>
  )
}
