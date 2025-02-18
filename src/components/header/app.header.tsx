'use client';
import Link from 'next/link';
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import AppMenu from './app.menu'
import ToggleTheme from '../theme/toggle.theme'
import AppLanguageSelect from './app.language.select'

const AppHeader = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenMenu(newOpen)
  }

  return (
    <Box sx={{ position: 'relative', zIndex: 1 }} component={'header'}>
      <Container sx={{ py: '8px', display: { xs: 'none', sm: 'flex' } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', gap: '32px', width: '100%' }}>
          <Typography
            component={Link}
            href={'/'}
            sx={{
              color: (theme: { palette: { mode: string; }; }) => theme.palette.mode === 'dark' ? '#16f2b3' : '#000',
              fontSize: '20px',
              textDecoration: 'none'
            }}>
            Devfulls
          </Typography>

          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%'
          }}>
            <AppMenu />
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              gap: '10px'
            }}>
              <ToggleTheme />
              <AppLanguageSelect />
            </Box>
          </Box>
        </Box>
      </Container>


      {/* Header on mobile */}
      <AppBar
        position="static"
        sx={{
          display: { xs: 'flex', sm: 'none' },
          bgcolor: 'transparent',
          backgroundImage: 'none',
          boxShadow: 'none'
        }}
      >
        <Toolbar sx={{ bgcolor: 'transparent' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Thenam2kx
          </Typography>
          <IconButton
            onClick={toggleDrawer(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor='top'
            open={openMenu}
            onClose={toggleDrawer(false)}
            sx={{
              '& .MuiDrawer-paper': { bgcolor: '#0d1224' }
            }}
          >
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              p: '4px'
            }}>
              <IconButton
                onClick={toggleDrawer(false)}
              >
                <CloseIcon />
              </IconButton>
            </Box>

            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'column',
              gap: '12px',
              pb: '12px',
              width: '100%'
            }}>
              <AppMenu />
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                gap: '10px'
              }}>
                <ToggleTheme />
                <AppLanguageSelect />
              </Box>
            </Box>
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default AppHeader