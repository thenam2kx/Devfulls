import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { alpha, useTheme } from "@mui/material/styles";
import { blogPost } from "./BlogDetail";

const NextPrevNav = () => {
  const theme = useTheme();

  return (
    <Box sx={{ mt: 8, mb: 6 }}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Link
            href={blogPost.previousPost.slug}
            style={{ textDecoration: "none" }}
          >
            <Paper
              sx={{
                p: 3,
                height: "100%",
                borderRadius: 3,
                transition: "all 0.3s ease",
                border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 4,
                  bgcolor: alpha(theme.palette.primary.main, 0.02),
                },
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="caption" color="text.secondary" gutterBottom>
                Previous Article
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <ArrowBackIcon fontSize="small" color="primary" />
                <Typography
                  variant="subtitle1"
                  fontWeight="medium"
                  color="text.primary"
                >
                  {blogPost.previousPost.title}
                </Typography>
              </Stack>
            </Paper>
          </Link>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Link
            href={blogPost.nextPost.slug}
            style={{ textDecoration: "none" }}
          >
            <Paper
              sx={{
                p: 3,
                height: "100%",
                borderRadius: 3,
                transition: "all 0.3s ease",
                border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 4,
                  bgcolor: alpha(theme.palette.primary.main, 0.02),
                },
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                textAlign: "right",
              }}
            >
              <Typography variant="caption" color="text.secondary" gutterBottom>
                Next Article
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography
                  variant="subtitle1"
                  fontWeight="medium"
                  color="text.primary"
                >
                  {blogPost.nextPost.title}
                </Typography>
                <ArrowForwardIcon fontSize="small" color="primary" />
              </Stack>
            </Paper>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NextPrevNav;
