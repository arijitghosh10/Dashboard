import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import HelpIcon from '@mui/icons-material/Help';

export default function ButtonAppBar() {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor:'white',color:'black' }}>
        <Toolbar sx={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <div style={{display:'flex'}}>
            <Typography variant="h6" component="div" sx={{marginRight:'0.75rem'}}>
              Dashboard
            </Typography>
            <Button color='inherit'><AddIcon />
              <Typography fontSize='0.75rem'>Create course</Typography>
            </Button>
            <Button color='inherit'><VisibilityOutlinedIcon />
              <Typography fontSize='0.75rem'>Preview home page</Typography>
            </Button>
            <Button color='inherit'><VisibilityOutlinedIcon />
              <Typography fontSize='0.75rem'>Preview after login page</Typography>
            </Button>
            <Button color='inherit'><PowerSettingsNewIcon /> 
              <Typography fontSize='0.75rem'>View welcome screen</Typography>
              </Button>
          </div>
          <div>
            <Button color='inherit' ><HelpIcon sx={{ color:'#26cece' }}  />
              <Typography fontSize='0.75rem'>Help</Typography></Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}