import { Button, Paper, Typography } from "@mui/material";
import React from "react";
import WebIcon from '@mui/icons-material/Web';
import { data } from "./BlogTopics";

const Blogs = () =>{
    return (
        <Paper style={{padding:'0.5rem'}}>
            <div style={{display:'flex',alignItems:'center',gap:'0.375rem',marginBottom:'0.5rem'}}>
                <WebIcon />
                <Typography textTransform={'capitalize'} variant="h7">How to sell courses Blog</Typography>
                <Button sx={{borderRadius:'2rem',padding:'0.2em',fontSize:'0.75rem',backgroundColor:'#26cece'}} variant="contained" >see all</Button>
            </div>
            {data.map((el)=>{
                return (
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'2rem'}}>
                        <ul style={{listStyle:'circle'}}>
                            <li style={{color:'#26cece'}}>{el.title}</li>
                        </ul>
                        <span style={{fontSize:'0.75rem',color:'grey',textAlign:'center'}}>
                            {el.time}
                        </span>
                    </div>
                )
            })}
        </Paper>
    )
}
export default Blogs;