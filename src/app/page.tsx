import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Hero from '@/components/home/hero';
import Skills from '@/components/home/skills';
import Experiences from '@/components/home/experiences';


export default function Home() {

  return (
    <Box component={'main'} sx={{ bgcolor: '#11111b!important', minHeight: '100vh', height: 'auto' }}>
      {/* Hero */}
      <Hero />

      {/*  */}
      <Container maxWidth={'lg'}>
        <Experiences />
        <Skills />
      </Container>
    </Box>
  );
}
