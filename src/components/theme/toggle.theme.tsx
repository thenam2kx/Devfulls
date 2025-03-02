'use client'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import NightlightIcon from '@mui/icons-material/Nightlight'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useColorScheme } from '@mui/material'

const ToggleTheme = () => {
  const { mode, setMode } = useColorScheme()
  const handleChangeTheme = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  return (
    <Box>
      <IconButton onClick={handleChangeTheme} size="small" >
        { mode === 'dark' ? <NightlightIcon /> : <LightModeIcon /> }
      </IconButton>
    </Box>
  )
}

export default ToggleTheme