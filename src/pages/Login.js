import React from 'react'
import styled from '@emotion/styled';
import { Lock } from '@mui/icons-material';
import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, Stack, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import { blue } from '@mui/material/colors';



export default function Login() {

  const CustomBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh'
  })

 const CustomLink = styled(Link)({
  color:'blue',
  textDecoration:'none'
 });


  return (
    <>
      <CustomBox>
        <Box width={500} borderRadius={4} bgcolor='white' p={5} >
          <Stack direction='column' rowGap={1} justifyContent='center' alignItems='center'>
            <Avatar sx={{ bgcolor: 'purple' }} >
              <Lock />
            </Avatar>
            <Typography variant='h4'>Login</Typography>
          </Stack>
          <Grid container spacing={2} marginTop={2}>
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
              <Button fullWidth variant='contained'  color='secondary'>Login</Button>
            </Grid>
          </Grid>
          <Box sx={{marginTop:'20px',textAlign:'center'}}>
          <CustomLink to='/register'>Don't have an account? Sign Up</CustomLink>
          </Box>
        </Box>
      </CustomBox>
    </>
  )
}