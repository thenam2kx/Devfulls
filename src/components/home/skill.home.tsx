'use client'
import Marquee from 'react-fast-marquee'
import { skillsImage } from '@/helper/skills.image'
import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const SKILLS_DATA = ['HTML', 'CSS', 'Javascript', 'Typescript', 'React', 'Next JS', 'Tailwind', 'MongoDB', 'MySQL', 'Git', 'Bootstrap', 'Docker', 'Figma', 'MaterialUI']

const SkillHome = () => {
  return (
    <Grid container sx={{ borderTop: '1px solid rgb(27 44 104 / 63%)' }}>
      <Grid size={12} textAlign="center" sx={{ py: '48px' }}>
        <Typography variant="h3" sx={{ fontSize: '28px' }}>Skills</Typography>
      </Grid>

      <Grid size={12}>
        <Box sx={{ overflow: 'hidden', mt: 2 }}>
          <Marquee
            gradient={false}
            speed={50}
            pauseOnHover
            pauseOnClick
            delay={0}
            play
            direction="left"
          >
            {SKILLS_DATA.map((skill, id) => (
              <Box
                key={id}
                sx={{
                  margin: '12px 20px',
                  borderTop: '1px solid',
                  borderImage: 'linear-gradient(to right, transparent,#8b5cf6, #8b5cf6, transparent) 1',
                  borderRadius: '0.375rem'
                }}
              >
                <Box sx={{
                  width: '150px',
                  height: '130px',
                  gap: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(27, 44, 104, 0.6274509804)',
                  bgcolor: (theme) => theme.palette.mode === 'dark' ? '#11152c' : '#f5f6f7',
                  borderRadius: '0.375rem',
                  transition: 'transform 0.5s, border-color 0.5s',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'scale(1.15)',
                    borderColor: 'violet',
                    color: '#ec4899'
                  }
                }}>
                  <Box
                    component="img"
                    src={skillsImage(skill)}
                    alt={skill}
                    sx={{ width: 40, height: 40 }}
                  />
                  <Typography variant="body1">{skill}</Typography>
                </Box>
              </Box>
            ))}
          </Marquee>
        </Box>
      </Grid>
    </Grid>
  )
}

export default SkillHome