import { Grid } from '@mui/material';
import './App.css';
import Blogs from './components/Content/Blogs';
import Events from './components/Content/Events';
import TimePeriod from './components/Content/TimePeriod';
import Users from './components/Content/Users';
import Graph from './components/Graph';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Grid item xs>
        <Graph />
      </Grid>
        <Grid container spacing={2} sx={{marginTop:'0.5rem'}}>
          <Grid item xs={3}>
            <Users />
          </Grid>
          <Grid item xs>
            <Blogs />
          </Grid>
          <Grid item xs={3}>
            <Events />
          </Grid>
          <Grid item xs={3}>
            <TimePeriod />
          </Grid>
        </Grid>
    </>
  );
}

export default App;
