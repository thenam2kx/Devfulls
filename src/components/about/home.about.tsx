import Box from '@mui/material/Box';
import { motion } from "framer-motion"
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HomeAbout = ({ ref, controls }: { ref: any, controls: any }) => {

  return (
    <motion.section id="about" ref={ref} initial="hidden" animate={controls} variants={staggerChildren}>
      <Grid container spacing={8}>
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div variants={fadeInUp}>
            <Typography variant="h3" gutterBottom>
              About Me
            </Typography>
            <Typography>
              I&apos;m a passionate full-stack developer with expertise in building modern web applications. With a
              strong foundation in both frontend and backend technologies, I create seamless, user-friendly
              experiences that solve real-world problems.
            </Typography>
            <Typography>
              My journey in software development began 5 years ago, and since then, I&apos;ve worked on various
              projects ranging from e-commerce platforms to complex enterprise applications.
            </Typography>
            <Typography>
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source
              projects, or sharing my knowledge through technical articles and mentoring.
            </Typography>
          </motion.div>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div variants={fadeInUp}>
            <Box
              component="img"
              src="../../../project/nestjs.png"
              alt="Developer portrait"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
                display: "block",
              }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </motion.section>
  )
}

export default HomeAbout