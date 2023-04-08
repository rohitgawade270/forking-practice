import { Button, Typography, styled } from '@mui/material';
import './App.css';
import { Delete } from '@mui/icons-material';

function App() {

  const LoginButton = styled(Button)(({theme})=>({
    backgroundColor:theme.palette.danger.main,
    color:"white",
    "&:hover":{
      backgroundColor:"black"
    }
  }));

  return (
    <>
  <Button variant='outlined' startIcon={<Delete/>} color='info'>Submit</Button>
  <Button variant='contained'  color='secondary'>Submit</Button>
  <Button variant='outlined' color='info'>Sub</Button>
  <LoginButton  >Login</LoginButton>
  <Typography variant='h4' component='p'>this is parapraph</Typography>
    </>
  );
}

export default App;
