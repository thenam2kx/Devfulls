"use client"
import Box from '@mui/material/Box';
import Link from "next/link"
import Code from "@mui/icons-material/Code"
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material"
import ThemeSelect from '@/components/theme/select.theme';
import { useTheme } from '@mui/material';

const AppHeader = () => {
  const theme = useTheme()
  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={0}
      sx={{ borderBottom: `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Link
          href="/"
          passHref
          style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center" }}
        >
          <Code sx={{ mr: 1 }} />
          <Typography variant="h6" fontWeight="bold">
            Thenam2kx
          </Typography>
        </Link>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          <Button color="inherit" href="#about">
            About
          </Button>
          <Button color="inherit" href="#skills">
            Skills
          </Button>
          <Button color="inherit" href="#projects">
            Projects
          </Button>
          <Button color="inherit" href="#contact">
            Contact
          </Button>
        </Box>
        <Button variant="outlined" sx={{ display: { xs: "none", md: "block" } }}>
          Resume
        </Button>
        <ThemeSelect />
        <IconButton sx={{ display: { md: "none" } }} edge="end" color="inherit" aria-label="menu">
          <Code />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default AppHeader