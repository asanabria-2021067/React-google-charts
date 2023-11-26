
import SideNav from '../nav/SideNav'
import Box from '@mui/material/Box';
import NavBar from '../nav/NavBar';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Stack from '@mui/material/Stack';
import '../../assets/css/Dash.css';

import BarChart from '../charts/BarChart';
import GeoChart from '../charts/GeoChart';
import PieChart from '../charts/PieChart';
import PopulationChart from '../charts/PopulationChart';
import GeoChartProduct from '../charts/GeoChartProducts';
import BarChartProduct from '../charts/BarChartProducts';

export default function Home() {


  return (
    < div className='bgColor'>
      <NavBar />
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
          <Box height={30} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction="row">
            <Card sx={{ minWidth: 55 + "%", height: 400 }}>
                <CardContent>
                 <BarChartProduct />
                </CardContent>
              </Card>

              <Card sx={{ minWidth: 88.5 + "%", height: 400 }}>
                <CardContent>
                 <PieChart />
                </CardContent>
              </Card>
              </Stack>
              <Card sx={{ height:65 + "vh", width: 160 + "vh", marginTop: 1 +"vh" }}>
                <CardContent>
                 <GeoChartProduct />
                </CardContent>
              </Card>
            </Grid>
            
          </Grid>
        </Box>
      </Box>
    </div>
  )
}
