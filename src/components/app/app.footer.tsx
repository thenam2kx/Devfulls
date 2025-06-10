"use client"
import { Box, Container, Typography, Link as MuiLink, Divider, useMediaQuery } from "@mui/material"
import Link from "next/link"
import { styled, useTheme } from "@mui/material/styles"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"
import Grid from "@mui/material/Grid"

// Styled components
const FooterLink = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
  display: "block",
  "&:hover": {
    color: theme.palette.text.primary,
  },
}))

const ResourceLink = styled(Box)(({ theme }) => ({
  color: theme.palette.text.secondary,
  width: 'fit-content',
  padding: theme.spacing(1.5, 2),
  borderRadius: '6px',
  border: `1px solid ${theme.palette.divider}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: theme.spacing(2),
  transition: "all 0.2s ease",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}))

const NewBadge = styled(Box)(({ theme }) => ({
  backgroundColor: "#1A1A1A",
  color: theme.palette.text.primary,
  fontSize: "0.75rem",
  padding: theme.spacing(0.5, 2),
  border: '1px solid',
  borderRadius: '6px',
  borderImageSlice: 1,
  borderImageSource: `linear-gradient(45deg, #262626 36%, #FFD119 100%)`,
  marginLeft: theme.spacing(1),
  display: "inline-flex",
  alignItems: "center",
}))

// Footer component
const AppFooter = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const isTablet = useMediaQuery(theme.breakpoints.down("md"))

  const mainLinks = [
    { title: "Features", href: "/features" },
    { title: "Blogs", href: "/blogs" },
    { title: "Resources", href: "/resources", isNew: true },
    { title: "Testimonials", href: "/testimonials" },
    { title: "Contact Us", href: "/contact" },
    { title: "Newsletter", href: "/newsletter" },
  ]

  const contentLinks = [
    { title: "Trending Stories", href: "/trending", isNew: false },
    { title: "Featured Videos", href: "/videos", isNew: false },
    { title: "Technology", href: "/technology", isNew: false },
    { title: "Health", href: "/health", isNew: false },
    { title: "Politics", href: "/politics", isNew: false },
    { title: "Environment", href: "/environment", isNew: false },
  ]

  const techLinks = [
    { title: "Quantum Computing", href: "/quantum-computing" },
    { title: "AI Ethics", href: "/ai-ethics" },
    { title: "Space Exploration", href: "/space" },
    { title: "Biotechnology", href: "/biotechnology", isNew: true },
    { title: "Renewable Energy", href: "/renewable-energy" },
    { title: "Biohacking", href: "/biohacking" },
  ]

  const aiLinks = [
    { title: "AI Revolution", href: "/ai-revolution", isNew: true },
    { title: "TechTalk AI", href: "/techtalk-ai" },
    { title: "AI Conversations", href: "/ai-conversations" },
  ]

  const resourceLinks = [
    { title: "Whitepapers", href: "/whitepapers" },
    { title: "Ebooks", href: "/ebooks" },
    { title: "Reports", href: "/reports" },
    { title: "Research Papers", href: "/research-papers" },
  ]

  // Responsive grid configuration
  const getGridSize = (section: string) => {
    if (isMobile) {
      return 12
    }
    if (isTablet) {
      return section === "resources" ? 12 : 6
    }
    // Desktop sizes
    if (section === "main") return 2.4
    if (section === "content") return 2.4
    if (section === "tech") return 2.4
    if (section === "ai") return 2.4
    if (section === "resources") return 2.4
    return 2
  }

  return (
    <Box component="footer" sx={{ pt: 6, pb: 4, backgroundColor: theme.palette.background.default }}>
      <Divider sx={{ borderColor: theme.palette.divider, mb: 5 }} />
      <Container maxWidth="xl">
        <Grid container spacing={isMobile ? 4 : 6}>
          {/* Main Links */}
          <Grid size={getGridSize("main")}>
            <Typography sx={{ mb: 4, color: theme.palette.text.primary, fontSize: "1rem" }}>
              Home
            </Typography>
            {mainLinks.map((link) => (
              <Link key={link.title} href={link.href} passHref legacyBehavior>
                <MuiLink underline="none" component="a">
                  <FooterLink variant="body2" sx={{ display: "flex", alignItems: "center" }}>
                    {link.title}
                    {link.isNew && (
                      <NewBadge as="span" ml={1}>
                        New
                      </NewBadge>
                    )}
                  </FooterLink>
                </MuiLink>
              </Link>
            ))}
          </Grid>

          {/* Content Links */}
          <Grid size={getGridSize("content")}>
            <Typography sx={{ mb: 4, color: theme.palette.text.primary, fontSize: "1rem" }}>
              News
            </Typography>
            {contentLinks.map((link) => (
              <Link key={link.title} href={link.href} passHref legacyBehavior>
                <MuiLink underline="none" component="a">
                  <FooterLink variant="body2" sx={{ display: "flex", alignItems: "center" }}>
                    {link.title}
                    {link?.isNew && (
                      <NewBadge as="span" ml={1}>
                        New
                      </NewBadge>
                    )}
                  </FooterLink>
                </MuiLink>
              </Link>
            ))}
          </Grid>

          {/* Tech Links */}
          <Grid size={getGridSize("tech")}>
            <Typography sx={{ mb: 4, color: theme.palette.text.primary, fontSize: "1rem" }}>
              Blogs
            </Typography>
            {techLinks.map((link) => (
              <Link key={link.title} href={link.href} passHref legacyBehavior>
                <MuiLink underline="none" component="a">
                  <FooterLink variant="body2" sx={{ display: "flex", alignItems: "center" }}>
                    {link.title}
                    {link.isNew && (
                      <NewBadge as="span" ml={1}>
                        New
                      </NewBadge>
                    )}
                  </FooterLink>
                </MuiLink>
              </Link>
            ))}
          </Grid>

          {/* AI Links */}
          <Grid size={getGridSize("ai")}>
            <Typography sx={{ mb: 4, color: theme.palette.text.primary, fontSize: "1rem" }}>
              Podcasts
            </Typography>
            {aiLinks.map((link) => (
              <Link key={link.title} href={link.href} passHref legacyBehavior>
                <MuiLink underline="none" component="a">
                  <FooterLink variant="body2" sx={{ display: "flex", alignItems: "center" }}>
                    {link.title}
                    {link.isNew && (
                      <NewBadge as="span" ml={1}>
                        New
                      </NewBadge>
                    )}
                  </FooterLink>
                </MuiLink>
              </Link>
            ))}
          </Grid>

          {/* Resource Links */}
          <Grid size={getGridSize("resources")}>
            <Typography sx={{ mb: 4, color: theme.palette.text.primary, fontSize: "1rem" }}>
              Resources
            </Typography>
            {resourceLinks.map((link) => (
              <Link key={link.title} href={link.href} passHref legacyBehavior>
                <MuiLink underline="none" component="a">
                  <ResourceLink>
                    <Typography variant="body2">{link.title}</Typography>
                    <ArrowOutwardIcon sx={{ color: theme.palette.primary.main, fontSize: "1rem" }} />
                  </ResourceLink>
                </MuiLink>
              </Link>
            ))}
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: theme.palette.divider }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 2 : 0,
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link href="/terms" passHref legacyBehavior>
              <MuiLink underline="none" component="a">
                <Typography variant="body2" color="text.secondary">
                  Terms & Conditions
                </Typography>
              </MuiLink>
            </Link>
            <Typography variant="body2" color="text.secondary">
              |
            </Typography>
            <Link href="/privacy" passHref legacyBehavior>
              <MuiLink underline="none" component="a">
                <Typography variant="body2" color="text.secondary">
                  Privacy Policy
                </Typography>
              </MuiLink>
            </Link>
          </Box>
          <Typography variant="body2" color="text.secondary">
            © 2024 FutureTech. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default AppFooter
