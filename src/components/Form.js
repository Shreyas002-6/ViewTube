import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles.css';
import Appb from '../components/Appb';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const Form = () => {
const navigate = useNavigate();
const defaultTheme = createTheme();

const [input, setInput] = useState('');

const handleSubmit =(e)=>{ 
    e.preventDefault();
    setInput('');
    if(input){
    const ip = input;
    navigate("/vid",{state:{ip:ip}});
    }
    else{
      alert('Please paste the link!');
    }
    
}

  return (
    <React.Fragment>
      <ThemeProvider theme={defaultTheme}> 
      <CssBaseline />
      <Appb/>
      <Box className = 'box1'
      sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      // background: '#252526',
      width: '100%',
      position: 'fixed',
    }}
    >

    <Grid container spacing={2} className='box2' justifyContent='center'>
    <Grid item xs={8}>
    <TextField id="outlined-basic" label="Paste the URL here" variant="outlined"
    onChange={(e)=>setInput(e.target.value)} value={input||''} 
    sx={{
      width: '100%',
      color: 'white',
      border: 'none',"& fieldset": { border: 'none' },
    }}
    required
    />
    </Grid>
    <Grid item xs={8}>
    <Button variant="contained" type="submit" onClick={handleSubmit} sx={{
      width: '80px',
      textTransform: 'none',
      backgroundColor: 'red',
      color: 'whitesmoke',
      ':hover': {
        bgcolor: 'white', // theme.palette.primary.main
        color: 'black',
      }, 
    }}>Watch</Button>
    </Grid>
    <Grid item xs={8} sx={{
      justifyContent:'center',
      display: 'flex',
      alignItems: 'center'
    }}>
    <Typography component="h6" variant="h6"
          sx={{color: 'white',
          }}
          >
            Watch youtube videos without any obstructions...
          </Typography>
    </Grid>
    </Grid>
    </Box>
</ThemeProvider>
  </React.Fragment>
  );
}

