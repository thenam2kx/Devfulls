
'use client'
import AnimationLottie from '../animation.lottie/animation.lottie'
import GlowCard from '../glow.card/glow.card'
import { EXPERIENCES } from '@/helper/data'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography'
import experienceJSON from 'public/lottie/code.json'
import blurImg from 'public/blur-23.svg'
import AccountBoxIcon from '@mui/icons-material/AccountBox'


interface Experience {
  id: number;
  duration: string;
  title: string;
  company: string;
}

const Experiences = () => {

  return (
    <Grid container sx={{ mb: 5, borderTop: '1px solid rgb(27 44 104 / 63%)' }}>
      <Grid size={12} sx={{ mt: { xs: 3, md: 5 }, mb: { xs: 3, md: 10 } }}>
        <Box textAlign="center">
          <Typography variant="h3" sx={{ fontSize: '28px' }}>Experiences</Typography>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <AnimationLottie animationPath={experienceJSON} />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Box display="flex" flexDirection="column" gap={5}>
          {EXPERIENCES.map((experience: Experience) => (
            <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
              <Box
                position="relative"
                sx={{
                  bgcolor: (theme) => theme.palette.mode === 'dark' ? '' : '#f5f6f7',
                  borderRadius: '0.75rem',
                  padding: '24px 0'
                }}
              >
                <Box
                  component="img"
                  src={blurImg}
                  alt="Hero"
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.8
                  }} />
                <Box sx={{ padding: '0 24px' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography sx={{
                      color: 'rgb(225 69 155)',
                      margin: 0,
                      fontWeight: 600
                    }}>
                      {experience.duration}
                    </Typography>
                  </Box>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2rem',
                    padding: '1.25rem 0.75rem'
                  }}>
                    <Box sx={{ mr: 2, color: '#8b5cf6', transition: 'all 300ms', '&:hover': { transform: 'scale(1.25)' } }}>
                      <AccountBoxIcon />
                    </Box>
                    <Box>
                      <Typography sx={{
                        marginBottom: '0.5rem',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        fontSize: '1rem'
                      }}>
                        {experience.title}
                      </Typography>
                      <Typography sx={{
                        marginBottom: '0.5rem',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        fontSize: '0.875rem'
                      }}>
                        {experience.company}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </GlowCard>
          ))}
        </Box>
      </Grid>
    </Grid>
  )
}

export default Experiences