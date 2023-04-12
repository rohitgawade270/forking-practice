import React, { useState } from 'react'
import { AppBar, Drawer, IconButton, Stack, TextField, Toolbar, Typography } from '@mui/material'
import { Menu } from '@mui/icons-material'
import styled from '@emotion/styled';
import DrawerItems from './DrawerItems';

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const SerchBar = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    borderRadius: theme.shape.borderRadius
  }));

  return (
    <>
      <AppBar position='sticky' sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Toolbar>
          <Typography variant='h6'>Navbar</Typography>
        </Toolbar>
        <Stack justifyContent='center' alignItems='center' direction='row'>
          <SerchBar>
            <TextField size='small' placeholder='serch...' />
          </SerchBar>
          <IconButton onClick={event => setOpen(true)} size='large' color='inherit'>
            <Menu />
          </IconButton>
        </Stack>
      </AppBar>
      <Drawer
        anchor='left'
        open={open}
        onClose={event => setOpen(false)}
      >
        <DrawerItems setOpen={setOpen} />
      </Drawer>
    </>
  )
}
