import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ReactPlayer from 'react-player/youtube'
import { useLocation } from 'react-router-dom';

export const Vid = ()=> {

    const location = useLocation();
    //console.log(location.state);
  return (
    <Box
    sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: '#252526',
      }}
  >
<ReactPlayer url={location.state.ip} controls/>
  </Box>
  );
}
