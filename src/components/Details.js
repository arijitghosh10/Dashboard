import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { Paper, Typography } from "@mui/material";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CategoryIcon from '@mui/icons-material/Category';

const Details = () =>{
    return (
        <Paper elevation={0} sx={{ marginLeft:'5rem',padding:'0.5rem', width:'26rem',height:'90%',display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',gap:'2rem 4rem' }}>
            <div style={{textAlign:'center'}}>
                <AccountCircleIcon style={{fontSize:'3rem',color:'#26cece'}}/>
                <Typography fontSize='0.75rem'>All Users</Typography>
                <Typography fontSize='1.75rem'>1</Typography>
            </div>
            <div style={{textAlign:'center'}}>
                <AutorenewIcon style={{fontSize:'3rem',color:'#26cece'}} />
                <Typography fontSize='0.75rem'>Conversions</Typography>
                <Typography fontSize='1.75rem'>0%</Typography>
            </div>
            <div style={{textAlign:'center'}}>
                <WorkOutlineIcon style={{fontSize:'3rem',color:'#26cece'}}/>
                <Typography fontSize='0.75rem'>30 days sale</Typography>
                <Typography fontSize='1.75rem'>0</Typography>
            </div>
            <div style={{textAlign:'center'}}>
                <AccessAlarmsIcon style={{fontSize:'3rem',color:'#26cece'}}/>
                <Typography fontSize='0.75rem'>Avg Time</Typography>
                <Typography fontSize='1.75rem'>0</Typography>
            </div>
            <div style={{textAlign:'center'}}>
                <LibraryBooksIcon style={{fontSize:'3rem',color:'#26cece'}}/>
                <Typography fontSize='0.75rem'>Courses</Typography>
                <Typography fontSize='1.75rem'>0</Typography>
            </div>
            <div style={{textAlign:'center'}}>
                <CategoryIcon style={{fontSize:'3rem',color:'#26cece'}}/>
                <Typography fontSize='0.75rem'>Course Categories</Typography>
                <Typography fontSize='1.75rem'>0</Typography>
            </div>
        </Paper>
        

    )
}
export default Details;