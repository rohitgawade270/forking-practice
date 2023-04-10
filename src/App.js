import { Autocomplete, Box, Button, TextField, styled } from '@mui/material';
import './App.css';
import { Delete } from '@mui/icons-material';

function App() {

  const LoginButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.danger.main,
    color: "white",
    "&:hover": {
      backgroundColor: "black"
    }
  }));

  const data = [{ label: 'A' }, { label: 'B' }, { label: 'C' }, { label: 'D' }, { label: 'E' }, { label: 'F' }]

  return (
    <>
      <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',gap:3}}>
        <Box>
          <Button variant='outlined' startIcon={<Delete />} color='info'>Submit</Button>
          <Button variant='contained' color='secondary'>Submit</Button>
          <Button variant='outlined' color='info'>Sub</Button>
          <LoginButton  >Login</LoginButton>
        </Box>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={data}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />
      </Box>

    </>
  );
}

export default App;
