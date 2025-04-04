import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Experiences from "@/components/home/experiences.home";
import SkillHome from "@/components/home/skill.home";
import Introduction from '@/components/home/introduction.home';


export default function Home() {

  return (
    <Box component={'main'} sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: '#141414' }}>
      <Container maxWidth='xl' sx={{ py: { xs: 8 } }}>
        <Introduction />
        <Experiences />
        <SkillHome />
      </Container>
    </Box>

  );
}
