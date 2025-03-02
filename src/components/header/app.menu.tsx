
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

const AppMenuData = [
  {
    id: 1,
    label: 'Home',
    href: '/'
  },
  {
    id: 2,
    label: 'Project',
    href: '/project'
  },
  {
    id: 3,
    label: 'About',
    href: '/about'
  },
  {
    id: 4,
    label: 'Contact',
    href: '/contact'
  }
]

const AppMenu = () => {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      gap: '20px'
    }}>
      {
        AppMenuData.map((item) => (
          <Typography
            key={item.id}
            component={Link}
            href={item.href}
            sx={{
              textDecoration: 'none',
              color: (theme) => theme.palette.mode === 'dark' ? 'rgb(255 255 255 / 55%)' : '#000'
            }}
          >
            {item.label}
          </Typography>
        ))
      }
    </Box>
  )
}

export default AppMenu