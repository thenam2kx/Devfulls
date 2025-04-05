import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { alpha, useTheme } from "@mui/material/styles";
import { blogPost } from "./BlogDetail";

const AuthorBioBlog = () => {
  const theme = useTheme()
  const primaryGradient = `linear-gradient(135deg, ${
      theme.palette.primary.main
    } 0%, ${alpha(theme.palette.primary.main, 0.8)} 100%)`;

  return (
    <Paper
      elevation={4}
      sx={{
        p: 4,
        mt: 8,
        mb: 6,
        borderRadius: 4,
        background: `linear-gradient(135deg, ${alpha(
          theme.palette.background.paper,
          0.9
        )} 0%, ${alpha(theme.palette.background.paper, 0.7)} 100%)`,
        backdropFilter: "blur(10px)",
        border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: 6,
          height: "100%",
          background: primaryGradient,
        },
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={4}
        alignItems="center"
      >
        <Avatar
          src={blogPost.author.avatar}
          alt={blogPost.author.name}
          sx={{
            width: 100,
            height: 100,
            border: `3px solid ${theme.palette.primary.main}`,
            boxShadow: `0 0 0 4px ${alpha(theme.palette.primary.main, 0.2)}`,
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: `0 0 0 6px ${alpha(theme.palette.primary.main, 0.3)}`,
            },
          }}
        />
        <Box>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            About {blogPost.author.name}
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              color: alpha(theme.palette.text.primary, 0.8),
              lineHeight: 1.7,
            }}
          >
            {blogPost.author.bio}
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              size="small"
              sx={{
                borderRadius: 6,
                textTransform: "none",
                px: 3,
                py: 1,
                background: primaryGradient,
                boxShadow: `0 4px 14px ${alpha(
                  theme.palette.primary.main,
                  0.4
                )}`,
                transition: "all 0.2s ease",
                "&:hover": {
                  boxShadow: `0 6px 20px ${alpha(
                    theme.palette.primary.main,
                    0.6
                  )}`,
                  transform: "translateY(-2px)",
                },
              }}
            >
              Follow
            </Button>
            <Button
              variant="outlined"
              size="small"
              sx={{
                borderRadius: 6,
                textTransform: "none",
                px: 3,
                py: 1,
                borderColor: alpha(theme.palette.primary.main, 0.5),
                "&:hover": {
                  borderColor: theme.palette.primary.main,
                  bgcolor: alpha(theme.palette.primary.main, 0.05),
                },
              }}
            >
              View all posts
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
};

export default AuthorBioBlog;
