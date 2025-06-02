"use client"

import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { styled } from "@mui/material/styles"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import IconButton from "@mui/material/IconButton"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"
import { useTranslations } from "next-intl"
import { useMemo, useState } from "react"
import LanguageSwitcher from "../header/language.switch"

// Custom styled components using theme
const NotificationBar = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  padding: "8px 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderBottom: `1px solid ${theme.palette.custom.notificationBorder}`,
  [theme.breakpoints.down("sm")]: {
    padding: "6px 16px",
    textAlign: "center",
  },
}))

const NavLink = styled(Typography)(({ theme }) => ({
  margin: "0 16px",
  color: theme.palette.custom.inactiveLink,
  cursor: "pointer",
  "&.active": {
    color: theme.palette.custom.activeLink,
  },
  "&:hover": {
    color: theme.palette.custom.activeLink,
  },
  [theme.breakpoints.down("md")]: {
    margin: "0 8px",
  },
}))

const ContactButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontWeight: "bold",
  padding: "8px 24px",
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    backgroundColor: theme.palette.custom.buttonHover,
  },
  [theme.breakpoints.down("sm")]: {
    padding: "6px 16px",
    fontSize: "0.875rem",
  },
}))

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Logo = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
}))

const LogoIcon = styled("div")(({ theme }) => ({
  width: "36px",
  height: "36px",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    border: `3px solid ${theme.palette.background.default}`,
    borderTopColor: "transparent",
    borderLeftColor: "transparent",
    transform: "rotate(45deg)",
  },
  [theme.breakpoints.down("sm")]: {
    width: "30px",
    height: "30px",
    "&::before": {
      width: "20px",
      height: "20px",
    },
  },
}))

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
}))


const AppHeader = () => {
  const pathname = usePathname()
  const theme = useTheme()
  const t = useTranslations('header');
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"))
  const [mobileOpen, setMobileOpen] = useState(false)

  // Navigation links
const navItems = useMemo(() => [
  { name: t("menu.home"), href: "/" },
  { name: t("menu.about"), href: "/about" },
  { name: t("menu.contact"), href: "/contact" },
  { name: t("menu.blog"), href: "/blog" },
  { name: t("menu.resources"), href: "/resources" },
  { name: t("menu.services"), href: "/services" },
], [t])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box sx={{ width: 250, backgroundColor: theme.palette.background.default, height: "100%" }} onClick={handleDrawerToggle}>
      <DrawerHeader>
        <Logo>
          <LogoIcon />
          <Typography variant="h6" sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
            Devfulls
          </Typography>
        </Logo>
        <IconButton onClick={handleDrawerToggle} sx={{ color: theme.palette.text.primary }} aria-label="close menu">
          <CloseIcon />
        </IconButton>
      </DrawerHeader>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <Link href={item.href} style={{ width: "100%", textDecoration: "none" }} onClick={handleDrawerToggle}>
              <ListItemButton selected={pathname === item.href}>
                <ListItemText
                  primary={item.name}
                  sx={{
                    color: pathname === item.href ? theme.palette.custom.activeLink : theme.palette.custom.inactiveLink,
                    "& .MuiListItemText-primary": {
                      fontWeight: pathname === item.href ? 600 : 400,
                    },
                  }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
        <ListItem sx={{ mt: 2, px: 2 }}>
          <ContactButton fullWidth variant="contained" disableElevation>
            {t("btn.contact")}
          </ContactButton>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <>
      <NotificationBar>
        <Typography
          variant={isSmall ? "caption" : "body2"}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: isSmall ? "wrap" : "nowrap",
          }}
        >
          Subscribe to me Newsletter For New & latest Blogs and Resources
          <ArrowOutwardIcon sx={{ ml: 1, fontSize: isSmall ? "0.8rem" : "1rem" }} />
        </Typography>
      </NotificationBar>
      <AppBar position="static" sx={{ backgroundColor: theme.palette.background.default, boxShadow: "none", backgroundImage: "none" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Link href="/" passHref style={{ textDecoration: "none", color: "inherit" }}>
              <Logo>
                <LogoIcon />
                <Typography
                  variant={isSmall ? "subtitle1" : "h6"}
                  noWrap
                  sx={{
                    fontWeight: 700,
                    color: theme.palette.text.primary,
                  }}
                >
                  Devfulls
                </Typography>
              </Logo>
            </Link>

            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ ml: 2 }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <>
                <Box sx={{ display: "flex", justifyContent: "center", flex: 1 }}>
                  {navItems.map((item) => (
                    <Link key={item.name} href={item.href} passHref style={{ textDecoration: "none" }}>
                      <NavLink variant="body1" className={pathname === item.href ? "active" : ""}>
                        {item.name}
                      </NavLink>
                    </Link>
                  ))}
                </Box>

                <LanguageSwitcher />

                <ContactButton variant="contained" disableElevation sx={{ ml: 2 }}>
                  {t("btn.contact")}
                </ContactButton>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 250,
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}

export default AppHeader
