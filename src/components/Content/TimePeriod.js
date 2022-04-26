import React from "react";
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Button, Card, Paper, Typography,CardHeader,Avatar,Grid } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const TimePeriod = () =>{
    return (
        <>
        <Paper sx={{ padding:'1rem' }}>
            <Grid item xs={12} sx={{display:'flex',justifyContent:'space-between'}}>
                <div>
                    <Typography variant="h6">Trial period</Typography>
                    <div style={{width:'6rem',aspectRatio:'1',borderRadius:'50%',border:'2px solid #ffe',boxShadow:'2px 4px pink',background:'#26cece',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Typography variant="h7" sx={{ color:'whitesmoke',textAlign:'center' }}>
                            <div>30</div>
                            <div>DAYS LEFT</div>
                        </Typography>
                    </div>
                </div>
                <div style={{display:'flex'}}> 
                    <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',justifyContent:'space-between'}}>
                        <HourglassTopIcon sx={{color:'#26cece',fontSize:'2.5rem'}} />
                        <Button variant="contained" sx={{background:'#e600e6',borderRadius:'1.25rem',fontSize:'0.75rem'}} >Upgrade Now<KeyboardDoubleArrowRightIcon /></Button>
                    </div>
                </div>
            </Grid>
        </Paper>
        <Paper style={{padding:'0.5rem',marginTop:'1rem'}}>
        <div style={{marginBottom:'0.25rem', display:'flex',alignItems:'center',gap:'0.375rem'}}>
            <AccountCircleIcon />
            <Typography textTransform={'capitalize'} variant="h7">Online Users(1)</Typography>
        </div>
        <Card elevation={0} sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <CardHeader
                sx={{color:'#26cece'}}
                avatar={
                <Avatar sx={{ bgcolor: 'grey' }} aria-label="recipe">
                    H
                </Avatar>
                }
                title="hubx"
            />
            <Button variant="contained" sx={{ background:'#26cece',fontSize:'0.75rem'}} >contact</Button>
        </Card>
    </Paper>
    </>
    )
}
export default TimePeriod;