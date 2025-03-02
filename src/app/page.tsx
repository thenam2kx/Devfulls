import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AppHeader from '@/components/header/app.header';
import Hero from '@/components/home/hero';


export default function Home() {

  return (
    <Box component={'main'} sx={{ bgcolor: '#11111b', minHeight: '100vh' }}>
      <AppHeader />
      {/* Hero */}
      <Hero />

      {/*  */}
      <Container maxWidth={'lg'}>
      </Container>
    </Box>
  );
}
