"use client";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { Menu, MenuItem, useMediaQuery } from "@mui/material";
import { keyframes } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
import Tooltip from '@mui/material/Tooltip';

const glowing = keyframes`
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
`;

const AppHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { name: "<Home/>", href: "/" },
    { name: "<AboutMe/>", href: "#about" },
    { name: "<Experience/>", href: "/projects" },
    { name: "<Blogs/>", href: "/blogs" },
    { name: "<Projects/>", href: "/projects" },
  ];

  return (
    <AppBar
      sx={{
        bgcolor: "transparent!important",
        boxShadow: "none",
        backgroundImage: 'none',
        position: 'fixed',
        top: '20px',
        left: 0,
        zIndex: 999,
      }}
    >
      <Container maxWidth="lg" sx={{
        backgroundImage: 'linear-gradient(to bottom right, #1a1a29, rgb(27 27 40 / 0%))',
        backdropFilter: 'blur(10px)',
        borderRadius: '50px',
      }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: '0!important',
          }}
        >
          <Box
            component={"img"}
            src="https://picsum.photos/200/200"
            alt="Logo"
            sx={{ width: 40, height: 40, borderRadius: "50%" }}
          />

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                  sx: {
                    bgcolor: "#1a1a2e",
                    color: "white",
                  },
                }}
              >
                {menuItems.map((item) => (
                  <MenuItem key={item.name} onClick={handleClose}>
                    {item.name}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 4 }}>
              {menuItems.map((item) => (
                <Typography
                  key={item.name}
                  variant="body1"
                  component={Link}
                  href={item.href}
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    fontFamily: "monospace",
                    "&:hover": {
                      color: "#9c27b0",
                    },
                  }}
                >
                  {item.name}
                </Typography>
              ))}
            </Box>
          )}

          <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link
              href="https://drive.google.com/file/d/1oIYzKtMotMvK-WIMA2ZX4bp_MuVf6tpe/view"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Tooltip title="Dowload Resume" placement="bottom" arrow>
                <IconButton
                  aria-label="download"
                  sx={{
                    width: '40px',
                    height: '40px',
                    border: 'none',
                    outline: 'none',
                    color: '#fff',
                    // background: '#111',
                    background: 'linear-gradient(82.3deg, #965de9 10.8%, #6358ee 94.3%)',
                    cursor: 'pointer',
                    position: 'relative',
                    zIndex: 0,
                    borderRadius: '50%',
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
                      borderRadius: '50%',
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
                      borderRadius: '50%',
                    },
                  }}
                >
                  <CloudDownloadIcon
                    className="iconDownload"
                    sx={{ height: 20, width: 20 }}
                  />
                </IconButton>
              </Tooltip>
            </Link>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppHeader;
