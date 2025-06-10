'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Alert,
  Snackbar,
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Send as SendIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslations } from 'next-intl';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionPaper = motion(Paper);
const MotionButton = motion(Button);

export default function ContactSection() {
  const t = useTranslations('contact');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.99] }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation
    if (!name || !email || !message) {
      setSnackbar({
        open: true,
        message: 'Please fill out all fields',
        severity: 'error'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSnackbar({
        open: true,
        message: 'Please enter a valid email address',
        severity: 'error'
      });
      return;
    }

    // In a real application, you would send this data to your backend
    console.log({ name, email, message });

    // Success message
    setSnackbar({
      open: true,
      message: 'Message sent successfully! I will get back to you soon.',
      severity: 'success'
    });

    // Reset form
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleCloseSnackbar = () => {
    setSnackbar({
      ...snackbar,
      open: false
    });
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 5, md: 10 },
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, rgba(10, 10, 10, 0.8) 0%, rgba(30, 30, 30, 0.8) 100%)'
            : 'linear-gradient(135deg, rgba(245, 247, 250, 0.8) 0%, rgba(228, 234, 252, 0.8) 100%)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.05,
          zIndex: 0,
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <MotionBox
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <MotionTypography
            variant="h2"
            align="center"
            gutterBottom
            variants={itemVariants}
            sx={{
              fontWeight: 700,
              width: '100%',
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '60px',
                height: '4px',
                bottom: '-10px',
                left: 'calc(50% - 30px)',
                backgroundColor: 'primary.main',
                borderRadius: '2px',
              }
            }}
          >
            {t('title')}
          </MotionTypography>

          <MotionTypography
            variant="h6"
            color="text.secondary"
            align="center"
            sx={{ maxWidth: '700px', mx: 'auto', mt: 2, mb: 8 }}
            variants={itemVariants}
          >
            {t('description')}
          </MotionTypography>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 5 }}>
              <MotionPaper
                variants={itemVariants}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: (theme) =>
                    theme.palette.mode === 'dark'
                      ? '0 10px 30px rgba(0, 0, 0, 0.3)'
                      : '0 10px 30px rgba(0, 0, 0, 0.05)',
                }}
              >
                <Box>
                  <Typography variant="h4" gutterBottom fontWeight={600}>
                    {t('talk.title')}
                  </Typography>

                  <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
                    {t('talk.description')}
                  </Typography>
                </Box>

                <Box sx={{ mt: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box sx={{
                      mr: 2,
                      backgroundColor: 'primary.main',
                      borderRadius: '50%',
                      width: 40,
                      height: 40,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'primary.contrastText'
                    }}>
                      <EmailIcon />
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        {t('info.email')}
                      </Typography>
                      <Typography variant="body1" fontWeight={500}>
                        thenam2kx@gmail.com
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box sx={{
                      mr: 2,
                      backgroundColor: 'primary.main',
                      borderRadius: '50%',
                      width: 40,
                      height: 40,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'primary.contrastText'
                    }}>
                      <PhoneIcon />
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        {t('info.phone')}
                      </Typography>
                      <Typography variant="body1" fontWeight={500}>
                        +84 0363 560 798
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{
                      mr: 2,
                      backgroundColor: 'primary.main',
                      borderRadius: '50%',
                      width: 40,
                      height: 40,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'primary.contrastText'
                    }}>
                      <LocationIcon />
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        {t('info.address')}
                      </Typography>
                      <Typography variant="body1" fontWeight={500}>
                        San Francisco, CA
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </MotionPaper>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <MotionPaper
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
                component="form"
                onSubmit={handleSubmit}
                variants={itemVariants}
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: 3,
                  boxShadow: (theme) =>
                    theme.palette.mode === 'dark'
                      ? '0 10px 30px rgba(0, 0, 0, 0.3)'
                      : '0 10px 30px rgba(0, 0, 0, 0.05)',
                }}
              >
                <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mb: 3 }}>
                  {t('form.title')}
                </Typography>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      required
                      fullWidth
                      label={t('placeholder.name')}
                      variant="outlined"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      sx={{ mb: { xs: 0, sm: 2 } }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      required
                      fullWidth
                      label={t('placeholder.email')}
                      variant="outlined"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      sx={{ mb: { xs: 0, sm: 2 } }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <TextField
                      required
                      fullWidth
                      label={t('placeholder.message')}
                      variant="outlined"
                      multiline
                      rows={6}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      sx={{ mb: 3 }}
                    />
                  </Grid>
                </Grid>
                <MotionButton
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<SendIcon />}
                  fullWidth
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  sx={{ py: 1.5 }}
                >
                  {t('form.submit')}
                </MotionButton>
              </MotionPaper>
            </Grid>
          </Grid>
        </MotionBox>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity === 'success' ? 'success' : 'error'}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}