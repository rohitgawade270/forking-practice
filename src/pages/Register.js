import React from 'react'
import styled from '@emotion/styled';
import { Lock } from '@mui/icons-material';
import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, Stack, TextField, Typography } from '@mui/material'



export default function Register() {

  const CustomBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  })




  return (
    <>
      <CustomBox>
        <Box width={500} borderRadius={4} bgcolor='white' p={5} >
          <Stack direction='column' rowGap={1} justifyContent='center' alignItems='center'>
            <Avatar sx={{ bgcolor: 'purple' }} >
              <Lock />
            </Avatar>
            <Typography variant='h4'>Sign up</Typography>
          </Stack>
          <Grid container spacing={2} marginTop={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth name="name" id="first_name" label="First name" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth id="last_name" label="Last name" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth id="phone" label="Phone" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth type='email' label="Email" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth id="pass" type='password' label="Password" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel control={<Checkbox />} label="Remember me" />
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth variant='contained'  color='secondary'>Sign up</Button>
            </Grid>
          </Grid>
        </Box>
      </CustomBox>
    </>
  )
}
