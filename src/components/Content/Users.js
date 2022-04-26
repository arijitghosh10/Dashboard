import { Button, Card, Paper, Typography,CardHeader,Avatar } from "@mui/material";
import React, { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LightBox from "./Modal";

const Users = () =>{
    const [modal,setModal] = useState(false);
    return (
        <Paper style={{padding:'0.5rem'}}>
            <div style={{marginBottom:'0.25rem', display:'flex',alignItems:'center',gap:'0.375rem'}}>
                <AccountCircleIcon />
                <Typography textTransform={'capitalize'} variant="h7">New Users</Typography>
                <Button sx={{borderRadius:'2rem',padding:'0.2em',fontSize:'0.75rem',backgroundColor:'#26cece'}} variant="contained" >see all</Button>
            </div>
            <Card elevation={0} sx={{  }}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: 'grey' }} aria-label="recipe">
                        H
                    </Avatar>
                    }
                    title="hubx"
                    subheader="24 minutes ago"
                />
            </Card>
            <Card elevation={0} sx={{  }}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: 'grey' }} aria-label="recipe">
                        H
                    </Avatar>
                    }
                    title="investor"
                    subheader="2 hours ago"
                />
            </Card>
            <Button variant="contained" onClick={()=>setModal(true)}>Invest Now</Button>
            {modal && <LightBox modal={modal} setModal={setModal} />}
        </Paper>
    )
}
export default Users;