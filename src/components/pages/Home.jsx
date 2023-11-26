
import SideNav from '../nav/SideNav'
import Box from '@mui/material/Box';
import NavBar from '../nav/NavBar';
import Grid from '@mui/material/Grid';
import AccordionDash from '../nav/AccordionDash';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Stack from '@mui/material/Stack';

import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

//import{ useAppStore} from '../../appStore.jsx';
import '../../assets/css/Dash.css';

import BarChart from '../charts/BarChart';

import CountUp from 'react-countup'; 


export default function Home() {


  return (
    < div className='bgColor'>
      <NavBar />
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction="row">
                <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradient'>
                  <CardContent>
                    <div>
                      <CreditCardIcon className='iconstyle' />
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fff" }}>

                      Q. <CountUp delay={0.6} end={850} duration={0.6} />
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                      Total Ordenes
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradientlight'>
                  <CardContent>
                    <div>
                      <ShoppingBagIcon className='iconstyle' />
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fff" }}>
                    Q. <CountUp delay={0.6} end={11850} duration={0.6} />
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                      Total Ganancias
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2} >
                <Card className='gradientlight'>
                  <Stack spacing={2} direction="row">
                    <div className='iconstyle'>
                      <StorefrontIcon className='iconstyle' />
                    </div>
                    <div className='paddingall'>
                      <span className='pricetitle'>Q. 245.00</span><br />
                      <span className='pricesubtitle'>Total Ingreso</span>
                    </div>
                  </Stack>
                </Card>
                <Card >
                  <Stack spacing={2} direction="row">
                    <div className='iconstyle'>
                      <StorefrontIcon className='iconstyleBlack' />
                    </div>
                    <div className='paddingall'>
                      <span className='pricetitle'>Q. 245.00</span><br />
                      <span className='pricesubtitle'>Total Ingreso..</span>
                    </div>
                  </Stack>
                </Card>
              </Stack>
            </Grid>
          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent>
                <BarChart />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent>
                  <div className='paddingall'>
                    <span className='pricetitle'>Productos populares</span>
                  </div>
                  <AccordionDash />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  )
}
