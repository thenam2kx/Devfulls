'use client'
import { Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { alpha } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { blogPost } from "./BlogDetail";

interface IProps {
  tableOfContents: { id: string; text: string; level: number }[];
  activeSection: string;
}

const SidebarBlog = (props: IProps) => {
  const { tableOfContents, activeSection } = props;

  const theme = useTheme();

  // Scroll to section when clicking on TOC item
    const scrollToSection = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 100,
          behavior: "smooth",
        });
      }
    };

    // Custom gradient colors
    const primaryGradient = `linear-gradient(135deg, ${
      theme.palette.primary.main
    } 0%, ${alpha(theme.palette.primary.main, 0.8)} 100%)`;
    const accentGradient = `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`;

  return (
    <>
      <Box
        component={Paper}
        elevation={4}
        sx={{
          p: 3,
          borderRadius: 4,
          position: "sticky",
          top: 100,
          mb: 4,
          background: `linear-gradient(135deg, ${alpha(
            theme.palette.background.paper,
            0.9
          )} 0%, ${alpha(theme.palette.background.paper, 0.7)} 100%)`,
          backdropFilter: "blur(10px)",
          border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: primaryGradient,
          },
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            position: "relative",
            pb: 2,
            mb: 3,
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              width: 40,
              height: 3,
              borderRadius: 1.5,
              bgcolor: theme.palette.primary.main,
            },
          }}
        >
          Table of Contents
        </Typography>

        <Box component="nav" aria-label="table of contents">
          <Stack spacing={1}>
            {tableOfContents.map((item) => (
              <Button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                sx={{
                  justifyContent: "flex-start",
                  pl: item.level === 3 ? 4 : 2,
                  py: 1,
                  borderRadius: 2,
                  color:
                    activeSection === item.text
                      ? theme.palette.primary.main
                      : theme.palette.text.secondary,
                  bgcolor:
                    activeSection === item.text
                      ? alpha(theme.palette.primary.main, 0.1)
                      : "transparent",
                  fontWeight: activeSection === item.text ? 600 : 400,
                  textTransform: "none",
                  transition: "all 0.2s ease",
                  borderLeft:
                    activeSection === item.text
                      ? `3px solid ${theme.palette.primary.main}`
                      : "3px solid transparent",
                  "&:hover": {
                    bgcolor: alpha(theme.palette.primary.main, 0.05),
                    color: theme.palette.primary.main,
                  },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: item.level === 3 ? "0.875rem" : "1rem",
                    fontWeight: "inherit",
                  }}
                >
                  {item.text}
                </Typography>
              </Button>
            ))}
          </Stack>
        </Box>
      </Box>

      {/* Related articles */}
      <Box
        component={Paper}
        elevation={4}
        sx={{
          p: 3,
          borderRadius: 4,
          position: "sticky",
          top: 350,
          background: `linear-gradient(135deg, ${alpha(
            theme.palette.background.paper,
            0.9
          )} 0%, ${alpha(theme.palette.background.paper, 0.7)} 100%)`,
          backdropFilter: "blur(10px)",
          border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: accentGradient,
          },
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            position: "relative",
            pb: 2,
            mb: 3,
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              width: 40,
              height: 3,
              borderRadius: 1.5,
              background: accentGradient,
            },
          }}
        >
          Related Articles
        </Typography>

        <Stack spacing={3}>
          {blogPost.relatedPosts.map((post) => (
            <Card
              key={post.id}
              sx={{
                boxShadow: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px) scale(1.02)",
                  boxShadow: 3,
                },
                bgcolor: "transparent",
                border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              <CardActionArea>
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={post.image}
                    alt={post.title}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      px: 1.5,
                      py: 0.5,
                      borderRadius: "4px",
                      bgcolor: alpha(theme.palette.common.black, 0.6),
                      backdropFilter: "blur(4px)",
                      color: "white",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                    }}
                  >
                    {post.category}
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "50%",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
                    }}
                  />
                </Box>
                <CardContent>
                  <Typography
                    variant="caption"
                    color="primary"
                    sx={{
                      fontWeight: 500,
                      display: "block",
                      mb: 0.5,
                    }}
                  >
                    {post.date} • By {post.author}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      lineHeight: 1.3,
                      mb: 1,
                      transition: "color 0.2s ease",
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {post.excerpt}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Stack>

        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            borderRadius: 2,
            py: 1.2,
            fontWeight: 600,
            textTransform: "none",
            background: accentGradient,
            boxShadow: `0 4px 14px ${alpha(theme.palette.primary.main, 0.4)}`,
            transition: "all 0.3s ease",
            "&:hover": {
              boxShadow: `0 6px 20px ${alpha(theme.palette.primary.main, 0.6)}`,
              transform: "translateY(-2px)",
            },
          }}
        >
          View All Articles
        </Button>
      </Box>
    </>
  );
};

export default SidebarBlog;
