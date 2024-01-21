import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Styles.css';
import logo from '../../src/imgs/logo.png';
import VT from '../../src/imgs/VT.png';
import Box from '@mui/material/Box';



function Appb(props) {


  return (
        <AppBar style={{ backgroundColor: '#252526' }} elevation={0}>
          <Toolbar>
          {/* <Box
            component="img"
            sx={{
            height: 45,
            marginTop: 1,
            marginBottom: 1,
            marginRight: 1
            }}
            alt="Your logo."
            src={logo}
          /> */}

<Box
            component="img"
            sx={{
            height: 25,
            width: 80,
            marginTop: 1,
            marginBottom: 1,
            
            }}
            alt="Your logo."
            src={VT}
          />

          </Toolbar>
        </AppBar>
      );
}

export default Appb;
