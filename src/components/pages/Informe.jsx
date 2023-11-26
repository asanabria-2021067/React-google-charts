
import NavBar from '../nav/NavBar';
import SideNav from '../nav/SideNav'
import Box from '@mui/material/Box';
import BarChart2 from '../charts/BarChart2'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import BarChartCurso from '../charts/BarChartCurso';
import PopulationChart from '../charts/PopulationChart';

export default function Informe() {

    return (
        <>
            <NavBar />
            <Box height={70} />
            <Box sx={{ display: 'flex' }}>
                <SideNav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={10}>
                            <Stack spacing={2} direction="row">
                                <Card sx={{ minWidth: 60 + "%", height: 350 }} >

                                    <CardContent>
                                        <BarChartCurso />
                                    </CardContent>
                                </Card>

                                <Card sx={{ minWidth: 60 + "%", height: 350 }} >
                                    <CardContent>
                                        <PopulationChart />
                                    </CardContent>
                                </Card>
                            </Stack>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} mt={1}>
                        <Grid item xs={10} >
                            <Stack spacing={2} direction="row">
                                <Card sx={{ minWidth: 60 + "%", height: 350 }} className='gradient'>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fff" }}>
                                        Informe
                                    </Typography>
                                </Card>

                                <Card sx={{ minWidth: 60 + "%", height: 350 }} className='gradient'>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fff" }}>
                                        Informe
                                    </Typography>
                                </Card>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

        </>
    )
}
