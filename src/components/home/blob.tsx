'use client'
import Box from '@mui/material/Box';
import { keyframes } from '@emotion/react';

const breath = keyframes`
  0% { opacity: .3; }
  100% { opacity: 1; }
`;

const BlobAnimate = () => {
  return (
    <Box sx={{
      position: 'absolute',
      right: '-15%',
      top: 0,
      zIndex: 10,
      backgroundColor: '#cf59e6',
      width: '600px',
      height: '100vh',
      filter: 'blur(300px)',
      opacity: '.3',
      animation: `1s linear infinite alternate-reverse ${breath}`,
    }} />
  )
}

export default BlobAnimate