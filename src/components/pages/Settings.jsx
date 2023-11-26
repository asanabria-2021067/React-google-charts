
import NavBar from '../nav/NavBar';
import SideNav from '../nav/SideNav'
import List from '../settings/List'
import Box from '@mui/material/Box';

export default function Settings() {

  return (
    <>
      <NavBar />
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <List />
        </Box>
      </Box>

    </>
  )
}
