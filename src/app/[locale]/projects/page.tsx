'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { GitHub, OpenInNew } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projectsData } from '@/services/mock';
import { useTranslations } from 'next-intl';

const MotionBox = motion(Box);
export const MotionCard = motion(Card);
const MotionTypography = motion(Typography);

const ProjectsPage = () => {
  const t = useTranslations('projects');
  const [filter, setFilter] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.99] }
    }
  };

  const filteredProjects = filter === 'all'
    ? projectsData
    : filter === 'featured'
      ? projectsData.filter(project => project.featured)
      : projectsData;


  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 5, md: 5 },
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark'
            ? 'rgba(18, 18, 18, 0.9)'
            : 'rgba(250, 250, 250, 0.9)',
      }}
    >
      <Container maxWidth="lg">
        <MotionBox
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          sx={{ textAlign: 'center', mb: 6 }}
        >
          <MotionTypography
            variant="h2"
            gutterBottom
            variants={itemVariants}
            sx={{
              fontWeight: 700,
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '60px',
                height: '4px',
                bottom: '-10px',
                left: 'calc(50% - 30px)',
                backgroundColor: 'primary.main',
                borderRadius: '2px',
              }
            }}
          >
            {t('title')}
          </MotionTypography>

          <MotionTypography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: '700px', mx: 'auto', mt: 2, mb: 4 }}
            variants={itemVariants}
          >
            {t('description')}
          </MotionTypography>

          <MotionBox variants={itemVariants} sx={{ mb: 6 }}>
            <Tabs
              value={filter}
              onChange={(_, newValue) => setFilter(newValue)}
              centered
              sx={{
                '& .MuiTab-root': {
                  fontWeight: 500,
                  fontSize: '1rem',
                  textTransform: 'none',
                  mx: 1,
                },
                mb: 4
              }}
            >
              <Tab label="All Projects" value="all" />
              <Tab label="Web Apps" value="web-apps" />
              <Tab label="Wordpress" value="wordpress" />
            </Tabs>
          </MotionBox>
        </MotionBox>

        <Grid container spacing={4}>
          {filteredProjects.map((project) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
              <MotionCard
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  borderRadius: '16px',
                  boxShadow: (theme) =>
                    theme.palette.mode === 'dark'
                      ? '0 10px 30px rgba(0, 0, 0, 0.3)'
                      : '0 10px 30px rgba(0, 0, 0, 0.1)',
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.imageUrl}
                  alt={project.title}
                  sx={{
                    transition: 'transform 0.6s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    }
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                    {project.tags.map((tag, i) => (
                      <Chip
                        key={i}
                        label={tag}
                        size="small"
                        color={i % 3 === 0 ? "primary" : i % 3 === 1 ? "secondary" : "default"} 
                        variant="outlined"
                        sx={{
                          borderRadius: '4px',
                          '& .MuiChip-label': { px: 1 }
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ px: 3, pb: 3, pt: 0 }}>
                  <Button
                    size="small"
                    variant="outlined"
                    startIcon={<OpenInNew />}
                    href={project.liveUrl}
                    target="_blank"
                    sx={{ mr: 1 }}
                  >
                    Live Demo
                  </Button>
                  <IconButton
                    aria-label="github repository"
                    size="small"
                    href={project.repoUrl}
                    target="_blank"
                    sx={{ ml: 'auto' }}
                  >
                    <GitHub />
                  </IconButton>
                </CardActions>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default ProjectsPage