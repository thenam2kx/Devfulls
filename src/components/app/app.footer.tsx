'use client'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Code from "@mui/icons-material/Code"
import Grid from '@mui/material/Grid2';
import useTheme from '@mui/material/styles/useTheme';
import Github from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Mail from '@mui/icons-material/Mail';


const AppFooter = () => {
  const theme = useTheme()

  return (
    <Box component="footer" sx={{ py: 3, px: 2, mt: "auto", backgroundColor: theme.palette.background.paper }}>
      <Container maxWidth="lg">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Code sx={{ mr: 1 }} />
              <Typography variant="body2" color="text.secondary">
                © {new Date().getFullYear()} Thenam2kx. All rights reserved.
              </Typography>
            </Box>
          </Grid>
          <Grid>
            <Box sx={{ display: "flex", gap: 2 }}>
              <IconButton
                href="https://github.com/thenam2kx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/the-nam-726095248"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedIn />
              </IconButton>
              <IconButton href="mailto:devfulls2kx@gmail.com" aria-label="Email">
                <Mail />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AppFooter