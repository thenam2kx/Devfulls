import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Fade from "@mui/material/Fade";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";
import { blogPost } from "./BlogDetail";
import AuthorBlog from "./author.blog";


const HeaderBlogDetail = () => {
  const theme = useTheme();
  const isLoading = false;

  const accentGradient = `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`;
  const primaryGradient = `linear-gradient(135deg, ${
      theme.palette.primary.main
    } 0%, ${alpha(theme.palette.primary.main, 0.8)} 100%)`;

  return (
    <Box sx={{ mb: { xs: 4, md: 8 } }}>
      {isLoading ? (
        <>
          <Skeleton variant="text" sx={{ height: 60, mb: 1, width: "80%" }} />
          <Skeleton variant="text" sx={{ height: 30, mb: 3, width: "60%" }} />
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <Skeleton variant="circular" width={56} height={56} />
            <Box sx={{ width: "100%" }}>
              <Skeleton variant="text" sx={{ height: 20, width: "30%" }} />
              <Skeleton variant="text" sx={{ height: 16, width: "20%" }} />
            </Box>
          </Stack>
          <Stack direction="row" spacing={1} sx={{ mb: 4 }}>
            <Skeleton variant="rounded" width={100} height={30} />
            <Skeleton variant="rounded" width={80} height={30} />
            <Skeleton variant="rounded" width={120} height={30} />
          </Stack>
        </>
      ) : (
        <Fade in={true} timeout={1000}>
          <Box>
            <Box
              sx={{
                display: "inline-block",
                px: 2,
                py: 0.5,
                mb: 2,
                borderRadius: "4px",
                background: primaryGradient,
                color: "white",
                fontWeight: 500,
                fontSize: "0.875rem",
                boxShadow: `0 2px 10px ${alpha(
                  theme.palette.primary.main,
                  0.3
                )}`,
                transform: "translateY(0)",
                transition: "transform 0.2s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                },
              }}
            >
              {blogPost.categories[0]}
            </Box>

            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                background: accentGradient,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                mb: 2,
                textShadow: `0 10px 30px ${alpha(
                  theme.palette.primary.main,
                  0.2
                )}`,
              }}
            >
              {blogPost.title}
            </Typography>

            <Typography
              variant="h2"
              component="p"
              sx={{
                fontSize: { xs: "1.25rem", md: "1.5rem" },
                fontWeight: 400,
                color: alpha(theme.palette.text.primary, 0.8),
                mb: 4,
                maxWidth: "90%",
              }}
            >
              {blogPost.subtitle}
            </Typography>

            <AuthorBlog />

            <Stack
              direction="row"
              spacing={1}
              sx={{
                mb: 4,
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              {blogPost.tags.map((tag) => (
                <Chip
                  key={tag}
                  label={`#${tag}`}
                  size="small"
                  clickable
                  sx={{
                    borderRadius: "4px",
                    fontWeight: 500,
                    bgcolor: alpha(theme.palette.background.paper, 0.7),
                    backdropFilter: "blur(4px)",
                    border: `1px solid ${alpha(
                      theme.palette.primary.main,
                      0.1
                    )}`,
                    color: theme.palette.text.secondary,
                    transition: "all 0.2s ease",
                    "&:hover": {
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                      color: theme.palette.primary.main,
                      transform: "translateY(-2px)",
                    },
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Fade>
      )}
    </Box>
  );
};

export default HeaderBlogDetail;
