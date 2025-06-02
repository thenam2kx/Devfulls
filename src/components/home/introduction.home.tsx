'use client'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { IconButton } from '@mui/material'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'
import { motion } from 'framer-motion'

// Create motion components
const MotionTypography = motion(Typography)
const MotionButton = motion(Button)
const MotionIconButton = motion(IconButton)

const Introduction = () => {
  return (
    <Box
      component='section'
      sx={{
        position: 'relative',
        height: 'calc(100vh - 100px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <MotionTypography
        variant='h1'
        sx={{ color: 'white', fontWeight: 700, mb: 3, fontSize: '4.5rem' }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hi, I’m <span style={{ color: 'rgb(255, 64, 129)' }}>The Nam</span>.
      </MotionTypography>
      <MotionTypography
        variant='h2'
        sx={{ color: 'white', fontWeight: 500, mb: 3, fontSize: '2.5rem' }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Full Stack Developer
      </MotionTypography>
      <MotionTypography
        variant='body1'
        sx={{ color: 'white', fontWeight: 500, mb: 3, fontSize: '1.2rem' }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        I build beautiful, responsive, and user-friendly web applications with modern technologies.
      </MotionTypography>

      <Stack spacing={2} direction="row">
        <MotionButton
          variant="contained"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          size='large'
        >
          My Experian
        </MotionButton>
        <MotionButton
          variant="outlined"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          size='large'
        >
          Contact me
        </MotionButton>
      </Stack>

      <Box sx={{
        position: 'absolute',
        bottom: 20,
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
        <MotionIconButton
          aria-label="down"
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          sx={{ borderRadius: '50%', padding: 1.3, backgroundColor: 'rgb(255 255 255 / 10%)' }}
        >
          <KeyboardDoubleArrowDownIcon />
        </MotionIconButton>
      </Box>
    </Box>
  )
}

export default Introduction