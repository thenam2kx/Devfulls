import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid2'
import Box from '@mui/material/Box'
import { PROJECTS } from '@/helper/data';
import ProjectCard from '@/components/project/card.project';

const ProjectsPage = () => {
  return (
    <Box sx={{ minHeight: 'calc(100vh - 64px)', bgcolor: '#11111b' }}>
      <Container maxWidth={'lg'}>
        <Grid container spacing={2} sx={{ pt: '54px' }}>
          <Grid size={12}>
            <Typography variant='h1' sx={{ fontSize: '28px', textAlign: 'center', fontWeight: 500 }}>
              <span style={{ color: '#ec4899' }}>My Recent Works</span>
            </Typography>
            <Typography sx={{ fontSize: '16px', textAlign: 'center', mt: '6px', fontWeight: 500 }}>
              Here are a few projects I&apos;ve worked on recently.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={5} sx={{ mt: '80px' }}>
          {PROJECTS?.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
              <ProjectCard
                imgPath={item.imgPath}
                title={item.title}
                description={item.description as string}
                githubLink={item.githubLink}
                demoLink={item.demoLink}
              />
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  )
}
export default ProjectsPage