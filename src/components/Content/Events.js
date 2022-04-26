import { Button, Paper, Typography } from "@mui/material";
import React from "react";
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import KeyIcon from '@mui/icons-material/Key';

const Events = () =>{
    return (
        <Paper style={{padding:'0.5rem'}}>
            <div style={{marginBottom:'0.5rem',display:'flex',alignItems:'center',gap:'0.375rem'}}>
                <LegendToggleIcon />
                <Typography textTransform={'capitalize'} variant="h7">Events Log</Typography>
                <Button sx={{borderRadius:'2rem',padding:'0.2em',fontSize:'0.75rem',backgroundColor:'#26cece'}} variant="contained" >see all</Button>
            </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start'}}>
                    <Typography sx={{fontSize:'0.75rem',color:'#26cece'}}><KeyIcon sx={{fontSize:'1rem',transform:'rotate(150deg)'}} />hubx</Typography>
                    <Typography sx={{fontSize:'0.85rem'}}>Logged In</Typography>
                    <Typography component={'a'} sx={{fontSize:'0.85rem',color:'#26cece'}}>more info</Typography>
                </div>
                <div>
                    <Typography variant="h7" component={'span'}>22 minutes</Typography>
                </div>
            </div>
        </Paper>
    )
}
export default Events;