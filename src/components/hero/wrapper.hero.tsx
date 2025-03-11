"use client"
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { motion } from "framer-motion"
import { ArrowForward } from "@mui/icons-material"
import { useTheme } from "@mui/material"
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { fadeInUp, staggerChildren } from '../home/home.page';

const WrapperHero = () => {
  const theme = useTheme()

  return (
    <motion.section initial="hidden" animate="visible" variants={staggerChildren}>
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <motion.div variants={fadeInUp}>
          <Typography variant="h2" component="h1" align="center" gutterBottom>
            Full-Stack Developer
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            sx={{ maxWidth: 700, mx: "auto" }}
          >
            I build accessible, responsive, and performant web applications with modern technologies.
          </Typography>
          <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2 }}>
            <Button variant="contained" href="#contact" endIcon={<ArrowForward />}>
              Contact Me
            </Button>
            <Button variant="outlined" href="#projects">
              View Projects
            </Button>
          </Box>
        </motion.div>
        <motion.div variants={fadeInUp} style={{ marginTop: theme.spacing(8) }}>
          <Box
            component="img"
            src="../../project/kanban.png"
            alt="Developer workspace with computer and code on screen"
            sx={{
              width: "100%",
              height: "auto",
              maxWidth: "75%",
              borderRadius: 2,
              mx: "auto",
              display: "block",
            }}
          />
        </motion.div>
      </Container>
    </motion.section>
  )
}

export default WrapperHero