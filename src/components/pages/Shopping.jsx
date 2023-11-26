
import NavBar from '../nav/NavBar';
import SideNav from '../nav/SideNav'
import Box from '@mui/material/Box';

export default function Shopping() {

    return (
        <>
            <NavBar />
            <Box height={30} />
            <Box sx={{ display: 'flex' }}>
                <SideNav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1> Shopping</h1>
                </Box>
            </Box>

        </>
    )
}
