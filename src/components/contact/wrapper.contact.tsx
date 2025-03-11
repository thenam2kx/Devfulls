import Grid from "@mui/material/Grid2";
import Container from '@mui/material/Container';
import { motion } from "framer-motion"
import Typography from '@mui/material/Typography';
import useTheme from '@mui/material/styles/useTheme';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Mail from '@mui/icons-material/Mail';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import ContactForm from '@/components/contact/contact.form';
import { fadeInUp, staggerChildren } from "../home/home.page";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WrapperContact = ({ ref, controls }: { ref: any, controls: any }) => {
  const theme = useTheme()
  return (
    <motion.section
      id="contact"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerChildren}
      style={{ backgroundColor: theme.palette.background.default }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h3" gutterBottom>
                Get In Touch
              </Typography>
              <Typography paragraph>
                I&apos;m currently open to new opportunities and collaborations. Feel free to reach out if you have a
                project in mind or just want to connect!
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <GitHub sx={{ mr: 2 }} />
                  <Link
                    href="https://github.com/thenam2kx"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: theme.palette.primary.main }}
                  >
                    github.com/thenam2kx
                  </Link>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Mail sx={{ mr: 2 }} />
                  <Link href="mailto:thenam2kx@gmail.com" style={{ color: theme.palette.primary.main }}>
                    thenam2kx@gmail.com
                  </Link>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <LinkedIn sx={{ mr: 2 }} />
                  <Link
                    href="https://www.linkedin.com/in/the-nam-726095248"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: theme.palette.primary.main }}
                  >
                    linkedin.com/in/the-nam-726095248
                  </Link>
                </Box>
              </Box>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div variants={fadeInUp}>
              <ContactForm />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </motion.section>
  )
}

export default WrapperContact