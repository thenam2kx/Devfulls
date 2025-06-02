'use client'
import ProfileCard from '@/components/about/profile.card';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      },
    },
  };

  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 12, md: 16 },
        position: 'relative',
        overflow: 'hidden',
        background: theme.palette.background.default
      }}
      ref={ref}
    >
      {/* Decorative elements */}
      <Box
        component={motion.div}
        animate={{
          x: [0, 10, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: theme.palette.mode === 'light'
            ? 'linear-gradient(135deg, rgba(99,102,241,0.03) 0%, rgba(79,70,229,0.06) 100%)'
            : 'linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(79,70,229,0.12) 100%)',
          zIndex: 0,
        }}
      />

      <Box
        component={motion.div}
        animate={{
          x: [0, -15, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          width: '250px',
          height: '250px',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          background: theme.palette.mode === 'light'
            ? 'linear-gradient(135deg, rgba(99,102,241,0.03) 0%, rgba(79,70,229,0.06) 100%)'
            : 'linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(79,70,229,0.12) 100%)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="subtitle1"
                  color="secondary"
                  gutterBottom
                  fontWeight={500}
                  sx={{ mb: 1, letterSpacing: 3 }}
                >
                  ABOUT ME
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h2"
                  component="h2"
                  gutterBottom
                  fontWeight={700}
                  sx={{
                    fontSize: { xs: '2rem', md: '3rem' },
                    mb: 3,
                    letterSpacing: '-0.025em'
                  }}
                >
                  A Passionate Developer <br /> Creating Digital Excellence
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ mb: 2, fontSize: '1.1rem', lineHeight: 1.7 }}
                >
                  I&apos;m a dedicated full-stack developer with over 5 years of experience in building modern, responsive, and performant web applications. With expertise in both front-end and back-end technologies, I bridge the gap between design and functionality.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ mb: 2, fontSize: '1.1rem', lineHeight: 1.7 }}
                >
                  My journey in technology began with a deep curiosity about how digital products shape our daily lives. This curiosity has evolved into a passion for creating seamless user experiences that not only look beautiful but also function flawlessly.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.7 }}
                >
                  When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities to recharge my creative energy.
                </Typography>
              </motion.div>

              <Box
                component={motion.div}
                variants={itemVariants}
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 2,
                  mt: 3,
                }}
              >
                {[
                  { number: '5+', label: 'Years Experience' },
                  { number: '20+', label: 'Projects Completed' },
                  { number: '15+', label: 'Happy Clients' }
                ].map((item, index) => (
                  <Paper
                    key={index}
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 4,
                      textAlign: 'center',
                      flex: { xs: '1 0 40%', sm: '1 0 25%' },
                      background: theme.palette.mode === 'light'
                        ? 'rgba(255, 255, 255, 0.8)'
                        : 'rgba(30, 41, 59, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)'}`,
                    }}
                  >
                    <Typography
                      variant="h4"
                      color="secondary"
                      sx={{ fontWeight: 700, mb: 1 }}
                    >
                      {item.number}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.label}
                    </Typography>
                  </Paper>
                ))}
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              {/* <Box
                component={motion.div}
                variants={itemVariants}
                sx={{
                  position: 'relative',
                  borderRadius: 4,
                  overflow: 'hidden',
                  height: { xs: '400px', md: '500px' },
                  boxShadow: theme.palette.mode === 'light'
                    ? '0px 25px 50px -12px rgba(0, 0, 0, 0.15)'
                    : '0px 25px 50px -12px rgba(0, 0, 0, 0.5)',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    height: '100%',
                    width: '100%',
                    background: 'url(https://images.pexels.com/photos/4064826/pexels-photo-4064826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750) center center / cover no-repeat',
                  }}
                  component={motion.div}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />

                <Paper
                  component={motion.div}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  elevation={6}
                  sx={{
                    position: 'absolute',
                    bottom: 30,
                    right: -20,
                    width: { xs: '80%', md: '60%' },
                    padding: 3,
                    borderRadius: 3,
                    background: theme.palette.mode === 'light' 
                      ? 'rgba(255, 255, 255, 0.9)' 
                      : 'rgba(30, 41, 59, 0.9)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Typography variant="h5" gutterBottom fontWeight={600}>
                    John Doe
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Full-Stack Developer specializing in React, Next.js, and Node.js ecosystems.
                  </Typography>
                  <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                    Creating digital experiences that blend beauty with functionality.
                  </Typography>
                </Paper>
              </Box> */}

              <ProfileCard
                name="Javi A. Torres"
                title="Software Engineer"
                handle="javicodes"
                status="Online"
                contactText="Contact Me"
                grainUrl='https://www.reactbits.dev/assets/grain.webp'
                iconUrl='https://www.reactbits.dev/assets/iconpattern.png'
                avatarUrl="https://www.reactbits.dev/assets/person.png"
                showUserInfo={true}
                enableTilt={true}
                onContactClick={() => console.log('Contact clicked')}
              />
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}