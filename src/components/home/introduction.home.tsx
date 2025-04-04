import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Introduction = () => {

  return (
    <Box component='section' sx={{ position: 'relative', my: { xs: 5, md: 9 } }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 9 }}>
          <Typography sx={{
            alignItems: { xs: 'center', md: 'left' },
            fontSize: '32px',
            fontWeight: 500
          }}>
            LET ME <span style={{ color: '#FF4081' }}> INTRODUCE </span> MYSELF
          </Typography>

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            mt: '28px'
          }}>
            <Typography variant='body1'>
              I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
            </Typography>
            <Typography variant='body1'>
            I am fluent in classics like
              <i>
                <b style={{ color: '#FF4081' }}> PHP and Javascript. </b>
              </i>
            </Typography>
            <Typography variant='body1'>
            My field of Interest&apos;s are building new &nbsp;
              <i>
                <b style={{ color: '#FF4081' }}>Web Technologies and Products</b>
              </i>
            </Typography>
            <Typography variant='body1'>
              Whenever possible, I also apply my passion for developing products with
              <i>
                <b style={{ color: '#FF4081' }}>&nbsp;Express </b>
              </i>
              and
              <i>
                <b style={{ color: '#FF4081' }}> Node.js</b>
              </i>
            </Typography>
          </Box>
        </Grid>

        <Grid size={3} sx={{ display: { xs: 'none', md: 'block' } }}>
          {/* <Tilt> */}
            <Box component={'img'} src={'http://localhost:3000/avatar.svg'} style={{ maxWidth: '100%' }} alt='avatar' />
          {/* </Tilt> */}
        </Grid>
      </Grid>

      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          mt: 2,
          flexDirection: 'column',
          alignItems: 'center',
          position: 'absolute',
          right: '-50px',
          top: '50px'
        }}
      >
        <Typography
          variant='h6'
          sx={{
            backgroundColor: '#1a1443',
            width: 'fit-content',
            color: 'white',
            transform: 'rotate(90deg)',
            padding: '0.5rem 1.25rem',
            fontSize: '1.25rem',
            borderRadius: '0.375rem',
            textTransform: 'uppercase'
          }}
        >
            About me
        </Typography>
        <Box sx={{
          height:'9rem',
          width: '2px',
          backgroundColor: '#1a1443'
        }}/>
      </Box>
    </Box>
  )
}

export default Introduction