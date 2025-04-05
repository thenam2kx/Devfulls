import Fade from "@mui/material/Fade";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useTheme } from "@mui/material/styles";
import { blogPost } from "../blog/detail/BlogDetail";

const AppBreadcrumbs = () => {
  const theme = useTheme();
  const isLoading = false; // Replace with actual loading state

  return (
    <Fade in={!isLoading} timeout={800}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{
          mb: 4,
          "& .MuiBreadcrumbs-ol": {
            alignItems: "center",
          },
        }}
      >
        <Link
          underline="hover"
          color="inherit"
          href="/"
          sx={{
            display: "flex",
            alignItems: "center",
            transition: "all 0.2s ease",
            "&:hover": {
              color: theme.palette.primary.main,
            },
          }}
        >
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/blog"
          sx={{
            transition: "all 0.2s ease",
            "&:hover": {
              color: theme.palette.primary.main,
            },
          }}
        >
          Blog
        </Link>
        <Typography
          color="text.primary"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <LocalOfferIcon sx={{ fontSize: 16 }} />
          {blogPost.categories[0]}
        </Typography>
      </Breadcrumbs>
    </Fade>
  );
};

export default AppBreadcrumbs;
