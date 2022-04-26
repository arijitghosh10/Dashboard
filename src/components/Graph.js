import React from "react";
import { Paper, Typography } from "@mui/material";
import { data } from "./GraphData";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { LineChart,Line, XAxis, YAxis } from "recharts";
import Details from "./Details";

const Graph = ()=>{
    return (
        <>
            <Paper sx={{ marginTop:'0.25rem',padding:'0.75rem',display:'flex' }}>
                <div>
                    <Typography variant="h7" component='div' sx={{display:'flex',alignItems:'center'}}>
                        <CalendarMonthIcon />
                        <Typography variant="h7">Your school</Typography>
                    </Typography>
                    <LineChart width={800} height={250} data={data}>
                        <XAxis  dataKey='name' interval={'preserveStartEnd'} />
                        <YAxis dataKey='value' interval={'preserveStartEnd'}/>
                        <Line dataKey='value' />
                    </LineChart>
                </div>
                <div>
                    <Details />
                </div>
            </Paper>
        </>
    )
}
export default Graph;