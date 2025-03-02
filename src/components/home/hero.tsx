'use client'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Settings from '@mui/icons-material/Settings';
import BlobAnimate from '@/components/home/blob';
import { keyframes } from '@emotion/react';
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];


const glowing = keyframes`
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
`;

const authorAnimation = keyframes`
  0% {
    text-shadow: 0 0 5px #ff005e, 0 0 10px #ff005e, 0 0 20px #ff005e, 0 0 40px #ff005e, 0 0 80px #ff005e;
  }
  100% {
    text-shadow: 0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 40px #00d4ff, 0 0 80px #00d4ff, 0 0 160px #00d4ff;
  }
`;

const typingAnimate = keyframes`
  0.0000%, 27.3488% { content: ""; }
  1.1395%, 26.2093% { content: "d"; }
  2.2791%, 25.0698% { content: "de"; }
  3.4186%, 23.9302% { content: "dev"; }
  4.5581%, 22.7907% { content: "deve"; }
  5.6977%, 21.6512% { content: "devel"; }
  6.8372%, 20.5116% { content: "develo"; }
  7.9767%, 19.3721% { content: "develop"; }
  9.1163%, 18.2326% { content: "develope"; }
  10.2558%, 17.0930% { content: "developer"; }

  30.7674%, 51.2791% { content: ""; }
  31.9070%, 50.1395% { content: "w"; }
  33.0465%, 49.0000% { content: "wr"; }
  34.1860%, 47.8605% { content: "wri"; }
  35.3256%, 46.7209% { content: "writ"; }
  36.4651%, 45.5814% { content: "write"; }
  37.6047%, 44.4419% { content: "writer"; }

  54.6977%, 75.2093% { content: ""; }
  55.8372%, 74.0698% { content: "r"; }
  56.9767%, 72.9302% { content: "re"; }
  58.1163%, 71.7907% { content: "rea"; }
  59.2558%, 70.6512% { content: "read"; }
  60.3953%, 69.5116% { content: "reade"; }
  61.5349%, 68.3721% { content: "reader"; }

  78.6279%, 96.8605% { content: ""; }
  79.7674%, 95.7209% { content: "h"; }
  80.9070%, 94.5814% { content: "hu"; }
  82.0465%, 93.4419% { content: "hum"; }
  83.1860%, 92.3023% { content: "huma"; }
  84.3256%, 91.1628% { content: "human"; }
`;

const blinkTypingAnimate = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const Hero = () => {
  return (
    <Box component={'section'} sx={{
      height: 'calc(100vh - 64px)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Container maxWidth={'lg'} sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <Box>
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontFamily: "monospace",
              mb: 1,
              fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
            }}
          >
            Hello(); I&apos;m
          </Typography>

          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: '#fff',
              textShadow: '0 0 5px #ff005e, 0 0 10px #ff005e, 0 0 20px #ff005e, 0 0 40px #ff005e, 0 0 80px #ff005e',
              animation: `${authorAnimation} 1.5s infinite alternate`,
              mb: 2,
              fontWeight: 500,
              fontSize: { xs: "3rem", sm: "4rem", md: "5rem" },
            }}
          >
            The Nam.
          </Typography>

          <Typography sx={{
            mb: 3,
            display: 'flex',
            alignItems: 'center',
            fontSize: { xs: "1.8rem", sm: "2.5rem", md: "4rem" },
          }}>
            I&apos;m a&nbsp;
            <Typography
              variant="h3"
              component="div"
              sx={{
                color: '#cf59e6',
                fontSize: { xs: "1.8rem", sm: "2.5rem", md: "4rem" },
                '&:before': {
                  content: '""',
                  animation: `${typingAnimate} 13.5s infinite`,
                },
                '&:after': {
                  content: '""',
                  borderRight: '1px solid blue',
                  animation: `${blinkTypingAnimate} 0.5s linear infinite`,
                }
              }}
            >
            </Typography>
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Typography component="div" sx={{ fontFamily: "monospace", fontSize: "1.5rem" }}>
              I am a{" "}
              <Typography component="span" sx={{ color: "#f44336", fontWeight: "bold", fontSize: "inherit" }}>
                Full-Stack Developer
              </Typography>{" "}
              and have diverse experience working
              <br />
              with over{" "}
              <Typography component="span" sx={{ color: "#2196f3", fontWeight: "bold", fontSize: "inherit" }}>
                5+
              </Typography>{" "}
              clients {" "}
              <br />I also have started working on{" "}
              <Typography component="span" sx={{ color: "#4caf50", fontWeight: "bold", fontSize: "inherit" }}>
                App-Dev
              </Typography>{" "}
              recently!
              <br />
              Stay Tuned for More Projects.
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Button
              variant="contained"
              sx={{
                width: 'auto',
                height: '40px',
                border: 'none',
                outline: 'none',
                color: '#fff',
                // background: '#111',
                background: 'linear-gradient(82.3deg, #965de9 10.8%, #6358ee 94.3%)',
                cursor: 'pointer',
                position: 'relative',
                zIndex: 0,
                borderRadius: '8px',
                '&:before': {
                  content: '""',
                  background: 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
                  position: 'absolute',
                  top: '-2px',
                  left:'-2px',
                  backgroundSize: '400%',
                  zIndex: '-1',
                  filter: 'blur(5px)',
                  width: 'calc(100% + 4px)',
                  height: 'calc(100% + 4px)',
                  animation: `${glowing} 20s linear infinite`,
                  opacity: 0,
                  transition: 'opacity .3s ease-in-out',
                  borderRadius: '8px',
                },
                '&:active': {
                  color: '#000'
                },
                '&:active:after': {
                  background: 'transparent',
                },
                '&:hover:before': {
                  opacity: 1,
                },
                '&:after': {
                  content: '""',
                  zIndex: '-1',
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  // background: '#111',
                  background: 'linear-gradient(82.3deg, #965de9 10.8%, #6358ee 94.3%)',
                  left: 0,
                  top: 0,
                  borderRadius: '8px',
                },
              }}
              size='large'
              startIcon={<CloudDownloadIcon className="iconDownload" sx={{ height: 20, width: 20 }} />}
            >
              Let&apos;s Talk
            </Button>

            <SpeedDial
              ariaLabel="setting"
              icon={<Settings />}
              direction='right'
              sx={{
                '& .MuiSpeedDial-fab': {
                  height: '40px',
                  width: '40px',
                  bgcolor: "rgba(255,255,255,0.1)",
                  color: 'white'
                },
              }}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                />
              ))}
            </SpeedDial>
          </Box>
        </Box>
      </Container>

      <BlobAnimate />
    </Box>
  )
}

export default Hero